/** Método COGNI — el activo narrativo y operativo central de Cogniplex. */
export interface CogniStep {
  letter: string;
  name: string;
  short: string;
  description: string;
}

export const cogniSteps: CogniStep[] = [
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
