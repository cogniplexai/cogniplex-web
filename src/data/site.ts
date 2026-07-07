/** Datos de contenido transversales (tensión, resultados por área, FAQ, pruebas), por idioma. */
import type { Locale } from '@/i18n';

const es = {
  /** Bloque de tensión del home: lo que sienten a la vez muchas pymes. */
  tensionPoints: [
    {
      title: 'Presión por crecer',
      text: 'El negocio pide más, pero crecer parece exigir contratar más y añadir estructura.',
    },
    {
      title: 'Complejidad que se acumula',
      text: 'Más clientes, más sistemas, más información dispersa y más cosas que coordinar.',
    },
    {
      title: 'Falta de tiempo directivo',
      text: 'El día a día se come las horas que harían falta para mejorar procesos y decidir mejor.',
    },
    {
      title: 'Presión sobre las personas',
      text: 'Tareas repetitivas y dependencia de personas clave sobrecargan al equipo.',
    },
  ],

  /** Resultados por área — qué cambia en cada parte de la empresa. */
  resultsByArea: [
    {
      area: 'Dirección',
      text: 'Prioridades claras, decisiones más rápidas y una cartera de iniciativas de IA gobernada por valor.',
    },
    {
      area: 'Comercial',
      text: 'Más propuestas, mejores y más rápidas, incorporando el know-how de la empresa sin perder criterio.',
    },
    {
      area: 'Operaciones',
      text: 'Procesos más cortos, menos fricción de extremo a extremo y menos trabajo repetitivo.',
    },
    {
      area: 'Finanzas',
      text: 'Información de gestión fiable a tiempo: márgenes reales, desviaciones y alertas tempranas.',
    },
    {
      area: 'Conocimiento',
      text: 'El conocimiento crítico deja de vivir solo en personas clave y pasa a ser un activo de empresa.',
    },
  ],

  /** Qué compra realmente el cliente. */
  outcomes: [
    { name: 'Capacidad', text: 'Hacer más con la misma estructura o liberar tiempo para trabajo de mayor valor.' },
    { name: 'Control', text: 'Ver y entender mejor la realidad del negocio, con datos fiables y trazabilidad.' },
    { name: 'Velocidad', text: 'Reducir el tiempo entre una necesidad y una respuesta de calidad.' },
    { name: 'Aprendizaje', text: 'Convertir el conocimiento individual en un activo reutilizable de empresa.' },
  ],

  /** El recorrido de servicios (flywheel). */
  journey: [
    { step: 'Diagnosticar', pillar: 'Estrategia y Diseño', href: '/servicios/strategy-design' },
    { step: 'Liderar', pillar: 'Liderazgo Fraccional', href: '/servicios/fractional-leadership' },
    { step: 'Transformar', pillar: 'Implementación y Transformación', href: '/servicios/build-transform' },
    { step: 'Adoptar', pillar: 'Capacitación y Adopción', href: '/servicios/enablement-adoption' },
    { step: 'Evolucionar', pillar: 'Operación y Evolución', href: '/servicios/managed-evolve' },
  ],

  /** FAQ de negocio (objeciones frecuentes reencuadradas hacia el negocio). */
  faqHome: [
    {
      q: '“No sabemos por dónde empezar.”',
      a: 'Precisamente para eso existe el Diagnóstico Empresa Aumentada: convierte la incertidumbre en prioridades y una hoja de ruta accionable en 90-180 días.',
    },
    {
      q: '“No tenemos suficientes datos.”',
      a: 'No todo empieza por un lago de datos. Se empieza por un proceso, una decisión y los datos mínimos necesarios para mejorarlos.',
    },
    {
      q: '“Ya usamos ChatGPT.”',
      a: 'El uso individual es un buen punto de partida. La transformación aparece cuando se rediseñan procesos, conocimiento, gobierno y adopción.',
    },
    {
      q: '“No podemos contratar un equipo de IA.”',
      a: 'El modelo Fractional te da acceso a dirección senior (CAIO, CDO) sin asumir una estructura completa desde el inicio.',
    },
    {
      q: '“Nos preocupa la seguridad y la confianza.”',
      a: 'La confianza se diseña: definimos usos, datos, roles, controles, proveedores y formación antes de escalar. El gobierno no se añade al final.',
    },
    {
      q: '“¿La IA va a sustituir a mi equipo?”',
      a: 'No. Trabajamos con personas aumentadas, no desplazadas: liberamos al equipo de lo repetitivo para que dedique tiempo a lo que aporta valor.',
    },
    {
      q: '“¿Quién ejecuta los proyectos?”',
      a: 'Un núcleo estable que custodia el método y la relación contigo, y una red curada de especialistas que aporta profundidad. Para cada proyecto componemos el equipo exacto que necesitas; la responsabilidad de resultados es siempre de Cogniplex.',
    },
  ],

  /**
   * Pruebas y credibilidad.
   * Contexto de mercado con fuentes públicas verificables + ejemplo ilustrativo.
   * Cuando existan métricas de clientes reales, añadirlas aquí y destacarlas sobre las de mercado.
   */
  marketProof: [
    {
      stat: 'La IA generativa podría automatizar tareas que hoy ocupan entre el 60 % y el 70 % del tiempo de trabajo.',
      source: 'McKinsey · The economic potential of generative AI, 2023',
    },
    {
      stat: 'El objetivo europeo es que el 75 % de las empresas usen IA, cloud o big data en 2030.',
      source: 'Comisión Europea · Década Digital',
    },
    {
      stat: 'La mayoría de las empresas europeas aún no ha incorporado la IA a su operativa: la ventaja está en moverse antes y mejor.',
      source: 'Eurostat · Uso de IA en empresas de la UE',
    },
  ],
};

const en: typeof es = {
  tensionPoints: [
    {
      title: 'Pressure to grow',
      text: 'The business asks for more, but growing seems to require hiring more and adding structure.',
    },
    {
      title: 'Complexity that piles up',
      text: 'More customers, more systems, more scattered information and more things to coordinate.',
    },
    {
      title: 'No time at the top',
      text: 'Day-to-day operations eat up the hours it would take to improve processes and decide better.',
    },
    {
      title: 'Pressure on people',
      text: 'Repetitive tasks and dependence on key people overload the team.',
    },
  ],

  resultsByArea: [
    {
      area: 'Leadership',
      text: 'Clear priorities, faster decisions and a portfolio of AI initiatives governed by value.',
    },
    {
      area: 'Sales',
      text: 'More proposals, better and faster, embedding the company’s know-how without losing judgement.',
    },
    {
      area: 'Operations',
      text: 'Shorter processes, less end-to-end friction and less repetitive work.',
    },
    {
      area: 'Finance',
      text: 'Reliable management information on time: real margins, deviations and early warnings.',
    },
    {
      area: 'Knowledge',
      text: 'Critical knowledge stops living only in key people and becomes a company asset.',
    },
  ],

  outcomes: [
    { name: 'Capability', text: 'Do more with the same structure, or free up time for higher-value work.' },
    { name: 'Control', text: 'See and understand the reality of the business, with reliable data and traceability.' },
    { name: 'Speed', text: 'Shorten the time between a need and a quality response.' },
    { name: 'Learning', text: 'Turn individual knowledge into a reusable company asset.' },
  ],

  journey: [
    { step: 'Assess', pillar: 'Strategy & Design', href: '/en/servicios/strategy-design' },
    { step: 'Lead', pillar: 'Fractional Leadership', href: '/en/servicios/fractional-leadership' },
    { step: 'Transform', pillar: 'Build & Transform', href: '/en/servicios/build-transform' },
    { step: 'Adopt', pillar: 'Enablement & Adoption', href: '/en/servicios/enablement-adoption' },
    { step: 'Evolve', pillar: 'Managed & Evolve', href: '/en/servicios/managed-evolve' },
  ],

  faqHome: [
    {
      q: '“We don’t know where to start.”',
      a: 'That is exactly what the Augmented Company Assessment is for: it turns uncertainty into priorities and an actionable 90–180 day roadmap.',
    },
    {
      q: '“We don’t have enough data.”',
      a: 'Not everything starts with a data lake. You start with one process, one decision and the minimum data needed to improve them.',
    },
    {
      q: '“We already use ChatGPT.”',
      a: 'Individual use is a good starting point. Transformation appears when processes, knowledge, governance and adoption are redesigned.',
    },
    {
      q: '“We can’t hire an AI team.”',
      a: 'The fractional model gives you senior leadership (CAIO, CDO) without taking on a full structure from day one.',
    },
    {
      q: '“We worry about security and trust.”',
      a: 'Trust is designed: we define uses, data, roles, controls, vendors and training before scaling. Governance is not added at the end.',
    },
    {
      q: '“Will AI replace my team?”',
      a: 'No. We work with augmented people, not displaced ones: we free the team from repetitive work so they can spend time on what adds value.',
    },
    {
      q: '“Who delivers the projects?”',
      a: 'A stable core that safeguards the method and the relationship with you, and a curated network of specialists that brings depth. For each project we assemble exactly the team you need; responsibility for results always rests with Cogniplex.',
    },
  ],

  marketProof: [
    {
      stat: 'Generative AI could automate tasks that today take up 60–70% of working time.',
      source: 'McKinsey · The economic potential of generative AI, 2023',
    },
    {
      stat: 'The European target is for 75% of companies to use AI, cloud or big data by 2030.',
      source: 'European Commission · Digital Decade',
    },
    {
      stat: 'Most European companies have not yet brought AI into their operations: the advantage lies in moving earlier and better.',
      source: 'Eurostat · AI use in EU enterprises',
    },
  ],
};

export const siteByLocale = { es, en } as const;
export const siteFor = (locale: Locale = 'es') => siteByLocale[locale];

/** Compatibilidad con imports existentes (español). */
export const tensionPoints = es.tensionPoints;
export const resultsByArea = es.resultsByArea;
export const outcomes = es.outcomes;
export const journey = es.journey;
export const faqHome = es.faqHome;
export const marketProof = es.marketProof;
