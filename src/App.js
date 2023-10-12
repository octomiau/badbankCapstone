import React from 'react';
import TransactionsList from './admin';  // Importing the TransactionsList component from the admin file.

// The main App component of the application.
function App() {
    return (
        // Root container for the app with a top margin.
        <div className="container mt-4">
            {/* Displaying a warning heading. */}
            <h1>WARNING!</h1>
            
            {/* Rendering the TransactionsList component which shows a list of all transactions. */}
            <TransactionsList />
        </div>
    );
}

export default App;  // Exporting the App component for use in other parts of the application.
