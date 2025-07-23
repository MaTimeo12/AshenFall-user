import React, { useState } from 'react';
import { texturePatterns, runicPatterns } from '../data/mockData';

const Textures = () => {
  const [selectedTexture, setSelectedTexture] = useState(null);
  const [copiedCSS, setCopiedCSS] = useState(null);

  const copyCSS = (cssPattern, textureName) => {
    const cssCode = `background-image: ${cssPattern};\nbackground-size: 20px 20px;`;
    navigator.clipboard.writeText(cssCode);
    setCopiedCSS(`${textureName}-css`);
    setTimeout(() => setCopiedCSS(null), 2000);
  };

  const TextureCard = ({ texture, index }) => (
    <div 
      className="glass p-6 rounded-xl hover-lift cursor-pointer transition-all duration-500 slide-up"
      style={{ animationDelay: `${index * 100}ms` }}
      onClick={() => setSelectedTexture(selectedTexture === texture.name ? null : texture.name)}
    >
      {/* Texture Preview */}
      <div 
        className="w-full h-32 rounded-lg mb-4 border border-aged-gold border-opacity-30 shadow-inner relative overflow-hidden"
        style={{ 
          backgroundImage: texture.cssPattern,
          backgroundSize: '20px 20px',
          backgroundColor: '#1B1B1E'
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-ash-dark bg-opacity-80 px-3 py-1 rounded text-xs interface-font text-parchment">
            Prévisualisation
          </div>
        </div>
      </div>
      
      {/* Texture Info */}
      <div className="space-y-3">
        <h3 className="title-font text-xl font-semibold text-gold">
          {texture.name}
        </h3>
        
        <p className="body-font text-sm text-parchment leading-relaxed">
          {texture.description}
        </p>
        
        <div className="space-y-2">
          <div className="flex justify-between items-start">
            <span className="interface-font text-xs text-armor">Usage:</span>
            <span className="interface-font text-xs text-spectral text-right flex-1 ml-2">
              {texture.usage}
            </span>
          </div>
          
          <div className="flex justify-between items-start">
            <span className="interface-font text-xs text-armor">Style:</span>
            <span className="interface-font text-xs text-parchment text-right flex-1 ml-2">
              {texture.characteristics}
            </span>
          </div>
        </div>

        {/* Expanded Info */}
        <div className={`transition-all duration-300 overflow-hidden ${
          selectedTexture === texture.name ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="pt-4 border-t border-aged-gold border-opacity-30 space-y-3">
            <div>
              <h4 className="interface-font text-sm font-semibold text-spectral mb-2">Code CSS</h4>
              <div className="bg-ash-dark p-3 rounded border border-aged-gold border-opacity-20 relative">
                <code className="interface-font text-xs text-parchment break-all">
                  background-image: {texture.cssPattern};
                </code>
                <button 
                  className="absolute top-2 right-2 text-xs text-spectral hover:text-aged-gold transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    copyCSS(texture.cssPattern, texture.name);
                  }}
                >
                  {copiedCSS === `${texture.name}-css` ? 'Copié!' : 'Copier'}
                </button>
              </div>
            </div>
            
            <div>
              <h4 className="interface-font text-sm font-semibold text-spectral mb-2">Variations</h4>
              <div className="grid grid-cols-3 gap-2">
                {[0.05, 0.1, 0.2].map((opacity, opacityIndex) => (
                  <div 
                    key={opacityIndex}
                    className="h-16 rounded border border-aged-gold border-opacity-20"
                    style={{ 
                      backgroundImage: texture.cssPattern.replace(/rgba\([^,]+,[^,]+,[^,]+,([^)]+)\)/g, `rgba(194,164,95,${opacity})`),
                      backgroundSize: '20px 20px',
                      backgroundColor: '#1B1B1E'
                    }}
                  >
                    <div className="h-full flex items-end p-1">
                      <span className="text-xs interface-font text-parchment bg-ash-dark bg-opacity-75 px-1 rounded">
                        {Math.round(opacity * 100)}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const RunicPatternCard = ({ pattern, index }) => (
    <div 
      className="glass p-6 rounded-xl hover-lift transition-all duration-500 slide-up"
      style={{ animationDelay: `${(index + 4) * 100}ms` }}
    >
      <h3 className="title-font text-lg font-semibold text-gold mb-3">
        {pattern.name}
      </h3>
      
      {/* Symbols Display */}
      <div className="bg-ash-dark bg-opacity-30 p-4 rounded-lg mb-4 text-center">
        <div className="flex justify-center space-x-4 text-2xl text-aged-gold mb-2">
          {pattern.symbols.map((symbol, symbolIndex) => (
            <span 
              key={symbolIndex}
              className="hover:text-ember hover:scale-110 transition-all duration-300 cursor-pointer"
              title={`Symbole ${symbolIndex + 1}`}
            >
              {symbol}
            </span>
          ))}
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between items-start">
          <span className="interface-font text-xs text-armor">Usage:</span>
          <span className="interface-font text-xs text-spectral text-right flex-1 ml-2">
            {pattern.usage}
          </span>
        </div>
        
        <p className="body-font text-sm text-parchment leading-relaxed">
          {pattern.meaning}
        </p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Header */}
      <section className="container mx-auto px-4 mb-16">
        <div className="text-center fade-in">
          <h1 className="title-font text-5xl md:text-6xl font-bold text-gold mb-6">
            Textures & Motifs
          </h1>
          <div className="w-32 h-1 bg-gradient-ember mx-auto mb-8"></div>
          <p className="body-font text-xl text-parchment max-w-3xl mx-auto leading-relaxed">
            Des textures organiques et des motifs mystiques pour enrichir l'expérience 
            visuelle d'AshenFall et renforcer l'immersion dans cet univers fantastique.
          </p>
        </div>
      </section>

      {/* Texture Patterns */}
      <section className="container mx-auto px-4 mb-16">
        <div className="mb-12">
          <h2 className="title-font text-4xl font-semibold text-gold mb-6 text-center">
            Textures Principales
          </h2>
          <p className="body-font text-lg text-parchment text-center max-w-2xl mx-auto">
            Quatre textures fondamentales inspirées des matériaux du monde médiéval
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {texturePatterns.map((texture, index) => (
            <TextureCard key={texture.name} texture={texture} index={index} />
          ))}
        </div>
      </section>

      {/* Runic Patterns */}
      <section className="gradient-ash texture-overlay py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="title-font text-4xl font-semibold text-gold mb-6">
              Motifs Runiques
            </h2>
            <p className="body-font text-lg text-parchment max-w-2xl mx-auto">
              Symboles mystiques et ornements décoratifs pour les éléments spéciaux
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {runicPatterns.map((pattern, index) => (
              <RunicPatternCard key={pattern.name} pattern={pattern} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Combined Usage Examples */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="title-font text-4xl font-semibold text-gold mb-8 text-center">
            Exemples d'Application
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Interface Card Example */}
            <div className="glass p-6 rounded-xl">
              <h3 className="title-font text-xl font-semibold text-spectral mb-4">
                Carte d'Interface
              </h3>
              <div 
                className="p-6 rounded-lg border border-aged-gold border-opacity-30 relative"
                style={{
                  backgroundImage: texturePatterns[3].cssPattern, // Parchemin
                  backgroundSize: '30px 30px'
                }}
              >
                <div className="relative z-10">
                  <h4 className="title-font text-lg text-ash-dark font-semibold mb-2">
                    Quête Épique
                  </h4>
                  <p className="body-font text-sm text-ash-dark mb-3">
                    Explorez les ruines anciennes et découvrez les secrets oubliés...
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-aged-gold text-lg">⚜</span>
                    <button className="px-4 py-2 bg-ember text-white rounded font-semibold text-sm">
                      Accepter
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Inventory Panel Example */}
            <div className="glass p-6 rounded-xl">
              <h3 className="title-font text-xl font-semibold text-spectral mb-4">
                Panneau d'Inventaire
              </h3>
              <div 
                className="p-6 rounded-lg border border-aged-gold border-opacity-30 relative"
                style={{
                  backgroundImage: texturePatterns[1].cssPattern, // Cuir
                  backgroundSize: '15px 15px'
                }}
              >
                <div className="relative z-10">
                  <div className="grid grid-cols-4 gap-2 mb-4">
                    {[...Array(8)].map((_, i) => (
                      <div 
                        key={i}
                        className="aspect-square bg-ash-dark bg-opacity-50 rounded border border-aged-gold border-opacity-30 flex items-center justify-center"
                      >
                        {i < 3 && <span className="text-aged-gold">⚔</span>}
                      </div>
                    ))}
                  </div>
                  <div className="text-center">
                    <span className="interface-font text-xs text-parchment">
                      Équipement du Héros
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Magical Element Example */}
            <div className="glass p-6 rounded-xl">
              <h3 className="title-font text-xl font-semibold text-spectral mb-4">
                Élément Magique
              </h3>
              <div 
                className="p-6 rounded-lg border-2 border-spectral border-opacity-50 relative text-center"
                style={{
                  backgroundImage: 'radial-gradient(circle at center, rgba(53,101,143,0.2) 0%, rgba(53,101,143,0.05) 50%, transparent 70%)',
                  backgroundSize: '40px 40px'
                }}
              >
                <div className="relative z-10">
                  <div className="text-3xl text-spectral mb-2">※</div>
                  <h4 className="title-font text-lg text-spectral font-semibold mb-2">
                    Sort de Protection
                  </h4>
                  <p className="interface-font text-sm text-parchment">
                    Magie: +15 • Durée: 300s
                  </p>
                  <div className="flex justify-center space-x-2 mt-3 text-spectral">
                    <span>◊</span><span>✧</span><span>◊</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stone Architecture Example */}
            <div className="glass p-6 rounded-xl">
              <h3 className="title-font text-xl font-semibold text-spectral mb-4">
                Architecture de Pierre
              </h3>
              <div 
                className="p-6 rounded-lg border border-armor border-opacity-50 relative"
                style={{
                  backgroundImage: texturePatterns[0].cssPattern, // Pierre
                  backgroundSize: '25px 25px'
                }}
              >
                <div className="relative z-10 text-center">
                  <div className="text-2xl text-armor mb-2">🏰</div>
                  <h4 className="title-font text-lg text-parchment font-semibold mb-2">
                    Forteresse Ancienne
                  </h4>
                  <p className="interface-font text-sm text-parchment opacity-90">
                    Bastions de pierre sculptés par les maîtres d'antan
                  </p>
                  <div className="mt-3 text-aged-gold">
                    <span className="mr-2">⚜</span>
                    <span className="ml-2">⚜</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Guidelines */}
      <section className="gradient-ash texture-overlay py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="title-font text-4xl font-semibold text-gold mb-8 text-center">
              Guide d'Implémentation
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass p-6 rounded-xl">
                <h3 className="title-font text-xl font-semibold text-spectral mb-4">
                  Bonnes Pratiques
                </h3>
                <ul className="space-y-3 interface-font text-parchment">
                  <li className="flex items-start">
                    <span className="text-aged-gold mr-2 mt-1">•</span>
                    <span>Utiliser les textures avec modération pour éviter la surcharge</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-aged-gold mr-2 mt-1">•</span>
                    <span>Adapter l'opacité selon le contenu affiché</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-aged-gold mr-2 mt-1">•</span>
                    <span>Combiner textures et motifs pour créer de la profondeur</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-aged-gold mr-2 mt-1">•</span>
                    <span>Tester la lisibilité sur différents écrans</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-aged-gold mr-2 mt-1">•</span>
                    <span>Réserver les runes pour les éléments spéciaux</span>
                  </li>
                </ul>
              </div>
              
              <div className="glass p-6 rounded-xl">
                <h3 className="title-font text-xl font-semibold text-ember mb-4">
                  À Éviter
                </h3>
                <ul className="space-y-3 interface-font text-parchment">
                  <li className="flex items-start">
                    <span className="text-ember mr-2 mt-1">•</span>
                    <span>Superposer trop de textures différentes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-ember mr-2 mt-1">•</span>
                    <span>Utiliser des opacités trop élevées sur du texte</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-ember mr-2 mt-1">•</span>
                    <span>Modifier les motifs CSS sans test préalable</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-ember mr-2 mt-1">•</span>
                    <span>Abuser des éléments runiques décoratifs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-ember mr-2 mt-1">•</span>
                    <span>Négliger les performances sur mobile</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Textures;