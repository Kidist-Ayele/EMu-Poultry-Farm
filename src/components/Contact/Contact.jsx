import React, { useState } from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail.png'
import phone_icon from '../../assets/phone.png'
import location_icon from '../../assets/location.png'
import white_arrow from '../../assets/arrow.png'
const API_KEY = import.meta.env.VITE_FORM_API_KEY;

const Contact = () => {
    const [result, setResult] = useState("");
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        message: ''
    });

    const validateForm = () => {
        const newErrors = {};

        // Name validation
        if (!formData.name.trim()) {
            newErrors.name = 'Please enter your name';
        } else if (formData.name.trim().length < 2) {
            newErrors.name = 'Name must be at least 2 characters long';
        }

        // Phone validation
        if (!formData.phone.trim()) {
            newErrors.phone = 'Please enter your phone number';
        } else if (!/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/\s/g, ''))) {
            newErrors.phone = 'Please enter a valid phone number';
        }

        // Message validation
        if (!formData.message.trim()) {
            newErrors.message = 'Please enter your message';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters long';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        
        if (!validateForm()) {
            return;
        }

        setResult("Sending....");
        const formDataToSend = new FormData();
        formDataToSend.append("name", formData.name);
        formDataToSend.append("phone", formData.phone);
        formDataToSend.append("message", formData.message);
        formDataToSend.append("access_key", API_KEY);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formDataToSend
            });

            const data = await response.json();

            if (data.success) {
                setResult("Message sent successfully! We'll get back to you soon.");
                setFormData({ name: '', phone: '', message: '' });
                setErrors({});
            } else {
                setResult("Sorry, there was an error sending your message. Please try again.");
            }
        } catch (error) {
            setResult("Network error. Please check your connection and try again.");
        }
    };

    return (
        <div className="contact">
            <div className="contact-col">
                <h3>Send us a message <img src={msg_icon} alt="" /></h3>
                <p>Feel free to reach out through contact 
                    form or find our contact information 
                    below. Your feedback, questions, and suggestions 
                    are important to us as we strive to provide exceptional 
                    service to our university community.</p>
                <ul>
                    <li><img src={mail_icon} alt="" />samuelmulat1418@gmail.com</li>
                    <li><img src={phone_icon} alt="" />+251 927230660</li>
                    <li><img src={location_icon} alt="" /> Addis Ababa, Ethiopia</li>
                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label>Your name</label>
                    <input 
                        type="text" 
                        name="name" 
                        value={formData.name}
                        onChange={handleInputChange}
                        className={errors.name ? 'error' : ''}
                    />
                    {errors.name && <span className="error-message">{errors.name}</span>}
                    
                    <label>Phone Number</label>
                    <input 
                        type="tel" 
                        name="phone" 
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={errors.phone ? 'error' : ''}
                    />
                    {errors.phone && <span className="error-message">{errors.phone}</span>}
                    
                    <label>Write your message here</label>
                    <textarea 
                        name="message" 
                        rows="6" 
                        value={formData.message}
                        onChange={handleInputChange}
                        className={errors.message ? 'error' : ''}
                    ></textarea>
                    {errors.message && <span className="error-message">{errors.message}</span>}
                    
                    <button type="submit" className='btn dark-btn'>Send now <img src={white_arrow} alt="" /></button>
                </form>
                {result && <span className={`result-message ${result.includes('successfully') ? 'success' : 'error'}`}>{result}</span>}
            </div>
        </div>
    )
}

export default Contact
