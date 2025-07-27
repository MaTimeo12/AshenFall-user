import React, { useState, useEffect } from 'react';
import { videoTeaserMockup } from '../data/mockData';

const VideoTeaser = () => {
  const [currentScene, setCurrentScene] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress(prev => {
          const newProgress = prev + 1;
          if (newProgress >= 100) {
            setIsPlaying(false);
            setCurrentScene(0);
            return 0;
          }
          
          // Update current scene based on progress
          if (newProgress < 8) setCurrentScene(0);
          else if (newProgress < 25) setCurrentScene(1);
          else if (newProgress < 58) setCurrentScene(2);
          else if (newProgress < 83) setCurrentScene(3);
          else setCurrentScene(4);
          
          return newProgress;
        });
      }, 150);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
    if (progress === 100) {
      setProgress(0);
      setCurrentScene(0);
    }
  };

  const ScenePreview = ({ scene, index, isActive }) => (
    <div 
      className={`transition-all duration-500 cursor-pointer ${
        isActive ? 'scale-105 ring-2 ring-aged-gold' : 'opacity-70 hover:opacity-100'
      }`}
      onClick={() => {
        setCurrentScene(index);
        setIsPlaying(false);
        setProgress(index * 20);
      }}
    >
      <div className="glass p-4 rounded-xl">
        <div className="w-full h-24 bg-gradient-to-br from-ash-dark to-armor-grey rounded-lg mb-3 overflow-hidden relative">
          {/* Scene Visual Preview */}
          {index === 0 && (
            <div className="h-full bg-gradient-to-t from-ash-dark to-transparent flex items-center justify-center">
              <div className="text-xs text-parchment opacity-50">Fondu noir</div>
            </div>
          )}
          {index === 1 && (
            <div className="h-full bg-gradient-gold flex items-center justify-center">
              <img src={require('../components/ashen fall no bg.png')} alt="AshenFall logo" style={{height:'28px',maxWidth:'70%',objectFit:'contain',display:'block',margin:'0 auto'}} />
            </div>
          )}
          {index === 2 && (
            <div className="h-full bg-gradient-to-br from-ember to-spectral flex items-center justify-center">
              <div className="text-white text-lg">⚔️</div>
            </div>
          )}
          {index === 3 && (
            <div className="h-full" style={{
              backgroundImage: 'radial-gradient(circle at center, rgba(217,203,163,0.3) 0%, rgba(217,203,163,0.1) 100%)',
              backgroundSize: '20px 20px'
            }}>
              <div className="h-full flex items-center justify-center">
                <div className="text-aged-gold">⚜</div>
              </div>
            </div>
          )}
          {index === 4 && (
            <div className="h-full bg-gradient-to-b from-aged-gold to-ash-dark flex items-center justify-center">
              <div className="title-font text-xs text-ash-dark font-bold">ASHENFALL</div>
            </div>
          )}
        </div>
        
        <div className="text-center">
          <div className="interface-font text-xs text-aged-gold font-semibold mb-1">
            {scene.time}
          </div>
          <div className="interface-font text-xs text-parchment leading-tight">
            {scene.description}
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
            Maquette Vidéo Teaser
          </h1>
          <div className="w-32 h-1 bg-gradient-ember mx-auto mb-8"></div>
          <p className="body-font text-xl text-parchment max-w-3xl mx-auto leading-relaxed">
            Une maquette complète de teaser vidéo de 60 secondes, orchestrant 
            l'identité visuelle d'AshenFall dans une expérience cinématographique immersive.
          </p>
        </div>
      </section>

      {/* Main Video Player Mockup */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-4xl mx-auto">
          <div className="glass p-8 rounded-xl">
            {/* Video Frame */}
            <div className="relative aspect-video bg-gradient-to-br from-ash-dark to-armor-grey rounded-lg overflow-hidden mb-6 shadow-2xl">
              {/* Current Scene Display */}
              <div className="absolute inset-0">
                {currentScene === 0 && (
                  <div className="h-full bg-gradient-to-t from-ash-dark via-ash-dark to-transparent flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="interface-font text-parchment opacity-60">Fondu d'ouverture</div>
                      <div className="text-2xl opacity-30">🌫️</div>
                    </div>
                  </div>
                )}
                
                {currentScene === 1 && (
                  <div className="h-full bg-gradient-to-radial from-aged-gold via-ash-dark to-ash-dark flex items-center justify-center">
                    <div className="text-center space-y-6">
                      <img src={require('../components/ashen fall no bg.png')} alt="AshenFall logo" style={{height:'64px',maxWidth:'90%',objectFit:'contain',display:'block',margin:'0 auto'}} className="animate-pulse" />
                      <div className="title-font text-4xl text-gold font-bold tracking-wider">
                        ASHENFALL
                      </div>
                      <div className="w-32 h-1 bg-gradient-ember mx-auto"></div>
                    </div>
                  </div>
                )}
                
                {currentScene === 2 && (
                  <div className="h-full bg-gradient-to-br from-ember via-ash-dark to-spectral relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="grid grid-cols-3 gap-4 text-4xl text-white opacity-80">
                        <div className="animate-pulse">⚔️</div>
                        <div className="animate-pulse" style={{animationDelay: '0.5s'}}>🏰</div>
                        <div className="animate-pulse" style={{animationDelay: '1s'}}>✨</div>
                      </div>
                    </div>
                    <div className="absolute bottom-8 left-8">
                      <div className="interface-font text-white text-lg font-semibold">
                        Gameplay Intense
                      </div>
                    </div>
                  </div>
                )}
                
                {currentScene === 3 && (
                  <div className="h-full relative" style={{
                    backgroundImage: 'radial-gradient(circle at center, rgba(217,203,163,0.3) 0%, rgba(217,203,163,0.1) 100%)',
                    backgroundColor: '#1B1B1E'
                  }}>
                    <div className="absolute inset-0 bg-gradient-to-t from-ash-dark via-transparent to-ash-dark opacity-80"></div>
                    <div className="relative h-full flex flex-col justify-center items-center space-y-8 text-center">
                      <div className="title-font text-3xl text-gold font-bold">
                        "Forgez votre légende"
                      </div>
                      <div className="body-font text-xl text-parchment max-w-2xl leading-relaxed">
                        Un monde à reconquérir
                      </div>
                      <div className="flex space-x-4 text-2xl text-aged-gold">
                        <span className="animate-pulse">⚜</span>
                        <span className="animate-pulse" style={{animationDelay: '0.5s'}}>※</span>
                        <span className="animate-pulse" style={{animationDelay: '1s'}}>⚜</span>
                      </div>
                    </div>
                  </div>
                )}
                
                {currentScene === 4 && (
                  <div className="h-full bg-gradient-to-t from-ash-dark via-aged-gold to-ash-dark flex items-center justify-center">
                    <div className="text-center space-y-6">
                      <div className="flex items-center justify-center space-x-4">
                        <img src={require('../components/ashen fall no bg.png')} alt="AshenFall logo" style={{height:'40px',maxWidth:'80%',objectFit:'contain',display:'block',margin:'0 auto'}} />
                        <div className="title-font text-3xl text-gold font-bold tracking-wider">
                          ASHENFALL
                        </div>
                      </div>
                      <div className="bg-ember px-6 py-3 rounded-full">
                        <span className="interface-font text-lg text-gold font-bold">
                          Disponible maintenant
                        </span>
                      </div>
                      <div className="interface-font text-sm text-parchment">
                        PC • PlayStation • Xbox
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button 
                  onClick={handlePlay}
                  className={`w-20 h-20 bg-aged-gold bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all duration-300 shadow-2xl ${
                    isPlaying ? 'scale-95' : 'hover:scale-110'
                  }`}
                >
                  <span className="text-ash-dark text-2xl ml-1">
                    {isPlaying ? '⏸️' : '▶️'}
                  </span>
                </button>
              </div>

              {/* Progress Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-2 bg-ash-dark bg-opacity-50">
                <div 
                  className="h-full bg-gradient-ember transition-all duration-150"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>

              {/* Scene Indicators */}
              <div className="absolute top-4 right-4 space-y-1">
                {videoTeaserMockup.scenes.map((_, index) => (
                  <div 
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentScene === index ? 'bg-aged-gold' : 'bg-parchment bg-opacity-30'
                    }`}
                  ></div>
                ))}
              </div>
            </div>

            {/* Video Info */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <h2 className="title-font text-2xl font-semibold text-gold mb-4">
                  {videoTeaserMockup.title}
                </h2>
                <div className="flex items-center space-x-6 mb-4">
                  <span className="interface-font text-sm px-3 py-1 bg-spectral bg-opacity-20 text-spectral rounded">
                    {videoTeaserMockup.duration}
                  </span>
                  <span className="interface-font text-sm px-3 py-1 bg-aged-gold bg-opacity-20 text-aged-gold rounded">
                    {videoTeaserMockup.resolution}
                  </span>
                </div>
                <p className="body-font text-parchment leading-relaxed mb-4">
                  Ce teaser orchestré présente l'univers d'AshenFall à travers une progression 
                  dramatique qui capture l'essence du jeu : des cendres du passé à l'espoir de renaissance.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="interface-font text-sm text-armor">Color Grading:</span>
                    <span className="interface-font text-sm text-parchment">{videoTeaserMockup.colorGrading}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="interface-font text-sm text-armor">Audio Design:</span>
                    <span className="interface-font text-sm text-parchment">{videoTeaserMockup.audioDesign}</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="title-font text-lg font-semibold text-spectral mb-3">
                  Contrôles
                </h3>
                <div className="space-y-2">
                  <button 
                    onClick={handlePlay}
                    className="w-full btn-primary text-sm py-2"
                  >
                    {isPlaying ? 'Pause' : 'Lecture'}
                  </button>
                  <button 
                    onClick={() => {
                      setProgress(0);
                      setCurrentScene(0);
                      setIsPlaying(false);
                    }}
                    className="w-full btn-secondary text-sm py-2"
                  >
                    Redémarrer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scenes Timeline */}
      <section className="gradient-ash texture-overlay py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="title-font text-4xl font-semibold text-gold mb-8 text-center">
              Séquençage des Scènes
            </h2>
            
            <div className="grid md:grid-cols-5 gap-4 mb-12">
              {videoTeaserMockup.scenes.map((scene, index) => (
                <ScenePreview 
                  key={index}
                  scene={scene}
                  index={index}
                  isActive={currentScene === index}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Scene Details */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="glass p-8 rounded-xl">
            <h2 className="title-font text-3xl font-semibold text-gold mb-6">
              Scène Active: {videoTeaserMockup.scenes[currentScene].time}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="title-font text-xl font-semibold text-spectral mb-4">
                  Description
                </h3>
                <p className="body-font text-lg text-parchment leading-relaxed mb-6">
                  {videoTeaserMockup.scenes[currentScene].description}
                </p>
                
                <h3 className="title-font text-xl font-semibold text-spectral mb-4">
                  Transition
                </h3>
                <p className="interface-font text-parchment">
                  {videoTeaserMockup.scenes[currentScene].transition}
                </p>
              </div>
              
              <div>
                <h3 className="title-font text-xl font-semibold text-spectral mb-4">
                  Éléments Visuels & Audio
                </h3>
                <div className="space-y-3">
                  {videoTeaserMockup.scenes[currentScene].elements.map((element, index) => (
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
          </div>
        </div>
      </section>

      {/* Production Notes */}
      <section className="gradient-ash texture-overlay py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="title-font text-4xl font-semibold text-gold mb-8 text-center">
              Notes de Production
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass p-6 rounded-xl">
                <h3 className="title-font text-xl font-semibold text-spectral mb-4">
                  Direction Artistique
                </h3>
                <ul className="space-y-3 interface-font text-parchment">
                  <li className="flex items-start">
                    <span className="text-aged-gold mr-2 mt-1">•</span>
                    <span>Utilisation exclusive de la palette AshenFall</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-aged-gold mr-2 mt-1">•</span>
                    <span>Typographie Cinzel pour tous les titres</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-aged-gold mr-2 mt-1">•</span>
                    <span>Intégration des textures et motifs runiques</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-aged-gold mr-2 mt-1">•</span>
                    <span>Progression lumineuse : sombre → éclatant → sombre</span>
                  </li>
                </ul>
              </div>
              
              <div className="glass p-6 rounded-xl">
                <h3 className="title-font text-xl font-semibold text-spectral mb-4">
                  Spécifications Techniques
                </h3>
                <ul className="space-y-3 interface-font text-parchment">
                  <li className="flex items-start">
                    <span className="text-aged-gold mr-2 mt-1">•</span>
                    <span>Export en 4K (3840×2160) pour qualité optimale</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-aged-gold mr-2 mt-1">•</span>
                    <span>Frame rate: 24fps pour l'aspect cinématique</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-aged-gold mr-2 mt-1">•</span>
                    <span>Audio: 48kHz/24-bit pour qualité studio</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-aged-gold mr-2 mt-1">•</span>
                    <span>Formats: MP4 (web), ProRes (broadcast)</span>
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

export default VideoTeaser;