import ChatInterface from '@/components/ChatInterface'
import CosmicBackground from '@/components/CosmicBackground'

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <CosmicBackground />
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-4xl">
          <header className="text-center mb-8 animate-float">
            <h1 className="text-5xl font-bold mb-3 bg-gradient-to-r from-cosmic-purple via-cosmic-indigo to-cosmic-blue bg-clip-text text-transparent">
              Cosmic AI Assistant
            </h1>
            <p className="text-gray-400 text-lg">
              Your intelligent companion for advanced conversations
            </p>
          </header>
          
          <ChatInterface />
        </div>
      </div>
    </main>
  )
}