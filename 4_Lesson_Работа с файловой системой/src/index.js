const fs = require('fs');
const moment = require('moment');

// //считать файл
// fs.readFile('text.txt', 'utf-8', (err, data) => {
//     if (err) {
//         console.log(err);
//         return
//     }
//     console.log(data)
// })

// //перезаписать
// fs.writeFile('text.txt', 'Цурипопики', 'utf8', (err) => {
//     if (err) {
//         console.log(err);
//         throw new Error(err.message);
//     }
//     console.log('Данные успешно записаны')
// });

//добавить данные в файл
// fs.appendFile('text.txt', '   ffdfdfdf', 'utf8', (err => {
//     if (err) {
//         console.log(err);
//         throw new Error(err.message);
//     }
//     console.log('Данные успешно записаны')
// }))

// function logFunction() {

//     fs.appendFile('text.txt', `\n${moment().format('DoMMM YYYY | hh_mm_ss')} : Все хорошо).`, 'utf8', (err => {
//         if (err) {
//             console.log(err);
//             throw new Error(err.message);
//         }
//         console.log('Данные успешно записаны')
//     }))
// }

// let timerId = setInterval(logFunction, 5000);
// setTimeout(() => { clearInterval(timerId); alert('stop'); }, 10000);

// fs.rename('text.txt', 'newText.txt', (err) => {
//     if (err) {
//         console.log('Ощибко!')
//         throw new Error(err.message);
//     }
//     console.log('ФАйл переименован!')
// })

// fs.unlink('newText.txt', (err) => {
//     if (err) {
//         console.log('Ощибко!')
//         throw new Error(err.message);
//     }
//     console.log('Данные уничтожены!!!!')
// })

// fs.mkdir('newDir', {recursive: true}, (err) => {
//     if (err) {
//         console.log('Ощибко!')
//         throw new Error(err.message);
//     }
//     console.log('Папка успешно создана!!!!')
// })

fs.rmdir('newDir', {recursive: true}, (err) => {
    if (err) {
        console.log('Ощибко!')
        throw new Error(err.message);
    }
    console.log('Папка успешно удалена!!!!')
})


