import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const PieChart = ({ transactions, month }) => {
  // Filter transactions by month
  const filteredTransactions = transactions.filter((transaction) => {
    const transactionDate = new Date(transaction.dateOfSale);
    const transactionMonth = transactionDate.toLocaleString('default', { month: 'long' });
    return transactionMonth === month;
  });

  // Get unique categories and count
  const categories = {};
  filteredTransactions.forEach((transaction) => {
    if (categories[transaction.category]) {
      categories[transaction.category]++;
    } else {
      categories[transaction.category] = 1;
    }
  });

  const chartData = {
    labels: Object.keys(categories),
    datasets: [
      {
        label: 'Number of Items',
        data: Object.values(categories),
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9F40',
        ],
      },
    ],
  };

  return (
    <div className="pie-chart">
      <h2>Pie Chart</h2>
      <Pie data={chartData} />
    </div>
  );
};

export default PieChart;