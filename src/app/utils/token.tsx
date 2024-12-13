import jwt from "jsonwebtoken";

export function decodeToken(token: string) {
  try {
    const decoded = jwt.decode(token);
    return decoded;
  } catch (error) {
    console.error("Failed to decode token", error);
    return null;
  }
}
