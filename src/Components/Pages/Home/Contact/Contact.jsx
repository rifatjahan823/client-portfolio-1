import React from 'react';
import { FaFacebookSquare, FaBehanceSquare, FaPhone ,FaTwitterSquare} from "react-icons/fa";
import { BsLinkedin, BsFillEnvelopeFill, } from "react-icons/bs";
import { BsFillPersonFill, BsFillChatSquareDotsFill, BsFillEnvelopeOpenFill } from "react-icons/bs";
// import emailjs from 'emailjs-com';
// import { toast } from 'react-toastify';
import './Contact.css'

const Contact = () => {
           // -----for email----------
           const sendEmail = (e) => {
            e.preventDefault();
            //  emailjs.sendForm("service_vnt556a","template_a2ub8rb",e.target,"p52QC-rjua3UCqEqE").then(
            // res=>{
            // toast("Message Sent Successfully");
            //      }
            //  )
        }
    return (
        <div id="contact" className='contact_section'>
            <div className="container">
                <div className='text-center about-title'>
                    <h2>Contact</h2>
                    <p >Get in Touch </p>
                </div>
                <div>
                    <div className="row g-4 align-items-center">
                        <div className="col-md-4 col-12 order-2 order-md-1">
                            <div className='address'>
                                <h5>ADDRESS</h5>
                                <p>City centre road</p>
                                <p>Olail,savar</p>
                                <div className='my-4'>
                                    <p><FaPhone className='address_icon' /> 01315916486</p>
                                    <p> <BsFillEnvelopeFill className='address_icon' /> vrajon432@gmail.com</p>
                                </div>
                                <div>
                                    <h5>FOLLOW ME</h5>
                                    <div>
                                        <a href="#"> <FaFacebookSquare className='follow_icon' /></a>
                                        <a href="#"><BsLinkedin className='follow_icon' /></a>
                                        <a href="#"><FaBehanceSquare className='follow_icon' /></a>
                                        <a href="#"><FaTwitterSquare className='follow_icon' /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8 col-12 order-1 order-md-2">
                            <div className='address'>
                                <div className='contact-form text-center'>
                                    {/* -------Name------ */}
                                    <form className='contact' onSubmit={sendEmail} >
                                        <div className="input-group mb-3 ">
                                            <span className="input-group-text" id="basic-addon1"><BsFillPersonFill /></span>
                                            <input type="text" className="form-control" placeholder="Name" aria-label="Username" name="name" required />
                                        </div>
                                        {/* -----------Email---------  */}
                                        <div className="input-group mb-3">
                                            <span className="input-group-text" id="basic-addon1"><BsFillEnvelopeOpenFill /> </span>
                                            <input type="email" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon2" name="email" required />
                                        </div>
                                        {/* ------Message----------- */}
                                        <div className="input-group">
                                            <span className="input-group-text"><BsFillChatSquareDotsFill /></span>
                                            <textarea className="form-control text-control" aria-label="With textarea" placeholder='Message' name="message"></textarea>
                                        </div>
                                        <button className="btn form-btn mt-4" type="submit">send message</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;