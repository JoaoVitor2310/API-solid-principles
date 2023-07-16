import { uuid } from "uuidv4";

export class User{ // Classe de usuário com os seus dados tipados
    public readonly id: string; // Propriedades do usuário
    public name: string;
    public email: string;
    public password: string;

    constructor(props: Omit<User, 'id'>, id?: string){ // Dados que a classe irá receber, será do tipo user mas sem o id.
        Object.assign(this, props); // Pega todas as propriedades de props e passa uma por uma pro this.

        if(!id){ // Se não tiver id
            this.id = uuid(); // Gera id que não se repete
        }
    }
}