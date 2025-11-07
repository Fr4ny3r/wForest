import React, { useRef } from 'react';
// Importa los tipos necesarios de React
import type { FC } from 'react'; 

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// 1. Registrar el plugin (se hace una sola vez al inicio de la aplicación o del módulo)
// Es una buena práctica hacerlo antes de que se monte cualquier componente.
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Define la interfaz para el objeto que vamos a animar
interface ImageSequence {
  frame: number;
}

const ImageSequenceScroll: FC = () => {
  // 2. Definición de Referencias con Tipos
  // El contenedor será un <div> o un <section>
  const containerRef = useRef<HTMLDivElement>(null); 
  // La imagen que vamos a actualizar
  const imageRef = useRef<HTMLImageElement>(null); 
  
  // 3. Definición de las variables clave
  const frameCount = 23; 
  const imagePath = "/img-frame/"; 

  useGSAP(() => {
    // 4. Crear el objeto mutable con tipado
    const imageSequence: ImageSequence = { 
      frame: 1 
    };

    // 5. Configurar el Tween y ScrollTrigger
    gsap.to(imageSequence, {
      frame: frameCount, 
      snap: "frame", 
      ease: "none", 
      
      // La función que se ejecuta en cada actualización
      onUpdate: () => {
        // Obtenemos el elemento de la imagen y validamos que exista
        const currentImageElement = imageRef.current;
        if (!currentImageElement) return;

        const currentFrame = Math.round(imageSequence.frame); 
        const formattedFrame = String(currentFrame).padStart(2, '0');
        
        // Asignamos el nuevo src
        currentImageElement.src = `${imagePath}ezgif-frame-0${formattedFrame}.png`;
      },
      
      scrollTrigger: {
        // Aseguramos que containerRef.current no sea null
        trigger: containerRef.current!, 
        pin: true, 
        start: "top top", 
        end: `+=${frameCount * 100}px`, 
        scrub: true, 
        // markers: true 
      }
    });
  }, { scope: containerRef }); // Limita el alcance a este componente

  // 6. Renderizado del componente
  return (
    <div>
        <div 
          // 💡 Asignamos la referencia tipada al div
          ref={containerRef} 
          className='flex justify-center items-center h-screen bg-gray-100'
        >
          <img 
            // 💡 Asignamos la referencia tipada al img
            ref={imageRef} 
            src={`${imagePath}ezgif-frame-001.png`} 
            alt="Secuencia de imágenes animada por scroll" 
            className='min-w-full h-[200%] absolute object-cover top-0 -left-100'
          />
        </div>

    </div>
  );
};

export default ImageSequenceScroll;