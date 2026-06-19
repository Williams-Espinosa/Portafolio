export const BackgroundGrid = () => {
  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at top, #161924 0%, #0e1118 60%, #0a0c12 100%)',
      }}
    >
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'radial-gradient(circle at center, rgba(79,142,255,0.15) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #4f8eff 1px, transparent 1px),
            linear-gradient(to bottom, #4f8eff 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      <div className="absolute -top-32 -right-32 w-[700px] h-[700px] bg-[radial-gradient(circle_at_center,rgba(79,142,255,0.10),transparent_65%)]" />
      <div className="absolute -bottom-40 -left-40 w-[700px] h-[700px] bg-[radial-gradient(circle_at_center,rgba(0,212,255,0.07),transparent_65%)]" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(79,142,255,0.04),transparent_70%)]" />

      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-black/40 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-black/50 to-transparent" />
    </div>
  );
};
