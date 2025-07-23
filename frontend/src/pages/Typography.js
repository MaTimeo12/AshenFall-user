import React, { useState } from 'react';
import { typographyStyles } from '../data/mockData';

const Typography = () => {
  const [selectedFont, setSelectedFont] = useState(null);

  const FontShowcase = ({ font, index }) => (
    <div 
      className="glass p-8 rounded-xl hover-lift transition-all duration-500 slide-up"
      style={{ animationDelay: `${index * 200}ms` }}
    >
      <div className="mb-6">
        <h2 className="title-font text-2xl font-semibold text-gold mb-2">
          {font.category}
        </h2>
        <div className="flex items-center space-x-4 mb-4">
          <span className="interface-font text-lg font-semibold text-spectral">
            {font.fontFamily}
          </span>
          <div className="flex space-x-2">
            {font.weights.map((weight) => (
              <span 
                key={weight}
                className="interface-font text-xs px-2 py-1 bg-aged-gold bg-opacity-20 text-aged-gold rounded"
              >
                {weight}
              </span>
            ))}
          </div>
        </div>
        <p className="body-font text-sm text-parchment mb-4 leading-relaxed">
          {font.characteristics}
        </p>
        <p className="interface-font text-sm text-armor">
          <strong>Usage:</strong> {font.usage}
        </p>
      </div>

      {/* Font Examples */}
      <div className="space-y-6">
        {font.examples.map((example, exampleIndex) => (
          <div 
            key={exampleIndex}
            className="p-4 bg-ash-dark bg-opacity-30 rounded-lg border border-aged-gold border-opacity-20"
          >
            <div 
              className={`${font.fontFamily === 'Cinzel' ? 'title-font' : 
                         font.fontFamily === 'Lora' ? 'body-font' : 'interface-font'} 
                         text-parchment leading-relaxed`}
              style={{ 
                fontSize: example.size, 
                fontWeight: example.weight 
              }}
            >
              {example.text}
            </div>
            <div className="flex justify-between items-center mt-3 pt-3 border-t border-aged-gold border-opacity-10">
              <span className="interface-font text-xs text-armor">
                {example.size} • Weight {example.weight}
              </span>
              <button 
                className="interface-font text-xs text-spectral hover:text-aged-gold transition-colors"
                onClick={() => {
                  navigator.clipboard.writeText(`font-family: '${font.fontFamily}', ${font.fontFamily === 'Poppins' ? 'sans-serif' : 'serif'}; font-size: ${example.size}; font-weight: ${example.weight};`);
                }}
              >
                Copier CSS
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Header */}
      <section className="container mx-auto px-4 mb-16">
        <div className="text-center fade-in">
          <h1 className="title-font text-5xl md:text-6xl font-bold text-gold mb-6">
            Typographies
          </h1>
          <div className="w-32 h-1 bg-gradient-ember mx-auto mb-8"></div>
          <p className="body-font text-xl text-parchment max-w-3xl mx-auto leading-relaxed">
            Trois familles de polices soigneusement sélectionnées pour créer 
            une hiérarchie visuelle claire et une expérience de lecture optimale.
          </p>
        </div>
      </section>

      {/* Typography Showcase */}
      <section className="container mx-auto px-4 mb-16">
        <div className="space-y-12">
          {typographyStyles.map((font, index) => (
            <FontShowcase key={font.category} font={font} index={index} />
          ))}
        </div>
      </section>

      {/* Typography Hierarchy Demo */}
      <section className="gradient-ash texture-overlay py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="title-font text-4xl font-semibold text-gold mb-8 text-center">
              Hiérarchie Typographique
            </h2>
            
            <div className="glass p-8 rounded-xl">
              <div className="space-y-8">
                {/* Title Hierarchy */}
                <div>
                  <h1 className="title-font text-4xl font-bold text-gold mb-2">
                    Titre Principal (Cinzel Bold)
                  </h1>
                  <h2 className="title-font text-3xl font-semibold text-aged-gold mb-2">
                    Sous-titre (Cinzel Semibold)
                  </h2>
                  <h3 className="title-font text-2xl font-medium text-spectral mb-4">
                    Titre de Section (Cinzel Medium)
                  </h3>
                </div>

                {/* Body Text */}
                <div>
                  <p className="body-font text-lg text-parchment mb-4 leading-relaxed">
                    <strong className="text-gold">Texte d'introduction (Lora Medium):</strong> Dans les terres 
                    désolées d'AshenFall, où les cendres du passé murmurent des secrets oubliés, 
                    les héros émergent pour forger leur destinée. Cette typographie évoque 
                    l'élégance des manuscrits anciens.
                  </p>
                  <p className="body-font text-base text-parchment mb-4 leading-relaxed">
                    Texte courant (Lora Regular): Les aventuriers parcourent des donjons 
                    millénaires, affrontant des créatures mystiques et découvrant des 
                    artefacts aux pouvoirs immenses. Chaque ligne raconte une histoire.
                  </p>
                </div>

                {/* Interface Elements */}
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-4">
                    <button className="btn-primary interface-font">
                      Bouton Principal (Poppins Semibold)
                    </button>
                    <button className="btn-secondary interface-font">
                      Bouton Secondaire (Poppins Medium)
                    </button>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="interface-font text-sm text-armor">
                      Texte d'aide (Poppins Regular) • Labels de formulaire
                    </p>
                    <p className="interface-font text-xs text-armor opacity-75">
                      Notes et informations complémentaires (Poppins Light)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Font Loading & Implementation */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="title-font text-4xl font-semibold text-gold mb-8 text-center">
            Implémentation Technique
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Google Fonts Import */}
            <div className="glass p-6 rounded-xl">
              <h3 className="title-font text-xl font-semibold text-spectral mb-4">
                Import Google Fonts
              </h3>
              <div className="bg-ash-dark p-4 rounded-lg border border-aged-gold border-opacity-20">
                <code className="interface-font text-xs text-parchment leading-relaxed block">
                  @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Lora:wght@400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap');
                </code>
              </div>
            </div>

            {/* CSS Classes */}
            <div className="glass p-6 rounded-xl">
              <h3 className="title-font text-xl font-semibold text-spectral mb-4">
                Classes CSS Utilitaires
              </h3>
              <div className="bg-ash-dark p-4 rounded-lg border border-aged-gold border-opacity-20">
                <code className="interface-font text-xs text-parchment leading-relaxed block">
                  .title-font &#123; font-family: 'Cinzel', serif; &#125;<br/>
                  .body-font &#123; font-family: 'Lora', serif; &#125;<br/>
                  .interface-font &#123; font-family: 'Poppins', sans-serif; &#125;
                </code>
              </div>
            </div>
          </div>

          {/* Typography Guidelines */}
          <div className="mt-12 glass p-8 rounded-xl">
            <h3 className="title-font text-2xl font-semibold text-gold mb-6">
              Règles Typographiques
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="title-font text-lg font-semibold text-ember mb-3">
                  Bonnes Pratiques
                </h4>
                <ul className="space-y-2 interface-font text-parchment">
                  <li>• Cinzel uniquement pour les titres et éléments décoratifs</li>
                  <li>• Lora pour les textes longs et narratifs</li>
                  <li>• Poppins pour l'interface et les interactions</li>
                  <li>• Maintenir une hiérarchie claire des tailles</li>
                  <li>• Respecter les graisses recommandées</li>
                </ul>
              </div>
              
              <div>
                <h4 className="title-font text-lg font-semibold text-ember mb-3">
                  À Éviter
                </h4>
                <ul className="space-y-2 interface-font text-parchment">
                  <li>• Mélanger plus de 2 familles simultanément</li>
                  <li>• Utiliser Cinzel pour de longs paragraphes</li>
                  <li>• Textes trop petits (moins de 14px)</li>
                  <li>• Contraste insuffisant</li>
                  <li>• Déformation ou modification des polices</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Typography;