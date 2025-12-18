import type { ChatMessage as ChatMessageType } from '@/types'

interface ChatMessageProps {
  message: ChatMessageType
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user'
  
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} animate-float`}>
      <div
        className={`max-w-[75%] rounded-2xl p-4 ${
          isUser
            ? 'bg-gradient-to-r from-cosmic-purple to-cosmic-indigo text-white shadow-lg shadow-cosmic-purple/20'
            : 'glass-panel text-gray-100'
        }`}
      >
        <p className="text-sm leading-relaxed">{message.content}</p>
        <span className="text-xs opacity-60 mt-2 block">
          {new Date(message.timestamp).toLocaleTimeString([], { 
            hour: '2-digit', 
            minute: '2-digit' 
          })}
        </span>
      </div>
    </div>
  )
}