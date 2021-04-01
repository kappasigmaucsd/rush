import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

import '../../styles/contact.css'

const ContactForm = () => {

    const [state, handleSubmit] = useForm("xaylrlaj");

    if (state.succeeded) {
        return <p>Thanks for contacting!</p>
    }

    return(
        <div className="contact">
            <form onSubmit={handleSubmit}>
                <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Name *"
                    required
                />
                <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email *"
                    required
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                /><br/>
                <div className="sub">
                    <input
                        id="subject"
                        type="text"
                        name="subject"
                        placeholder="Subject"
                    /><br/>
                </div>
                <textarea
                    id="message"
                    name="message"
                    placeholder="Message"
                    rows="10"
                    cols="49"
                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                /><br/>
                <button type="submit" disabled={state.submitting}>
                    Send
                </button>
            </form>
        </div>

    )};

export default ContactForm;