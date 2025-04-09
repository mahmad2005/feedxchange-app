"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"

interface ParallaxSectionProps {
  imageSrc: string
  imageAlt: string
  overlayOpacity?: number
}

export default function ParallaxSection({
  imageSrc,
  imageAlt,
  overlayOpacity = 50
}: ParallaxSectionProps) {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect();
        const scrollPercentage = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        const offset = Math.min(rect.height * 0.3, Math.max(0, scrollPercentage * rect.height * 0.3));
        imageRef.current.style.transform = `translateY(${offset}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-[50vh] overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <div 
          ref={imageRef} 
          className="absolute inset-[-20%] w-[140%] h-[140%] transform transition-transform duration-100"
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            priority
            className="object-cover object-center scale-150"
          />
        </div>
        <div className={`absolute inset-0 bg-black/${overlayOpacity}`} />
      </div>
    </section>
  )
} 