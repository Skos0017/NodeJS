export class User {
    private _username: string;
    private _firstname: string;
    private _lastname: string;
    private _email: string;
    private _password: string;

    constructor(username: string, firstname: string, lastname: string, email: string, password: string) {
        this._username = username;
        this._firstname = firstname;
        this._lastname = lastname;
        this._email = email;
        this._password = password;
    }

    public get username() {
        return this._username;
    }

    public get password() {
        return this._password;
    }
}