class EmailService implements IEmailService {
  sendMail({ to, message }: IMessageDTO){
    console.log(`Email enviado para ${to.name}: ${message.subject}`);
  }
}

interface IMessageDTO {
  to: IMailTo;
  message: IMailMessage;
}

interface IMailTo {
  name: string;
  email: string;
}

interface IMailMessage {
  subject: string;
  body: string;
  attachments?: Array<string>;
}

interface IEmailService {
  sendMail(request: IMessageDTO) : void;
}

export default EmailService;
