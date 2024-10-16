exports.Animal = class Animal {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
    }
}

Object.defineProperty(Animal.prototype, 'type',{
value: 'Мкелопитающее'
})
module.exports = Animal;

// exports.showMessage = (message) => {
//     console.log(`Сообщение: ${message}`);
// }

// exports.getSum = function(a, b) {
//     return a + b;
// }
// exports.number = 32;

// exports.obj = {
//     name: "Костя",
//     age: 24
// }

// exports.Animal = class Animal {
//     constructor(name, breed) {
//         this.name = name;
//         this.breed = breed;
//     }
// }

// exports.etalonAnimal = new this.Animal('Животное', 'Порода');
// Object.defineProperty(this.etalonAnimal, 'type', {
//     writable: true,
//     enumerable: true,
//     configurable: true,
//     value: "Какое то животное"
// })
