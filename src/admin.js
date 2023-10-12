import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Axios is a popular HTTP client for fetching data from APIs.
import './index.css';
import { Card } from './card';

function TransactionsList() {
    // State to hold transaction data fetched from the server.
    const [transactions, setTransactions] = useState([]);

    // Fetch transactions from the server using axios.
    useEffect(() => {
        async function fetchData() {
            try {
                // Make a GET request to fetch transactions.
                const response = await axios.get('http://localhost:3001/api/transactions');
                // Update the state with fetched transactions.
                setTransactions(response.data);
            } catch (error) {
                console.error("Error fetching transactions:", error);
            }
        }

        fetchData();
    }, []);

    // Play an audio file once when the component is loaded.
    useEffect(() => {
        function playAudioOnce() {
            const audio = new Audio('admin.wav'); // Load the audio file.
            audio.play(); // Play the loaded audio.
        }
        
        playAudioOnce();
    }, []);

    return (
        <div className="content-wrapper">
            <div className="side-content">
                {/* Render a Card component with specific props. */}
                <Card
                    txtcolor="black"
                    header={<img src="adminLogo.png" className="img-fluid" alt="Responsive image"/>}
                    title="You have been hacked!"
                    text="The bad news is that all your info has been leaked, but the good news is that you can peek at others' data."
                    body={<img src="adminCard.png" className="img-fluid" alt="All Data" />}
                />


            <a href="https://urchin-app-z69mh.ondigitalocean.app/" target="_blank" rel="noopener noreferrer">
                <button className="custom-button" onClick={() => alert('Are you shure you want to continue?')}>
                        <img src= "adminButton.png" className="img-fluid" alt="Button" />
                </button> 
            </a>   
            
            </div>

            {/* Render a table displaying transactions. */}
            <div className="card card-transparent">
                <div className="table-responsive table-hover">
                    <table className="table borderless transparent-white-bg">
                        <thead>
                            <tr>
                                <th>User Name</th>
                                <th>Type</th>
                                <th>Amount</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactions.map(transaction => (
                                <tr key={transaction.firebaseId}>
                                    <td>{transaction.userName}</td>
                                    <td>{transaction.type}</td>
                                    <td>${transaction.amount}</td>
                                    <td>{new Date(transaction.date).toLocaleString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default TransactionsList;
