const arrFromSalaryCol = document.querySelectorAll('tr:not(:nth-last-child(-n+2))>td:last-child');
const arrFromGenderCol = document.querySelectorAll('tr:not(:nth-last-child(-n+2))>td:nth-last-child(2)');

const arrSalaryData = [...arrFromSalaryCol].map(el => +el.innerHTML);
const arrGenderData = [...arrFromGenderCol].map(el => el.innerHTML);
const arrMaleSal = [];
const arrFamSal = [];

const sortGendSal = (arr1, arr2) => arr1.forEach((el, i) => el == 'Male' ? arrMaleSal.push(arr2[i]) : arrFamSal.push(arr2[i]))
const getSalarySumm = arr => arr.reduce((sum, el) => sum + el, 0);
const getSararyAvg = arr => getSalarySumm(arr) / arr.length;

sortGendSal(arrGenderData, arrSalaryData);

document.getElementById('total').innerHTML = getSalarySumm(arrSalaryData);
document.getElementById('avg').innerHTML = getSararyAvg(arrSalaryData);
document.getElementById('totalMale').innerHTML = getSalarySumm(arrMaleSal);
document.getElementById('totalFamale').innerHTML = getSalarySumm(arrFamSal);
document.getElementById('avgMale').innerHTML = Math.round(getSararyAvg(arrMaleSal));
document.getElementById('avgFamale').innerHTML = Math.round(getSararyAvg(arrFamSal));