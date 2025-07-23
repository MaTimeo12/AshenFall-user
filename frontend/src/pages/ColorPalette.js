import React, { useState, useEffect } from 'react';
import { brandColors } from '../data/mockData';

const ColorPalette = () => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [copiedColor, setCopiedColor] = useState(null);

  const copyToClipboard = (text, colorName) => {
    navigator.clipboard.writeText(text);
    setCopiedColor(colorName);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  const ColorCard = ({ color, index }) => (
    <div 
      className="glass p-6 rounded-xl hover-lift cursor-pointer transition-all duration-500 slide-up"
      style={{ animationDelay: `${index * 100}ms` }}
      onClick={() => setSelectedColor(selectedColor === color.name ? null : color.name)}
    >
      {/* Color Sample */}
      <div 
        className="w-full h-32 rounded-lg mb-4 border-2 border-parchment border-opacity-20 shadow-lg"
        style={{ backgroundColor: color.hex }}
      ></div>
      
      {/* Color Info */}
      <div className="space-y-3">
        <h3 className="title-font text-xl font-semibold text-gold">
          {color.name}
        </h3>
        
        <div className="space-y-2">
          <div 
            className="flex items-center justify-between p-2 bg-ash-dark bg-opacity-50 rounded cursor-pointer hover:bg-opacity-70 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              copyToClipboard(color.hex, `${color.name}-hex`);
            }}
          >
            <span className="interface-font text-sm text-parchment">HEX</span>
            <span className="interface-font text-sm font-mono text-aged-gold">
              {color.hex}
            </span>
            {copiedColor === `${color.name}-hex` && (
              <span className="text-xs text-spectral-blue ml-2">Copié!</span>
            )}
          </div>
          
          <div 
            className="flex items-center justify-between p-2 bg-ash-dark bg-opacity-50 rounded cursor-pointer hover:bg-opacity-70 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              copyToClipboard(color.rgb, `${color.name}-rgb`);
            }}
          >
            <span className="interface-font text-sm text-parchment">RGB</span>
            <span className="interface-font text-sm font-mono text-aged-gold">
              {color.rgb}
            </span>
            {copiedColor === `${color.name}-rgb` && (
              <span className="text-xs text-spectral-blue ml-2">Copié!</span>
            )}
          </div>
        </div>

        {/* Expanded Info */}
        <div className={`transition-all duration-300 overflow-hidden ${
          selectedColor === color.name ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="pt-4 border-t border-aged-gold border-opacity-30">
            <div className="mb-3">
              <h4 className="interface-font text-sm font-semibold text-spectral mb-1">Usage Recommandé</h4>
              <p className="interface-font text-sm text-parchment leading-relaxed">
                {color.usage}
              </p>
            </div>
            <div>
              <h4 className="interface-font text-sm font-semibold text-spectral mb-1">Description</h4>
              <p className="body-font text-sm text-parchment leading-relaxed">
                {color.description}
              </p>
            </div>
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
            Palette de Couleurs
          </h1>
          <div className="w-32 h-1 bg-gradient-ember mx-auto mb-8"></div>
          <p className="body-font text-xl text-parchment max-w-3xl mx-auto leading-relaxed">
            Découvrez les 6 couleurs principales d'AshenFall, chacune soigneusement 
            choisie pour évoquer l'atmosphère dark fantasy du jeu.
          </p>
        </div>
      </section>

      {/* Color Grid */}
      <section className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {brandColors.map((color, index) => (
            <ColorCard key={color.name} color={color} index={index} />
          ))}
        </div>
      </section>

      {/* Color Combinations Section */}
      <section className="gradient-ash texture-overlay py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="title-font text-4xl font-semibold text-gold mb-6">
              Combinaisons Recommandées
            </h2>
            <p className="body-font text-lg text-parchment max-w-2xl mx-auto">
              Voici les associations de couleurs les plus efficaces pour différents contextes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Primary Combination */}
            <div className="glass p-6 rounded-xl hover-lift">
              <div className="flex h-20 rounded-lg overflow-hidden mb-4">
                <div className="flex-1" style={{ backgroundColor: '#1B1B1E' }}></div>
                <div className="flex-1" style={{ backgroundColor: '#C2A45F' }}></div>
                <div className="flex-1" style={{ backgroundColor: '#D9CBA3' }}></div>
              </div>
              <h3 className="title-font text-lg font-semibold text-gold mb-2">
                Combinaison Principale
              </h3>
              <p className="interface-font text-sm text-parchment">
                Cendre Sombre + Or Vieilli + Beige Parchemin
              </p>
              <p className="interface-font text-xs text-armor mt-2">
                Idéale pour les interfaces principales et la navigation
              </p>
            </div>

            {/* Accent Combination */}
            <div className="glass p-6 rounded-xl hover-lift">
              <div className="flex h-20 rounded-lg overflow-hidden mb-4">
                <div className="flex-1" style={{ backgroundColor: '#9A2B20' }}></div>
                <div className="flex-1" style={{ backgroundColor: '#C2A45F' }}></div>
                <div className="flex-1" style={{ backgroundColor: '#1B1B1E' }}></div>
              </div>
              <h3 className="title-font text-lg font-semibold text-gold mb-2">
                Combinaison d'Accent
              </h3>
              <p className="interface-font text-sm text-parchment">
                Rouge Braise + Or Vieilli + Cendre Sombre
              </p>
              <p className="interface-font text-xs text-armor mt-2">
                Pour les call-to-action et éléments importants
              </p>
            </div>

            {/* Mystical Combination */}
            <div className="glass p-6 rounded-xl hover-lift">
              <div className="flex h-20 rounded-lg overflow-hidden mb-4">
                <div className="flex-1" style={{ backgroundColor: '#35658F' }}></div>
                <div className="flex-1" style={{ backgroundColor: '#494D53' }}></div>
                <div className="flex-1" style={{ backgroundColor: '#D9CBA3' }}></div>
              </div>
              <h3 className="title-font text-lg font-semibold text-gold mb-2">
                Combinaison Mystique
              </h3>
              <p className="interface-font text-sm text-parchment">
                Bleu Spectral + Gris Armure + Beige Parchemin
              </p>
              <p className="interface-font text-xs text-armor mt-2">
                Pour les éléments magiques et les liens
              </p>
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
            <div className="glass p-6 rounded-xl">
              <h3 className="title-font text-xl font-semibold text-ember mb-4">
                ✅ À Faire
              </h3>
              <ul className="space-y-2 interface-font text-parchment">
                <li>• Utiliser Cendre Sombre comme couleur dominante</li>
                <li>• Réserver Rouge Braise pour les accents importants</li>
                <li>• Maintenir un contraste suffisant pour la lisibilité</li>
                <li>• Tester les combinaisons sur différents écrans</li>
                <li>• Utiliser Or Vieilli pour hiérarchiser l'information</li>
              </ul>
            </div>
            
            <div className="glass p-6 rounded-xl">
              <h3 className="title-font text-xl font-semibold text-ember mb-4">
                ❌ À Éviter
              </h3>
              <ul className="space-y-2 interface-font text-parchment">
                <li>• Plus de 3 couleurs principales simultanément</li>
                <li>• Rouge Braise sur Cendre Sombre (contraste faible)</li>
                <li>• Surcharge de couleurs vives</li>
                <li>• Modification des codes couleurs</li>
                <li>• Usage de couleurs non approuvées</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ColorPalette;