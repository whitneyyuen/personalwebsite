import React, { useRef } from 'react';
import './contact.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_z9pgf8o', 'template_qcjoqof', form.current, {
                publicKey: 'I2QPYeNfAtwLq63uu',
            })
            .then(
                (result) => {
                    console.log('SUCCESS!');
                    alert("I will contact you as soon as possible. Thank you.");
                    e.target.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <section id="contact">
            <Container>
                <Row>
                    <Col xs={12} md={1}></Col>
                    <Col xs={12} md={10}>
                        <div className="contactContent">
                            <h1 className="contactTitle">Contact Me</h1>
                            <span className="contactDesc">Please don't hesitate to contact me by filling out the below form to discuss any job opportunities.</span>
                            <form className="contactForm" ref={form} onSubmit={sendEmail}>
                                <input type="text" className="name" name="visitor_name" placeholder="Your Name" required />
                                <input type="email" className="email" name="visitor_email" placeholder="Your Email" required />
                                <textarea className="content" rows="5" name="message" placeholder="Your Message" required />
                                <Button type="submit" value="Send" variant="primary" className="contactFormBtn">Submit</Button>
                                <Button type="reset" value="Reset" variant="secondary" className="contactFormBtn">Clear</Button>
                            </form>
                        </div>

                        <div className="contactBtn">
                            <a href="https://github.com/whitneyyuen" target='_blank;'><FontAwesomeIcon color="black" icon={faGithub} /></a>
                            <a href="https://www.linkedin.com/in/whitney-yuen/" target='_blank;'><FontAwesomeIcon color="blue" icon={faLinkedin} /></a>
                            <a href="https://www.youtube.com/@whitneyney21" target='_blank;'><FontAwesomeIcon color="red" icon={faYoutube} /></a>
                        </div>
                    </Col>
                    <Col xs={12} md={1}></Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact;