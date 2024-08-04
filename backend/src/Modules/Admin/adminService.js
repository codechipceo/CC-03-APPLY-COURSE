import { CustomError } from "../../Error/CustomError.js";
import { adminModel as model } from "../../Schemas/index.js";
import { comparePasswords, generateAdminToken, hashPassword } from "../../utils/jwtUtil.js";
import { serviceHandler } from "../../utils/serviceHandler.js";

export const adminService = {
  addNewAdmin: serviceHandler(async (data) => {
    const { password } = data
    const hashedPwd =await hashPassword(password)
    return await model.save({...data, password: hashedPwd});
  }),
  loginAdmin: serviceHandler(async (data) => {
    const { username, password } = data;

    const isUser = await model.getDocumentById({ username });
    if (!isUser)
      throw new CustomError(
        400,
        "Something is wrong with username or password"
      );
    const isPassword = await comparePasswords(password, isUser.password);
    if (!isPassword)
      throw new CustomError(
        400,
        "Something is wrong with username or password"
      );

    const payload = {
      username,
      name: isUser.name,
    };

    return generateAdminToken(payload);
  }),
};


