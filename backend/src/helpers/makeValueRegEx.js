export function makeValuesRegExp(obj) {
  const newObj = {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key) && typeof obj[key] === "string") {
      newObj[key] = new RegExp(obj[key], "i"); // Convert value to case-insensitive RegExp
    } else {
      newObj[key] = obj[key]; // Keep value unchanged if it's not a string
    }
  }

  return newObj;
}
