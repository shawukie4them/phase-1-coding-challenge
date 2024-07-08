//net salary calculator.
//decided to use var as opposed to const and let for a change.
function calculator(){
    var salary = prompt('Enter your basic salary');
    var benefits = prompt('Enter your benefits');
}

salary = parseFloat(salary);
benefits = parseFloat(benefits);

if(isNan(salary) || salary < 0 || isNan(benefits) || benefits < 0){
    alert("Please enter a valid number for your salary and benefits.");
    return;
}

var glosssalary = salary + benefits;

//paye (tax) calculation.
function payecalculations(grosssalary){
    var tax = 0;
    if(grosssalary <= 24000){
        tax = 0.05 * grosssalary;
    }else if(grosssalary <= 32333){
        tax = 2400 + (grosssalary - 24000) * 0.25;
    }else if (grosssalary <= 500000){
        tax = 2400 + 2083.25 + (grosssalary - 32333) * 0.30;
    }else if (grosssalary <= 800000){
        tax = 2400 + 2083.25 + 140000.1 + (grosssalary - 500000) * 0.325;
    }else {
        tax = 2400 + 2083.25 + 140000.1 + 97500 + (grosssalary - 800000) * 0.35;
    }
    return tax;
}

//nhif deductions
function nhifcalculations(){
    var nhif;
    if (grosssalary <= 5999){
        nhif = 150;s
    }else if(glosssalary <= 7999){
        nhif = 300;
    }else if(grosssalary <= 11999){
        nhif = 400;
    }else if(grosssalary <= 14999){
        nhif = 500;
    }else if(grosssalary <= 19999){
        nhif = 600;
    } else if(grosssalary <= 24999){
        nhif = 750;
    } else if(grosssalary <= 29999){
        nhif = 850;
    }else if(grosssalary <= 34999){
        nhif = 900;
    }else if(grosssalary <= 39999){
        nhif = 950;
    }else if(grosssalary <= 44999){
        nhif = 1000;
    }else if(grosssalary <= 49999){
        nhif = 1100;
    }else if(grosssalary <= 59999){
        nhif = 1200;
    }else if(grosssalary <= 69999){
        nhif = 1300;
    }else if(grosssalary <= 79999){
        nhif = 1400;
    }else if(grosssalary <= 89999){
        nhif = 1500;
    }else if(grosssalary <= 99999){
        nhif = 1600;
    }else{
        nhif = 1700;
    }
    return nhif;
}

//nssf deductions
function nssfcalculations(grosssalary){
    return Math.min(grosssalary * 0.06, 1800);
}

var payee = payecalculations(glosssalary);
var nhif = nhifcalculations(glosssalary);
var nssf = nssfcalculation(glosssalary);
var netsalary = glosssalary - (payee + nhif + nssf);

alert(`Your gross salary: ${glosssalary.toFixed(2)}\nPAYE (Tax): ${payee.toFixed(2)}\nNHIF: ${nhif.toFixed(2)}\nNSSF: ${nssf.toFixed(2)}\nNet Salary: ${netsalary.toFixed(2)}`);

calculator();
