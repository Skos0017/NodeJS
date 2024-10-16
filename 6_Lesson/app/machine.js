const os = require('node:os');

class Machine{
    
    getInfo(){
        return `
        свободной системной  = ${os.freemem()} 
        объем системной памяти = ${os.totalmem()}  
        выпуск операционной системы = ${os.release()} 
        операционной системы = ${os.platform()}
        Возвращает общий объем системной памяти в байтах = ${os.totalmem()} 
        Возвращает массив объектов = ${os.cpus()}`;
    }
}

module.exports = Machine;