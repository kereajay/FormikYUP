# 🚀 Responsive Signup Form with Formik & Yup Validation

This project demonstrates a **Responsive Signup Form** built using **React**, **Formik**, and **Yup**. The form features input validation using **Yup** for strong password policies, email format validation, and password confirmation matching.



## 🛠️ Tech Stack

- **React** ⚛️: Frontend framework for building UI components.
- **Formik** 📋: Simplifies form state management and submission handling.
- **Yup** ✅: Schema validation for form input validation.
- **Tailwind CSS** 🎨: Utility-first CSS framework for responsive design.

## 🚀 Features
- Responsive Design 🌐: The form layout adjusts for various screen sizes using Tailwind CSS.

- Input Validation 🔒: Enforced input rules with Yup:
- Name: Minimum 2 and maximum 20 characters.
- Email: Must be in valid Gmail format (gmail.com).
- Password: Must meet strong security requirements (at least 8 characters, mix of upper/lowercase letters, numbers, and symbols).
- Confirm Password: Must match the password.
- Disabled Button ⛔: The form's submit button is only enabled when all fields are valid.

## 💡 Key Concepts
### Formik's useFormik Hook:

- Values: Tracks the current form values.
- Errors: Displays validation errors for each field.
- Touched: Tracks whether a field has been visited.
- handleSubmit: Handles form submission logic.
- handleChange & handleBlur: Manage input changes and blur events.

### Tailwind Utility Classes:

- Responsive Design: Utilizes grid and padding classes (grid, lg:grid-cols-2, md:m-20, etc.).
- Disabled Button State: Conditional class based on form validity (bg-gray-300, cursor-not-allowed).

### Thank you