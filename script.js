// Sample user data (for simplicity)
const userData = {
    username: 'user123',
    password: 'password123',
    balance: 1000,
    transactionHistory: [],
};

// Event listener for login form
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === userData.username && password === userData.password) {
        // Successful login
        displayAccountSummary(userData);
        displayTransactionHistory(userData.transactionHistory);
    } else {
        alert('Invalid credentials. Please try again.');
    }
});

// Function to display account summary
function displayAccountSummary(user) {
    const accountSummary = document.getElementById('accountSummary');
    accountSummary.innerHTML = `
        <h2>Welcome, ${user.username}!</h2>
        <p>Account Balance: $${user.balance}</p>
    `;
}

// Event listener for transaction form
document.getElementById('transactionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const amount = parseFloat(document.getElementById('amount').value);
    const receiver = document.getElementById('receiver').value;

    if (amount > 0 && amount <= userData.balance) {
        userData.balance -= amount;
        userData.transactionHistory.push({ type: 'debit', amount, receiver });
        alert('Transaction successful!');
        displayAccountSummary(userData);
        displayTransactionHistory(userData.transactionHistory);
    } else {
        alert('Invalid transaction. Please check the amount and balance.');
    }
});

// Function to display transaction history
function displayTransactionHistory(history) {
    const transactionHistory = document.getElementById('transactionHistory');
    transactionHistory.innerHTML = '<h2>Transaction History</h2>';
    for (const transaction of history) {
        transactionHistory.innerHTML += `
            <p>Type: ${transaction.type}, Amount: $${transaction.amount}, Receiver: ${transaction.receiver}</p>
        `;
    }
}
