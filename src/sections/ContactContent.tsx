export function ContactContent() {
    return (
        <main id="main-content">
            <div className="container flow">
                <h1 className="title">Contacto</h1>

                <h2 className="page-description">¿Tienes una idea brillante para tu próximo proyecto digital?</h2>

                <p>
                    ¿O quizás alguna pregunta sobre mis servicios o cómo puedo ayudarte a hacer realidad tu visión? No
                    dudes en ponerte en contacto conmigo.
                </p>

                <p>
                    Estoy aquí para escuchar tus inquietudes, discutir tus necesidades y explorar cómo mis habilidades
                    en desarrollo web, diseño y automatización de procesos pueden ser la clave para tu éxito.
                </p>

                <p>
                    ¡Escríbeme y comencemos a construir juntos!
                </p>

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
                                       placeholder="Nombre" type="text"/>
                            </div>
                            <div className="formkit-field">
                                <input className="formkit-input" aria-label="Correo" name="emails"
                                       placeholder="Correo" required type="email"/>
                            </div>
                        </div>
                        <div data-element="fields" data-stacked="true"
                             className="seva-fields formkit-fields cta__grid gap:1rem gap-y:0rem">
                            <div className="formkit-field" style={{gridColumn: "span 2"}}>
                                <textarea className="formkit-textarea" aria-label="Mensaje" name="message"
                                          placeholder="Mensaje" rows={3} maxLength={255} required/>
                            </div>
                            <p style={{gridColumn: "span 2"}} className="textarea-indicator-length">Máx. 255
                                caracteres</p>
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
            </div>
        </main>
    )
}