import React, { useState } from 'react';

// The component name is capitalized to follow React conventions.
// The file name should be `RegistrationForm.jsx` unless you configure your bundler
// (like Vite) to handle JSX in `.js` files.

const RegistrationForm = () => {
  // Define state variables for each input field using useState.
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Define state for validation errors.
  const [errors, setErrors] = useState({});

  /**
   * Handles the form submission logic.
   * @param {object} e The form submission event object.
   */
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission and page reload.

    // Manual validation logic.
    const validationErrors = {};
    if (!username) {
      validationErrors.username = 'Username is required';
    }
    if (!email) {
      validationErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = 'Email address is invalid';
    }
    if (!password) {
      validationErrors.password = 'Password is required';
    } else if (password.length < 6) {
      validationErrors.password = 'Password must be at least 6 characters';
    }

    // Set errors state and check if there are any.
    setErrors(validationErrors);

    // If no errors, proceed with form submission.
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form submitted:', { username, email, password });
      alert(JSON.stringify({ username, email, password }, null, 2));

      // Reset the form fields after successful submission.
      setUsername('');
      setEmail('');
      setPassword('');
      setErrors({});
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <div className="w-full max-w-sm p-8 space-y-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
          Create an Account
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="username"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Username
            </label>
            {/* The input's value is controlled by the username state variable. */}
            {/* The onChange handler updates the username state on every keystroke. */}
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="e.g., JaneDoe"
            />
            {/* Display validation error if it exists. */}
            {errors.username && <div className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.username}</div>}
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="e.g., jane.doe@example.com"
            />
            {errors.email && <div className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.email}</div>}
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="••••••••"
            />
            {errors.password && <div className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.password}</div>}
          </div>
          <button
            type="submit"
            className="w-full px-5 py-2.5 text-sm font-medium text-white rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 transition-colors duration-200 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
