// app.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Simulated Accounting Software and Decision Engine
const { fetchBalanceSheet, makeLoanDecision } = require('./services/businessService');

// Serve static HTML file
app.use(express.static('public'));

// API endpoint for initiating an application
app.post('/api/initiate', (req, res) => {
  // Logic for initiating the application
  res.json({ message: 'Application initiated' });
});

// API endpoint for fetching balance sheet
app.post('/api/fetch-balance-sheet', async (req, res) => {
  // try {
    // Simulated balance sheet data
    const balanceSheet = await fetchBalanceSheet(req.body.selectedProvider);
    res.json(balanceSheet);
  // } catch (error) {
  //   res.status(500).json({ error: 'Error fetching balance sheet' });
  // }
});

// API endpoint for submitting an application and making a loan decision
app.post('/api/submit', async (req, res) => {
  // try {
    const response = req.body;
    const result = makeLoanDecision(response);

    console.log("result",result);
    res.json(result);
  // } catch (error) {
  //   res.status(500).json({ error: 'Error submitting application' });
  // }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
