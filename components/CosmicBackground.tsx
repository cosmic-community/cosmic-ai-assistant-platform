export default function CosmicBackground() {
  return (
    <div className="fixed inset-0 z-0">
      {/* Base gradient layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-cosmic-darker via-cosmic-dark to-cosmic-navy" />
      
      {/* Animated cosmic gradient */}
      <div className="absolute inset-0 cosmic-gradient animate-gradient-slow opacity-50" />
      
      {/* Radial glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cosmic-purple/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cosmic-indigo/20 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cosmic-blue/10 rounded-full blur-3xl animate-pulse delay-2000" />
      
      {/* Star field */}
      <div className="absolute inset-0 star-field" />
      
      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")',
      }} />
    </div>
  )
}