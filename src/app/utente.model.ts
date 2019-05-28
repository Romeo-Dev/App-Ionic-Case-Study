export class UtenteModel {
    username: string;
    email: string;
    password: string;

    constructor(name:string,em:string,paw:string){
        this.username = name;
        this.email = em;
        this.password = paw;
    }
}
