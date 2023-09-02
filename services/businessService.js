const result = [
    {
        "year": 2020,
        "month": 12,
        "profitOrLoss": 250000,
        "assetsValue": 1234
    },
    {
        "year": 2020,
        "month": 11,
        "profitOrLoss": 1150,
        "assetsValue": 5789
    },
    {
        "year": 2020,
        "month": 10,
        "profitOrLoss": 2500,
        "assetsValue": 22345
    },
    {
        "year": 2020,
        "month": 9,
        "profitOrLoss": -187000,
        "assetsValue": 223452
    },
    {
        "year": 2020,
        "month": 8,
        "profitOrLoss": -187000,
        "assetsValue": 223452
    },
    {
        "year": 2020,
        "month": 7,
        "profitOrLoss": -187000,
        "assetsValue": 223452
    },
    {
        "year": 2020,
        "month": 6,
        "profitOrLoss": -187000,
        "assetsValue": 223452
    },
    {
        "year": 2020,
        "month": 5,
        "profitOrLoss": -187000,
        "assetsValue": 223452
    },
    {
        "year": 2020,
        "month": 4,
        "profitOrLoss": -187000,
        "assetsValue": 223452
    },
    {
        "year": 2020,
        "month": 3,
        "profitOrLoss": -187000,
        "assetsValue": 223452
    },
    {
        "year": 2020,
        "month": 2,
        "profitOrLoss": -187000,
        "assetsValue": 223452
    },
    {
        "year": 2020,
        "month": 1,
        "profitOrLoss": -187000,
        "assetsValue": 223452
    }
]

function fetchBalanceSheet(provider) {
    return result;
}

function isProfitable(){
    const profit = -1;

    for(let i=0;i<result.length;i++){
        profit += result[i]["profitOrLoss"];
    }

    return profit >= 0 ? true: false;
}

function getAssest(){
    let assests = 0;

    for(let i=0;i<result.length;i++){
        assests += result[i]["assetsValue"];
    }

    return assests;
}

function makeLoanDecision(params) {
    const loanAmount = params["loanAmount"];
    
    let profit = 0;

    for(let i=0;i<result.length;i++){
        profit += result[i]["profitOrLoss"];
    }

    if(profit >= 0){
        return {
            "preAssessment":20,
        }
    }
    const assest = getAssest();

    if(assest>=loanAmount){
        return {
            "preAssessment":100,
        }
    }

    return {
        "preAssessment":60,
    }    
}

module.exports = {
    fetchBalanceSheet,
    makeLoanDecision,
}