import React from 'react';

export const BackgroundGrid = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-black">
      {/* Primary Grid - Reduced opacity */}
      <div 
        className="absolute inset-0 opacity-[0.07]" 
        style={{ 
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} 
      />
      
      {/* Secondary Fine Grid - Reduced opacity */}
      <div 
        className="absolute inset-0 opacity-[0.02]" 
        style={{ 
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: '10px 10px'
        }} 
      />

      {/* Radical Gradient Overlays - Dimmed */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_500px_at_50%_200px,#3b82f608,transparent)]" />
      <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_600px_at_80%_80%,#8b5cf605,transparent)]" />
      
      {/* Scanline Effect - More subtle */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.05)_50%),linear-gradient(90deg,rgba(255,0,0,0.01),rgba(0,255,0,0.005),rgba(0,0,255,0.01))] z-10 bg-[length:100%_2px,3px_100%] pointer-events-none" />
    </div>
  );
};
