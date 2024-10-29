import comercial from '@/assets/comercial.jpg'
import civiles from '@/assets/civiles.jpg'
import habitacional from '@/assets/habitacional.jpg'
import mantenimiento from '@/assets/mantenimiento.jpg'
import hidraulica from '@/assets/hidraulica.jpg'

export default {
  siteUrl: 'https://www.idconstrucciones.cl',
  title: 'ID Construcciones | Solucionar sus problemas es nuestro trabajo',
  description:
    'Somos ID Construcciones, especializados en ofrecer soluciones integrales en construcción. Con un equipo altamente capacitado, brindamos servicios de calidad en toda la Región de Coquimbo y todo Chile. Solucionar sus problemas es nuestro trabajo. ¡Contáctenos para llevar su proyecto al siguiente nivel!',
  sections: {
    hero: {
      title: 'ID Construcciones',
      subTitle: 'Solucionar sus problemas es nuestro trabajo',
    },
    summary: {
      mision:
        'En <b>ID Construcciones</b>, trabajamos con el compromiso de ofrecer <b>soluciones constructivas de alta calidad</b> que se adapten a las necesidades de cada cliente, cumpliendo con los <b>más altos estándares de eficiencia, innovación y seguridad.</b> Ejecutamos cada proyecto con responsabilidad y celeridad, priorizando la satisfacción del cliente y la creación de infraestructuras sostenibles en el tiempo. <b>Nuestro objetivo es contribuir al desarrollo del sector a través de relaciones de confianza, trabajo en equipo y mejora continua, asegurando resultados que superen las expectativas del cliente.</b>',
      vision:
        'Nos proyectamos como una empresa <b>líder en el sector</b>, reconocida por ofrecer soluciones <b>eficientes, innovadoras y sostenibles</b>. Nuestra meta es liderar mediante la mejora constante de nuestros procesos, el fortalecimiento de relaciones de confianza y la implementación de prácticas que aseguren la calidad y durabilidad de nuestras construcciones. <b>A través de la excelencia y la mejora continua, buscamos contribuir al desarrollo del entorno construido y superar las expectativas de quienes confían en nosotros.</b>',
    },
    projects: {
      title: 'Proyectos',
      content: [
        {
          name: '',
          location: '',
          year: '',
        },
      ],
    },
    services: {
      title: 'Servicios Integrales',
      content: [
        {
          name: 'Obras Civiles',
          description:
            'Ejecutamos una amplia gama de proyectos de obras civiles, garantizando la máxima durabilidad y resistencia en cada construcción. Entre nuestros servicios se incluyen la construcción de muros de contención para la estabilización de terrenos, pavimentaciones duraderas para calles y caminos, así como la creación de canchas deportivas de alto rendimiento. Cada proyecto es desarrollado con un enfoque en la funcionalidad y la estética, cumpliendo con los estándares más exigentes.',
          image: {
            src: civiles,
            alt: 'Imágen de Obras Civiles de ID Construcciones',
          },
        },
        {
          name: 'Obras Hidraulicas',
          description:
            'Nos especializamos en la construcción de infraestructura hidráulica, abarcando desde plantas elevadoras de aguas servidas hasta la instalación de sistemas de bombeo de agua potable. Desarrollamos proyectos de colectores y otros sistemas de alcantarillado con soluciones eficientes y duraderas, asegurando el óptimo funcionamiento de los sistemas de agua y saneamiento, vitales para el desarrollo de cualquier infraestructura urbana o rural.',
          image: {
            src: hidraulica,
            alt: 'Imágen de Obras Hidraulicas de ID Construcciones',
          },
        },
        {
          name: 'Edificación Habitacional',
          description:
            'Nos dedicamos a la construcción de viviendas con un enfoque personalizado, adaptando cada proyecto a las necesidades de nuestros clientes. También ofrecemos servicios de ampliación y acondicionamiento ambiental, creando espacios confortables y eficientes energéticamente. Nos preocupamos por integrar soluciones de diseño moderno y sostenibilidad en cada vivienda que construimos.',
          image: {
            src: habitacional,
            alt: 'Imágen de Edificación Habitacional de ID Construcciones',
          },
        },
        {
          name: 'Edificación Comercial',
          description:
            'Ofrecemos un servicio integral para la construcción y acondicionamiento de locales comerciales. Nos ocupamos desde la adecuación de espacios hasta la construcción de equipamiento comercial que responda a las necesidades específicas de cada cliente. Ya sea en la ampliación de un local o en la construcción de nuevos espacios comerciales, nos aseguramos de que cada proyecto esté alineado con la imagen corporativa y los requerimientos operacionales del cliente.',
          image: {
            src: comercial,
            alt: 'Imágen de Edificación Comercial de ID Construcciones',
          },
        },
        {
          name: 'Servicio Integral de Mantenimiento a Edificaciones',
          description: [
            'En ID Construcciones, sabemos que la clave para la durabilidad de cualquier infraestructura es el mantenimiento preventivo y correctivo. Nuestro servicio integral de mantenimiento está diseñado para edificaciones con alta carga de uso, tales como edificios comerciales o industriales. Nos especializamos en la revisión y reparación de sistemas clave como gasfitería, electricidad y carpintería, asegurando que las instalaciones operen de manera segura y eficiente.',
            'Además, ofrecemos un servicio completo de traslado de objetos, ideal para empresas que requieren reubicación de equipos o mobiliario sin interrupciones en sus operaciones.',
            'Nuestro equipo profesional está capacitado para identificar y solucionar cualquier problema técnico en las instalaciones, siempre con una respuesta rápida y eficiente. Gracias a nuestra amplia experiencia y a la red de colaboradores especializados, podemos ofrecer un servicio continuo y fiable, asegurando que la vida útil de las edificaciones se prolongue y que sus ocupantes se sientan siempre en un entorno seguro y confortable.',
          ],
          image: {
            src: mantenimiento,
            alt: 'Imágen de Servicio Integral de Mantenimiento a Edificaciones de ID Construcciones',
          },
        },
      ],
    },
    about: {
      title: 'Nuestro Sello',
      description: [
        'Desde la Región de Coquimbo a todo Chile, en <b>ID Construcciones</b>, la prevención de riesgos laborales es nuestra prioridad. Realizamos exámenes ocupacionales para garantizar la idoneidad de nuestros trabajadores y promovemos el uso adecuado de elementos de protección personal. Esto asegura que cada miembro de nuestro equipo esté capacitado para enfrentar los desafíos del trabajo.',
        'Nos destacamos por nuestra red de socios estratégicos en diversas áreas del sector. Nuestro equipo de expertos nos permite ejecutar proyectos con eficiencia y calidad, garantizando resultados excepcionales.',
      ],
    },
    team: {
      title: 'Equipo',
      content: [
        {
          name: '',
          area: '',
          contact: '',
        },
      ],
    },
    contact: {
      title: 'Estemos en contacto',
      subTitle:
        'Estamos aquí para ayudarle con todas sus necesidades en construcción. Ya sea que estés planeando un nuevo proyecto o necesita asesoramiento de expertos, nuestro equipo está listo para ayudarle.',
      whatsAppMessage: 'Contacta con nosotros por WhatsApp',
    },
  },
  social_media: {
    ig: '',
    fb: '',
  },
  contact: {
    business_email: 'contacto@idconstrucciones.cl',
    admin_email: '',
    phone: '+ 56 9 6211 5782',
  },
}
