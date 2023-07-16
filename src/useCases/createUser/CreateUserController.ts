// Controller de criação do usuário, basicamente lida com a requisição e as respostas.

import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController{
    constructor(
        private createUserUseCase: CreateUserUseCase, // Recebe os casos de uso de usuário e guarda em uma variável
    ){}
    
    async handle(req: Request, res: Response): Promise<Response>{ // Lida com a requisição e resposta
        const {name, email, password} = req.body; // Propriedades na requisição

        try {
            await this.createUserUseCase.execute({ // Utiliza o método de criação de usuário
                name, email, password
            })
            return res.status(201).send(); // Usuário criado.
        } catch (error) {
          return res.status(400).json({ // Erro na criação
            message: error.message || 'Unexpected Error.'
          })  
        }
        
    }
}