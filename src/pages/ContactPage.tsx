import React, {useRef} from 'react'
import emailjs from '@emailjs/browser';

const ContactPage = () => {

  const form = useRef<HTMLFormElement>(null);


  const sendEmail = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm('service_xny0k04', 'template_k1664y1', form.current as HTMLFormElement, {
        publicKey: 'lPOCnERB0dLvxSMxk',
      })
      .then(
        () => {
          alert('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };



  return (
    <div id="4" className="w-full h-screen text-center justify-center pt-[200px] text-white bg-sky-400">
        <h1 className="text-3xl">Contact Me</h1>
        <div className='flex bg-sky-800 w-[1000px] h-[800px] mx-auto mt-[30px] rounded-2xl items-center align-middle justify-center'>
            <form ref={form} onSubmit={sendEmail}>
                <div className='flex flex-col gap-5 p-[50px]'>
                    <input type="email" name="user_email" placeholder="Email" className='w-[400px] h-[50px] border-2 border-black rounded-2xl p-[10px] text-black' />
                    <textarea placeholder="Message" name="message" className='w-[400px] h-[200px] border-2 border-black rounded-2xl p-[10px] text-black' />
                    <input type='submit' className='w-[400px] h-[50px] bg-black rounded-2xl hover:scale-105 transition-all text-center text-white' value='Send'/>
                </div>
            </form>
            <div>
                <h1 className='text-3xl'>Contact Information</h1>
                <div className='flex flex-col gap-5 p-[50px]'>
                    <p>Phone: 010-3113-0895</p>
                    <p>Email: sjyj98@naver.com </p>
                    <p>Address: Wonjeok-ro 361, Bupyeong-gu, Incheon</p>
                  </div>
            </div>
        </div>
    </div>
  )
}

export default ContactPage