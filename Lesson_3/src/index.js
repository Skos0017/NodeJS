const moment = require('moment');
// let now = moment();
// console.log(now.format());

// const someData = moment('2024-08-27');
// console.log(someData.format('DD MM YYYY'));


// const now = moment();
// console.log(now.format('DD MM YYYY'));
// console.log(now.format('MMMM Do YYYY, H:mm:ss a'));
// console.log(now.format('dddd'));

//Добавить дни
// const nextWeek = moment().add(7, 'day').format('dddd DD-MMM-YYYY');
// console.log(nextWeek);

//Отнять
// const nextWeek = moment().subtract(7, 'day').format('dddd DD-MMM-YYYY');
// console.log(nextWeek);

//начало месяца
// const nextWeek = moment().startOf('month').format('dddd DD-MMM-YYYY');
// console.log(nextWeek);

//конец месяца
// const nextWeek = moment().endOf('month').format('dddd DD-MMM-YYYY');
// console.log(nextWeek);

//проверка формата даты, валидация
// const dateValidate = moment('2024-10-12', 'YYYY-MM-DD', true).isValid();
// console.log(dateValidate)

// const first = moment('2024=05-15');
// const second = moment('2023=05-15');
// console.log(first.isAfter(second));
// console.log(first.isBefore(second));
// console.log(first.isSame(second));

// const first = moment('2024=05-15');
// const second = moment('2023=05-15');

// //разница в днях
// const difference = first.diff(second, 'days');
// console.log(difference);

//разные форматы даты
// const now = moment();
// console.log(now.format('L'));
// console.log(now.format('LL'));
// console.log(now.format('LLL'));
// console.log(now.format('LLLL'));

//_____________________________________________________________________//
//_____________________________________________________________________//

//Lodash

// ● _.chunk(array, [size=1]) - Разбивает массив на группы элементов по указанному
// размеру.
// ● _.compact(array) - Удаляет ложные значения (false, null, 0, "", undefined, NaN) из
// массива.
// ● _.concat(array, [values]) - Объединяет массив с любыми дополнительными значениями
// или массивами.
// ● _.difference(array, [values]) - Создает массив, содержащий элементы из первого
// массива, которых нет в последующих массивах.
// ● _.drop(array, [n=1]) - Создает срез массива, убирая n элементов с начала.
// ● _.fill(array, value, [start=0], [end=array.length]) - Заполняет все элементы массива
// значением, начиная с start до end.
// ● .find(collection, [predicate=.identity], [fromIndex=0]) - Возвращает первый элемент
// коллекции, который удовлетворяет предикату.
// ● _.flatten(array) - Создает новый массив с "плоской" структурой, выравнивая вложенные
// массивы.
// ● _.merge(object, [sources]) - Рекурсивно объединяет свойства источников в объект.
// ● .orderBy(collection, [iteratees=[.identity]], [orders]) - Сортирует коллекцию по указанным
// полям и порядкам.
// ● _.random([lower=0], [upper=1], [floating]) - Возвращает случайное число в диапазоне от
// lower до upper.
// ● _.uniq(array) - Создает дубликат массива с уникальными значениями.
// ● _.debounce(func, [wait=0], [options={}]) - Создает функцию, которая будет вызвана с
// задержкой.
// ● _.throttle(func, [wait=0], [options={}]) - Создает функцию, которая будет вызываться не
// чаще чем раз в указанный интервал времени

const loDash = require('lodash');

let arr = [1,2,0,4,5,6,7,8,9,10];
let arrr = loDash.chunk(arr, [size=3]);

loDash.fill(arrr[1], 0, [start=0], [end=arrr[1].length]);

for (let i = 0; i < arrr.length; i++) {
    console.log(arrr[i])    
}

let unionArr = [2, 3, 3, 4, 5, 5, 6];

let uniqueUnionArr = loDash.uniq(unionArr);

console.log(uniqueUnionArr);

let obj1 = {
    a: 1,
    b: 2
}

let obj2 = {
    b: 3,
    c: 4
}
let unionObj;
unionObj = loDash.merge(unionObj, [obj1],[obj2]);
console.log(unionObj);

let arrObj = [{name: 'John', age: 25}, {name: 'Jane', age: 30}, {name: 'Jim', age: 20}];

arrObj = loDash.orderBy(arrObj, [iteratees='age'], 'desc')
console.log(arrObj)








