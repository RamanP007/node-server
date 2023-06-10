import nodemailer from 'nodemailer';

const mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'xyz@gmail.com',
        pass: '*************'
    }
});

export default mailTransporter;