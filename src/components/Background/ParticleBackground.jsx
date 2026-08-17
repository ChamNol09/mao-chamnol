import React, { useEffect, useRef } from 'react';
import { useTheme } from '../../context/ThemeContext';

export const ParticleBackground = () => {
  const canvasRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Mouse state
    const mouse = {
      x: -1000,
      y: -1000,
      radius: 140,
    };

    // Dynamic particle count based on screen width
    const getParticleCount = (w) => {
      if (w < 768) return 22; // Mobile
      if (w < 1024) return 40; // Tablet
      return 65; // Desktop
    };

    let particleCount = getParticleCount(width);
    let particles = [];

    // Particle constructor / object generator
    const createParticle = () => {
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * (prefersReducedMotion ? 0.1 : 0.4),
        vy: (Math.random() - 0.5) * (prefersReducedMotion ? 0.1 : 0.4),
        radius: Math.random() * 1.5 + 1,
        alpha: Math.random() * 0.4 + 0.2,
      };
    };

    const initParticles = () => {
      particleCount = getParticleCount(width);
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(createParticle());
      }
    };

    initParticles();

    // Event listeners
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    const handleMouseMove = (e) => {
      if (width < 768) return; // Disable mouse physics on mobile for battery & performance
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Color definitions based on theme
    const isDark = theme === 'dark';
    const particleColor = isDark ? '56, 189, 248' : '16, 185, 129'; // Cyan/Emerald
    const lineBaseColor = isDark ? '16, 185, 129' : '99, 102, 241'; // Emerald/Indigo
    const connectionMaxDist = width < 768 ? 90 : 130;

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Motion physics
        if (!prefersReducedMotion) {
          p.x += p.vx;
          p.y += p.vy;

          // Boundary bouncing
          if (p.x < 0 || p.x > width) p.vx *= -1;
          if (p.y < 0 || p.y > height) p.vy *= -1;

          // Mouse interaction (gentle repulsion)
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius && dist > 0) {
            const force = (mouse.radius - dist) / mouse.radius;
            const angle = Math.atan2(dy, dx);
            const moveX = Math.cos(angle) * force * 1.2;
            const moveY = Math.sin(angle) * force * 1.2;
            p.x -= moveX;
            p.y -= moveY;
          }
        }

        // Draw individual particle node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${particleColor}, ${p.alpha})`;
        ctx.fill();

        // Connect nearby particles with thin lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const ldx = p.x - p2.x;
          const ldy = p.y - p2.y;
          const ldist = Math.sqrt(ldx * ldx + ldy * ldy);

          if (ldist < connectionMaxDist) {
            const lineAlpha = (1 - ldist / connectionMaxDist) * (isDark ? 0.25 : 0.15);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(${lineBaseColor}, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      
      {/* Subtle Aurora Gradient Background Layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/10 via-transparent to-slate-900/10 dark:from-dark-bg dark:via-dark-bg/95 dark:to-dark-bg"></div>

      {/* Soft Aurora Glow Orbs */}
      <div className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-emerald-500/15 via-teal-500/10 to-transparent blur-[120px] animate-pulse-subtle"></div>
      <div className="absolute top-[35%] -right-[15%] w-[700px] h-[700px] rounded-full bg-gradient-to-bl from-blue-500/15 via-indigo-500/10 to-transparent blur-[140px] animate-pulse-subtle" style={{ animationDelay: '2s' }}></div>
      <div className="absolute -bottom-[20%] left-[25%] w-[650px] h-[650px] rounded-full bg-gradient-to-tr from-violet-500/15 via-emerald-500/10 to-transparent blur-[130px] animate-pulse-subtle" style={{ animationDelay: '4s' }}></div>

      {/* 60 FPS HTML5 Canvas Particle Network */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />

    </div>
  );
};
