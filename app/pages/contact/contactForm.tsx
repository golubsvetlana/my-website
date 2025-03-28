'use client';

import { Result } from "postcss";

export default function Contact() {
    async function handleSubmit(e) {
        e.preventDefault();
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                access_key: "1f8acaff-98b6-4e72-9e8a-685ff669bf22",
                name: e.target.name.value,
                email: e.target.email.value,
                message: e.target.message.value,
            }),
        });
        const result = await response.json();
        if (result.success) {
            document.querySelector('#msg-wnd').classList.remove('invisible')
            console.log(result); 
            document.querySelector('form').reset()
            
                      
        
        }
    }

  return (
    <>
                <form id="frm" className="flex flex-col items-stretch mt-3" onSubmit={handleSubmit}>
                    <h3 className="text-xl font-semibold mb-5" >Contact Form</h3>
                    <div className="flex flex-col items-stretch">
                        {/* <label htmlFor="name">Name</label> */}
                        <input  className="border-b border-[#3E1D68]"  type="text" name="name" required placeholder="Enter your name" />
                    </div>
                    <div className="flex flex-col items-stretch mt-5">
                        {/* <label htmlFor="email">Email</label> */}
                        <input  className="border-b border-[#3E1D68]"  type="email" name="email" required placeholder="email@example.com" />
                    </div>
                    <div className="flex flex-col items-stretch mt-5">
                        {/* <label htmlFor="message">Message</label> */}
                        <textarea className="border-b border-[#3E1D68]" name="message" required rows={1} placeholder="Enter Message"></textarea>
                    </div>
                    <button className="mt-5 font-semibold border-2 border-solid border-[#3E1D68] p-3 rounded-xl pl-5 pr-5 hover:bg-[#3E1D68] hover:text-white" type="submit">Submit Form</button>
                    <div id="msg-wnd" className="invisible text-xl font-semibold">Email sent successfully!</div>      
             
          </form>
    </>
  );
}