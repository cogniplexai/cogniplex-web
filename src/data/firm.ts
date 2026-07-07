/**
 * Contenido de las páginas «Nuestra organización» y «Colabora», por idioma.
 * Fuente: Founder's Handbook v4 — el modelo Plex: nodos, células y misiones.
 * Toma elementos de Laloux (teal), Valve (mundo plano), Semler (transparencia
 * radical), Dee Hock (caórdico), la Holacracia (mecanismos, sin burocracia)
 * y la tribu (precedente propio del fundador).
 * Cifras internas (fórmulas salariales, porcentajes de pools, importes de
 * royalties) NO se publican; sí los compromisos diferenciales hacia la red.
 */
import type { Locale } from '@/i18n';

const es = {
  /** Corrientes de las que toma elementos el modelo Plex. */
  inspirations: [
    {
      name: 'Organizaciones Teal',
      author: 'Frederic Laloux — Reinventing Organizations',
      text: 'Auto-gestión, plenitud y propósito evolutivo; y el proceso de consejo como mecanismo de decisión distribuida.',
    },
    {
      name: 'El mundo plano',
      author: 'Valve — Manual para nuevos empleados',
      text: 'Equipos temporales que se autoforman por proyecto, perfiles en forma de T y evaluación entre pares, no jefes.',
    },
    {
      name: 'Transparencia radical',
      author: 'Ricardo Semler — Semco',
      text: 'Cuentas abiertas, formación para leerlas y participación en beneficios: la confianza se construye enseñando los números.',
    },
    {
      name: 'Organizaciones caórdicas',
      author: 'Dee Hock — fundador de VISA',
      text: 'El orden de diseño correcto: primero el propósito, después los principios y la estructura solo al final.',
    },
    {
      name: 'Holacracia',
      author: 'Brian Robertson',
      text: 'Sus mecanismos útiles —roles con ficha escrita, las tensiones como motor del cambio, gobernanza separada de operativa— sin su burocracia.',
    },
    {
      name: 'La tribu',
      author: 'Precedente propio del fundador',
      text: 'Los principios de trabajo de la unidad de Analítica e IA que dirigió el fundador, y el sentimiento tribal que los sostiene.',
    },
  ],

  /** Constitución: los siete principios que gobiernan cualquier estructura. */
  principles: [
    {
      title: 'El propósito manda',
      text: 'La organización existe para convertir empresas en empresas aumentadas, con calidad. Toda regla interna se evalúa contra ese propósito: cuando una regla estorba, se cambia la regla.',
    },
    {
      title: 'Transparencia por defecto',
      text: 'Cuentas, pipeline, criterios y decisiones son visibles para todo el núcleo. Solo es confidencial lo que protege a clientes o a terceros.',
    },
    {
      title: 'Quien detecta, lidera',
      text: 'Cualquier persona puede procesar una tensión —la distancia entre lo que es y lo que podría ser— e iniciar la decisión. Decide quien está más cerca del problema, no quien tiene el cargo.',
    },
    {
      title: 'Autoridad por credibilidad',
      text: 'Los roles de coordinación tienen ficha pública, se ganan por reconocimiento de pares, rotan y son revocables. Coordinar no es mandar.',
    },
    {
      title: 'El cliente, por encima de la preferencia',
      text: 'Cada persona opta a las misiones donde su aportación es mayor, pero la libertad de elegir termina donde empieza el compromiso aceptado con un cliente.',
    },
    {
      title: 'Células pequeñas',
      text: 'Ningún equipo estable supera las 8 personas; cuando crece, se divide. La organización escala añadiendo nodos y células, no capas.',
    },
    {
      title: 'Todo deja un activo',
      text: 'Cada misión debe mejorar el método, las plantillas o los aceleradores. La organización aprende, o no está funcionando.',
    },
  ],

  /** La tribu: principios de trabajo (selección para web). */
  tribe: [
    {
      title: 'Enfoque en valor',
      text: 'El objetivo es la satisfacción del cliente mediante entrega temprana y continua de valor, medida en el Value Scorecard.',
    },
    {
      title: 'Ritmo sostenible',
      text: 'Un ritmo constante que podemos mantener indefinidamente: un ingreso a costa de agotar a una persona es una pérdida, no un ingreso.',
    },
    {
      title: 'Progreso iterativo',
      text: 'Trabajo en secciones pequeñas con retroalimentación continua; cada fase termina en algo usable o en una decisión.',
    },
    {
      title: 'Simplicidad',
      text: 'Evitamos la complejidad accidental, también en la propia organización: cada regla nueva debe evitar un daño concreto o se retira.',
    },
    {
      title: 'Estrategia pull',
      text: 'Solo se inicia trabajo con demanda real confirmada y se termina lo empezado antes de abrir lo nuevo. Aplica también a la contratación.',
    },
    {
      title: 'Cultura blameless',
      text: 'Los errores se analizan para corregir sistemas, no para señalar personas. Sin esta pieza, la transparencia es imposible.',
    },
  ],

  /** Qué gana el cliente con este modelo. */
  clientBenefits: [
    {
      title: 'Equipo a medida',
      text: 'Para cada misión componemos exactamente el equipo que tu empresa necesita, con especialistas de primer nivel.',
    },
    {
      title: 'Sin pirámide de costes',
      text: 'No pagas estructura ociosa ni juniors facturados como seniors: pagas capacidad real aplicada a tu reto.',
    },
    {
      title: 'Un único responsable',
      text: 'La relación, el método y la responsabilidad de resultados permanecen siempre en Cogniplex.',
    },
    {
      title: 'Coherencia',
      text: 'Operamos como lo que ayudamos a construir: una organización que crece sin multiplicar su estructura.',
    },
  ],

  /** Propuesta de valor para la red de colaboradores. */
  networkValue: [
    {
      title: 'Tarifas transparentes, sobre mercado',
      text: 'La tarifa se calcula como la mediana de mercado freelance del rol por un multiplicador de nivel de maestría, con tabla pública. Se negocia el nivel, con evidencias — no el precio. Sin márgenes ocultos.',
    },
    {
      title: 'Reparto de valor por misión',
      text: 'Cada misión constituye un pool ligado al éxito medido en el Value Scorecard, repartido entre los colaboradores en proporción a sus honorarios: cobras por el éxito del cliente, no solo por días.',
    },
    {
      title: 'Royalties por reutilización',
      text: 'Si un activo tuyo entra en el catálogo y se reutiliza en otra misión, cobras un royalty cada vez. Construir IP es rentable para quien la crea.',
    },
    {
      title: 'Retainer de disponibilidad',
      text: 'Para perfiles clave con demanda recurrente detrás: un fijo mensual por capacidad reservada, además del trabajo real facturado.',
    },
    {
      title: 'Pago rápido',
      text: 'Facturas pagadas a 15 días naturales como máximo —7 para partners residentes—, frente a los 60-90 días habituales del sector.',
    },
    {
      title: 'Autoría y reputación compartidas',
      text: 'Coautoría de casos y activos, visibilidad pública y referencias: el prestigio también se reparte.',
    },
    {
      title: 'Elegir en qué trabajas',
      text: 'Las personas optan a las misiones donde su aportación es mayor: el compromiso nace de la elección, no de la asignación.',
    },
    {
      title: 'Relación de confianza',
      text: 'Acuerdos claros sobre confidencialidad, propiedad intelectual y calidad; la cultura va por delante del contrato.',
    },
  ],

  howItWorks: {
    heroEyebrow: 'Nuestra organización',
    heroTitle: 'Una organización <span class="em">plana y en red</span>, diseñada a propósito',
    heroLead:
      'Cogniplex no es una consultora con pirámide de socios, mánagers y juniors. Es un núcleo pequeño y una red curada de especialistas, coordinados por propósito y principios, no por un organigrama.',
    declaration:
      'Nuestro símbolo lo cuenta: nodos de distintos tamaños que, bien conectados, hacen más que la suma de sus partes. ',
    declarationEm:
      'Así se organiza también Cogniplex: nodos que se agrupan en células, sin centro de mando, alrededor de lo que cada misión necesita.',
    modelEyebrow: 'El modelo',
    modelTitle: 'El modelo Plex: un modelo propio',
    modelLead:
      'Lo llamamos modelo Plex, por coherencia con la marca: cada persona es un nodo, los nodos se agrupan en células por disciplina y el trabajo se hace en misiones — equipos temporales que se forman al arrancar un proyecto y se disuelven al cerrarlo. No seguimos ningún manual: el modelo combina lo mejor de varias corrientes contrastadas.',
    principlesEyebrow: 'La constitución',
    principlesTitle: 'Siete principios que gobiernan cualquier estructura',
    principlesLead:
      'Estos principios preceden a la estructura y solo cambian previa consulta a toda la organización.',
    tribeEyebrow: 'La tribu',
    tribeTitle: 'Cómo fluye el trabajo, día a día',
    tribeLead:
      'Sobre la constitución hay una segunda capa: los principios de trabajo de la tribu, sostenidos por tres sentimientos — pertenencia, interdependencia y colaboración.',
    coreEyebrow: 'Núcleo y red',
    coreTitle: 'Núcleo pequeño, red extensa',
    coreText1:
      'Por una decisión deliberada de foco, Cogniplex mantiene un núcleo mínimo y estable que custodia el propósito, el método COGNI, la relación con el cliente y la calidad. La ejecución se apoya en una red curada de freelances y colaboradores que aporta profundidad y capacidad.',
    coreText2:
      'Las células de capacidad —Advisory, Data & AI Architecture, Transformation Delivery, Enablement y Managed Services— mantienen estándares, artefactos y aceleradores, cada una con una persona guardiana rotatoria. Para cada misión se forma un equipo temporal con un mission lead elegido por el propio equipo. La responsabilidad de resultados permanece siempre en Cogniplex.',
    councilTitle: 'Cómo se decide: el proceso de consejo',
    councilText:
      'Cualquier nodo puede tomar cualquier decisión si antes consulta a quienes tienen experiencia relevante y a quienes se verán afectados. Consultar no es pedir permiso ni buscar consenso: la decisión sigue siendo de quien la impulsa, y una objeción solo bloquea si demuestra un daño concreto para la organización.',
    benefitsEyebrow: 'Qué significa para ti',
    benefitsTitle: 'Por qué este modelo beneficia a tu empresa',
    ctaEyebrow: '¿Te encaja este modelo?',
    ctaTitle: 'Trabajemos juntos',
    ctaLead:
      'Si diriges una empresa, empieza por el Diagnóstico Empresa Aumentada. Si eres especialista y quieres formar parte de la red, cuéntanoslo.',
    ctaJoin: 'Colabora con nosotros',
  },

  collaborate: {
    heroEyebrow: 'Colabora',
    heroTitle: 'Forma parte de la <span class="em">red Cogniplex</span>',
    heroLead:
      'Buscamos especialistas de primer nivel para colaborar por misiones como freelances en cartera — o, en algunos casos, para incorporarse al núcleo. Sin jerarquías, eligiendo en qué trabajas y con una retribución que trata a la red como lo que es: el activo de la organización.',
    valueEyebrow: 'La propuesta',
    valueTitle: 'Qué ofrecemos a la red',
    valueLead:
      'Reglas públicas y auditables, pensadas para que trabajar con Cogniplex sea objetivamente mejor que el estándar del sector.',
    profilesEyebrow: 'A quién buscamos',
    profilesTitle: 'Perfiles en forma de T, en cinco capacidades',
    profilesLead:
      'Personas con una especialidad profunda y capacidad de colaborar fuera de ella, que compartan estándares de trabajo y valores. No construimos una red indiscriminada: la curamos.',
    residentEyebrow: 'El recorrido',
    residentTitle: 'De la red al núcleo',
    residentText1:
      'La colaboración puede crecer. Los colaboradores con dedicación sostenida pueden convertirse, por invitación, en partners residentes: además del régimen general de la red, participan del reparto anual de beneficios prorrateado por dedicación, suelen contar con un retainer, tienen voz en las asambleas y prioridad en las misiones.',
    residentText2:
      'El partner residente es el banquillo natural del núcleo: quien opera como residente ya ha demostrado el encaje. Al núcleo solo se contrata cuando el negocio lo sostiene, con entrevista y conformidad de los propios pares — y cada incorporación debe subir la media de la organización en su disciplina.',
    formEyebrow: 'Expresa tu interés',
    formTitle: 'Cuéntanos quién eres',
    formLead:
      'Déjanos tus datos y hablamos. Sin procesos eternos: una conversación para ver si hay encaje de capacidades, estándares y cultura.',
    howWeWorkNote: '¿Quieres entender primero el modelo? Descubre',
    howWeWorkLink: 'nuestra organización',
    orgCta: 'Nuestra organización',
  },
} as const;

const en = {
  inspirations: [
    {
      name: 'Teal organisations',
      author: 'Frederic Laloux — Reinventing Organizations',
      text: 'Self-management, wholeness and evolutionary purpose; and the advice process as the mechanism for distributed decisions.',
    },
    {
      name: 'The flat world',
      author: 'Valve — Handbook for New Employees',
      text: 'Temporary teams that self-form around projects, T-shaped profiles and peer review instead of bosses.',
    },
    {
      name: 'Radical transparency',
      author: 'Ricardo Semler — Semco',
      text: 'Open books, training to read them and profit sharing: trust is built by showing the numbers.',
    },
    {
      name: 'Chaordic organisations',
      author: 'Dee Hock — founder of VISA',
      text: 'The right design order: purpose first, then principles, and structure only at the end.',
    },
    {
      name: 'Holacracy',
      author: 'Brian Robertson',
      text: 'Its useful mechanisms — written role charters, tensions as the trigger for change, governance separate from operations — without its bureaucracy.',
    },
    {
      name: 'The tribe',
      author: "The founder's own precedent",
      text: 'The working principles of the Analytics & AI unit the founder led, and the tribal feeling that sustains them.',
    },
  ],

  principles: [
    {
      title: 'Purpose rules',
      text: 'The organisation exists to turn companies into augmented companies, with quality. Every internal rule is tested against that purpose: when a rule gets in the way, the rule changes.',
    },
    {
      title: 'Transparency by default',
      text: 'Accounts, pipeline, criteria and decisions are visible to the whole core. Only what protects clients or third parties is confidential.',
    },
    {
      title: 'Whoever detects it, leads it',
      text: 'Anyone can process a tension — the gap between what is and what could be — and initiate the decision. Whoever is closest to the problem decides, not whoever holds a title.',
    },
    {
      title: 'Authority through credibility',
      text: 'Coordination roles have a public charter, are earned through peer recognition, rotate and are revocable. Coordinating is not commanding.',
    },
    {
      title: 'The client above personal preference',
      text: 'Each person opts into the missions where they contribute most, but the freedom to choose ends where an accepted commitment to a client begins.',
    },
    {
      title: 'Small cells',
      text: 'No stable team exceeds 8 people; when it grows, it splits. The organisation scales by adding nodes and cells, not layers.',
    },
    {
      title: 'Everything leaves an asset',
      text: 'Every mission must improve the method, the templates or the accelerators. The organisation learns, or it is not working.',
    },
  ],

  tribe: [
    {
      title: 'Focus on value',
      text: 'The goal is client satisfaction through early and continuous delivery of value, measured in the Value Scorecard.',
    },
    {
      title: 'Sustainable pace',
      text: 'A constant pace we can hold indefinitely: revenue at the cost of burning someone out is a loss, not revenue.',
    },
    {
      title: 'Iterative progress',
      text: 'Work in small slices with continuous feedback; every phase ends in something usable or a decision.',
    },
    {
      title: 'Simplicity',
      text: 'We avoid accidental complexity, including in the organisation itself: every new rule must prevent a concrete harm, or it is removed.',
    },
    {
      title: 'Pull strategy',
      text: 'Work only starts with confirmed real demand, and what is started gets finished before opening something new. This applies to hiring too.',
    },
    {
      title: 'Blameless culture',
      text: 'Mistakes are analysed to fix systems, not to point at people. Without this piece, transparency is impossible.',
    },
  ],

  clientBenefits: [
    {
      title: 'A team built to fit',
      text: 'For each mission we assemble exactly the team your company needs, with first-rate specialists.',
    },
    {
      title: 'No cost pyramid',
      text: 'You don’t pay for idle structure or juniors billed as seniors: you pay for real capability applied to your challenge.',
    },
    {
      title: 'One accountable partner',
      text: 'The relationship, the method and the responsibility for results always remain with Cogniplex.',
    },
    {
      title: 'Coherence',
      text: 'We operate as what we help build: an organisation that grows without multiplying its structure.',
    },
  ],

  networkValue: [
    {
      title: 'Transparent, above-market rates',
      text: 'Rates are set as the freelance market median for the role times a mastery-level multiplier, with a public table. You negotiate your level, with evidence — not the price. No hidden margins.',
    },
    {
      title: 'Value sharing per mission',
      text: 'Each mission builds a pool tied to success as measured in the Value Scorecard, shared among collaborators in proportion to their fees: you earn from the client’s success, not just from days.',
    },
    {
      title: 'Royalties for reuse',
      text: 'If an asset of yours enters the catalogue and is reused in another mission, you earn a royalty each time. Building IP pays off for whoever creates it.',
    },
    {
      title: 'Availability retainer',
      text: 'For key profiles with recurring demand behind them: a fixed monthly fee for reserved capacity, on top of the actual work billed.',
    },
    {
      title: 'Fast payment',
      text: 'Invoices paid within 15 calendar days at most — 7 for resident partners — versus the industry norm of 60-90 days.',
    },
    {
      title: 'Shared authorship and reputation',
      text: 'Co-authorship of cases and assets, public visibility and references: prestige is shared too.',
    },
    {
      title: 'Choosing what you work on',
      text: 'People opt into the missions where their contribution is greatest: commitment comes from choice, not assignment.',
    },
    {
      title: 'A relationship of trust',
      text: 'Clear agreements on confidentiality, IP and quality; culture comes before the contract.',
    },
  ],

  howItWorks: {
    heroEyebrow: 'Our organisation',
    heroTitle: 'A <span class="em">flat, networked</span> organisation — by design',
    heroLead:
      'Cogniplex is not a consultancy with a pyramid of partners, managers and juniors. It is a small core and a curated network of specialists, coordinated by purpose and principles, not by an org chart.',
    declaration:
      'Our symbol tells the story: nodes of different sizes that, well connected, do more than the sum of their parts. ',
    declarationEm:
      'Cogniplex is organised the same way: nodes grouped into cells, no command centre, arranged around what each mission needs.',
    modelEyebrow: 'The model',
    modelTitle: 'The Plex model: a model of our own',
    modelLead:
      'We call it the Plex model, in coherence with the brand: each person is a node, nodes group into cells by discipline, and work happens in missions — temporary teams that form when a project starts and dissolve when it closes. We follow no manual: the model combines the best of several proven currents.',
    principlesEyebrow: 'The constitution',
    principlesTitle: 'Seven principles that govern any structure',
    principlesLead:
      'These principles precede structure and only change after consulting the whole organisation.',
    tribeEyebrow: 'The tribe',
    tribeTitle: 'How work flows, day to day',
    tribeLead:
      'On top of the constitution sits a second layer: the tribe’s working principles, sustained by three feelings — belonging, interdependence and collaboration.',
    coreEyebrow: 'Core and network',
    coreTitle: 'Small core, extensive network',
    coreText1:
      'As a deliberate choice of focus, Cogniplex keeps a minimal, stable core that safeguards the purpose, the COGNI method, the client relationship and quality. Delivery relies on a curated network of freelancers and collaborators that brings depth and capacity.',
    coreText2:
      'Capability cells — Advisory, Data & AI Architecture, Transformation Delivery, Enablement and Managed Services — maintain standards, artefacts and accelerators, each with a rotating guardian. For every mission a temporary team forms, with a mission lead chosen by the team itself. Responsibility for results always remains with Cogniplex.',
    councilTitle: 'How decisions are made: the advice process',
    councilText:
      'Any node can make any decision if they first consult those with relevant experience and those who will be affected. Consulting is not asking permission or seeking consensus: the decision remains with whoever drives it, and an objection only blocks if it demonstrates concrete harm to the organisation.',
    benefitsEyebrow: 'What it means for you',
    benefitsTitle: 'Why this model benefits your company',
    ctaEyebrow: 'Does this model fit you?',
    ctaTitle: 'Let’s work together',
    ctaLead:
      'If you lead a company, start with the Augmented Company Assessment. If you are a specialist and want to join the network, tell us.',
    ctaJoin: 'Work with us',
  },

  collaborate: {
    heroEyebrow: 'Work with us',
    heroTitle: 'Join the <span class="em">Cogniplex network</span>',
    heroLead:
      'We are looking for first-rate specialists to collaborate on missions as portfolio freelancers — or, in some cases, to join the core. No hierarchies, choosing what you work on, and compensation that treats the network as what it is: the organisation’s asset.',
    valueEyebrow: 'The proposition',
    valueTitle: 'What we offer the network',
    valueLead:
      'Public, auditable rules, designed so that working with Cogniplex is objectively better than the industry standard.',
    profilesEyebrow: 'Who we look for',
    profilesTitle: 'T-shaped profiles, across five capabilities',
    profilesLead:
      'People with a deep specialty and the ability to collaborate beyond it, who share our working standards and values. We don’t build an indiscriminate network: we curate it.',
    residentEyebrow: 'The path',
    residentTitle: 'From the network to the core',
    residentText1:
      'Collaboration can grow. Collaborators with sustained dedication can become, by invitation, resident partners: on top of the network’s general terms, they share in the annual profit distribution pro-rated by dedication, typically hold a retainer, have a voice in the assemblies and priority on missions.',
    residentText2:
      'The resident partner is the natural bench of the core: whoever operates as a resident has already proven the fit. The core only hires when the business sustains it, with interviews and sign-off by the very peers you would work with — and every hire must raise the organisation’s average in their discipline.',
    formEyebrow: 'Express your interest',
    formTitle: 'Tell us who you are',
    formLead:
      'Leave us your details and we’ll talk. No endless processes: one conversation to see whether capabilities, standards and culture fit.',
    howWeWorkNote: 'Want to understand the model first? Discover',
    howWeWorkLink: 'our organisation',
    orgCta: 'Our organisation',
  },
} as const;

export const firmByLocale = { es, en } as const;
export const firmFor = (locale: Locale = 'es') => firmByLocale[locale];
