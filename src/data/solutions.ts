/**
 * Páginas por intención (SEO). Capturan demanda activa por problema y
 * conducen al Diagnóstico y a las prácticas de servicio correspondientes.
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

const solutionsEs: Solution[] = [
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
    relatedPillar: { name: 'Dirección Fractional', href: '/servicios/fractional-leadership' },
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
    relatedPillar: { name: 'Construcción y Transformación', href: '/servicios/build-transform' },
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
    relatedPillar: { name: 'Capacitación y Adopción', href: '/servicios/enablement-adoption' },
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
    relatedPillar: { name: 'Dirección Fractional', href: '/servicios/fractional-leadership' },
  },
];

const solutionsEn: Solution[] = [
  {
    slug: 'direccion-ia-externa',
    metaTitle: 'Fractional AI leadership for SMEs (fractional CAIO / CDO)',
    metaDescription:
      'Part-time senior AI leadership for your SME: fractional CAIO and CDO. Prioritise, govern and turn AI into outcomes without taking on a full in-house structure.',
    eyebrow: 'Fractional AI leadership',
    h1: 'Senior AI leadership <span class="em">without taking on a full in-house structure</span>',
    lead: 'Many companies need AI leadership before they can justify a full-time Chief AI Officer. The fractional model gives you that senior direction, part-time and accountable for outcomes.',
    pains: [
      'You try AI tools without a clear view of priorities or risks.',
      'No one with authority and judgement owns the company’s AI agenda.',
      'AI initiatives stay scattered and never convert into business impact.',
      'You cannot hire a full-time in-house AI team.',
    ],
    approach: [
      { title: 'Fractional CAIO', text: 'A single accountable figure who turns AI into a prioritised, governed business agenda with value tracking.' },
      { title: 'Fractional CDO', text: 'Turn scattered data into a reliable capability for operating and deciding.' },
      { title: 'AI Value Office', text: 'A living portfolio of opportunities with value discipline: pipeline, prioritisation, KPIs and executive reporting.' },
    ],
    relatedPillar: { name: 'Fractional Leadership', href: '/en/servicios/fractional-leadership' },
  },
  {
    slug: 'automatizacion-de-procesos',
    metaTitle: 'AI-powered process automation for SMEs',
    metaDescription:
      'We redesign and implement processes with automation, assistants and agents integrated into your systems. Less repetitive work, less friction, more capacity.',
    eyebrow: 'Process automation',
    h1: 'Automation that <span class="em">becomes part of real work</span>, not a demo',
    lead: 'We redesign end-to-end processes with automation, assistants and agents that respect your rules and connect with your systems. The goal is to free up capacity, not to accumulate tools.',
    pains: [
      'Repetitive tasks consume skilled time without creating any difference.',
      'Information lives scattered across ERP, CRM, spreadsheets and email.',
      'You have tried automations that never managed to scale.',
      'Processes depend too heavily on specific individuals.',
    ],
    approach: [
      { title: 'Process redesign', text: 'First the end-to-end target process; then the technology that makes it possible.' },
      { title: 'Automation and integration', text: 'Automated workflows and connectors with your systems, with rules, security and quality controls.' },
      { title: 'RAG agents and assistants', text: 'Assistants that answer with your company’s knowledge and data, within your boundaries.' },
    ],
    relatedPillar: { name: 'Build & Transform', href: '/en/servicios/build-transform' },
  },
  {
    slug: 'formacion-transformativa',
    metaTitle: 'Transformative AI training for teams and executives',
    metaDescription:
      'AI training that turns access into practical capability, habits and responsible adoption. Cohort-based programmes, real cases and an AI Champions network.',
    eyebrow: 'Transformative training',
    h1: 'Training that changes <span class="em">how your team works</span>, not just what it knows',
    lead: 'Generic courses raise curiosity; transformation requires context, practice and follow-through. We turn access to AI into practical capability, habits and responsible adoption.',
    pains: [
      'The team has access to AI but does not use it with judgement or confidence.',
      'Previous training ended when the session ended.',
      'Leadership and teams lack a shared language about AI.',
      'No one sustains adoption once the initial enthusiasm fades.',
    ],
    approach: [
      { title: 'Role-based training', text: 'Learning paths and exercises built on the company’s real processes, not generic examples.' },
      { title: 'AI Champions', text: 'An internal network of champions that accelerates adoption, feedback and continuous improvement.' },
      { title: 'Change management', text: 'Support so the new way of working holds — and is measured — over time.' },
    ],
    relatedPillar: { name: 'Enablement & Adoption', href: '/en/servicios/enablement-adoption' },
  },
  {
    slug: 'gobierno-de-ia',
    metaTitle: 'AI governance and trust for companies',
    metaDescription:
      'Practical rules for using AI with security, accountability and trust: policies, roles, risks and controls. Governance is designed from the start, not added at the end.',
    eyebrow: 'AI governance',
    h1: 'Innovate with AI <span class="em">without compromising</span> your information or your reputation',
    lead: 'Sustainable adoption requires that employees and leadership know what can be done, who decides and how information is protected. Trust is designed; it is not added at the end.',
    pains: [
      'Security and confidentiality are a concern when using AI with company data.',
      'There are no clear rules on which uses are allowed and who approves them.',
      'There is no control over vendors, models and access.',
      'Leadership worries about reputational or compliance risk.',
    ],
    approach: [
      { title: 'AI policy and roles', text: 'What can be done, who decides and how uses are approved, with clear roles.' },
      { title: 'Risk matrix and controls', text: 'Risk classification, vendor control and an implementation checklist.' },
      { title: 'Responsible use and training', text: 'A catalogue of permitted uses and conduct training for the whole organisation.' },
    ],
    relatedPillar: { name: 'Fractional Leadership', href: '/en/servicios/fractional-leadership' },
  },
];

export const solutionsByLocale = { es: solutionsEs, en: solutionsEn } as const;
export const getSolutions = (locale: 'es' | 'en' = 'es') => solutionsByLocale[locale];
export const getSolutionBy = (locale: 'es' | 'en', slug: string) => solutionsByLocale[locale].find((s) => s.slug === slug);
// Compatibilidad:
export const solutions = solutionsEs;
export const getSolution = (slug: string) => solutionsEs.find((s) => s.slug === slug);
