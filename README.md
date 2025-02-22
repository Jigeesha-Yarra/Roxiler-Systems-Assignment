# Transaction Dashboard

A **React-based** web application that displays transaction data in a table, along with statistics, a bar chart, and a pie chart. The app allows users to filter transactions by month and search for specific transactions.

---

## Features

1. **Transactions Table**:
   - Displays all transactions in a table format.
   - Supports filtering by month (January to December).
   - Supports searching by title, description, or price.
   - Pagination support (default: 10 transactions per page).

2. **Statistics**:
   - Displays the total sale amount, total sold items, and total not sold items for the selected month.

3. **Bar Chart**:
   - Visualizes the number of items in different price ranges for the selected month.

4. **Pie Chart**:
   - Visualizes the distribution of transactions across different categories for the selected month.

5. **Responsive Design**:
   - The app is fully responsive and works well on all screen sizes (desktop, tablet, and mobile).

6. **Animations**:
   - Smooth fade-in animations for components when the page loads.

---

## Technologies Used

- **Frontend**:
  - React.js
  - Axios (for fetching data)
  - React ChartJS 2 (for bar and pie charts)
  - CSS (for styling and animations)

- **Data Source**:
  - Local JSON file (`data.json`) containing transaction data.

---

## How to Run the Project

### Prerequisites

- Node.js and npm installed on your machine.

### Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/transaction-dashboard.git
   cd transaction-dashboard

## Folder Structure

transaction-dashboard/
├── public/
│   ├── data.json              # Transaction data
│   └── index.html
├── src/
│   ├── components/
│   │   ├── TransactionsTable.js # Component for transactions table
│   │   ├── Statistics.js      # Component for statistics
│   │   ├── BarChart.js        # Component for bar chart
│   │   └── PieChart.js       # Component for pie chart
│   ├── App.js                 # Main component
│   ├── index.js               # Entry point
│   ├── styles.css             # Global styles
│   └── utils.js               # Utility functions
├── package.json               # Project dependencies
└── README.md                  # Project documentation  