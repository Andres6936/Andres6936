const PROJECTS = [
  {
    Title: {
      to: "https://github.com/Andres6936/Serralta",
      label: "Renovación de la Biblia Serralta",
    },
    Labels: ["Libre", "Abierto"],
    Description: [
      "Biblia Serralta es un sitio web con notas biblicas y libros sobre escritos por un verdadero cristiano, Luis Rafael Serralta. El sitio original cuenta con una estructura poco navegable, propia de un sitio web antiguo.",
      "El proyecto consistió en actualizar la interfaz y mejorar la experiencia del usuario, utilizando tecnologías modernas y mejores prácticas de diseño.",
    ],
    Button: {
      href: "https://github.com/Andres6936/Serralta",
      label: "Visitar",
    },
  },
  {
    Title: {
      to: "https://servigenerador.com/",
      label: "Digitalización en Servigenerador",
    },
    Labels: ["Cerrado"],
    Description: [
      "Implementación y diseño de plataforma de digitalización de ordenes de servicio, recordatorios y manejo de usuarios en Servigenerador.",
      "Características de cargue de evidencia por parte de los operarios en la plataforma, permitiendo un seguimiento y control eficiente de los procesos.",
    ],
    Button: {
      href: "https://servigenerador.com/",
      label: "Visitar",
    },
  },
  {
    Title: {
      to: "https://github.com/Andres6936/AStarAlgorithm",
      label: "Implementación de algoritmos (Pathfinding, A*, Dijkstra)",
    },
    Labels: ["Libre", "Abierto"],
    Description: [
      "Implementación de algoritmos (Pathfinding, A*, Dijkstra) usando C++ para el uso de grafos y ECS (Entity-Component-System).",
    ],
    Button: {
      href: "https://github.com/Andres6936/AStarAlgorithm",
      label: "Visitar",
    },
  },
  {
    Title: {
      to: "https://www.residuosambientales.com/",
      label: "Automatización de Residuos Ambientales",
    },
    Labels: ["Libre", "Cerrado"],
    Description: [
      "Implementación y diseño de un sistema gestion y digitalización en la operación diaría de Residuos Ambientales. Incluyendo la automatización de procesos y la reducción de costos, la apertura de solicitudes, el manejo contractual y la gestión de recursos humanos.",
      "Además, se implementó un sistema de seguimiento en el manejo de residuos para garantizar la transparencia y eficiencia en la gestión de residuos.",
    ],
    Button: {
      href: "https://www.residuosambientales.com/",
      label: "Visitar",
    },
  },
  {
    Title: {
      to: "https://github.com/Andres6936/Marketplace",
      label: "Implementación pasarelas de pago Mercado Page y PSE",
    },
    Labels: ["Cerrado"],
    Description: [
      "Implementación de pasarelas de pago Mercado Page y PSE para la gestión de pagos y facturación electrónica en Artemisa.",
      "Integración de sistemas de facturación electrónica y gestión de documentos para mejorar la eficiencia operativa.",
    ],
    Button: {
      href: "https://github.com/Andres6936/Marketplace",
      label: "Visitar",
    },
  },
  {
    Title: {
      to: "https://github.com/Andres6936/Doryen",
      label: "Diseño e implementación de motor gráfico",
    },
    Labels: ["Libre", "Abierto"],
    Description: [
      "Diseño e implementación de motor gráfico usando C++ para terminales con algoritmos de búsqueda, renderizado, gestión de entidades y componentes.",
      "Motor gráfico enfocado en la creación de juegos y aplicaciones interactivas usando un simulación de terminal con True Type Fonts.",
    ],
    Button: {
      href: "https://github.com/Andres6936/Doryen",
      label: "Visitar",
    },
  },
  {
    Title: {
      to: "https://fedeltamall.com.co/",
      label: "Aplicación de e-commerce para Android e iOS",
    },
    Labels: ["Libre", "Cerrado"],
    Description: [
      "¡Fedeltamall e-commerce!",
      "Implementación de aplicación para Android y iOS para plataforma de comercio electrónico, con funcionalidades avanzadas de seguridad y optimización de rendimiento.",
      "La aplicación cuenta con una interfaz intuitiva y fácil de usar, permitiendo a los usuarios realizar compras de manera rápida y segura.",
    ],
    Button: {
      href: "https://fedeltamall.com.co/",
      label: "Visitar",
    },
  },
  {
    Title: {
      to: "https://github.com/Andres6936/Motowii",
      label: "Diseño de aplicaciones para Android e iOS",
    },
    Labels: ["Libre", "Abierto"],
    Description: [
      "Implementación de ideas o conceptos en aplicaciones móviles para Android e iOS, usando Expo con React Native.",
      "Publicación de aplicaciones y distribución en tiendas de aplicaciones móviles.",
    ],
    Button: {
      href: "https://github.com/Andres6936/Motowii",
      label: "Visitar",
    },
  },
];

type ProjectItemType = (typeof PROJECTS)[number];

export { PROJECTS, type ProjectItemType };
