import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';

function Contact() {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');

    const { name, email, message } = formState;

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);

            if (!isValid) {
                setErrorMessage('Please enter a valid email');
            } else {
                setErrorMessage('');
            }

        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value })
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <section className="container-fluid col-lg-5">
            <h2 data-testid='h1tag' className="card-title"><strong>Contact Form</strong></h2>
            <hr style={{
                backgroundColor: '#0390fc',
                height: 10,
            }} />
            <form className="justify-content-center" id="frm_contact">
                <div className="form-group">
                    <label for="txt_name">Name:</label>
                    <input className="form-control" type="text" name="Name" defaultValue={name} onBlur={handleChange} />
                </div>
                <div className="form-group">
                    <label for="txt_email">Email Address:</label>
                    <input className="form-control" type="email" name="Email" defaultValue={email} onBlur={handleChange} />
                </div>
                <div className="form-group">
                    <label for="txt_message">Message:</label>
                    <textarea className="form-control" name="Message" defaultValue={message} onBlur={handleChange} rows="7" />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}

                <div className="form-group mt-3 float-end col-lg-3" >
                    <button id="btn_submit" className="btn btn-outline-dark w-100" type="submit" onSubmit={handleSubmit}>Submit</button>
                </div>
            </form>
        </section>
    )
}

export default Contact;