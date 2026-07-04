/** Datos de contenido transversales (tensión, resultados por área, FAQ, pruebas). */

/** Bloque de tensión del home: lo que sienten a la vez muchas pymes. */
export const tensionPoints = [
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
];

/** Resultados por área — qué cambia en cada parte de la empresa. */
export const resultsByArea = [
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
];

/** Qué compra realmente el cliente. */
export const outcomes = [
  { name: 'Capacidad', text: 'Hacer más con la misma estructura o liberar tiempo para trabajo de mayor valor.' },
  { name: 'Control', text: 'Ver y entender mejor la realidad del negocio, con datos fiables y trazabilidad.' },
  { name: 'Velocidad', text: 'Reducir el tiempo entre una necesidad y una respuesta de calidad.' },
  { name: 'Aprendizaje', text: 'Convertir el conocimiento individual en un activo reutilizable de empresa.' },
];

/** El recorrido de servicios (flywheel). */
export const journey = [
  { step: 'Diagnosticar', pillar: 'Strategy & Design', href: '/servicios/strategy-design' },
  { step: 'Liderar', pillar: 'Fractional Leadership', href: '/servicios/fractional-leadership' },
  { step: 'Transformar', pillar: 'Build & Transform', href: '/servicios/build-transform' },
  { step: 'Adoptar', pillar: 'Enablement & Adoption', href: '/servicios/enablement-adoption' },
  { step: 'Evolucionar', pillar: 'Managed & Evolve', href: '/servicios/managed-evolve' },
];

/** FAQ de negocio (objeciones frecuentes reencuadradas hacia el negocio). */
export const faqHome = [
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
];

/**
 * Pruebas y credibilidad.
 * Contexto de mercado con fuentes públicas verificables + ejemplo ilustrativo.
 * Cuando existan métricas de clientes reales, añadirlas aquí y destacarlas sobre las de mercado.
 */
export const marketProof = [
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
];
