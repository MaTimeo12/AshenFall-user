import React, { useState } from 'react';
import { usageGuidelines } from '../data/mockData';

const Guidelines = () => {
  const [activeSection, setActiveSection] = useState('colors');

  const GuidelineSection = ({ title, rules, icon, sectionKey }) => (
    <div 
      className={`glass p-6 rounded-xl cursor-pointer transition-all duration-300 ${
        activeSection === sectionKey ? 'ring-2 ring-aged-gold bg-aged-gold bg-opacity-5' : 'hover-lift'
      }`}
      onClick={() => setActiveSection(sectionKey)}
    >
      <div className="flex items-center mb-4">
        <span className="text-2xl mr-3">{icon}</span>
        <h3 className="title-font text-xl font-semibold text-gold">
          {title}
        </h3>
      </div>
      
      <div className={`transition-all duration-300 overflow-hidden ${
        activeSection === sectionKey ? 'max-h-96 opacity-100' : 'max-h-20 opacity-70'
      }`}>
        <ul className="space-y-3">
          {rules.slice(0, activeSection === sectionKey ? rules.length : 2).map((rule, index) => (
            <li key={index} className="flex items-start">
              <span className="text-aged-gold mr-3 mt-1 text-sm">•</span>
              <span className="interface-font text-parchment leading-relaxed">
                {rule}
              </span>
            </li>
          ))}
        </ul>
        
        {activeSection !== sectionKey && rules.length > 2 && (
          <div className="mt-3">
            <span className="interface-font text-xs text-spectral">
              Cliquez pour voir {rules.length - 2} règles supplémentaires...
            </span>
          </div>
        )}
      </div>
    </div>
  );

  const ChecklistItem = ({ item, checked, onToggle }) => (
    <div 
      className="flex items-center p-3 glass rounded-lg cursor-pointer hover:bg-aged-gold hover:bg-opacity-10 transition-all duration-300"
      onClick={onToggle}
    >
      <div className={`w-5 h-5 rounded border-2 mr-3 flex items-center justify-center transition-all duration-300 ${
        checked ? 'bg-aged-gold border-aged-gold' : 'border-armor'
      }`}>
        {checked && <span className="text-ash-dark text-sm">✓</span>}
      </div>
      <span className={`interface-font transition-colors duration-300 ${
        checked ? 'text-parchment line-through opacity-60' : 'text-parchment'
      }`}>
        {item}
      </span>
    </div>
  );

  const [checkedItems, setCheckedItems] = useState({});

  const toggleCheck = (itemId) => {
    setCheckedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  const checklistItems = [
    'Vérifier que les couleurs respectent la palette officielle',
    'S\'assurer que le contraste est suffisant pour la lisibilité',
    'Utiliser les bonnes familles de polices (Cinzel, Lora, Poppins)',
    'Respecter les proportions du logo et sa zone de sécurité',
    'Tester l\'affichage sur différentes tailles d\'écran',
    'Valider que les textures n\'interfèrent pas avec la lecture',
    'Vérifier la cohérence avec l\'identité visuelle globale',
    'S\'assurer que les éléments interactifs sont bien identifiables'
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Header */}
      <section className="container mx-auto px-4 mb-16">
        <div className="text-center fade-in">
          <h1 className="title-font text-5xl md:text-6xl font-bold text-gold mb-6">
            Guide d'Usage
          </h1>
          <div className="w-32 h-1 bg-gradient-ember mx-auto mb-8"></div>
          <p className="body-font text-xl text-parchment max-w-3xl mx-auto leading-relaxed">
            Règles essentielles et bonnes pratiques pour maintenir la cohérence 
            et l'impact de l'identité visuelle d'AshenFall à travers tous les supports.
          </p>
        </div>
      </section>

      {/* Quick Reference Cards */}
      <section className="container mx-auto px-4 mb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <GuidelineSection 
            title="Couleurs"
            rules={usageGuidelines.colorRestrictions}
            icon="🎨"
            sectionKey="colors"
          />
          <GuidelineSection 
            title="Logo"
            rules={usageGuidelines.logoRules}
            icon="🛡️"
            sectionKey="logo"
          />
          <GuidelineSection 
            title="Typographie"
            rules={usageGuidelines.typographyBestPractices}
            icon="✍️"
            sectionKey="typography"
          />
          <GuidelineSection 
            title="Adaptation"
            rules={usageGuidelines.adaptationRules}
            icon="🔄"
            sectionKey="adaptation"
          />
        </div>
      </section>

      {/* Detailed Guidelines */}
      <section className="gradient-ash texture-overlay py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="title-font text-4xl font-semibold text-gold mb-8 text-center">
              Règles Détaillées
            </h2>
            
            <div className="glass p-8 rounded-xl mb-12">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Do's Column */}
                <div>
                  <h3 className="title-font text-2xl font-semibold text-spectral mb-6 flex items-center">
                    <span className="text-3xl mr-3">✅</span>
                    À Faire
                  </h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="title-font text-lg font-semibold text-aged-gold mb-3">
                        Couleurs
                      </h4>
                      <ul className="space-y-2 interface-font text-parchment">
                        <li>• Utiliser la palette complète de manière cohérente</li>
                        <li>• Privilégier Cendre Sombre comme couleur dominante</li>
                        <li>• Réserver Rouge Braise pour les accents importants</li>
                        <li>• Maintenir un contraste minimum de 4.5:1</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="title-font text-lg font-semibold text-aged-gold mb-3">
                        Logo & Typographie
                      </h4>
                      <ul className="space-y-2 interface-font text-parchment">
                        <li>• Respecter l'espace de sécurité autour du logo</li>
                        <li>• Utiliser Cinzel uniquement pour les titres</li>
                        <li>• Maintenir la hiérarchie typographique</li>
                        <li>• Tester la lisibilité sur tous les supports</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Don'ts Column */}
                <div>
                  <h3 className="title-font text-2xl font-semibold text-ember mb-6 flex items-center">
                    <span className="text-3xl mr-3">❌</span>
                    À Éviter
                  </h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="title-font text-lg font-semibold text-ember mb-3">
                        Erreurs Fréquentes
                      </h4>
                      <ul className="space-y-2 interface-font text-parchment">
                        <li>• Modifier les codes couleurs de la palette</li>
                        <li>• Utiliser plus de 3 couleurs simultanément</li>
                        <li>• Déformer ou étirer le logo</li>
                        <li>• Mélanger trop de familles de polices</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="title-font text-lg font-semibold text-ember mb-3">
                        Pièges à Éviter
                      </h4>
                      <ul className="space-y-2 interface-font text-parchment">
                        <li>• Placer le logo sur des fonds sans contraste</li>
                        <li>• Abuser des effets et textures</li>
                        <li>• Négliger l'accessibilité et la lisibilité</li>
                        <li>• Ignorer les adaptations mobile</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Checklist */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="title-font text-4xl font-semibold text-gold mb-8 text-center">
            Checklist de Validation
          </h2>
          
          <div className="glass p-8 rounded-xl">
            <p className="body-font text-lg text-parchment mb-8 text-center">
              Utilisez cette checklist pour valider que votre création respecte 
              les guidelines d'AshenFall avant publication.
            </p>
            
            <div className="space-y-3">
              {checklistItems.map((item, index) => (
                <ChecklistItem 
                  key={index}
                  item={item}
                  checked={checkedItems[index] || false}
                  onToggle={() => toggleCheck(index)}
                />
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <div className="inline-flex items-center space-x-4 px-6 py-3 bg-aged-gold bg-opacity-10 rounded-lg">
                <span className="interface-font text-sm text-parchment">
                  Progression:
                </span>
                <div className="flex space-x-1">
                  {Array.from({ length: 10 }, (_, i) => (
                    <div 
                      key={i}
                      className={`w-2 h-2 rounded-full ${
                        i < Math.floor((Object.values(checkedItems).filter(Boolean).length / checklistItems.length) * 10)
                          ? 'bg-aged-gold' 
                          : 'bg-armor'
                      }`}
                    ></div>
                  ))}
                </div>
                <span className="interface-font text-sm text-aged-gold font-semibold">
                  {Math.round((Object.values(checkedItems).filter(Boolean).length / checklistItems.length) * 100)}%
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Consistency Examples */}
      <section className="gradient-ash texture-overlay py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="title-font text-4xl font-semibold text-gold mb-8 text-center">
              Exemples de Cohérence
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Correct Example */}
              <div className="glass p-6 rounded-xl">
                <h3 className="title-font text-xl font-semibold text-spectral mb-4 flex items-center">
                  <span className="text-2xl mr-2">✅</span>
                  Application Correcte
                </h3>
                
                <div className="space-y-4">
                  <div className="p-4 bg-ash-dark rounded-lg border border-aged-gold border-opacity-30">
                    <div className="flex items-center space-x-3 mb-3">
                      <img src={require('../components/AshenFall logo.png')} alt="AshenFall logo" style={{height:'28px',maxWidth:'70%',objectFit:'contain',display:'inline-block',verticalAlign:'middle'}} />
                      <span className="title-font text-lg text-gold font-semibold">ASHENFALL</span>
                    </div>
                    <h4 className="title-font text-lg text-spectral font-semibold mb-2">
                      Nouvelle Quête Disponible
                    </h4>
                    <p className="body-font text-sm text-parchment leading-relaxed mb-3">
                      Explorez les ruines oubliées et découvrez les secrets des anciens maîtres.
                    </p>
                    <button className="btn-primary text-sm px-4 py-2">
                      Commencer l'Aventure
                    </button>
                  </div>
                  
                  <div className="text-xs interface-font text-parchment space-y-1">
                    <div>✓ Palette de couleurs respectée</div>
                    <div>✓ Typographies appropriées</div>
                    <div>✓ Logo bien proportionné</div>
                    <div>✓ Hiérarchie visuelle claire</div>
                  </div>
                </div>
              </div>

              {/* Incorrect Example */}
              <div className="glass p-6 rounded-xl">
                <h3 className="title-font text-xl font-semibold text-ember mb-4 flex items-center">
                  <span className="text-2xl mr-2">❌</span>
                  Application Incorrecte
                </h3>
                
                <div className="space-y-4">
                  <div className="p-4 bg-red-900 bg-opacity-20 rounded-lg border border-ember border-opacity-50">
                    <div className="flex items-center space-x-3 mb-3">
                      <img src={require('../components/AshenFall logo.png')} alt="AshenFall logo" style={{height:'28px',maxWidth:'70%',objectFit:'contain',display:'inline-block',verticalAlign:'middle',transform:'scaleX(1.5)'}} />
                      <span className="text-lg text-red-400 font-bold" style={{fontFamily: 'Arial'}}>
                        ASHENFALL
                      </span>
                    </div>
                    <h4 className="text-lg text-blue-400 font-bold mb-2" style={{fontFamily: 'Times'}}>
                      Nouvelle Quête Disponible
                    </h4>
                    <p className="text-sm text-green-300 leading-relaxed mb-3" style={{fontFamily: 'Courier'}}>
                      Explorez les ruines oubliées et découvrez les secrets des anciens maîtres.
                    </p>
                    <button className="bg-purple-600 text-white px-4 py-2 rounded">
                      Commencer l'Aventure
                    </button>
                  </div>
                  
                  <div className="text-xs interface-font text-ember space-y-1">
                    <div>❌ Couleurs non autorisées</div>
                    <div>❌ Polices inappropriées</div>
                    <div>❌ Logo déformé</div>
                    <div>❌ Manque de cohérence</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Support */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="title-font text-4xl font-semibold text-gold mb-8">
            Besoin d'Aide ?
          </h2>
          
          <div className="glass p-8 rounded-xl">
            <p className="body-font text-lg text-parchment mb-8">
              Pour toute question concernant l'application de ces guidelines 
              ou pour obtenir des ressources supplémentaires, contactez l'équipe créative.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-3">📧</div>
                <h3 className="title-font text-lg font-semibold text-spectral mb-2">
                  Questions Générales
                </h3>
                <p className="interface-font text-sm text-parchment">
                  brand@ashenfall.com
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl mb-3">🎨</div>
                <h3 className="title-font text-lg font-semibold text-spectral mb-2">
                  Support Créatif
                </h3>
                <p className="interface-font text-sm text-parchment">
                  creative@ashenfall.com
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl mb-3">📚</div>
                <h3 className="title-font text-lg font-semibold text-spectral mb-2">
                  Ressources
                </h3>
                <p className="interface-font text-sm text-parchment">
                  resources.ashenfall.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Guidelines;