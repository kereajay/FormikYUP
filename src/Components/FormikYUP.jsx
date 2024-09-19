import React, { useState } from "react";
import { useFormik } from "formik";
import { SignupSchema } from "../Schemas";
import { toast } from "react-toastify";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmpassword: "",
};

function FormikYUP() {
    // const [isDisabled, setIsDisabled] = useState(true);
  const { values, errors, touched,isValid,dirty, handleBlur, handleChange, handleSubmit } =
 
    useFormik({
      initialValues: initialValues,
      validationSchema: SignupSchema,
      onSubmit: (values, action) => {
        console.log(values);
        toast.success("signup successfully")
       
        action.resetForm();
      },
    });
   
   
  return (
    <>
    <div className="grid lg:grid-cols-2 md:grid-cols-1 m-5 md:m-20 lg:m-44 gap-0 bg-slate-100 rounded-2xl">
      <div className="py-5 px-8 md:px-16 lg:px-24">
        <form onSubmit={handleSubmit}>
          <div className="input-block w-full md:w-80 lg:w-96 border-2 bg-white p-1 mb-4">
            <label htmlFor="name" className="text-lg input-label">
              Name
            </label>
            <input
              type="text"
              className="w-full border-none outline-none bg-white"
              name="name"
              id="name"
              placeholder="Name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.name && touched.name ? (
              <p className="text-sm text-red-900">{errors.name}</p>
            ) : null}
          </div>
          
          <div className="input-block w-full md:w-80 lg:w-96 border-2 bg-white p-1 mb-4">
            <label htmlFor="email" className="text-lg input-label">
              Email
            </label>
            <input
              type="text"
              className="w-full outline-none"
              name="email"
              id="email"
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email ? (
              <p className="text-sm text-red-900">{errors.email}</p>
            ) : null}
          </div>
  
          <div className="input-block w-full md:w-80 lg:w-96 border-2 bg-white p-1 mb-4">
            <label htmlFor="password" className="text-lg input-label">
              Password
            </label>
            <input
              type="password"
              className="w-full outline-none"
              name="password"
              id="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password ? (
              <p className="text-sm text-red-900">{errors.password}</p>
            ) : null}
          </div>
  
          <div className="input-block w-full md:w-80 lg:w-96 border-2 bg-white p-1 mb-4">
            <label htmlFor="confirmpassword" className="text-lg input-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="w-full outline-none"
              name="confirmpassword"
              id="confirmpassword"
              placeholder="Confirm Password"
              value={values.confirmpassword}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.confirmpassword && touched.confirmpassword ? (
              <p className="text-sm text-red-900">{errors.confirmpassword}</p>
            ) : null}
          </div>
  
          <div className="m-auto text-center input-block">
            <button
              type="submit"
              className={`text-lg font-semibold px-5 py-2 rounded-md ${
                !(dirty && isValid)
                  ? "bg-gray-300 text-gray-400 cursor-not-allowed"
                  : "bg-blue-300"
              }`}
              disabled={!(dirty && isValid)}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
      
      <div className="hidden lg:block">
        <img
          src="https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"
          alt="Form illustration"
          className="rounded-e-2xl h-full object-cover"
        />
      </div>
    </div>
  </>
  
  );
}

export default FormikYUP;
