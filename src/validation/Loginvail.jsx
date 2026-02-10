import * as yup from "yup"


export const loginSchema = yup.object({

email:yup.string().email().required("email is reqiured"),

password:yup.string().required("password is required").min(6,"must at least contain 6 character")
.matches(/[A-Z]/,"must contain uppercase")
.matches(/[a-z]/,"must contain lowercase")
.matches(/[0-9]/,"must contain number")
.matches(/[#@!&*$]/,"must contain spicalcharacter"),



})