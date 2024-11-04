const fs = require('fs');
const path = require('path');


const sourceFilePath = path.join(__dirname, 'example.txt');
const destinationFilePath = path.join(__dirname, 'destination.txt');


const readableStream = fs.createReadStream(sourceFilePath);
const writableStream = fs.createWriteStream(destinationFilePath);


readableStream.pipe(writableStream);