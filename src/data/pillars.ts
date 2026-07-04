/**
 * Portfolio en 5 pilares (Handbook v3). No es un catálogo plano: es un recorrido
 * que acompaña al cliente desde comprender el problema hasta la mejora continua.
 */
export interface Service {
  code: string;
  name: string;
  promise: string;
  buyer: string;
  deliverables: string;
  model: string;
}

export interface Pillar {
  slug: string;
  order: number;
  name: string;
  kicker: string; // nombre interno del pilar en el handbook
  objective: string;
  intro: string;
  entryLabel: string;
  services: Service[];
}

const pillarsEs: Pillar[] = [
  {
    slug: 'fractional-leadership',
    order: 1,
    name: 'Dirección Fractional',
    kicker: 'Fractional Leadership',
    objective: 'Aportar dirección y gobierno de IA cuando aún no puedes justificar una estructura interna completa.',
    intro:
      'Dirección senior a tiempo parcial que convierte la IA en una agenda de negocio priorizada, gobernada y con seguimiento de valor. La responsabilidad de resultados permanece siempre en Cogniplex.',
    entryLabel: 'Explorar liderazgo externo',
    services: [
      {
        code: 'A1',
        name: 'Fractional CAIO',
        promise: 'Una figura responsable de convertir la IA en una agenda de negocio priorizada y gobernada.',
        buyer: 'CEO, propietario, dirección general o comité de dirección.',
        deliverables: 'Roadmap trimestral, comité de IA, cartera priorizada, principios de gobierno, tablero de valor y plan de adopción.',
        model: 'Retainer mensual con cadencia ejecutiva.',
      },
      {
        code: 'A2',
        name: 'Fractional CDO',
        promise: 'Convertir datos dispersos en una capacidad confiable para operar y decidir.',
        buyer: 'CEO, CFO, COO, dirección de operaciones o financiera.',
        deliverables: 'Mapa de datos críticos, ownership, criterios de calidad, hoja de ruta y plan de arquitectura.',
        model: 'Retainer mensual o programa de 6 a 12 meses.',
      },
      {
        code: 'A3',
        name: 'AI Value Office',
        promise: 'Operar una cartera viva de oportunidades de IA con disciplina de valor.',
        buyer: 'CAIO, CEO, COO, CFO o PMO.',
        deliverables: 'Backlog priorizado, matriz impacto-esfuerzo, fichas de caso, tablero de valor y revisión trimestral.',
        model: 'Suscripción mensual, normalmente conectada al Fractional CAIO.',
      },
      {
        code: 'A4',
        name: 'AI Governance & Trust',
        promise: 'Reglas prácticas para usar IA con seguridad, responsabilidad y confianza.',
        buyer: 'Dirección, legal, seguridad, IT, RRHH y negocio.',
        deliverables: 'Política de IA, matriz de riesgos, checklist de implantación, catálogo de usos y roles de decisión.',
        model: 'Proyecto inicial + revisión periódica.',
      },
    ],
  },
  {
    slug: 'strategy-design',
    order: 2,
    name: 'Estrategia y Diseño',
    kicker: 'Strategy & Design',
    objective: 'Definir qué transformar, con qué prioridades y con qué arquitectura.',
    intro:
      'Antes de construir, decidimos dónde está el valor. Aquí vive el Diagnóstico Empresa Aumentada, el punto de entrada que convierte la incertidumbre en prioridades y una hoja de ruta.',
    entryLabel: 'Empezar por el diagnóstico',
    services: [
      {
        code: 'S1',
        name: 'Diagnóstico Empresa Aumentada',
        promise: 'Identificar dónde la IA, los datos y la automatización generan valor de negocio de forma viable.',
        buyer: 'CEO, gerente, propietario, COO o dirección funcional.',
        deliverables: 'Mapa de oportunidades, evaluación de madurez, matriz impacto-esfuerzo, casos priorizados, hipótesis de ROI y roadmap de 90-180 días.',
        model: 'Proyecto de alcance cerrado. Es el punto de entrada recomendado.',
      },
      {
        code: 'S2',
        name: 'AI Operating System Design',
        promise: 'Diseñar cómo opera la empresa cuando personas, datos, automatización y agentes colaboran.',
        buyer: 'CEO, COO, CAIO, CIO, dirección de transformación.',
        deliverables: 'Mapa de procesos objetivo, arquitectura funcional, diseño de roles, blueprint de agentes y modelo de gobierno.',
        model: 'Proyecto estratégico por fases.',
      },
      {
        code: 'S3',
        name: 'Estrategia de dato',
        promise: 'Definir datos confiables, semántica compartida y decisiones accionables.',
        buyer: 'CDO, CFO, COO, control de gestión.',
        deliverables: 'Prioridades analíticas, modelo de gobierno del dato, casos de decisión y hoja de ruta.',
        model: 'Proyecto o componente del Fractional CDO.',
      },
      {
        code: 'S4',
        name: 'Knowledge Engineering',
        promise: 'Capturar conocimiento tácito y convertirlo en un activo reutilizable, accesible y gobernado.',
        buyer: 'Operaciones, calidad, RRHH, servicio técnico, ventas o ingeniería.',
        deliverables: 'Inventario de conocimiento, modelo semántico, playbooks, repositorio estructurado y asistentes internos.',
        model: 'Proyecto + managed service de evolución.',
      },
    ],
  },
  {
    slug: 'build-transform',
    order: 3,
    name: 'Construcción y Transformación',
    kicker: 'Build & Transform',
    objective: 'Materializar mejoras de proceso, dato, conocimiento y experiencia.',
    intro:
      'Rediseñamos e implantamos procesos de extremo a extremo con automatización, asistentes, agentes y sistemas de decisión. La tecnología se integra en el trabajo real, no se queda en una demo.',
    entryLabel: 'Explorar un caso de uso',
    services: [
      {
        code: 'T1',
        name: 'Transformación de procesos y soluciones IA',
        promise: 'Rediseñar e implantar procesos con automatización, asistentes, agentes y sistemas de decisión.',
        buyer: 'Responsables de función, COO, dirección comercial, finanzas, operaciones o ingeniería.',
        deliverables: 'Proceso objetivo, solución implantada, manual operativo, formación, métricas de uso y backlog evolutivo.',
        model: 'Proyecto por fases y sprints con hitos de valor.',
      },
      {
        code: 'T2',
        name: 'Automatización inteligente e integración',
        promise: 'Eliminar fricción de extremo a extremo conectando sistemas, datos y reglas de negocio.',
        buyer: 'COO, IT, responsables de operaciones y administración.',
        deliverables: 'Flujos automatizados, conectores con ERP/CRM, reglas, controles de calidad y pruebas.',
        model: 'Proyecto por fases.',
      },
      {
        code: 'T3',
        name: 'Agentes y asistentes con RAG',
        promise: 'Asistentes que responden con el conocimiento y los datos de tu empresa, dentro de tus reglas.',
        buyer: 'Dirección funcional, atención al cliente, ventas, servicio técnico.',
        deliverables: 'Asistentes integrados, base de conocimiento gobernada, controles de uso y medición de adopción.',
        model: 'Proyecto + managed service.',
      },
    ],
  },
  {
    slug: 'enablement-adoption',
    order: 4,
    name: 'Capacitación y Adopción',
    kicker: 'Enablement & Adoption',
    objective: 'Conseguir que las personas usen y multipliquen el valor de la IA.',
    intro:
      'Convertimos el acceso a la IA en capacidad práctica, hábitos de trabajo y adopción responsable. Personas aumentadas, no personas desplazadas.',
    entryLabel: 'Diseñar una ruta de adopción',
    services: [
      {
        code: 'E1',
        name: 'Formación Transformativa en IA',
        promise: 'Convertir acceso a IA en capacidad práctica, hábitos de trabajo y adopción responsable.',
        buyer: 'Dirección, RRHH, managers y equipos funcionales.',
        deliverables: 'Ruta por colectivos, materiales propios, ejercicios sobre procesos reales, kit de prompts y métricas.',
        model: 'Programa por cohortes + acompañamiento de 60-90 días.',
      },
      {
        code: 'E2',
        name: 'AI Champions Program',
        promise: 'Crear una red interna de referentes que acelere adopción, feedback y mejora continua.',
        buyer: 'RRHH, CAIO, CIO, COO y líderes funcionales.',
        deliverables: 'Perfil de champions, itinerario, ritual mensual, repositorio de casos y plan de comunicación interna.',
        model: 'Programa de 4 a 9 meses.',
      },
      {
        code: 'E3',
        name: 'Gestión del cambio',
        promise: 'Acompañar a la organización para que la nueva forma de trabajar se sostenga en el tiempo.',
        buyer: 'Dirección, RRHH y líderes de equipo.',
        deliverables: 'Plan de cambio, comunicación, resolución de resistencias y métricas de adopción.',
        model: 'Integrado en proyectos y programas.',
      },
    ],
  },
  {
    slug: 'managed-evolve',
    order: 5,
    name: 'Operación y Evolución',
    kicker: 'Managed & Evolve',
    objective: 'Operar, mejorar y escalar lo construido para que el valor no se evapore.',
    intro:
      'La IA y los procesos cambian. Sin operación continua, las soluciones se degradan. Mantenemos, medimos y hacemos evolucionar lo implantado como un mecanismo de mejora de negocio.',
    entryLabel: 'Sostener el valor en el tiempo',
    services: [
      {
        code: 'M1',
        name: 'Managed AI & Evolution',
        promise: 'Operar, mantener y mejorar las soluciones para que sigan siendo útiles, seguras y alineadas.',
        buyer: 'CAIO, CIO, COO, responsable funcional o dirección de transformación.',
        deliverables: 'SLA, tablero de salud, revisión de calidad, informes de uso, releases y sesiones de valor.',
        model: 'Suscripción mensual con niveles de servicio.',
      },
      {
        code: 'M2',
        name: 'Mantenimiento evolutivo de soluciones',
        promise: 'Asegurar continuidad, correcciones, mejoras e integración de las soluciones desarrolladas.',
        buyer: 'CIO, CAIO, responsable de producto, dirección funcional.',
        deliverables: 'Backlog, plan de releases, documentación, pruebas y reporte de actividad.',
        model: 'Bolsa de capacidad o retainer mensual.',
      },
      {
        code: 'M3',
        name: 'Data & Decision Operations',
        promise: 'Mantener confiables los datos y los sistemas de decisión que soportan la operación.',
        buyer: 'CDO, CFO, COO, control de gestión.',
        deliverables: 'Catálogo de KPI, reglas de calidad, alertas, tablero ejecutivo y plan de remediación.',
        model: 'Retainer mensual o componente del Fractional CDO.',
      },
    ],
  },
];

const pillarsEn: Pillar[] = [
  {
    slug: 'fractional-leadership',
    order: 1,
    name: 'Fractional Leadership',
    kicker: 'Executive Advisory',
    objective: 'Provide AI direction and governance before a full in-house structure is justifiable.',
    intro:
      'Part-time senior leadership that turns AI into a prioritised, governed business agenda with value tracking. Accountability for outcomes always stays with Cogniplex.',
    entryLabel: 'Explore external leadership',
    services: [
      {
        code: 'A1',
        name: 'Fractional CAIO',
        promise: 'A single accountable figure who turns AI into a prioritised, governed business agenda.',
        buyer: 'CEO, owner, general management or executive committee.',
        deliverables: 'Quarterly roadmap, AI committee, prioritised portfolio, governance principles, value dashboard and adoption plan.',
        model: 'Monthly retainer with an executive cadence.',
      },
      {
        code: 'A2',
        name: 'Fractional CDO',
        promise: 'Turn scattered data into a reliable capability for operating and deciding.',
        buyer: 'CEO, CFO, COO, operations or finance leadership.',
        deliverables: 'Critical data map, ownership, quality criteria, roadmap and architecture plan.',
        model: 'Monthly retainer or a 6-to-12-month programme.',
      },
      {
        code: 'A3',
        name: 'AI Value Office',
        promise: 'Run a living portfolio of AI opportunities with value discipline.',
        buyer: 'CAIO, CEO, COO, CFO or PMO.',
        deliverables: 'Prioritised backlog, impact-effort matrix, case briefs, value dashboard and quarterly review.',
        model: 'Monthly subscription, usually paired with the Fractional CAIO.',
      },
      {
        code: 'A4',
        name: 'AI Governance & Trust',
        promise: 'Practical rules for using AI with security, accountability and trust.',
        buyer: 'Leadership, legal, security, IT, HR and business teams.',
        deliverables: 'AI policy, risk matrix, implementation checklist, use-case catalogue and decision roles.',
        model: 'Initial project + periodic review.',
      },
    ],
  },
  {
    slug: 'strategy-design',
    order: 2,
    name: 'Strategy & Design',
    kicker: 'Strategy & Design',
    objective: 'Define what to transform, with which priorities and which architecture.',
    intro:
      'Before we build, we decide where the value is. This is home to the Augmented Company Assessment, the entry point that turns uncertainty into priorities and a roadmap.',
    entryLabel: 'Start with the assessment',
    services: [
      {
        code: 'S1',
        name: 'Augmented Company Assessment',
        promise: 'Identify where AI, data and automation generate business value in a viable way.',
        buyer: 'CEO, managing director, owner, COO or functional leadership.',
        deliverables: 'Opportunity map, maturity assessment, impact-effort matrix, prioritised cases, ROI hypotheses and a 90-180-day roadmap.',
        model: 'Fixed-scope project. The recommended entry point.',
      },
      {
        code: 'S2',
        name: 'AI Operating System Design',
        promise: 'Design how the company operates when people, data, automation and agents work together.',
        buyer: 'CEO, COO, CAIO, CIO, transformation leadership.',
        deliverables: 'Target process map, functional architecture, role design, agent blueprint and governance model.',
        model: 'Phased strategic project.',
      },
      {
        code: 'S3',
        name: 'Data Strategy',
        promise: 'Define reliable data, shared semantics and actionable decisions.',
        buyer: 'CDO, CFO, COO, management control.',
        deliverables: 'Analytics priorities, data governance model, decision cases and roadmap.',
        model: 'Standalone project or a component of the Fractional CDO.',
      },
      {
        code: 'S4',
        name: 'Knowledge Engineering',
        promise: 'Capture tacit knowledge and turn it into a reusable, accessible, governed asset.',
        buyer: 'Operations, quality, HR, technical service, sales or engineering.',
        deliverables: 'Knowledge inventory, semantic model, playbooks, structured repository and internal assistants.',
        model: 'Project + managed evolution service.',
      },
    ],
  },
  {
    slug: 'build-transform',
    order: 3,
    name: 'Build & Transform',
    kicker: 'Build & Transform',
    objective: 'Deliver tangible improvements in processes, data, knowledge and experience.',
    intro:
      'We redesign and implement end-to-end processes with automation, assistants, agents and decision systems. The technology becomes part of real work — it does not stay a demo.',
    entryLabel: 'Explore a use case',
    services: [
      {
        code: 'T1',
        name: 'Process Transformation & AI Solutions',
        promise: 'Redesign and implement processes with automation, assistants, agents and decision systems.',
        buyer: 'Function leads, COO, commercial, finance, operations or engineering leadership.',
        deliverables: 'Target process, implemented solution, operating manual, training, usage metrics and evolution backlog.',
        model: 'Phased project delivered in sprints with value milestones.',
      },
      {
        code: 'T2',
        name: 'Intelligent Automation & Integration',
        promise: 'Remove end-to-end friction by connecting systems, data and business rules.',
        buyer: 'COO, IT, operations and administration leads.',
        deliverables: 'Automated workflows, ERP/CRM connectors, rules, quality controls and testing.',
        model: 'Phased project.',
      },
      {
        code: 'T3',
        name: 'RAG Agents & Assistants',
        promise: 'Assistants that answer with your company’s knowledge and data, within your rules.',
        buyer: 'Functional leadership, customer service, sales, technical service.',
        deliverables: 'Integrated assistants, governed knowledge base, usage controls and adoption measurement.',
        model: 'Project + managed service.',
      },
    ],
  },
  {
    slug: 'enablement-adoption',
    order: 4,
    name: 'Enablement & Adoption',
    kicker: 'Enablement & Adoption',
    objective: 'Get people to use AI — and multiply its value.',
    intro:
      'We turn access to AI into practical capability, working habits and responsible adoption. Augmented people, not displaced people.',
    entryLabel: 'Design an adoption path',
    services: [
      {
        code: 'E1',
        name: 'Transformative AI Training',
        promise: 'Turn access to AI into practical capability, working habits and responsible adoption.',
        buyer: 'Leadership, HR, managers and functional teams.',
        deliverables: 'Role-based learning paths, proprietary materials, exercises on real processes, prompt kit and metrics.',
        model: 'Cohort-based programme + 60-90 days of follow-up support.',
      },
      {
        code: 'E2',
        name: 'AI Champions Program',
        promise: 'Build an internal network of champions that accelerates adoption, feedback and continuous improvement.',
        buyer: 'HR, CAIO, CIO, COO and functional leaders.',
        deliverables: 'Champion profile, learning itinerary, monthly ritual, case repository and internal communication plan.',
        model: '4-to-9-month programme.',
      },
      {
        code: 'E3',
        name: 'Change Management',
        promise: 'Support the organisation so the new way of working holds over time.',
        buyer: 'Leadership, HR and team leads.',
        deliverables: 'Change plan, communication, resistance resolution and adoption metrics.',
        model: 'Embedded in projects and programmes.',
      },
    ],
  },
  {
    slug: 'managed-evolve',
    order: 5,
    name: 'Managed & Evolve',
    kicker: 'Managed & Evolve',
    objective: 'Operate, improve and scale what has been built so the value does not evaporate.',
    intro:
      'AI and processes change. Without continuous operation, solutions degrade. We maintain, measure and evolve what has been implemented as a business improvement mechanism.',
    entryLabel: 'Sustain value over time',
    services: [
      {
        code: 'M1',
        name: 'Managed AI & Evolution',
        promise: 'Operate, maintain and improve solutions so they stay useful, secure and aligned.',
        buyer: 'CAIO, CIO, COO, function lead or transformation leadership.',
        deliverables: 'SLA, health dashboard, quality review, usage reports, releases and value sessions.',
        model: 'Monthly subscription with service levels.',
      },
      {
        code: 'M2',
        name: 'Evolutionary Solution Maintenance',
        promise: 'Ensure continuity, fixes, improvements and integration of the solutions delivered.',
        buyer: 'CIO, CAIO, product lead, functional leadership.',
        deliverables: 'Backlog, release plan, documentation, testing and activity reporting.',
        model: 'Capacity pool or monthly retainer.',
      },
      {
        code: 'M3',
        name: 'Data & Decision Operations',
        promise: 'Keep the data and decision systems that support the operation reliable.',
        buyer: 'CDO, CFO, COO, management control.',
        deliverables: 'KPI catalogue, quality rules, alerts, executive dashboard and remediation plan.',
        model: 'Monthly retainer or a component of the Fractional CDO.',
      },
    ],
  },
];

export const pillarsByLocale = { es: pillarsEs, en: pillarsEn } as const;
export type Locale = 'es' | 'en';
export const getPillars = (locale: Locale = 'es') => pillarsByLocale[locale];
export const getPillarBy = (locale: Locale, slug: string) => pillarsByLocale[locale].find((p) => p.slug === slug);
// Compatibilidad con imports existentes:
export const pillars = pillarsEs;
export const getPillar = (slug: string) => pillarsEs.find((p) => p.slug === slug);
