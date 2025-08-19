import React from 'react';
// Import the new FormikForm component you just created.
// Make sure the path is correct based on your file structure.
import RegistrationForm from './components/RegistrationForm';

// The main App component that serves as the entry point for your application.
function App() {
  return (
    // Render the FormikForm component inside the main App component.
    // This will display the registration form when you run your application.
    <RegistrationForm />
  );
}

export default App;
