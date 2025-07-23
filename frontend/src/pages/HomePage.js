import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      title: 'Palette de Couleurs',
      description: 'Découvrez les 6 couleurs principales d\'AshenFall avec leurs codes et usages',
      icon: '🎨',
      path: '/colors',
      gradient: 'from-aged-gold to-ember-red'
    },
    {
      title: 'Typographies',
      description: 'Explorez les polices Cinzel, Lora et Poppins avec leurs applications',
      icon: '✍️',
      path: '/typography',
      gradient: 'from-spectral-blue to-aged-gold'
    },
    {
      title: 'Logos & Symboles',
      description: 'Versions du logo avec l\'arbre mort stylisé et règles d\'usage',
      icon: '🛡️',
      path: '/logo',
      gradient: 'from-ember-red to-armor-grey'
    },
    {
      title: 'Textures & Motifs',
      description: 'Textures pierre, cuir, bois brûlé et motifs runiques',
      icon: '🎭',
      path: '/textures',
      gradient: 'from-armor-grey to-spectral-blue'
    },
    {
      title: 'Templates TikTok',
      description: 'Formats 9:16 pour teaser, storytelling et devlog',
      icon: '📱',
      path: '/tiktok',
      gradient: 'from-aged-gold to-spectral-blue'
    },
    {
      title: 'Maquette Vidéo',
      description: 'Teaser animé avec dégradés et éléments immersifs',
      icon: '🎬',
      path: '/video',
      gradient: 'from-ember-red to-aged-gold'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-ash"></div>
        <div className="absolute inset-0 texture-overlay"></div>
        
        <div className="relative container mx-auto px-4 py-32">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
            {/* Logo Symbol */}
            <div className="mb-8 float">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-gold rounded-full shadow-2xl">
                <span className="text-4xl">🌳</span>
              </div>
            </div>

            {/* Main Title */}
            <h1 className="title-font text-6xl md:text-8xl font-bold text-gold mb-6 tracking-wider">
              ASHENFALL
            </h1>
            
            <div className="w-32 h-1 bg-gradient-ember mx-auto mb-8"></div>
            
            <p className="body-font text-xl md:text-2xl text-parchment mb-4 max-w-3xl mx-auto leading-relaxed">
              Charte Graphique Complète
            </p>
            
            <p className="interface-font text-lg text-armor opacity-90 mb-12 max-w-2xl mx-auto">
              Découvrez l'univers visuel d'AshenFall : couleurs, typographies, logos et guidelines 
              pour un MMORPG médiéval fantasy au style dark fantasy immersif.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/colors" className="btn-primary text-lg px-8 py-4 hover-lift">
                Explorer la Charte
              </Link>
              <Link to="/guidelines" className="btn-secondary text-lg px-8 py-4 hover-lift">
                Guide d'Usage
              </Link>
            </div>
          </div>
        </div>

        {/* Animated particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-aged-gold rounded-full opacity-30 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding bg-gradient-to-b from-ash-dark to-armor-grey">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="title-font text-4xl md:text-5xl font-semibold text-gold mb-6">
              Éléments de la Charte
            </h2>
            <p className="body-font text-lg text-parchment max-w-2xl mx-auto">
              Explorez chaque composant de l'identité visuelle d'AshenFall, 
              conçue pour créer une expérience immersive et cohérente.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Link
                key={index}
                to={feature.path}
                className={`glass p-8 rounded-xl hover-lift group transition-all duration-500 ${
                  isVisible ? 'slide-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="title-font text-xl font-semibold text-gold mb-3 group-hover:text-ember transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="interface-font text-parchment opacity-90 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className={`mt-6 h-1 bg-gradient-to-r ${feature.gradient} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Universe Description */}
      <section className="section-padding gradient-ash texture-overlay">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="title-font text-4xl font-semibold text-gold mb-8">
              L'Univers d'AshenFall
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <p className="body-font text-lg text-parchment mb-6 leading-relaxed">
                  <strong className="text-gold">AshenFall</strong> plonge les joueurs dans un univers 
                  médiéval fantasy sombre, où les cendres du passé nourrissent l'espoir d'un avenir 
                  meilleur. Cette charte graphique capture l'essence de ce monde épique.
                </p>
                <p className="body-font text-lg text-parchment leading-relaxed">
                  Chaque élément visuel a été pensé pour évoquer la grandeur déchue, 
                  la magie mystérieuse et l'héroïsme naissant qui caractérisent l'expérience de jeu.
                </p>
              </div>
              <div className="relative">
                <div className="w-64 h-64 mx-auto bg-gradient-gold rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-8xl opacity-40">🏰</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-16 bg-armor-grey">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="title-font text-2xl font-semibold text-gold mb-8">
              Navigation Rapide
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {features.slice(0, 4).map((feature, index) => (
                <Link
                  key={index}
                  to={feature.path}
                  className="interface-font px-6 py-3 bg-ash-dark text-parchment rounded-lg hover:bg-aged-gold hover:text-ash-dark transition-all duration-300 hover-lift"
                >
                  {feature.icon} {feature.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;