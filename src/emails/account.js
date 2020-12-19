const sgMail=require('@sendgrid/mail')

//const sendgridAPIKey='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'

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail=(email,name)=>{
    sgMail.send({
        to:email,
        from:'sulav.khadka787@gmail.com',
        subject:'Thanks for Joining in!',
        text:`Welcome to the app, ${name}.Let me know how you get along`
    })
      
}

const sendCancelationEmail=(email,name)=>{
    sgMail.send({
        to: email,
        from:'sulav.khadka787@gmail.com',
        subject:'Sorry to have you go',
        text:`GoodBye ${name}.I hope to see you sometime soon.`
    })
}

module.exports={
    sendWelcomeEmail,
    sendCancelationEmail
}