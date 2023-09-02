function initiateApplication() {
    // Get form data
    const businessName = document.getElementById('business-name').value;
    const yearEstablished = document.getElementById('year-established').value;
    const loanAmount = document.getElementById('loan-amount').value;
  
    // Send a POST request to initiate the application
    fetch('/api/initiate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ businessName, yearEstablished, loanAmount }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert('Application initiated');
      })
      .catch((error) => {
        console.error('Error initiating application:', error);
        alert('Error initiating application');
      });
  }
  
  function fetchBalanceSheet() {
    // Get selected accounting provider
    const selectedProvider = document.getElementById('accounting-provider').value;
  
    // Send a POST request to fetch the balance sheet
    fetch('/api/fetch-balance-sheet', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ selectedProvider }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const balanceSheetElement = document.getElementById('balance-sheet');
        balanceSheetElement.textContent = JSON.stringify(data, null, 2);
      })
      .catch((error) => {
        console.error('Error fetching balance sheet:', error);
        alert('Error fetching balance sheet');
      });
  }
  
  function submitApplication() {
    // Get form data
    const businessName = document.getElementById('business-name').value;
    const yearEstablished = document.getElementById('year-established').value;
    const loanAmount = document.getElementById('loan-amount').value;
    const selectedProvider = document.getElementById('accounting-provider').value;
  
    // Send a POST request to submit the application
    fetch('/api/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ businessName, yearEstablished, loanAmount, selectedProvider }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const loanDecisionElement = document.getElementById('loan-decision');
        loanDecisionElement.textContent = JSON.stringify(data, null, 2);
      })
      .catch((error) => {
        console.error('Error submitting application:', error);
        alert('Error submitting application');
      });
  }
  