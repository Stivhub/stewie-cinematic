import React, { useEffect, useRef } from 'react';

interface LeafParticle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  color: number[];
  reset: (width: number, height: number, initialSctter?: boolean) => void;
  update: (width: number, height: number) => void;
  draw: (ctx: CanvasRenderingContext2D) => void;
}

export const FloatingLeaves: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    // Respect user preference for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const leafColors = [
      [212, 175, 55], // Gold
      [184, 49, 47],  // Red
      [163, 31, 31],  // Darker Red
    ];

    class Leaf implements LeafParticle {
      x: number = 0;
      y: number = 0;
      size: number = 0;
      speedX: number = 0;
      speedY: number = 0;
      rotation: number = 0;
      rotationSpeed: number = 0;
      opacity: number = 0;
      color: number[] = [0, 0, 0];

      constructor(w: number, h: number) {
        this.reset(w, h, true);
      }

      reset(w: number, h: number, initialScatter = false) {
        this.x = initialScatter ? Math.random() * w : Math.random() * w - 200;
        this.y = initialScatter ? Math.random() * h : Math.random() * h * -1 - 100;
        this.size = Math.random() * 3 + 1.5;
        this.speedX = Math.random() * 2 + 0.5; // Wind moving right
        this.speedY = Math.random() * 1.5 + 0.5; // Falling speed
        this.rotation = Math.random() * 360;
        this.rotationSpeed = (Math.random() - 0.5) * 3;
        this.opacity = Math.random() * 0.5 + 0.2;
        this.color = leafColors[Math.floor(Math.random() * leafColors.length)];
      }

      update(w: number, h: number) {
        this.x += this.speedX + (Math.sin(this.y * 0.01) * 0.8);
        this.y += this.speedY;
        this.rotation += this.rotationSpeed;

        if (this.y > h + 50 || this.x > w + 50) {
          this.reset(w, h);
          this.y = -50;
        }
      }

      draw(context: CanvasRenderingContext2D) {
        context.save();
        context.translate(this.x, this.y);
        context.rotate((this.rotation * Math.PI) / 180);
        
        context.fillStyle = `rgba(${this.color[0]}, ${this.color[1]}, ${this.color[2]}, ${this.opacity})`;
        
        context.beginPath();
        context.ellipse(0, 0, this.size, this.size * 0.4, 0, 0, Math.PI * 2);
        context.fill();
        
        context.restore();
      }
    }

    // Adjust particle count based on screen size (performance optimization)
    const particleCount = width < 768 ? 20 : 50;
    const particles = Array.from({ length: particleCount }, () => new Leaf(width, height));

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', resize);
    resize();

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach(p => {
        p.update(width, height);
        p.draw(ctx);
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-10 pointer-events-none opacity-60 w-full h-full"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};
