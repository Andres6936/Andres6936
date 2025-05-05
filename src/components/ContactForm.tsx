import {useState} from "react";

const MAX_LIMIT_CHARACTERS = 255;

export function ContactForm() {
    const [email, setEmail] = useState<string>('')
    const [names, setNames] = useState<string>('')
    const [message, setMessage] = useState<string>('')

    return (
        <form className="seva-form formkit-form cta cta--short cta__form" method="post"
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

                <div data-element="fields" data-stacked="true"
                     className="seva-fields formkit-fields cta__grid gap:1rem">
                    <div className="formkit-field">
                        <input className="formkit-input" aria-label="Nombre" name="names"
                               placeholder="Nombre" type="text"
                               value={names}
                               onChange={(e) => setNames(e.target.value)}
                        />
                    </div>
                    <div className="formkit-field">
                        <input className="formkit-input" aria-label="Correo" name="emails"
                               placeholder="Correo" required type="email"
                               value={email}
                               onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </div>
                <div data-element="fields" data-stacked="true"
                     className="seva-fields formkit-fields cta__grid gap:1rem gap-y:0rem">
                    <div className="formkit-field" style={{gridColumn: "span 2"}}>
                        <textarea className="formkit-textarea" aria-label="Mensaje" name="message"
                                  placeholder="Mensaje" rows={3} maxLength={MAX_LIMIT_CHARACTERS} required
                                  value={message}
                                  onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                    <p style={{gridColumn: "span 2"}} className="textarea-indicator-length">
                        Máx. {MAX_LIMIT_CHARACTERS - message.length} caracteres
                    </p>
                </div>

                <button data-element="submit" className="formkit-submit formkit-submit button button__cta">
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