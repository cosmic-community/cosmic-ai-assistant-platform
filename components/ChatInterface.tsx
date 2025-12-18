'use client'

import { useState } from 'react'
import ChatMessage from './ChatMessage'
import ChatInput from './ChatInput'
import type { ChatMessage as ChatMessageType } from '@/types'

export default function ChatInterface() {
  const [messages, setMessages] = useState<ChatMessageType[]>([
    {
      id: '1',
      content: 'Hello! I\'m your Cosmic AI Assistant. How can I help you today?',
      role: 'assistant',
      timestamp: new Date().toISOString(),
    },
  ])

  const handleSendMessage = (content: string) => {
    // Add user message
    const userMessage: ChatMessageType = {
      id: Date.now().toString(),
      content,
      role: 'user',
      timestamp: new Date().toISOString(),
    }
    
    setMessages(prev => [...prev, userMessage])
    
    // Simulate AI response
    setTimeout(() => {
      const aiMessage: ChatMessageType = {
        id: (Date.now() + 1).toString(),
        content: 'This is a demo interface. In a production environment, this would connect to your AI backend service for intelligent responses.',
        role: 'assistant',
        timestamp: new Date().toISOString(),
      }
      
      setMessages(prev => [...prev, aiMessage])
    }, 1000)
  }

  return (
    <div className="glass-panel p-6 shadow-2xl">
      {/* Chat messages container */}
      <div className="space-y-4 mb-6 max-h-[500px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
        {messages.map(message => (
          <ChatMessage key={message.id} message={message} />
        ))}
      </div>
      
      {/* Chat input */}
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  )
}