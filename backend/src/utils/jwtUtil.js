import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

async function hashPassword(password) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  } catch (error) {
    throw new Error("Error hashing password");
  }
}

async function comparePasswords(plainPassword, hashedPassword) {
  try {
    const isMatch = await bcrypt.compare(plainPassword, hashedPassword);
    return isMatch;
  } catch (error) {
    throw new Error("Error comparing passwords");
  }
}

const generateToken = (userId) => {
  const { _id, firstName, userType } = user;
  const payload = {
    _id,
    firstName,
    userType,
  };
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "8h" });
};

const generateAdminToken = (payload) => {

  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "8h" });
};

const verifyToken = (req, res, next) => {
  try {
    const token = req.header("authToken"); // Extract the token from header

    if (!token) {
      return res.status(401).json({ msg: "Authorization header missing" });
    }

    const decodedUser = jwt.verify(token, process.env.JWT_SECRET); // Verify the token
    req.body.createdBy = decodedUser._id;
    req.body.decodedUser = decodedUser;
    req.body.userRole = decodedUser.role; // Attach decoded user to request object
    next();
  } catch (error) {
    return res.status(401).json({ msg: "Token verification failed" });
  }
};

const checkAccess = (requiredPermissions) => {
  return (req, res, next) => {
    const userPermissions = req.user.userId.permissions;
    const hasPermission = userPermissions.includes(requiredPermissions);
    if (!hasPermission) {
      return res.status(401).json({ msg: "Access Denied" });
    }
    next();
  };
};

export {
  hashPassword,
  comparePasswords,
  generateToken,
  verifyToken,
  checkAccess,
  generateAdminToken,
};
