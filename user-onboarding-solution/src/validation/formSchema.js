import * as Yup from "yup";



const formSchema = Yup.object().shape({
        username: Yup
        .string()
        .min(3, "Must include at least 3 characters")
        .required("Must be your name"), 
        email: Yup
        .string()
        .email('Must be a valid email address.')
        .required("Must include email address"),
        password: Yup
        .string()
        .required("Password is Required")
        .min(8, "Passwords must be at least 8 characters long"),
        tos: Yup
        .boolean()
        .oneOf([true], "You must accept Terms and Conditions")
        
      });

export default formSchema;