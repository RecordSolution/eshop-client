export class LoginModel {
    email: string;
    password: string;
    acccessTokken: string;

    constructor() {
        this.email = '';
        this.password = '';
    }
}