// import jwt, {type JwtPayload} from "jsonwebtoken";
// import dotenv from 'dotenv';
//
// dotenv.config();
//
// interface SignOption {
//   expiresIn: string | number,
// }
//
// const DEFAULT_SIGN_OPTION: SignOption = {
//   expiresIn: "5m"
// }
//
// export function signJwt(payload: JwtPayload, option: SignOption = DEFAULT_SIGN_OPTION) {
//   //const secretKey = process.env.JWT_USER_ID_SECRET  //to be added sa env
//   const token = jwt.sign(payload, option)
//   return token
// }
//
// export function verifyJwt(token: string) {
//   try{
//   //const secretKey = process.env.JWT_USER_ID_SECRET  //to be added sa env
//     const decoded  = jwt.verify(token);
//     return decoded as JwtPayload
//   } catch(error){
//     console.log(error);
//     return  null;
//   }
// }
