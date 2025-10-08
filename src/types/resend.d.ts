declare module 'resend' {
  export class Resend {
    constructor(apiKey: string);
    sendEmail(options: { to: string; from: string; subject: string; html: string }): Promise<void>;
  }
}
