let balance = 0;
const balanceDisplay = document.getElementById('balance');
const transactionsList = document.getElementById('transactions');
const transactionListDiv = document.getElementById('transactionList');
const amountInput = document.getElementById('amount'); 

document.getElementById('add').addEventListener('click', function() {
  const amount = parseFloat(amountInput.value);
  if (amount > 0) {
    balance += amount;
    updateBalance();
    addTransaction('Deposit', amount);
    amountInput.value = ''; 
  }
});

document.getElementById('withdraw').addEventListener('click', function() {
  const amount = parseFloat(amountInput.value);
  if (amount > 0 && amount <= balance) {
    balance -= amount;
    updateBalance();
    addTransaction('Withdrawal', amount);
    amountInput.value = ''; 
  } else {
    alert('Insufficient balance');
  }
});

document.getElementById('viewTransactions').addEventListener('click', function() {
  transactionListDiv.classList.toggle('hidden');
});

function updateBalance() {
  balanceDisplay.textContent = balance.toFixed(2);
}

function addTransaction(type, amount) {
  const listItem = document.createElement('li');
  const dateTime = new Date().toLocaleString();
  listItem.textContent = `${type}: $${amount.toFixed(2)} on ${dateTime}`;
  transactionsList.appendChild(listItem);
}

