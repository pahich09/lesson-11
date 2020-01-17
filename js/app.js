const arrFromSalaryCol = document.querySelectorAll('tr:not(:nth-last-child(-n+2))>td:last-child');
const arrFromGenderCol = document.querySelectorAll('tr:not(:nth-last-child(-n+2))>td:nth-last-child(2)');

const arrSalaryData = [...arrFromSalaryCol].map(el => +el.innerHTML);
const arrGenderData = [...arrFromGenderCol].map(el => el.innerHTML);

function CreateObj(arr, el, i) {
    this.gender = el;
    this.salary = arr[i];
}
const getArrayByGender = (arr1, arr2) => arr2.map((el, i) => new CreateObj(arr1, el, i));
const getSalarySum = arr => arr.reduce((sum, el) => sum + el, 0);
const getGenderSum = (arr, gender) => arr.reduce((acc, el) => el.gender === gender ? acc += el.salary : acc, 0);
const getAvg = (arr, gender) => (arrFilt => arrFilt.reduce((acc, el) => acc + el.salary, 0) / arrFilt.length)(arr.filter(el => !gender ? true : (el.gender === gender ? true : false)));

document.getElementById('total').innerHTML = getSalarySum(arrSalaryData);
document.getElementById('avg').innerHTML = getAvg(getArrayByGender(arrSalaryData, arrGenderData));
document.getElementById('totalMale').innerHTML = getGenderSum(getArrayByGender(arrSalaryData, arrGenderData), 'Male');
document.getElementById('totalFamale').innerHTML = getGenderSum(getArrayByGender(arrSalaryData, arrGenderData), 'Famale');
document.getElementById('avgMale').innerHTML = Math.round(getAvg(getArrayByGender(arrSalaryData, arrGenderData), 'Male'));
document.getElementById('avgFamale').innerHTML = Math.round(getAvg(getArrayByGender(arrSalaryData, arrGenderData), 'Famale'));
