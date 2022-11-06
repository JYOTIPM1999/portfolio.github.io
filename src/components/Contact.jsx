import { useContext, useState } from 'react';
import '../styles/contact.css';
import '../styles/contact2.css';
import { ThemeContext } from '../context/ThemeContext';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { MdEmail, MdCall, MdLocationOn } from 'react-icons/md'
import { useRef } from 'react';
// import {RiContactsFill} from 'react-icons/ri';
import { FcCallback } from 'react-icons/fc'

export const Contact = () => {
    const { light } = useContext(ThemeContext);
    const [formData, setFormData] = useState({ from_name: "", email_id: "", message: "" });
    const [msgStatus, setStatus] = useState({ fail: false, suc: false })
    const form = useRef();

    const sendMessage = (e) => {
        e.preventDefault();
        if (formData.from_name === "" || formData.email_id === "" || formData.message === "") {
            setStatus({ ...msgStatus, fail: true, suc: false });

            setTimeout(() => {
                setStatus({ ...msgStatus, fail: false, suc: false });
            }, 3000)
        }
        else {
            emailjs.sendForm('service_bl30v2n', 'template_nj6lzpu', form.current, '_dqgPiGtLggjDM6ew')
                .then((result) => {
                    // console.log(result.text);
                    setStatus({ ...msgStatus, fail: false, suc: true });
                    setTimeout(() => {
                        setStatus({ ...msgStatus, fail: false, suc: false });
                    }, 3000)

                    setFormData({ from_name: "", email_id: "", message: "" });
                }, (error) => {
                    // console.log(error.text);
                });
        }

    }

    return <div id='contact' style={{ '--bglightproject': light ? "#edf2f8" : "#0a192f", '--plight': light ? 'black' : 'white', '--namelight': light ? "#dc143c" : "#64ffda", '--rolelight': light ? "white" : "#152235" }}>
        <p>Get In <span>Touch</span> <span></span></p>
        <div id='contactCont' style={{ '--bg': light ? "#fafcff" : "#4a5d80dd" }}>
            {/* <div id='contImg' data-aos='zoom-in'>
            </div>  */}
            {/* <div id='contForm' data-aos='zoom-in'>
                <div id='tel'>
                    <a href='tel:+918822076879' style={{textDecoration:"none"}}><button><MdCall/> +918822076879</button></a>
                </div>
                <div id='smButt'>
                    <a href='https://www.linkedin.com/in/surajkm24/' target='_blank' style={{ textDecoration: "none" }}><button className='smButIc' style={{ background: light ? "#00a0dc" : "#9bdaf3", color: light ? "white" : "black" }}><BsLinkedin /> LinkedIn</button></a>
                    <a href='https://github.com/surajkm24' target='_blank' style={{ textDecoration: "none" }}><button className='smButIc' style={{ background: light ? "#373b41" : "#373b41", color: "white" }}><BsGithub /> GitHub</button></a>
                    <a href='mailto:surajkm336796@gmail.com' style={{ textDecoration: "none" }}><button className='smButIc' style={{ background: light ? "#e53e3e" : "#feb2b2", color: light ? "white" : "black" }}><MdEmail /> Gmail</button></a>
                </div>
                <div id='contForm2'>
                    <form ref={form} onSubmit={sendMessage}>
                        <input name='from_name' type='text' placeholder='Your Name' value={formData.from_name} onChange={(e) => setFormData({ ...formData, from_name: e.target.value })} />
                        <input name='email_id' type='email' placeholder='Your Email' value={formData.email_id} onChange={(e) => setFormData({ ...formData, email_id: e.target.value })} />
                        <textarea name='message' type='text' placeholder='Your Message' value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
                        <input type='submit' value='SEND' />
                    </form>
                </div>
            </div> */}
            <div id='contactDetSec'>
                <div>
                    <p>Contact Me</p>
                    <p>I'm actively looking for any new opportunities in Full Stack Web Development.
                        If you have any opportunity or project then feel free to contact me.</p>
                </div>
                <div>
                    <div className='contactOption'>
                        <MdCall className='contactIcon' />
                        <a href='tel:8822076879'>+91 88220 76879</a>
                    </div>
                    <div className='contactOption'>
                        <MdEmail className='contactIcon' />
                        <a href='mailto:surajkm336796@gmail.com'>surajkm336796@gmail.com</a>
                    </div>
                    <div className='contactOption'>
                        <BsGithub className='contactIcon' />
                        <a href='https://github.com/surajkm24' target='_blank'>GitHub</a>
                    </div>
                    <div className='contactOption'>
                        <BsLinkedin className='contactIcon' />
                        <a href='https://linkedin.com/in/surajkm24' target='_blank'>LinkedIn</a>
                    </div>
                    <div className='contactOption'>
                        <MdLocationOn className='contactIcon' />
                        <a>Mangaldai, Assam</a>
                    </div>
                </div>
            </div>
            <div id='contactForm' style={{ '--bg2': light ? "#122d54d4" : "white", '--textColor': light ? "white" : "black" }}>
                <p style={{ '--color': light ? "#64ffda" : "#dc143c" }}>You can say Hi 👋</p>
                <form ref={form} onSubmit={sendMessage}>
                    <label>Your Name</label>
                    <input name='from_name' type='text' placeholder='🙂' value={formData.from_name} onChange={(e) => setFormData({ ...formData, from_name: e.target.value })} />
                    <label>Email</label>
                    <input name='email_id' type='email' placeholder='📧' value={formData.email_id} onChange={(e) => setFormData({ ...formData, email_id: e.target.value })} />
                    <label>Message</label>
                    <textarea name='message' type='text' placeholder='📑' value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
                    <input type='submit' value='SEND MESSAGE' />
                </form>
            </div>
        </div>

        <div id='failbox' style={{ display: msgStatus.fail ? "flex" : "none" }}>
            <div id='failureAlert'>
                <span>!</span> <p>Please fill the details</p>
            </div>
        </div>
        <div id='sucbox' style={{ display: msgStatus.suc ? "flex" : "none" }}>
            <div id='successAlert'>
                <span>✓</span> <p>Your message has been sent.</p>
            </div>
        </div>
        <div id='creator'>
            <p>Designed & Built by Suraj Kumar Mishra.</p>
        </div>
    </div>
}