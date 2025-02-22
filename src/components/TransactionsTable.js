import React from 'react';

const TransactionsTable = ({ transactions, month, search }) => {
  // Filter transactions by month and search
  const filteredTransactions = transactions.filter((transaction) => {
    const transactionDate = new Date(transaction.dateOfSale);
    const transactionMonth = transactionDate.toLocaleString('default', { month: 'long' });
    return (
      transactionMonth === month &&
      (transaction.title.toLowerCase().includes(search.toLowerCase()) ||
      transaction.description.toLowerCase().includes(search.toLowerCase()) ||
      transaction.price.toString().includes(search))
    );
  });

  return (
    <div className="table-container">
      <h2>Transactions</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Date of Sale</th>
          </tr>
        </thead>
        <tbody>
        {filteredTransactions.map((transaction) => (
          <tr key={transaction.id}>
            <td data-label="Title">{transaction.title}</td>
            <td data-label="Description">{transaction.description}</td>
            <td data-label="Price">${transaction.price}</td>
            <td data-label="Date of Sale">{transaction.dateOfSale}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsTable;