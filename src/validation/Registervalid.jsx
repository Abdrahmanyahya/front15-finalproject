import * as yup from "yup"




export const registerSchema = yup.object({
userName:yup.string().required("userName is required").min(3,"must at least contain 3 character ")
.matches(/[a-zA-Z0-9_-]/,"must contain only letters,numbers,underscores"),

fullName:yup.string().required("fullName is required"),
email:yup.string().email().required("email is required"),
phoneNumber:yup.string().required("phoneNumber is required"),
password:yup.string().required("password is required").min(6,"must at least contain 6 character")
.matches(/[A-Z]/,"must contain uppercase")
.matches(/[a-z]/,"must contain lowercase")
.matches(/[0-9]/,"must contain number")
.matches(/[#@!&*$]/,"must contain spicalcharacter"),
})