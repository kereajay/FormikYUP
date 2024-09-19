import  * as yup from "yup"
export const  SignupSchema=yup.object({
    name:yup.string().min(2).max(20).required("Please Enter Your Name"),
    email: yup.string()
    .email('Invalid email format')
    .test(
        'is-gmail',
        'Email must end with gmail.com',
        (value) => value && value.endsWith('gmail.com')
    )
    .matches(/^[a-zA-Z0-9._%+-]+@gmail\.com$/, 'Email must match regex@gmail.com')
    .required('Please enter your email'),
    password:yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 'password must Meet all criteria').required("Please Enter Your Password"),
    confirmpassword:yup.string().required("Please Enter Your ConfirmPassword").oneOf([yup.ref("password"),null],"Password not matching")
})