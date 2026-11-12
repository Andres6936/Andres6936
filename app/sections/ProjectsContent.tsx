import { useWindowSize } from "@uidotdev/usehooks";
import { chunk } from "es-toolkit/array";
import * as CardItemComponent from "@/components/CardItem";
import { PROJECTS, ProjectItemType } from "@/lib/projects";

export function ProjectsContent() {
  const size = useWindowSize();

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
      </div>

      {size.width && size.width <= 960 ? (
        <Grid items={PROJECTS} columns={2} />
      ) : (
        <Grid items={PROJECTS} columns={3} />
      )}
    </main>
  );
}

const Grid = (props: { items: ProjectItemType[]; columns: number }) => {
  const sizeChunk = Math.floor(props.items.length / props.columns);
  const chunks = chunk(props.items, sizeChunk);

  return (
    <div className="masonry masonry-wrapper masonry-switcher">
      {chunks.map((it) => (
        <div className="masonry-flow">
          {it.map((project) => (
            <Item item={project} />
          ))}
        </div>
      ))}
    </div>
  );
};

const Item = ({ item }: { item: ProjectItemType }) => {
  return (
    <CardItemComponent.Root>
      <CardItemComponent.Title to={item.Title.to} title={item.Title.label} />
      <CardItemComponent.Labels labels={item.Labels} />
      <CardItemComponent.Description>
        {item.Description.map((it) => (
          <p>{it}</p>
        ))}
      </CardItemComponent.Description>
      <CardItemComponent.Button href={item.Button.href}>
        {item.Button.label}
      </CardItemComponent.Button>
    </CardItemComponent.Root>
  );
};
