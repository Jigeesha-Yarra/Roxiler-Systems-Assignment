import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const BarChart = ({ transactions, month }) => {
  // Filter transactions by month
  const filteredTransactions = transactions.filter((transaction) => {
    const transactionDate = new Date(transaction.dateOfSale);
    const transactionMonth = transactionDate.toLocaleString('default', { month: 'long' });
    return transactionMonth === month;
  });

  // Define price ranges
  const priceRanges = [
    { range: '0 - 100', min: 0, max: 100 },
    { range: '101 - 200', min: 101, max: 200 },
    { range: '201 - 300', min: 201, max: 300 },
    { range: '301 - 400', min: 301, max: 400 },
    { range: '401 - 500', min: 401, max: 500 },
    { range: '501 - 600', min: 501, max: 600 },
    { range: '601 - 700', min: 601, max: 700 },
    { range: '701 - 800', min: 701, max: 800 },
    { range: '801 - 900', min: 801, max: 900 },
    { range: '901 - above', min: 901, max: Infinity },
  ];

  // Calculate number of items in each price range
  const data = priceRanges.map((range) => {
    const count = filteredTransactions.filter(
      (transaction) => transaction.price >= range.min && transaction.price <= range.max
    ).length;
    return count;
  });

  const chartData = {
    labels: priceRanges.map((range) => range.range),
    datasets: [
      {
        label: 'Number of Items',
        data: data,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  return (
    <div className="bar-chart">
      <h2>Bar Chart</h2>
      <Bar data={chartData} />
    </div>
  );
};

export default BarChart;