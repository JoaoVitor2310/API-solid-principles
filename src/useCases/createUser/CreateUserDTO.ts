// Data Transfer Object, útil para transferir/objetos interfaces entre camadas

export interface ICreateUserRequestDTO {
    name: string;
    email: string;
    password: string;
}