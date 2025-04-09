"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useEffect, useRef } from "react"

export default function Hero() {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const offset = window.scrollY * 0.5;
        imageRef.current.style.transform = `translateY(${offset}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div className="absolute inset-0 w-full h-full">
        <div 
          ref={imageRef} 
          className="absolute inset-0 w-full h-full transform transition-transform duration-100"
        >
          <Image
            src="/Woman and cow.jpg"
            alt="Woman with cow in a farm field"
            fill
            priority
            className="object-cover object-center scale-110"
          />
        </div>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
          <span className="block">TAKING CHARGE OF</span>
          <span className="block text-primary-foreground">YOUR FEED COSTS</span>
        </h1>
        <p className="mt-3 text-base text-gray-200 sm:mt-5 sm:text-lg sm:max-w-xl mx-auto md:mt-5 md:text-xl">
          Save Time. Cut Costs. Feed Smarter.
        </p>
        <div className="mt-5 sm:mt-8 flex justify-center gap-3 sm:gap-4">
          <Link href="/contact" passHref>
            <Button size="lg" className="bg-primary hover:bg-primary/90">Get Started</Button>
          </Link>
          <Link href="#" passHref>
            <Button variant="outline" size="lg" className="bg-white/10 hover:bg-white/20 text-white border-white">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

