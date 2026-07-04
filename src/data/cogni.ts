/**
 * Método COGNI — el activo narrativo y operativo central de Cogniplex.
 * En la web el método se descubre (no se anuncia por su nombre): las letras
 * C·O·G·N·I aparecen como elemento visual de las cinco etapas.
 */
import type { Locale } from '@/i18n';

export interface CogniStep {
  letter: string;
  name: string;
  short: string;
  description: string;
}

const es: CogniStep[] = [
  {
    letter: 'C',
    name: 'Comprender',
    short: 'Entender la realidad operativa antes de diseñar soluciones.',
    description:
      'Analizamos objetivos, procesos, personas, sistemas, datos, restricciones, riesgos y puntos de dolor. El resultado es una lectura compartida de dónde existe valor y qué no conviene hacer todavía.',
  },
  {
    letter: 'O',
    name: 'Organizar',
    short: 'Convertir la comprensión en prioridades y arquitectura.',
    description:
      'Definimos el roadmap, los casos de uso, las decisiones de diseño, el gobierno, los responsables, los datos críticos y los indicadores que dirán si la transformación funciona.',
  },
  {
    letter: 'G',
    name: 'Generar',
    short: 'Construir las capacidades necesarias con valor visible pronto.',
    description:
      'Automatización, asistentes, agentes, plataformas de conocimiento, integraciones, datos y reporting. La prioridad es entregar valor pronto, manteniendo seguridad y calidad.',
  },
  {
    letter: 'N',
    name: 'Normalizar',
    short: 'Integrar la nueva capacidad en el trabajo diario.',
    description:
      'Formamos equipos, ajustamos procedimientos, definimos roles y habilitamos champions. Una solución no se considera implantada hasta que se usa con calidad y confianza.',
  },
  {
    letter: 'I',
    name: 'Impulsar',
    short: 'Medir, aprender y ampliar en ciclos de mejora continua.',
    description:
      'Revisamos KPIs, costes, adopción, calidad y oportunidades emergentes. Cada ciclo genera un backlog mejor priorizado y una empresa más preparada para el siguiente cambio.',
  },
];

/**
 * Versión inglesa: se conservan las letras C·O·G·N·I (marca registrada del
 * método) con nombres ingleses que respetan cada inicial.
 */
const en: CogniStep[] = [
  {
    letter: 'C',
    name: 'Comprehend',
    short: 'Understand the operating reality before designing solutions.',
    description:
      'We analyse goals, processes, people, systems, data, constraints, risks and pain points. The result is a shared reading of where value exists and what is not worth doing yet.',
  },
  {
    letter: 'O',
    name: 'Organise',
    short: 'Turn understanding into priorities and architecture.',
    description:
      'We define the roadmap, the use cases, the design decisions, the governance, the owners, the critical data and the indicators that will tell whether the transformation is working.',
  },
  {
    letter: 'G',
    name: 'Generate',
    short: 'Build the capabilities needed, with value visible early.',
    description:
      'Automation, assistants, agents, knowledge platforms, integrations, data and reporting. The priority is to deliver value early while maintaining security and quality.',
  },
  {
    letter: 'N',
    name: 'Normalise',
    short: 'Integrate the new capability into daily work.',
    description:
      'We train teams, adjust procedures, define roles and enable champions. A solution is not considered implemented until it is used with quality and confidence.',
  },
  {
    letter: 'I',
    name: 'Improve',
    short: 'Measure, learn and expand in continuous improvement cycles.',
    description:
      'We review KPIs, costs, adoption, quality and emerging opportunities. Each cycle produces a better-prioritised backlog and a company more prepared for the next change.',
  },
];

export const cogniByLocale = { es, en } as const;
export const cogniFor = (locale: Locale = 'es') => cogniByLocale[locale];

/** Compatibilidad con imports existentes (español). */
export const cogniSteps = es;
