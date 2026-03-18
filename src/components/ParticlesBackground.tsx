import { useEffect, useState, useMemo } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { ISourceOptions } from '@tsparticles/engine';

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: false,
      background: { color: { value: 'transparent' } },
      fpsLimit: 60,
      particles: {
        color: { value: '#4a7aff' },
        links: {
          color: '#4a7aff',
          distance: 150,
          enable: true,
          opacity: 0.15,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.6,
          direction: 'none' as const,
          outModes: { default: 'bounce' as const },
        },
        number: {
          density: { enable: true },
          value: 80,
        },
        opacity: { value: 0.3 },
        shape: { type: 'circle' },
        size: { value: { min: 1, max: 2 } },
      },
      detectRetina: true,
    }),
    []
  );

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      className="absolute inset-0 z-0"
      options={options}
    />
  );
};

export default ParticlesBackground;
