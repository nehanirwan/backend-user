const nodemailer=require("nodemailer");
const transporter=nodemailer.createTransport({ 

    // service: 'gmail',
    // address:              'smtp.gmail.com',
    // domain:               'gmail.com',
    // enable_starttls_auto: true ,
    // auth: {
    //     user: 'neha.nirwan11@gmail.com',
    //     pass: 'austinn_2104'
    // }
    
        host:                  'smtp.gmail.com',
        port:                    587,
        secure:                false,
    auth: {
        user :            'neha.nirwan11@gmail.com',
        pass:             'neha_12345',
    }
});
// const options={
//     from:"neha.nirwan11@gmail.com",
//     to:"neha.nirwan@adglobal360.com",
//     subject:"sending mail with node js",
//     text: 'Node.js testing mail for GeeksforGeeks'

// }
// transporter.sendMail(options, function(err, data) {
//     if(err) {
//         console.log('Error Occurs');
//     } else {
//         console.log('Email sent successfully');
//     }
// });
module.exports=transporter;