import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// The component name is now capitalized to follow React conventions.
// The file name should be `RegistrationForm.jsx`.

// Define the validation schema using Yup.
// This schema outlines the validation rules for each form field.
const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const RegistrationForm = () => {
  // Define the initial values for the form fields.
  const initialValues = {
    username: '',
    email: '',
    password: '',
  };

  /**
   * Handles the form submission logic.
   * Formik automatically passes the form values and helper functions like setSubmitting.
   * @param {object} values The current form values.
   * @param {object} actions Helper actions from Formik, including setSubmitting.
   */
  const onSubmit = (values, { setSubmitting, resetForm }) => {
    // Log the form data to the console for demonstration.
    console.log('Form submitted:', values);
    
    // In a real application, you would make an API call here.
    // We simulate an API call with a setTimeout.
    setTimeout(() => {
      // You can alert the user or handle the response.
      // NOTE: In a real app, use a custom message box instead of alert().
      alert(JSON.stringify(values, null, 2));
      
      // Reset the form fields to their initial values.
      resetForm();
      
      // Set submitting state to false to re-enable the submit button.
      setSubmitting(false);
    }, 1000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <div className="w-full max-w-sm p-8 space-y-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
          Create an Account
        </h2>
        {/*
          The Formik component wraps your form and handles state, validation,
          and submission logic for you.
        */}
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              <div>
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Username
                </label>
                {/* The Field component automatically connects the input to Formik's state. */}
                <Field
                  type="text"
                  id="username"
                  name="username"
                  className="w-full px-4 py-2 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="e.g., JaneDoe"
                />
                {/* ErrorMessage automatically displays the validation error from Yup. */}
                <ErrorMessage name="username" component="div" className="mt-2 text-sm text-red-600 dark:text-red-400" />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Email Address
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="e.g., jane.doe@example.com"
                />
                <ErrorMessage name="email" component="div" className="mt-2 text-sm text-red-600 dark:text-red-400" />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Password
                </label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  className="w-full px-4 py-2 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="••••••••"
                />
                <ErrorMessage name="password" component="div" className="mt-2 text-sm text-red-600 dark:text-red-400" />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-5 py-2.5 text-sm font-medium text-white rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 transition-colors duration-200 ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600'}`}
              >
                {isSubmitting ? 'Submitting...' : 'Register'}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default RegistrationForm;
