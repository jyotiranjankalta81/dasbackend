require('dotenv').config();
const nodeMailer  = require('nodemailer');
exports.sendMail = (req,res)=>{
    console.log("req body",req.body);
    // let email = req.body.email;
    // let phone = req.body.phone;
    // let name = req.body.name;
    let transporter = nodeMailer.createTransport({
        // sendmail: true,
        // newline: 'unix',
        // path: '/usr/sbin/sendmail'
        service:'gmail',
        auth:{
            user:process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });
    transporter.sendMail({
        from: process.env.EMAIL,
        to: 'jrkbond@gmail.com',
        subject: 'Message',
        text: 'I hope this message gets delivered!'
    }, (err, info) => {
        // console.log(info.envelope);
        // console.log(info.messageId);
        if (err) {
            console.log("error in sending mail",err)
            return res.status(400).json({


                
                message:`error in sending mail$(err)`
            })
            
        } else {
            console.log("sucessfully send the mail",info)
            return res.json({
                message:info
            })
            
        }
    });
}