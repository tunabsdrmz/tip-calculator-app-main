let bill = document.getElementById('bill-input');
let tipsection = document.querySelectorAll('.btn');
let tipCustom = document.querySelector('#custom-input-id');
let people = document.getElementById('number-of-people');
let errormsg = document.querySelector('.error-msg');
let results = document.querySelectorAll('.amount');
let resetbtn = document.querySelector('#reset-button');
let billValue = 0.0;
let tipValue = 0.15;
let peopleValue = 1;
  tipsection.forEach(tip =>{
    tip.addEventListener('click', handleclick);
  });
function handleclick(event){
    tipsection.forEach(tip =>{
        tip.classList.remove('tip-active');

        if(event.target.innerHTML == tip.innerHTML){
            tip.classList.add('tip-active');
            tipValue = parseFloat(tip.innerHTML)/100;
        }
        tipCustom.value = '';
        calculateTip();
    });
}
resetbtn.addEventListener('click', reset);
people.addEventListener('input', setPeopleValue);
tipCustom.addEventListener('input', setCustomTipValue);
bill.addEventListener('input', setBillValue);
function setBillValue(){
    if(bill.value.includes(',')){
        bill.value = bill.value.replace(',','.');
    }
    billValue = parseFloat(bill.value)
    calculateTip();
}
function setCustomTipValue(){
    tipValue = parseFloat(tipCustom.value)/100;
    tipsection.forEach(tip =>{
        tip.classList.remove('tip-active');
    });
    if(tipCustom.value !== ''){
         calculateTip();
    }
   
}
function setPeopleValue(){
    peopleValue = parseFloat(people.value);
    if(peopleValue <= 0){
        errormsg.classList.add('show-error-msg');
    }
    else{
        errormsg.classList.remove('show-error-msg');
    }
    calculateTip();
}
function calculateTip(){
    if(peopleValue >=1){
        let tipAmount = billValue * tipValue / peopleValue;
        let total = billValue * (tipValue + 1) / peopleValue;
        results[0].innerHTML = '$' + tipAmount.toFixed(2);
        results[1].innerHTML = '$' + total.toFixed(2);
    }
}
function reset(){
    bill.value = '0.0';
    setBillValue();

tipsection[2].click();

    people.value = '1';
    setPeopleValue();
}