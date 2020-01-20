const columns = ['ID', 'Full Name', 'Position', 'Tech', 'Exp', 'Gender', 'Salary'];
const stuff = [
    { id: 1, fullName: 'Oleh Lev', position: 'Web Dev', skill: 'PHP,JS', exp: 3, gender: 'Male', salary: 4500 },
    { id: 2, fullName: 'John White', position: 'Web Dev', skill: 'PHP', exp: 1, gender: 'Male', salary: 1200 },
    { id: 3, fullName: 'Jany Rad', position: 'Sale', skill: '-', exp: 2, gender: 'Female', salary: 3500 },
    { id: 4, fullName: 'Ivan Brown', position: 'iOS', skill: 'Swift', exp: 3, gender: 'Male', salary: 4000 },
    { id: 5, fullName: 'Pet Bool', position: 'Android', skill: 'Java', exp: 2, gender: 'Male', salary: 3520 },
    { id: 6, fullName: 'Emma Hallo', position: 'Android', skill: 'Kotlin', exp: 1, gender: 'Female', salary: 2520 },
    { id: 7, fullName: 'Olivia Jones', position: 'iOS', skill: 'Objective-C', exp: 3, gender: 'Female', salary: 2820 },
    { id: 8, fullName: 'William Smith', position: 'Designer', skill: '-', exp: 5, gender: 'Male', salary: 3000 },
    { id: 9, fullName: 'Oliver Alien', position: 'PM', skill: '-', exp: 4, gender: 'Male', salary: 6000 },
    { id: 10, fullName: 'Mia Morris', position: 'Owner', skill: '-', exp: 10, gender: 'Female', salary: 10000 },
];
const getTotal = (arr, gender) => arr.reduce((acc, el) => !gender ? acc + el.salary : (gender === el.gender ? acc + el.salary : acc), 0);
const getAvg = (arr, gender) => (arrFilt => arrFilt.reduce((acc, el) => acc + el.salary, 0) / arrFilt.length)(arr.filter(el => !gender ? true : (el.gender === gender ? true : false)));

const createHTMLNode = (tag, attrs, inner) => {
    const element = document.createElement(tag);
    attrs.map(attr => { element.setAttribute(attr.name, attr.value.join(' ')) });
    inner ? element.innerHTML = inner : null;
    return element;
}

const table = createHTMLNode('table', [{ name: 'class', value: ['table'] }], null);
const tHead = createHTMLNode('thead', [], null);
const tBody = createHTMLNode('tbody', [], null);
const tr = createHTMLNode('tr', [], null);
columns.forEach(el => tr.append(createHTMLNode('th', [], el)));
stuff.forEach(elem => {
    const trBody = createHTMLNode('tr', [], null);
    Object.keys(elem).forEach(item => trBody.append(createHTMLNode('td', [], elem[item])));
    tBody.append(trBody);
});
const tFoot = createHTMLNode('tfoot', [], null);
const insertExtraRow = (el, i, arr, rowName, rowValue) => {
    if (arr.length - 1 === i) {
        return rowValue;
    } else if (arr.length - 2 === i) {
        return rowName
    }
    return null;
}
const trTotal = createHTMLNode('tr', [{ name: 'class', value: ['font-weight-bold'] }], null);
columns.forEach((el, i, arr) => {
    trTotal.append(createHTMLNode('td', [], insertExtraRow(el, i, arr, 'Total', getTotal(stuff))))
});
const trAvg = createHTMLNode('tr', [{ name: 'class', value: ['font-weight-bold'] }], null);
columns.forEach((el, i, arr) => {
    trAvg.append(createHTMLNode('td', [], insertExtraRow(el, i, arr, 'AVG', getAvg(stuff))))
});
const trTotalMale = createHTMLNode('tr', [{ name: 'class', value: ['font-weight-bold'] }], null);
columns.forEach((el, i, arr) => {
    trTotalMale.append(createHTMLNode('td', [], insertExtraRow(el, i, arr, 'Total for Male', getTotal(stuff, 'Male'))))
});
const trAvgMale = createHTMLNode('tr', [{ name: 'class', value: ['font-weight-bold'] }], null);
columns.forEach((el, i, arr) => {
    trAvgMale.append(createHTMLNode('td', [], insertExtraRow(el, i, arr, 'AVG for Male', Math.round(getAvg(stuff, 'Male')))))
});
const trTotalFemale = createHTMLNode('tr', [{ name: 'class', value: ['font-weight-bold'] }], null);
columns.forEach((el, i, arr) => {
    trTotalFemale.append(createHTMLNode('td', [], insertExtraRow(el, i, arr, 'Total for Female', getTotal(stuff, 'Female'))))
});
const trAvgFemale = createHTMLNode('tr', [{ name: 'class', value: ['font-weight-bold'] }], null);
columns.forEach((el, i, arr) => {
    trAvgFemale.append(createHTMLNode('td', [], insertExtraRow(el, i, arr, 'AVG for Female', Math.round(getAvg(stuff, 'Female')))))
});

document.getElementById('app').append(table);
table.append(tHead, tBody, tFoot);
tHead.append(tr);
tFoot.append(trTotal, trAvg, trTotalMale, trAvgMale, trTotalFemale, trAvgFemale);
