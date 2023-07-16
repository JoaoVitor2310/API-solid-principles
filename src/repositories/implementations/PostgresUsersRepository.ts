// Implementaçao do serviço externo Postgres, mas nesse caso iremos somente simular

import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

export class PostgresUsersRepository implements IUsersRepository { // Classe que implementa os métodos já criados
    private users: User[] = [];

    async findByEmail(email: string): Promise<User> { // Vê se já existe um usuário
        const user = this.users.find(user => user.email === email);
        return user;
    }

    async save(user: User): Promise<void> {
        this.users.push(user); // Salva o usuário no banco de dados, fictício nesse caso1
    }
}