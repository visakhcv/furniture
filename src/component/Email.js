import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'react-hot-toast';


export const Email = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_mb11awp', 'template_0qufr4k', form.current, 'iLiTITxClu8ljQS1u')
            .then((result) => {
                console.log(result.text);
                toast.success('Message sent Successfully')
                console.log('message sent');
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="user_name" placeholder="Enter Your Name" required />
                <input type="email" name="user_email" placeholder="Enter Your mail" required />
                <input type="text" name='subject' placeholder="Enter Your Subject" />
                <textarea name="message" id="" cols="40" rows="10" placeholder="Enter Your Message" required />
                <input type="submit" value="Send" class="send" />
            </form>
        </>
    );
};







