// Mailtrap é um módulo para testar o envio de email em desenvolvimento

import Mail from "nodemailer/lib/mailer"; // Tipo de email importado direto do nodemailer
import { IMailProvider, IMessage } from "../IMailProvider";
import nodemailer from 'nodemailer';

export class MailTrapMailProvider implements IMailProvider { // Classe que implemente o MailTrap com a interface já criada
    private transporter: Mail;

    constructor() {
        this.transporter = nodemailer.createTransport({ // Credenciais do mailtrap
            host: 'sandbox.smtp.mailtrap.io',
            port: 2525,
            auth: {
                user: '1d7e6d1d06c354',
                pass: '1a8e3b8b4027f5'
            }
        })
    }

    async sendMail(message: IMessage): Promise<void> { // Envia o email
        await this.transporter.sendMail({ // Insere os dados para enviar
            to: {
                name: message.to.name,
                address: message.to.email
            },
            from: {
                name: message.from.name,
                address: message.from.email
            },
            subject: message.subject,
            html: message.body,
        })
    }
}