// Liskov Substitution. Interface com os métodos que iremos precisar de serviços externos. 

import { User } from "../entities/User";

export interface IUsersRepository {
    findByEmail(email: string): Promise<User>; // Busca email de usuário para checar se ele já existe
    save(user: User): Promise<void>; // Salva no banco de dados
}