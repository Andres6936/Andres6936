import * as CardItemComponent from "@/components/CardItem";

export function ProjectsContent() {
  return (
    <main id="main-content">
      <div className="container flow">
        <h1 className="title">Proyectos</h1>
        <p>
          Aquí comparto algunos de los proyectos que han marcado mi trayectoria
          como desarrollador independiente. Verás una mezcla de trabajos
          profesionales y proyectos personales, cada uno con sus propios
          desafíos y aprendizajes. ¡Espero que disfrutes viendo cómo he ido
          creciendo y aplicando mis conocimientos!
        </p>

        <div className="course-grid">
          <CardItemComponent.Root>
            <CardItemComponent.Title
              to="https://scrimba.com/learn/spacetravel"
              title="Renovación de la Biblia Serralta"
            />
            <CardItemComponent.Labels labels={["Libre", "Abierto"]} />
            <CardItemComponent.Description>
              <p>
                Biblia Serralta es un sitio web con notas biblicas y libros
                sobre escritos por un verdadero cristiano, Luis Rafael Serralta.
                El sitio original cuenta con una estructura poco navegable,
                propia de un sitio web antiguo.
              </p>

              <p>
                El proyecto consistió en actualizar la interfaz y mejorar la
                experiencia del usuario, utilizando tecnologías modernas y
                mejores prácticas de diseño.
              </p>
            </CardItemComponent.Description>
            <CardItemComponent.Button href="https://scrimba.com/learn/spacetravel">
              Visitar
            </CardItemComponent.Button>
          </CardItemComponent.Root>

          <CardItemComponent.Root>
            <CardItemComponent.Title
              to="https://courses.kevinpowell.co/conquering-responsive-layouts"
              title="Automatización de Residuos Ambientales"
            />
            <CardItemComponent.Labels labels={["Libre", "Cerrado"]} />
            <CardItemComponent.Description>
              <p>
                Implementación y diseño de un sistema gestion y digitalización
                en la operación diaría de Residuos Ambientales. Incluyendo la
                automatización de procesos y la reducción de costos, la apertura
                de solicitudes, el manejo contractual y la gestión de recursos
                humanos.
              </p>

              <p>
                Además, se implementó un sistema de seguimiento en el manejo de
                residuos para garantizar la transparencia y eficiencia en la
                gestión de residuos.
              </p>
            </CardItemComponent.Description>
            <CardItemComponent.Button href="https://courses.kevinpowell.co/conquering-responsive-layouts">
              Visitar
            </CardItemComponent.Button>
          </CardItemComponent.Root>

          <CardItemComponent.Root>
            <CardItemComponent.Title
              to="https://cssdemystified.com"
              title="Aplicación de e-commerce para Android e iOS"
            />
            <CardItemComponent.Labels labels={["Libre", "Cerrado"]} />
            <CardItemComponent.Description>
              <p>
                <strong>¡Fedeltamall e-commerce!</strong>
              </p>
              <p>
                Implementación de aplicación para Android y iOS para plataforma
                de comercio electrónico, con funcionalidades avanzadas de
                seguridad y optimización de rendimiento.
              </p>

              <p>
                La aplicación cuenta con una interfaz intuitiva y fácil de usar,
                permitiendo a los usuarios realizar compras de manera rápida y
                segura.
              </p>
            </CardItemComponent.Description>
            <CardItemComponent.Button href="https://cssdemystified.com">
              Visitar
            </CardItemComponent.Button>
          </CardItemComponent.Root>

          <CardItemComponent.Root>
            <CardItemComponent.Title
              to="https://flexboxsimplified.com"
              title="Digitalización en Servigenerador"
            />
            <CardItemComponent.Labels labels={["Cerrado"]} />
            <CardItemComponent.Description>
              <p>
                Getting started with flexbox is easy. A nice little display:
                flex and you have columns.
              </p>
              <p>
                Then it's time for the hard part: figuring out what strange
                combination of justifying, aligning, growing (or shrinking), you
                need to cobble together to get it to behave the way you need it
                to.
              </p>
              <p>
                This course has everything you need to take control of flexbox
                and start using it to create components, and layouts, with
                confidence.
              </p>
            </CardItemComponent.Description>
            <CardItemComponent.Button href="https://flexboxsimplified.com">
              Visitar
            </CardItemComponent.Button>
          </CardItemComponent.Root>

          <CardItemComponent.Root>
            <CardItemComponent.Title
              to="https://learn.kevinpowell.co/"
              title="Implementación pasarelas de pago Mercado Page y PSE"
            />
            <CardItemComponent.Labels labels={["Cerrado"]} />
            <CardItemComponent.Description>
              <p>
                A free course for people who are new to web development, going
                from the absolute basics of what HTML and CSS even are to
                creating a responsive, 2-page website. In this course, I cover
                all of the essentials that you'll need to get started in
                creating your own websites.
              </p>
            </CardItemComponent.Description>
            <CardItemComponent.Button href="https://learn.kevinpowell.co/">
              Visitar
            </CardItemComponent.Button>
          </CardItemComponent.Root>

          <CardItemComponent.Root>
            <CardItemComponent.Title
              to="https://scrimba.com/learn/introhtmlcss"
              title="Diseño de aplicaciones para Android e iOS"
            />
            <CardItemComponent.Labels labels={["Libre", "Abierto"]} />
            <CardItemComponent.Description>
              <p>
                Hosted on Scrimba, this free course is for people who are
                completely new to HTML &amp; CSS.
              </p>
              <p>
                Working up from zero, you'll be building your first multi-page
                sites when you are done.
              </p>
            </CardItemComponent.Description>
            <CardItemComponent.Button href="https://scrimba.com/learn/introhtmlcss">
              Visitar
            </CardItemComponent.Button>
          </CardItemComponent.Root>

          <CardItemComponent.Root>
            <CardItemComponent.Title
              to="https://scrimba.com/learn/responsive"
              title="Implementación de algoritmos (Pathfinding, A*, Dijkstra)"
            />
            <CardItemComponent.Labels labels={["Libre", "Abierto"]} />
            <CardItemComponent.Description>
              <p>
                Taking off where the HTML &amp; CSS Crash course leaves off,
                this course takes you from the basics of HTML &amp; CSS and
                dives in deep.
              </p>
              <p>
                It covers CSS in-depth, from general styling, typography, and
                layouts using flexbox and grid.
              </p>
              <p>This course requires a membership with Scrimba.</p>
            </CardItemComponent.Description>
            <CardItemComponent.Button href="https://scrimba.com/learn/responsive">
              Visitar
            </CardItemComponent.Button>
          </CardItemComponent.Root>

          <CardItemComponent.Root>
            <CardItemComponent.Title
              to="https://beyondcss.dev/"
              title="Diseño e implementación de motor gráfico"
            />
            <CardItemComponent.Labels labels={["Libre", "Abierto"]} />
            <CardItemComponent.Description>
              <p>
                Authoring stylesheets is about more than simply writing a few
                lines of CSS these days.
              </p>
              <p>
                We have pre-processors, post-processors, design systems, and
                many different naming conventions.
              </p>
              <p>
                In this course I'll be looking at using Sass to develope
                reusable design systems, explore sane naming convetions, and use
                tools like Vite and PostCSS to optimize your builds.
              </p>
            </CardItemComponent.Description>
            <CardItemComponent.Button href="https://beyondcss.dev/">
              Visitar
            </CardItemComponent.Button>
          </CardItemComponent.Root>
        </div>
      </div>
    </main>
  );
}
