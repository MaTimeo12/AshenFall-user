import React, { useState } from 'react';
import { tiktokTemplates } from '../data/mockData';

const TikTokTemplates = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(0);

  const TemplatePreview = ({ template, index, isActive }) => (
    <div 
      className={`cursor-pointer transition-all duration-500 ${
        isActive ? 'scale-105' : 'hover:scale-102'
      }`}
      onClick={() => setSelectedTemplate(index)}
    >
      {/* Mobile Frame */}
      <div className={`relative mx-auto w-48 h-80 bg-gradient-to-b from-ash-dark to-armor-grey rounded-3xl p-2 shadow-2xl ${
        isActive ? 'ring-4 ring-aged-gold ring-opacity-60' : ''
      }`}>
        {/* Screen */}
        <div className="w-full h-full bg-gradient-to-br from-ash-dark via-armor-grey to-ash-dark rounded-2xl overflow-hidden relative">
          {/* Template Content Based on Type */}
          {template.name === 'Teaser de Nouveauté' && (
            <div className="h-full flex flex-col justify-between p-4 text-center">
              <div className="flex-1 flex items-center justify-center">
                <img src={require('../components/AshenFall logo.png')} alt="AshenFall logo" style={{height:'40px',maxWidth:'80%',objectFit:'contain',display:'block',margin:'0 auto'}} />
              </div>
              <div className="space-y-2">
                <div className="bg-ember px-3 py-1 rounded-full">
                  <span className="interface-font text-xs text-gold font-bold">NOUVEAUTÉ !</span>
                </div>
                {/* <div className="title-font text-gold text-sm font-semibold">ASHENFALL</div> */}
                <div className="interface-font text-parchment text-xs">Nouvelle mise à jour</div>
              </div>
              <div className="interface-font text-xs text-spectral">Disponible maintenant</div>
            </div>
          )}

          {template.name === 'Storytelling Immersif' && (
            <div className="h-full relative" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(217,203,163,0.1) 1px, transparent 0)',
              backgroundSize: '20px 20px'
            }}>
              <div className="absolute inset-0 bg-gradient-to-t from-ash-dark via-transparent to-ash-dark opacity-80"></div>
              <div className="relative h-full flex flex-col justify-between p-4">
                <div className="title-font text-gold text-lg font-bold text-center">
                  Les Terres Oubliées
                </div>
                <div className="flex-1 flex items-center">
                  <div className="body-font text-parchment text-xs leading-relaxed">
                    "Dans les cendres d'un royaume déchu, les héros forgent leur légende..."
                  </div>
                </div>
                <div className="flex justify-center space-x-2 text-aged-gold">
                  <span>⚜</span><span>※</span><span>⚜</span>
                </div>
              </div>
            </div>
          )}

          {template.name === 'Devlog Technique' && (
            <div className="h-full p-4">
              <div className="space-y-3">
                <div className="interface-font text-gold text-sm font-bold text-center">
                  Devlog #42
                </div>
                
                <div className="grid grid-cols-2 gap-1">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="aspect-square bg-aged-gold bg-opacity-20 rounded border border-aged-gold border-opacity-30"></div>
                  ))}
                </div>
                
                <div className="space-y-1">
                  <div className="interface-font text-parchment text-xs">✓ Système de combat amélioré</div>
                  <div className="interface-font text-parchment text-xs">✓ Nouvelles animations</div>
                  <div className="interface-font text-parchment text-xs">✓ Optimisations graphiques</div>
                </div>
                
                <div className="text-center">
                  <div className="interface-font text-spectral text-xs">Plus d'infos ↗</div>
                </div>
              </div>
            </div>
          )}

          {template.name === 'Gameplay Showcase' && (
            <div className="h-full relative bg-gradient-to-br from-armor-grey to-ash-dark">
              <div className="absolute inset-0">
                <div className="w-full h-1/3 bg-gradient-to-b from-ember to-transparent opacity-20"></div>
                <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-ash-dark to-transparent"></div>
              </div>
              
              <div className="relative h-full flex flex-col justify-between p-4">
                <div className="text-center">
                  <div className="title-font text-ember text-sm font-bold">COMBAT ÉPIQUE</div>
                </div>
                
                <div className="text-center text-4xl">⚔️</div>
                
                <div className="space-y-1 text-center">
                  <div className="interface-font text-aged-gold text-xs">Dégâts: +250</div>
                  <div className="interface-font text-aged-gold text-xs">Combo x5</div>
                  <div className="interface-font text-spectral text-xs">Jouer maintenant</div>
                </div>
              </div>
            </div>
          )}

          {/* Play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className={`w-12 h-12 bg-aged-gold bg-opacity-90 rounded-full flex items-center justify-center transition-opacity duration-300 ${
              isActive ? 'opacity-100' : 'opacity-0'
            }`}>
              <span className="text-ash-dark text-xl">▶</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Template Name */}
      <div className="text-center mt-4">
        <h3 className={`interface-font font-semibold transition-colors duration-300 ${
          isActive ? 'text-aged-gold' : 'text-parchment'
        }`}>
          {template.name}
        </h3>
        <p className="interface-font text-xs text-armor mt-1">
          {template.duration}
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
            Templates TikTok
          </h1>
          <div className="w-32 h-1 bg-gradient-ember mx-auto mb-8"></div>
          <p className="body-font text-xl text-parchment max-w-3xl mx-auto leading-relaxed">
            Des formats verticaux 9:16 optimisés pour présenter AshenFall sur les réseaux sociaux 
            avec un impact visuel maximal et une cohérence parfaite avec l'identité de marque.
          </p>
        </div>
      </section>

      {/* Templates Preview Grid */}
      <section className="container mx-auto px-4 mb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {tiktokTemplates.map((template, index) => (
            <TemplatePreview 
              key={index}
              template={template}
              index={index}
              isActive={selectedTemplate === index}
            />
          ))}
        </div>
      </section>

      {/* Selected Template Details */}
      <section className="gradient-ash texture-overlay py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="glass p-8 rounded-xl">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Template Info */}
                <div className="md:col-span-2 space-y-6">
                  <div>
                    <h2 className="title-font text-3xl font-semibold text-gold mb-2">
                      {tiktokTemplates[selectedTemplate].name}
                    </h2>
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="interface-font text-sm px-3 py-1 bg-spectral bg-opacity-20 text-spectral rounded">
                        {tiktokTemplates[selectedTemplate].format}
                      </span>
                      <span className="interface-font text-sm px-3 py-1 bg-aged-gold bg-opacity-20 text-aged-gold rounded">
                        {tiktokTemplates[selectedTemplate].duration}
                      </span>
                    </div>
                    <p className="body-font text-lg text-parchment leading-relaxed">
                      {tiktokTemplates[selectedTemplate].description}
                    </p>
                  </div>

                  {/* Elements List */}
                  <div>
                    <h3 className="title-font text-xl font-semibold text-spectral mb-4">
                      Éléments du Template
                    </h3>
                    <div className="space-y-3">
                      {tiktokTemplates[selectedTemplate].elements.map((element, index) => (
                        <div key={index} className="flex items-start">
                          <span className="text-aged-gold mr-3 mt-1">•</span>
                          <span className="interface-font text-parchment leading-relaxed">
                            {element}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Template Preview Large */}
                <div className="flex justify-center">
                  <div className="w-56 h-96 bg-gradient-to-b from-ash-dark to-armor-grey rounded-3xl p-3 shadow-2xl">
                    <div className="w-full h-full bg-gradient-to-br from-ash-dark via-armor-grey to-ash-dark rounded-2xl overflow-hidden relative">
                      {/* Render the selected template with more detail */}
                      {selectedTemplate === 0 && (
                        <div className="h-full flex flex-col justify-between p-6 text-center">
                          <div className="flex-1 flex items-center justify-center">
                            <div className="space-y-4">
                              <img src={require('../components/AshenFall logo.png')} alt="AshenFall logo" style={{height:'48px',maxWidth:'90%',objectFit:'contain',display:'block',margin:'0 auto'}} className="animate-pulse" />
                              <div className="w-16 h-1 bg-gradient-ember mx-auto rounded"></div>
                            </div>
                          </div>
                          <div className="space-y-3">
                            <div className="bg-ember px-4 py-2 rounded-full shadow-lg">
                              <span className="interface-font text-sm text-gold font-bold">NOUVEAUTÉ !</span>
                            </div>
                            <div className="title-font text-gold text-lg font-bold tracking-wider">ASHENFALL</div>
                            <div className="interface-font text-parchment text-sm">Nouvelle mise à jour disponible</div>
                          </div>
                          <div className="interface-font text-sm text-spectral font-semibold">
                            Disponible maintenant →
                          </div>
                        </div>
                      )}

                      {selectedTemplate === 1 && (
                        <div className="h-full relative" style={{
                          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(217,203,163,0.15) 1px, transparent 0)',
                          backgroundSize: '25px 25px'
                        }}>
                          <div className="absolute inset-0 bg-gradient-to-t from-ash-dark via-transparent to-ash-dark opacity-90"></div>
                          <div className="relative h-full flex flex-col justify-between p-6">
                            <div className="title-font text-gold text-xl font-bold text-center">
                              Les Terres Oubliées
                            </div>
                            <div className="flex-1 flex items-center">
                              <div className="space-y-4">
                                <div className="body-font text-parchment text-sm leading-relaxed text-center">
                                  "Dans les cendres d'un royaume déchu..."
                                </div>
                                <div className="body-font text-parchment text-sm leading-relaxed text-center">
                                  "...les héros forgent leur légende."
                                </div>
                              </div>
                            </div>
                            <div className="flex justify-center space-x-3 text-aged-gold text-lg">
                              <span>⚜</span><span>※</span><span>⚜</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {selectedTemplate === 2 && (
                        <div className="h-full p-6">
                          <div className="space-y-4">
                            <div className="interface-font text-gold text-lg font-bold text-center">
                              Devlog #42
                            </div>
                            
                            <div className="grid grid-cols-2 gap-2">
                              {[...Array(4)].map((_, i) => (
                                <div key={i} className="aspect-square bg-aged-gold bg-opacity-30 rounded-lg border border-aged-gold border-opacity-50 flex items-center justify-center">
                                  <span className="text-aged-gold text-sm">📸</span>
                                </div>
                              ))}
                            </div>
                            
                            <div className="space-y-2">
                              <div className="interface-font text-parchment text-sm">✓ Système de combat</div>
                              <div className="interface-font text-parchment text-sm">✓ Nouvelles animations</div>
                              <div className="interface-font text-parchment text-sm">✓ Optimisations</div>
                            </div>
                            
                            <div className="text-center pt-4">
                              <div className="interface-font text-spectral text-sm font-semibold">
                                Plus d'infos ↗
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {selectedTemplate === 3 && (
                        <div className="h-full relative bg-gradient-to-br from-armor-grey to-ash-dark">
                          <div className="absolute inset-0">
                            <div className="w-full h-1/3 bg-gradient-to-b from-ember to-transparent opacity-30"></div>
                            <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-ash-dark to-transparent"></div>
                          </div>
                          
                          <div className="relative h-full flex flex-col justify-between p-6">
                            <div className="text-center">
                              <div className="title-font text-ember text-lg font-bold">COMBAT ÉPIQUE</div>
                            </div>
                            
                            <div className="text-center space-y-4">
                              <div className="text-5xl">⚔️</div>
                              <div className="w-20 h-1 bg-gradient-ember mx-auto rounded"></div>
                            </div>
                            
                            <div className="space-y-2 text-center">
                              <div className="interface-font text-aged-gold text-sm font-semibold">Dégâts: +250</div>
                              <div className="interface-font text-aged-gold text-sm font-semibold">Combo x5</div>
                              <div className="interface-font text-spectral text-sm font-bold">Jouer maintenant</div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Strategy */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="title-font text-4xl font-semibold text-gold mb-8 text-center">
            Stratégie de Contenu
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Content Calendar */}
            <div className="glass p-6 rounded-xl">
              <h3 className="title-font text-xl font-semibold text-spectral mb-4">
                📅 Calendrier Suggéré
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-ash-dark bg-opacity-30 rounded">
                  <span className="interface-font text-sm text-parchment">Lundi</span>
                  <span className="interface-font text-xs text-aged-gold">Teaser Nouveauté</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-ash-dark bg-opacity-30 rounded">
                  <span className="interface-font text-sm text-parchment">Mercredi</span>
                  <span className="interface-font text-xs text-spectral">Storytelling</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-ash-dark bg-opacity-30 rounded">
                  <span className="interface-font text-sm text-parchment">Vendredi</span>
                  <span className="interface-font text-xs text-ember">Gameplay</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-ash-dark bg-opacity-30 rounded">
                  <span className="interface-font text-sm text-parchment">Dimanche</span>
                  <span className="interface-font text-xs text-armor">Devlog</span>
                </div>
              </div>
            </div>

            {/* Best Practices */}
            <div className="glass p-6 rounded-xl">
              <h3 className="title-font text-xl font-semibold text-spectral mb-4">
                💡 Bonnes Pratiques
              </h3>
              <ul className="space-y-3 interface-font text-parchment">
                <li className="flex items-start">
                  <span className="text-aged-gold mr-2 mt-1">•</span>
                  <span>Hook dans les 3 premières secondes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-aged-gold mr-2 mt-1">•</span>
                  <span>Textes lisibles même sans son</span>
                </li>
                <li className="flex items-start">
                  <span className="text-aged-gold mr-2 mt-1">•</span>
                  <span>Call-to-action clair et visible</span>
                </li>
                <li className="flex items-start">
                  <span className="text-aged-gold mr-2 mt-1">•</span>
                  <span>Cohérence avec l'identité visuelle</span>
                </li>
                <li className="flex items-start">
                  <span className="text-aged-gold mr-2 mt-1">•</span>
                  <span>Adaptation aux tendances actuelles</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="gradient-ash texture-overlay py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="title-font text-4xl font-semibold text-gold mb-8 text-center">
              Spécifications Techniques
            </h2>
            
            <div className="glass p-8 rounded-xl">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="title-font text-lg font-semibold text-spectral mb-3">
                    Format & Résolution
                  </h3>
                  <ul className="space-y-2 interface-font text-sm text-parchment">
                    <li>• Ratio: 9:16 (vertical)</li>
                    <li>• Résolution: 1080x1920px</li>
                    <li>• Frame rate: 30fps minimum</li>
                    <li>• Format: MP4, MOV</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="title-font text-lg font-semibold text-spectral mb-3">
                    Durée & Contenu
                  </h3>
                  <ul className="space-y-2 interface-font text-sm text-parchment">
                    <li>• Teaser: 15-30 secondes</li>
                    <li>• Story: 30-60 secondes</li>
                    <li>• Devlog: 45-90 secondes</li>
                    <li>• Gameplay: 30-45 secondes</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="title-font text-lg font-semibold text-spectral mb-3">
                    Zones de Sécurité
                  </h3>
                  <ul className="space-y-2 interface-font text-sm text-parchment">
                    <li>• Haut: 120px (interface)</li>
                    <li>• Bas: 180px (descriptions)</li>
                    <li>• Côtés: 60px (sécurité)</li>
                    <li>• Centre: contenu principal</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TikTokTemplates;