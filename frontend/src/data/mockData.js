// Mock data for AshenFall Brand Guidelines

export const brandColors = [
  {
    name: 'Cendre Sombre',
    hex: '#1B1B1E',
    rgb: 'rgb(27, 27, 30)',
    usage: 'Fond principal, éléments sombres, textes sur fond clair',
    description: 'Couleur de base représentant les cendres et l\'obscurité du monde d\'AshenFall'
  },
  {
    name: 'Rouge Braise',
    hex: '#9A2B20',
    rgb: 'rgb(154, 43, 32)',
    usage: 'Accents importants, boutons d\'action, alertes',
    description: 'Évoque les braises ardentes et la passion du combat'
  },
  {
    name: 'Or Vieilli',
    hex: '#C2A45F',
    rgb: 'rgb(194, 164, 95)',
    usage: 'Éléments premium, titres importants, récompenses',
    description: 'Représente la richesse et les trésors anciens'
  },
  {
    name: 'Gris Armure',
    hex: '#494D53',
    rgb: 'rgb(73, 77, 83)',
    usage: 'Éléments secondaires, bordures, textes subtils',
    description: 'Couleur des armures et équipements métalliques'
  },
  {
    name: 'Bleu Spectral',
    hex: '#35658F',
    rgb: 'rgb(53, 101, 143)',
    usage: 'Liens, éléments interactifs, magie',
    description: 'Évoque la magie spectrale et les pouvoirs mystiques'
  },
  {
    name: 'Beige Parchemin',
    hex: '#D9CBA3',
    rgb: 'rgb(217, 203, 163)',
    usage: 'Texte principal, arrière-plans clairs, parchemins',
    description: 'Couleur des anciens parchemins et manuscrits'
  }
];

export const typographyStyles = [
  {
    category: 'Titres Principaux',
    fontFamily: 'Cinzel',
    googleFont: 'Cinzel:wght@400;500;600;700',
    weights: ['400', '500', '600', '700'],
    usage: 'Titres de sections, logos, éléments décoratifs',
    characteristics: 'Police médiévale élégante, inspirée des inscriptions gravées',
    examples: [
      { text: 'ASHENFALL', size: '4rem', weight: '700' },
      { text: 'Chapitre Premier', size: '2.5rem', weight: '600' },
      { text: 'Les Terres Oubliées', size: '2rem', weight: '500' }
    ]
  },
  {
    category: 'Textes Courants',
    fontFamily: 'Lora',
    googleFont: 'Lora:wght@400;500;600;700',
    weights: ['400', '500', '600', '700'],
    usage: 'Articles, descriptions, contenus narratifs',
    characteristics: 'Police lisible avec des empattements classiques, parfaite pour la lecture',
    examples: [
      { text: 'Dans les terres désolées d\'AshenFall, les héros émergent des cendres pour forger leur légende...', size: '1.1rem', weight: '400' },
      { text: 'Explorez un monde où magie et acier se rencontrent dans un ballet mortel.', size: '1rem', weight: '500' }
    ]
  },
  {
    category: 'Interface Utilisateur',
    fontFamily: 'Poppins',
    googleFont: 'Poppins:wght@300;400;500;600;700',
    weights: ['300', '400', '500', '600', '700'],
    usage: 'Boutons, menus, navigation, éléments interactifs',
    characteristics: 'Police moderne et claire, optimisée pour les interfaces',
    examples: [
      { text: 'Commencer l\'Aventure', size: '1rem', weight: '600' },
      { text: 'Paramètres du Jeu', size: '0.9rem', weight: '500' },
      { text: 'Niveau 42 • Paladin', size: '0.8rem', weight: '400' }
    ]
  }
];

export const logoVariations = [
  {
    name: 'Logo Principal',
    description: 'Version complète avec symbole et texte',
    usage: 'Site web, documents officiels, merchandise',
    colors: 'Or Vieilli sur fond Cendre Sombre',
    format: 'Horizontal',
    elements: ['Arbre mort stylisé', 'Typographie Cinzel', 'Effets de texture']
  },
  {
    name: 'Logo Monochrome',
    description: 'Version une couleur pour impressions spéciales',
    usage: 'Gravures, tampons, impressions monochromes',
    colors: 'Une seule couleur au choix',
    format: 'Horizontal/Vertical',
    elements: ['Contours simplifiés', 'Contraste élevé']
  },
  {
    name: 'Logo Compact',
    description: 'Version condensée pour petits espaces',
    usage: 'Favicon, réseaux sociaux, applications mobiles',
    colors: 'Or Vieilli et Cendre Sombre',
    format: 'Carré',
    elements: ['Symbole dominant', 'Texte réduit ou absent']
  }
];

export const texturePatterns = [
  {
    name: 'Pierre Ancienne',
    description: 'Texture rugueuse évoquant les murs de châteaux',
    usage: 'Arrière-plans de sections, cartes d\'interface',
    characteristics: 'Grain irrégulier, nuances de gris',
    cssPattern: 'radial-gradient(circle at 2px 2px, rgba(217,203,163,0.15) 1px, transparent 0)'
  },
  {
    name: 'Cuir Travaillé',
    description: 'Surface texturée rappelant le cuir d\'équipement',
    usage: 'Panneaux d\'inventaire, boutons premium',
    characteristics: 'Motifs organiques, tons chauds',
    cssPattern: 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(194,164,95,0.1) 2px, rgba(194,164,95,0.1) 4px)'
  },
  {
    name: 'Bois Brûlé',
    description: 'Texture carbonisée avec veines apparentes',
    usage: 'Éléments décoratifs, bordures',
    characteristics: 'Lignes organiques, contrastes marqués',
    cssPattern: 'linear-gradient(90deg, rgba(27,27,30,0.8) 50%, rgba(73,77,83,0.4) 50%)'
  },
  {
    name: 'Parchemin Usé',
    description: 'Surface vieillie avec taches et pliures',
    usage: 'Fonds de texte, cartes, documents',
    characteristics: 'Tons beiges, imperfections naturelles',
    cssPattern: 'radial-gradient(ellipse at center, rgba(217,203,163,0.9) 0%, rgba(217,203,163,0.7) 100%)'
  }
];

export const runicPatterns = [
  {
    name: 'Runes de Pouvoir',
    symbols: ['ᚠ', 'ᚢ', 'ᚦ', 'ᚨ', 'ᚱ', 'ᚲ'],
    usage: 'Bordures décoratives, éléments magiques',
    meaning: 'Symboles de force et de magie ancienne'
  },
  {
    name: 'Motifs Celtiques',
    symbols: ['⚜', '♦', '◊', '✧', '※', '◈'],
    usage: 'Séparateurs, ornements',
    meaning: 'Éléments décoratifs inspirés de l\'art celtique'
  }
];

export const tiktokTemplates = [
  {
    name: 'Teaser de Nouveauté',
    format: '9:16 (1080x1920)',
    duration: '15-30 secondes',
    elements: [
      'Fond dégradé Cendre Sombre vers Gris Armure',
      'Logo AshenFall animé en entrée',
      'Bandeau "NOUVEAUTÉ !" en Or Vieilli sur Rouge Braise',
      'Texte principal en Poppins Medium',
      'Call-to-action en bas d\'écran'
    ],
    description: 'Template pour annoncer les nouvelles fonctionnalités du jeu'
  },
  {
    name: 'Storytelling Immersif',
    format: '9:16 (1080x1920)',
    duration: '30-60 secondes',
    elements: [
      'Arrière-plan avec texture Pierre Ancienne',
      'Titre en Cinzel sur fond semi-transparent',
      'Texte narratif en Lora avec animations',
      'Éléments runiques décoratifs',
      'Logo discret en coin'
    ],
    description: 'Template pour raconter l\'histoire et l\'univers du jeu'
  },
  {
    name: 'Devlog Technique',
    format: '9:16 (1080x1920)',
    duration: '45-90 secondes',
    elements: [
      'Interface propre avec grille',
      'Titre technique en Poppins Bold',
      'Captures d\'écran avec bordures Or Vieilli',
      'Texte explicatif en Poppins Regular',
      'Progression visuelle'
    ],
    description: 'Template pour les mises à jour de développement'
  },
  {
    name: 'Gameplay Showcase',
    format: '9:16 (1080x1920)',
    duration: '30-45 secondes',
    elements: [
      'Vidéo de gameplay en plein écran',
      'Overlay minimal avec logo',
      'Titre d\'action en Cinzel',
      'Statistiques en surimpression',
      'Call-to-action final'
    ],
    description: 'Template pour présenter les mécaniques de jeu'
  }
];

export const videoTeaserMockup = {
  title: 'Maquette Teaser Vidéo AshenFall',
  duration: '60 secondes',
  resolution: '1920x1080 (16:9)',
  scenes: [
    {
      time: '0-5s',
      description: 'Fondu noir vers dégradé Cendre Sombre',
      elements: ['Bruit de vent', 'Particules de cendre flottantes'],
      transition: 'Fondu progressif'
    },
    {
      time: '5-15s',
      description: 'Apparition du logo AshenFall',
      elements: [
        'Logo en Or Vieilli avec effet de braise',
        'Titre en Cinzel avec animation de gravure',
        'Son métallique d\'épée'
      ],
      transition: 'Zoom avant dramatique'
    },
    {
      time: '15-35s',
      description: 'Séquences de gameplay montage',
      elements: [
        'Combat épique avec effets de feu',
        'Exploration de donjons sombres',
        'Magie spectrale en action',
        'Musique orchestrale montante'
      ],
      transition: 'Cuts rapides avec flashes'
    },
    {
      time: '35-50s',
      description: 'Textes immersifs et promesses',
      elements: [
        '"Forgez votre légende" en Cinzel',
        '"Un monde à reconquérir" en Lora',
        'Fond avec texture de parchemin',
        'Runes mystiques animées'
      ],
      transition: 'Apparition en fondu'
    },
    {
      time: '50-60s',
      description: 'Logo final et call-to-action',
      elements: [
        'Logo AshenFall version complète',
        '"Disponible maintenant" en Or Vieilli sur Rouge Braise',
        'Plateformes de téléchargement',
        'Fondu vers noir'
      ],
      transition: 'Zoom arrière majestueux'
    }
  ],
  colorGrading: 'Tons sombres contrastés, dominantes orangées et bleues froides',
  audioDesign: 'Orchestral épique, effets de combat, ambiance mystique'
};

export const usageGuidelines = {
  colorRestrictions: [
    'Ne jamais utiliser plus de 3 couleurs principales simultanément',
    'Toujours maintenir un contraste suffisant pour la lisibilité',
    'Le Rouge Braise doit être utilisé avec parcimonie pour les accents',
    'Le Cendre Sombre doit dominer dans les interfaces sombres'
  ],
  logoRules: [
    'Ne jamais déformer ou étirer le logo',
    'Respecter la zone de sécurité équivalente à la hauteur du symbole',
    'Ne pas utiliser de couleurs non approuvées',
    'Maintenir la lisibilité en toutes circonstances'
  ],
  typographyBestPractices: [
    'Cinzel uniquement pour les titres et éléments décoratifs',
    'Lora pour les textes longs et narratifs',
    'Poppins pour l\'interface et les éléments interactifs',
    'Ne jamais mélanger plus de 2 familles de polices'
  ],
  adaptationRules: [
    'Adapter les templates selon le contenu tout en gardant l\'identité',
    'Utiliser les textures avec modération pour ne pas surcharger',
    'Privilégier la lisibilité sur la décoration',
    'Tester sur différents supports et tailles'
  ]
};