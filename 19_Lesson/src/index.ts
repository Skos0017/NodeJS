import * as Handlebars from 'handlebars';
import * as fileSystem from 'fs';

// const templateData: string = fileSystem.readFileSync('./public/template.hbs' , 'utf-8');

// //Компиляция шаблона
// const template = Handlebars.compile(templateData);

// const data = {
//     title: 'Знакомство с Handlebars',
//     body: 'SSR'
// }
// //Рендеринг
// const result = template(data);

// console.log(result);

Handlebars.registerPartial('header', fileSystem.readFileSync('./public/heades.hbs', 'utf-8'));
Handlebars.registerPartial('header', fileSystem.readFileSync('./public/footer.hbs', 'utf-8'));