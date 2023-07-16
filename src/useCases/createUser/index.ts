// Arquivo que irá iniciar as classes para o app funcionar

import { MailTrapMailProvider } from "../../providers/implementations/MailTrapMailProvider";
import { PostgresUsersRepository } from "../../repositories/implementations/PostgresUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const postgresUserRepository = new PostgresUsersRepository();
const mailtrapProvider = new MailTrapMailProvider();

const createUserUseCases = new CreateUserUseCase(
    postgresUserRepository,
    mailtrapProvider
)

const createUserController = new CreateUserController(
    createUserUseCases
)

export {createUserUseCases, createUserController}