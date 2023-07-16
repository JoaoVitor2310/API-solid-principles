// Single responsability. Classe com responsabilidade de criar o usuário. 
// D do Solid = dependency inversion. Essas classes dependem entre si, essa aqui não irá implementar diretamente, irá apenas abstrair.

import { User } from "../../entities/User";
import { IMailProvider } from "../../providers/IMailProvider";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase{

    constructor(
        private usersRepository: IUsersRepository, // Interface criada com os métodos para se comunicar com os serviços externos
        private mailProvider: IMailProvider // Interface criada com os métodos para se comunicar com os serviços externos
    ){}
    
    async execute(data: ICreateUserRequestDTO){ // Método de criação de usuário, recebe os dados
        const userAlreadyExists = await this.usersRepository.findByEmail(data.email); // Checa se o usuário já existe com o nosso método no repositório

        if(userAlreadyExists){
            throw new Error('User altready exists.'); // Devolve uma msg se já existir
        }

        const newUser = new User(data); // Se não existir, cria um novo usuário

        await this.usersRepository.save(newUser); // Salva no banco de dados com o nosso método no repositório


        await this.mailProvider.sendMail({ // Envia o email
            to: { // Destinatário
                name: data.name,
                email: data.email
            }, // Remetente
            from: {
                name: 'Equipe do app',
                email: 'equipe@app.com'
            },
            subject: 'Bem-vindo a plataforma', // Assunto
            body: '<p>Você já pode fazer login na plataforma.</p>' // Corpo
        })
    }
}