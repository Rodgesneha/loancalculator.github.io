const loading = document.getElementById('loading');
const results = document.getElementById('results');
document.getElementById('loan-form').addEventListener('submit',function(e){
    loading.style.display = 'block';
    results.style.display = 'none';
    setTimeout(calculateOutput,2000);
    e.preventDefault();
});

function calculateOutput(){
    
    loading.style.display = 'none';
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    const principle = amount.value;
    const calculatedInterest = interest.value / 100 / 12;
    const noOfPayments = years.value * 12;

    //monthly vlaues
    const x = Math.pow(1+calculatedInterest,noOfPayments);
    const monthly = (principle*x*calculatedInterest)/(x-1);
    const totalP = monthly*noOfPayments;
    const  totalI = totalP-principle;

    if(isFinite(monthly)){
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = totalP.toFixed(2);
        totalInterest.value = totalI.toFixed(2);
        results.style.display = 'block';
    }
    else{
        displayError('Please check your numbers');
    }
    
}

function displayError(error){
    const errorDiv = document.createElement('div');
    errorDiv.className = 'alert alert-danger';
    errorDiv.appendChild(document.createTextNode(error));
    const card  = document.querySelector('.card');
    const heading  = document.querySelector('.heading');
    card.insertBefore(errorDiv,heading);
    setTimeout(function(){
        errorDiv.remove();
    },3000);
}