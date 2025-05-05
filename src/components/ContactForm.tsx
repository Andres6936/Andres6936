import {useState} from "react";

import Styles from './ContactForm.module.css'

const MAX_LIMIT_CHARACTERS = 255;

export function ContactForm() {
    const [email, setEmail] = useState<string>('')
    const [names, setNames] = useState<string>('')
    const [message, setMessage] = useState<string>('')

    return (
        <form className={Styles.Container} method="post"
              data-uid="c1cef76ca5" data-format="inline" data-version="5"
              data-options='{"settings":{"after_subscribe":{"action":"redirect","redirect_url":"https://www.kevinpowell.co/newsletter-success/","success_message":"Success! Now check your email to confirm your subscription."},"return_visitor":{"action":"show","custom_content":""},"recaptcha":{"enabled":false}}}'
              min-width="400 500 600 700 800">
            <div className="formkit-background"></div>
            <div data-style="minimal">
                <div className="formkit-header" data-element="header">
                    <h3 className="cta__title">Cuéntame tu idea y te responderé a la brevedad.</h3>
                </div>
                <div className="formkit-subheader" data-element="subheader"
                     style={{color: "rgb(104, 104, 104)", fontSize: "18px", marginTop: "1rem"}}>
                    <p>
                        Envía tu mensaje utilizando el formulario. Te aseguro una respuesta durante mi horario
                        de atención, de lunes a viernes. ¡Espero tu mensaje!
                    </p>
                </div>

                <ul className="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul>

                <div data-element="fields" data-stacked="true" className={"gap:1rem " + Styles.ContainerGrid}>
                    <input aria-label="Nombre" name="names"
                           placeholder="Nombre" type="text"
                           value={names}
                           onChange={(e) => setNames(e.target.value)}
                    />
                    <input aria-label="Correo" name="emails"
                           placeholder="Correo" required type="email"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div data-element="fields" data-stacked="true"
                     className={"gap:1rem gap-y:0rem " + Styles.ContainerGrid}>
                    <div style={{gridColumn: "span 2"}}>
                        <textarea className={Styles.TextAreaInput} aria-label="Mensaje" name="message"
                                  placeholder="Mensaje" rows={3} maxLength={MAX_LIMIT_CHARACTERS} required
                                  value={message}
                                  onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                    <p style={{gridColumn: "span 2"}} className={Styles.TextAreaIndicatorLength}>
                        Máx. {MAX_LIMIT_CHARACTERS - message.length} caracteres
                    </p>
                </div>

                <button data-element="submit" className="button">
                    <div className="formkit-spinner">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <span>Enviar mensaje</span>
                </button>
            </div>
        </form>
    )
}