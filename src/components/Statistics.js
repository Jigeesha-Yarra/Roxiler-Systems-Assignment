import React from 'react';

const Statistics = ({ transactions, month }) => {
  // Filter transactions by month
  const filteredTransactions = transactions.filter((transaction) => {
    const transactionDate = new Date(transaction.dateOfSale);
    const transactionMonth = transactionDate.toLocaleString('default', { month: 'long' });
    return transactionMonth === month;
  });

  // Calculate statistics
  const totalSaleAmount = filteredTransactions.reduce((sum, transaction) => sum + transaction.price, 0);
  const totalSoldItems = filteredTransactions.filter((transaction) => transaction.sold).length;
  const totalNotSoldItems = filteredTransactions.filter((transaction) => !transaction.sold).length;

  return (
    <div className="statistics">
      <h2>Statistics</h2>
      <p>Total Sale Amount: ${totalSaleAmount}</p>
      <p>Total Sold Items: {totalSoldItems}</p>
      <p>Total Not Sold Items: {totalNotSoldItems}</p>
    </div>
  );
};

export default Statistics;