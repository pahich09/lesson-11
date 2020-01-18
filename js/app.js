const arrSalaryData = [...document.querySelectorAll('tr:not(:nth-last-child(-n+2))>td:last-child')].map(el => +el.innerHTML);
const arrGenderData = [...document.querySelectorAll('tr:not(:nth-last-child(-n+2))>td:nth-last-child(2)')].map(el => el.innerHTML);

function CreateObj(arr, el, i) {
    this.gender = el;
    this.salary = arr[i];
}
const getArrayByGendSal = (arrSal, arrGend) => arrGend.map((el, i) => new CreateObj(arrSal, el, i));
const getTotal = (arr, gender) => arr.reduce((acc, el) => !gender ? acc + el.salary : (gender === el.gender ? acc + el.salary : acc), 0);
const getAvg = (arr, gender) => (arrFilt => arrFilt.reduce((acc, el) => acc + el.salary, 0) / arrFilt.length)(arr.filter(el => !gender ? true : (el.gender === gender ? true : false)));

const arrOfObj = getArrayByGendSal(arrSalaryData, arrGenderData);

document.getElementById('total').innerHTML = getTotal(arrOfObj);
document.getElementById('avg').innerHTML = getAvg(arrOfObj);
document.getElementById('totalMale').innerHTML = getTotal(arrOfObj, 'Male');
document.getElementById('totalFamale').innerHTML = getTotal(arrOfObj, 'Famale');
document.getElementById('avgMale').innerHTML = Math.round(getAvg(arrOfObj, 'Male'));
document.getElementById('avgFamale').innerHTML = Math.round(getAvg(arrOfObj, 'Famale'));