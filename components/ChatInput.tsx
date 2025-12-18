'use client'

import { useState } from 'react'

interface ChatInputProps {
  onSendMessage: (message: string) => void
}

export default function ChatInput({ onSendMessage }: ChatInputProps) {
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (message.trim()) {
      onSendMessage(message)
      setMessage('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="relative">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
        className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cosmic-purple/50 focus:border-transparent transition-all duration-300 focus:shadow-lg focus:shadow-cosmic-purple/20"
      />
      
      <button
        type="submit"
        className="absolute right-3 top-1/2 -translate-y-1/2 px-6 py-2 bg-gradient-to-r from-cosmic-purple to-cosmic-indigo rounded-xl text-white font-medium hover:shadow-lg hover:shadow-cosmic-purple/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={!message.trim()}
      >
        Send
      </button>
    </form>
  )
}