import React, { useState } from 'react';
import ashenFallLogo from '../components/ashen fall no bg.png';
import { logoVariations } from '../data/mockData';

const Logo = () => {
  const [activeVariation, setActiveVariation] = useState(0);

  const LogoVariation = ({ variation, index, isActive }) => (
    <div 
      className={`glass p-8 rounded-xl cursor-pointer transition-all duration-500 ${
        isActive ? 'ring-2 ring-aged-gold bg-aged-gold bg-opacity-10' : 'hover-lift'
      }`}
      onClick={() => setActiveVariation(index)}
    >
      <div className="text-center mb-6">
        {/* Logo Preview */}
        <div className={`mx-auto mb-4 flex items-center justify-center transition-all duration-300 ${
          variation.format === 'Carré' ? 'w-32 h-32 rounded-full' : 'w-48 h-24'
        } bg-gradient-to-br from-ash-dark to-armor-grey border-2 border-aged-gold border-opacity-30`}>
          {variation.format === 'Carré' ? (
            <div className="text-center">
              <img src={require('../components/Ashenfall logo compact.png')} alt="AshenFall logo" className="h-auto w-50 mx-auto mb-1" />
              {/* <div className="title-font text-xs text-gold font-semibold">AF</div> */}
            </div>
          ) : (
            <div className="flex items-center justify-center w-full">
              <img src={ashenFallLogo} alt="AshenFall logo" className="h-32 w-auto mx-auto" />
              {/* <div className="title-font text-lg text-gold font-semibold tracking-wider">
                ASHENFALL
              </div> */}
            </div>
          )}
        </div>
        
        <h3 className="title-font text-xl font-semibold text-gold mb-2">
          {variation.name}
        </h3>
      </div>

      <div className="space-y-3">
        <p className="body-font text-sm text-parchment leading-relaxed">
          {variation.description}
        </p>
        
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="interface-font text-xs text-armor">Usage:</span>
            <span className="interface-font text-xs text-spectral">{variation.format}</span>
          </div>
          <p className="interface-font text-xs text-parchment">
            {variation.usage}
          </p>
          <p className="interface-font text-xs text-aged-gold">
            {variation.colors}
          </p>
        </div>

        {/* Elements */}
        <div className="pt-3 border-t border-aged-gold border-opacity-20">
          <div className="flex flex-wrap gap-1">
            {variation.elements.map((element, elemIndex) => (
              <span 
                key={elemIndex}
                className="interface-font text-xs px-2 py-1 bg-spectral bg-opacity-20 text-spectral rounded"
              >
                {element}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Header */}
      <section className="container mx-auto px-4 mb-16">
        <div className="text-center fade-in">
          <h1 className="title-font text-5xl md:text-6xl font-bold text-gold mb-6">
            Logo & Symboles
          </h1>
          <div className="w-32 h-1 bg-gradient-ember mx-auto mb-8"></div>
          <p className="body-font text-xl text-parchment max-w-3xl mx-auto leading-relaxed">
            L'identité visuelle d'AshenFall s'articule autour d'un arbre mort stylisé, 
            symbole de renaissance et de résilience dans un monde dévasté.
          </p>
        </div>
      </section>

      {/* Main Logo Showcase */}
      <section className="container mx-auto px-4 mb-16">
  <div className="max-w-4xl mx-auto">
    <div className="glass p-12 rounded-xl text-center mb-12 fade-in">
      <div className="mb-8">
        {/* Rectangle large avec coins arrondis modérés et bordure épaisse */}
        <div className="inline-flex items-center justify-center w-96 h-64 bg-gradient-to-br from-ash-dark via-armor-grey to-ash-dark rounded-xl border-2 border-aged-gold shadow-2xl mb-6">
          <div className="text-center">
            {/* Image agrandie avec hauteur max et largeur auto */}
            <img
              src={ashenFallLogo}
               alt="AshenFall logo"
               className="h-[240px] w-auto mb-2 filter drop-shadow-lg mx-auto translate-x-2 -translate-y-1"
            />

          </div>
        </div>
      </div>
            
            <h2 className="title-font text-3xl font-semibold text-gold mb-4">
              Logo Principal
            </h2>
            <p className="body-font text-lg text-parchment max-w-2xl mx-auto leading-relaxed">
              L'arbre mort au centre du logo représente la désolation d'un monde déchu, 
              mais aussi l'espoir de renaissance. Les racines profondes évoquent 
              la persistance de la vie sous les cendres.
            </p>
          </div>
        </div>
      </section>

      {/* Logo Variations */}
      <section className="container mx-auto px-4 mb-16">
        <div className="text-center mb-12">
          <h2 className="title-font text-4xl font-semibold text-gold mb-6">
            Variations du Logo
          </h2>
          <p className="body-font text-lg text-parchment max-w-2xl mx-auto">
            Trois versions adaptées aux différents contextes d'utilisation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {logoVariations.map((variation, index) => (
            <LogoVariation 
              key={index}
              variation={variation}
              index={index}
              isActive={activeVariation === index}
            />
          ))}
        </div>
      </section>

      {/* Logo Construction */}
      <section className="gradient-ash texture-overlay py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="title-font text-4xl font-semibold text-gold mb-8 text-center">
              Construction & Proportions
            </h2>
            
            <div className="glass p-8 rounded-xl mb-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  {/* Logo with grid */}
                  <div className="relative bg-gradient-to-br from-ash-dark to-armor-grey p-8 rounded-lg border border-aged-gold border-opacity-30">
                    <div className="absolute inset-0 opacity-20">
                      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#C2A45F" strokeWidth="0.5"/>
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                      </svg>
                    </div>
                    
                    <div className="relative text-center">
                      <img src={ashenFallLogo} alt="AshenFall logo" className="h-30 mb-2 mx-auto" />
                      {/* <div className="title-font text-xl text-gold font-bold tracking-wider">
                        ASHENFALL
                      </div> */}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="title-font text-xl font-semibold text-spectral mb-4">
                    Règles de Construction
                  </h3>
                  <ul className="space-y-3 interface-font text-parchment">
                    <li className="flex items-start">
                      <span className="text-aged-gold mr-2">•</span>
                      Zone de sécurité équivalente à la hauteur du symbole
                    </li>
                    <li className="flex items-start">
                      <span className="text-aged-gold mr-2">•</span>
                      Proportions fixes entre symbole et texte (1:2)
                    </li>
                    <li className="flex items-start">
                      <span className="text-aged-gold mr-2">•</span>
                      Espacement cohérent pour toutes les variations
                    </li>
                    <li className="flex items-start">
                      <span className="text-aged-gold mr-2">•</span>
                      Taille minimale: 24px de hauteur pour la lisibilité
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Guidelines */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="title-font text-4xl font-semibold text-gold mb-8 text-center">
            Règles d'Usage
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Do's */}
            <div className="glass p-6 rounded-xl">
              <h3 className="title-font text-xl font-semibold text-spectral mb-4 flex items-center">
                <span className="text-2xl mr-2">✅</span>
                Utilisations Correctes
              </h3>
              
              <div className="space-y-6">
                {/* Correct examples */}
                <div className="p-4 bg-ash-dark bg-opacity-30 rounded-lg">
                  <div className="flex items-center space-x-3 mb-2">
                    <img src={ashenFallLogo} alt="AshenFall logo" className="h-6" />
                    <div className="title-font text-sm text-gold font-semibold">ASHENFALL</div>
                  </div>
                  <p className="interface-font text-xs text-parchment">Proportions respectées</p>
                </div>
                
                <div className="p-4 bg-spectral bg-opacity-10 rounded-lg">
                  <div className="flex items-center space-x-3 mb-2">
                    <img src={ashenFallLogo} alt="AshenFall logo" className="h-6" />
                    <div className="title-font text-sm text-parchment font-semibold">ASHENFALL</div>
                  </div>
                  <p className="interface-font text-xs text-parchment">Version monochrome</p>
                </div>
              </div>
              
              <ul className="mt-6 space-y-2 interface-font text-sm text-parchment">
                <li>• Respecter les couleurs officielles</li>
                <li>• Maintenir les proportions</li>
                <li>• Utiliser sur fonds contrastés</li>
                <li>• Respecter la zone de sécurité</li>
              </ul>
            </div>

            {/* Don'ts */}
            <div className="glass p-6 rounded-xl">
              <h3 className="title-font text-xl font-semibold text-ember mb-4 flex items-center">
                <span className="text-2xl mr-2">❌</span>
                Utilisations Incorrectes
              </h3>
              
              <div className="space-y-6">
                {/* Incorrect examples */}
                <div className="p-4 bg-ember bg-opacity-20 rounded-lg border border-ember border-opacity-30">
                  <div className="flex items-center space-x-3 mb-2">
                    <img src={ashenFallLogo} alt="AshenFall logo" className="h-6 transform scale-x-150" />
                    <div className="title-font text-sm text-gold font-semibold">ASHENFALL</div>
                  </div>
                  <p className="interface-font text-xs text-ember">Logo déformé</p>
                </div>
                
                <div className="p-4 bg-ember bg-opacity-20 rounded-lg border border-ember border-opacity-30">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="text-lg">🌳</div>
                    <div className="title-font text-sm text-red-500 font-semibold">ASHENFALL</div>
                  </div>
                  <p className="interface-font text-xs text-ember">Couleurs non autorisées</p>
                </div>
              </div>
              
              <ul className="mt-6 space-y-2 interface-font text-sm text-parchment">
                <li>• Ne pas déformer ou étirer</li>
                <li>• Éviter les couleurs non approuvées</li>
                <li>• Ne pas modifier les proportions</li>
                <li>• Éviter les fonds sans contraste</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Logo;