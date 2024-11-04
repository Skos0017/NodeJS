import fs from 'fs';

export async function readFile(path: string): Promise<string> {
    return new Promise((resolve: (value: string | PromiseLike<string>) => void, reject: (reason?: any) => void) => {
        fs.readFile(path, 'utf-8', (err: NodeJS.ErrnoException | null, data: string) => {
            if (err) {
                reject('Ошибка чтения файла');
            }
            resolve(data);
        });
    })
    
}

export async function writeFile(path: string, data: string): Promise<string> {
    return new Promise((resolve: (value: string | PromiseLike<string>) => void, reject: (reason?: any) => void) => {
        fs.writeFile(path, data, 'utf-8', (err: NodeJS.ErrnoException | null) => {
            if (err) {
                reject("Ошибка записи данных");
            }
            resolve("Данные успешно записанны");
        });
    });
}