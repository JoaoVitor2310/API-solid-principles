// Contrato que define o formato do email que será enviado

interface IAddress{ // Formato de endereço
    email: string;
    name: string;
}


export interface IMessage{ // Formato de mensagem   
    to: IAddress;
    from: IAddress;
    subject: string;
    body: string;
}


export interface IMailProvider{ // Lógica do envio de email
    sendMail(message: IMessage): Promise<void>; // Método para envio de email
}