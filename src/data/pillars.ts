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

export const pillars: Pillar[] = [
  {
    slug: 'fractional-leadership',
    order: 1,
    name: 'Fractional Leadership',
    kicker: 'Executive Advisory',
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
    name: 'Strategy & Design',
    kicker: 'Estrategia y diseño',
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
    name: 'Build & Transform',
    kicker: 'Construcción y transformación',
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
    name: 'Enablement & Adoption',
    kicker: 'Capacitación y adopción',
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
    name: 'Managed & Evolve',
    kicker: 'Operación y evolución',
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

export const getPillar = (slug: string) => pillars.find((p) => p.slug === slug);
