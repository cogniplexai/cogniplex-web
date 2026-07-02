/**
 * Páginas por intención (SEO). Capturan demanda activa por problema y
 * conducen al Diagnóstico y a los pilares de servicio correspondientes.
 */
export interface Solution {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string; // admite <span class="em">
  lead: string;
  pains: string[];
  approach: { title: string; text: string }[];
  relatedPillar: { name: string; href: string };
}

export const solutions: Solution[] = [
  {
    slug: 'direccion-ia-externa',
    metaTitle: 'Dirección de IA externa para pymes (CAIO / CDO fractional)',
    metaDescription:
      'Dirección de IA senior a tiempo parcial para tu pyme: CAIO y CDO fractional. Prioriza, gobierna y convierte la IA en resultados sin asumir una estructura completa.',
    eyebrow: 'Dirección de IA externa',
    h1: 'Dirección de IA senior <span class="em">sin asumir una estructura completa</span>',
    lead: 'Muchas empresas necesitan dirección de IA antes de poder justificar un Chief AI Officer a tiempo completo. El modelo fractional te da esa dirección senior, a tiempo parcial y responsable de resultados.',
    pains: [
      'Probáis herramientas de IA sin una visión de prioridades ni de riesgos.',
      'Nadie con autoridad y criterio dirige la agenda de IA de la empresa.',
      'Las iniciativas de IA se quedan dispersas y no se convierten en impacto de negocio.',
      'No podéis contratar un equipo interno de IA a tiempo completo.',
    ],
    approach: [
      { title: 'Fractional CAIO', text: 'Una figura responsable de convertir la IA en una agenda de negocio priorizada, gobernada y con seguimiento de valor.' },
      { title: 'Fractional CDO', text: 'Convertir datos dispersos en una capacidad confiable para operar y decidir.' },
      { title: 'AI Value Office', text: 'Una cartera viva de oportunidades con disciplina de valor: pipeline, priorización, KPIs y reporting ejecutivo.' },
    ],
    relatedPillar: { name: 'Fractional Leadership', href: '/servicios/fractional-leadership' },
  },
  {
    slug: 'automatizacion-de-procesos',
    metaTitle: 'Automatización de procesos con IA para pymes',
    metaDescription:
      'Rediseñamos e implantamos procesos con automatización, asistentes y agentes integrados en tus sistemas. Menos trabajo repetitivo, menos fricción, más capacidad.',
    eyebrow: 'Automatización de procesos',
    h1: 'Automatización que <span class="em">se integra en el trabajo real</span>, no en una demo',
    lead: 'Rediseñamos procesos de extremo a extremo con automatización, asistentes y agentes que respetan tus reglas y se conectan con tus sistemas. El objetivo es liberar capacidad, no acumular herramientas.',
    pains: [
      'Tareas repetitivas ocupan tiempo cualificado sin crear diferencia.',
      'La información vive dispersa entre ERP, CRM, hojas de cálculo y correo.',
      'Habéis probado automatizaciones que nunca llegaron a escalar.',
      'Los procesos dependen demasiado de personas concretas.',
    ],
    approach: [
      { title: 'Rediseño del proceso', text: 'Primero el proceso objetivo de extremo a extremo; después la tecnología que lo hace posible.' },
      { title: 'Automatización e integración', text: 'Flujos automatizados y conectores con tus sistemas, con reglas, seguridad y controles de calidad.' },
      { title: 'Agentes y asistentes con RAG', text: 'Asistentes que responden con el conocimiento y los datos de tu empresa, dentro de tus límites.' },
    ],
    relatedPillar: { name: 'Build & Transform', href: '/servicios/build-transform' },
  },
  {
    slug: 'formacion-transformativa',
    metaTitle: 'Formación transformativa en IA para equipos y directivos',
    metaDescription:
      'Formación en IA que convierte el acceso en capacidad práctica, hábitos y adopción responsable. Programas por cohortes, casos reales y red de AI Champions.',
    eyebrow: 'Formación transformativa',
    h1: 'Formación que cambia <span class="em">cómo trabaja tu equipo</span>, no solo lo que sabe',
    lead: 'Los cursos genéricos aumentan la curiosidad; la transformación exige contexto, práctica y seguimiento. Convertimos el acceso a la IA en capacidad práctica, hábitos y adopción responsable.',
    pains: [
      'El equipo tiene acceso a IA pero no la usa con criterio ni confianza.',
      'La formación previa terminó cuando terminó la sesión.',
      'Falta un lenguaje común entre dirección y equipos sobre IA.',
      'Nadie sostiene la adopción una vez pasa el entusiasmo inicial.',
    ],
    approach: [
      { title: 'Formación por colectivos', text: 'Rutas y ejercicios sobre procesos reales de la empresa, no ejemplos genéricos.' },
      { title: 'AI Champions', text: 'Una red interna de referentes que acelera la adopción, el feedback y la mejora continua.' },
      { title: 'Gestión del cambio', text: 'Acompañamiento para que la nueva forma de trabajar se sostenga y se mida en el tiempo.' },
    ],
    relatedPillar: { name: 'Enablement & Adoption', href: '/servicios/enablement-adoption' },
  },
  {
    slug: 'gobierno-de-ia',
    metaTitle: 'Gobierno de IA y confianza para empresas (AI Governance)',
    metaDescription:
      'Reglas prácticas para usar IA con seguridad, responsabilidad y confianza: políticas, roles, riesgos y controles. El gobierno se diseña desde el principio, no al final.',
    eyebrow: 'Gobierno de IA',
    h1: 'Innovar con IA <span class="em">sin comprometer</span> tu información ni tu reputación',
    lead: 'La adopción sostenible exige que empleados y dirección sepan qué se puede hacer, quién decide y cómo se protege la información. La confianza se diseña; no se añade al final.',
    pains: [
      'Preocupa la seguridad y la confidencialidad al usar IA con datos de la empresa.',
      'No hay reglas claras sobre qué usos están permitidos y quién los aprueba.',
      'Falta control sobre proveedores, modelos y accesos.',
      'La dirección teme el riesgo reputacional o de cumplimiento.',
    ],
    approach: [
      { title: 'Política de IA y roles', text: 'Qué se puede hacer, quién decide y cómo se aprueban los usos, con roles claros.' },
      { title: 'Matriz de riesgos y controles', text: 'Clasificación de riesgos, control de proveedores y checklist de implantación.' },
      { title: 'Uso responsable y formación', text: 'Catálogo de usos permitidos y formación de conducta para toda la organización.' },
    ],
    relatedPillar: { name: 'Fractional Leadership', href: '/servicios/fractional-leadership' },
  },
];

export const getSolution = (slug: string) => solutions.find((s) => s.slug === slug);
