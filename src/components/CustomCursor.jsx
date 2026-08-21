import React, { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Position references
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const rafId = useRef(null);

  useEffect(() => {
    // Check if device is touch-enabled
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      // Instantly position the central dot for zero latency
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    // Interactive element hover detection
    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('select') ||
        target.closest('[role="button"]') ||
        target.closest('.cursor-pointer') ||
        window.getComputedStyle(target).cursor === 'pointer'
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    // Smooth Lerp Animation Loop for Outer Ring
    const render = () => {
      const lerpFactor = 0.16; // Smoothness factor
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * lerpFactor;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * lerpFactor;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      rafId.current = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handleMouseOver, { passive: true });

    rafId.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleMouseOver);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [isVisible]);

  if (isTouchDevice) return null;

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-[999999] overflow-hidden transition-opacity duration-300 hidden md:block ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      aria-hidden="true"
    >
      {/* ── Inner Fast Tracking Core Dot ── */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 rounded-full pointer-events-none will-change-transform"
        style={{
          width: isHovered ? '6px' : '8px',
          height: isHovered ? '6px' : '8px',
          backgroundColor: '#ff7f50',
          boxShadow: '0 0 10px rgba(255, 127, 80, 0.6)',
          transition: 'width 0.25s ease, height 0.25s ease, opacity 0.25s ease',
        }}
      />

      {/* ── Outer Smooth Trailing Physics Ring ── */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 rounded-full pointer-events-none will-change-transform flex items-center justify-center"
        style={{
          width: isClicked ? '26px' : isHovered ? '50px' : '36px',
          height: isClicked ? '26px' : isHovered ? '50px' : '36px',
          border: isHovered ? '1.5px solid rgba(255, 127, 80, 0.85)' : '1.5px solid rgba(255, 127, 80, 0.55)',
          backgroundColor: isHovered ? 'rgba(255, 127, 80, 0.12)' : 'rgba(255, 127, 80, 0.04)',
          backdropFilter: isHovered ? 'blur(1px)' : 'none',
          boxShadow: isHovered
            ? '0 0 20px rgba(255, 127, 80, 0.35), inset 0 0 10px rgba(255, 127, 80, 0.15)'
            : '0 0 8px rgba(255, 127, 80, 0.15)',
          transition: 'width 0.25s cubic-bezier(0.25, 1, 0.5, 1), height 0.25s cubic-bezier(0.25, 1, 0.5, 1), background-color 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
        }}
      />
    </div>
  );
}
