import axios from "./index";
let { get, post } = axios
//发送验证码
export const sendCaptcha = data => get("/captcha/sent", data)
//验证验证码
export const verifyCaptcha = data => post("/captcha/verify", data)

//注册(修改密码)
export const register = data => post("/register/cellphone", data)