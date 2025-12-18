// Base Cosmic object interface
export interface CosmicObject {
  id: string
  slug: string
  title: string
  content?: string
  metadata: Record<string, any>
  type: string
  created_at: string
  modified_at: string
}

// Conversation interface
export interface Conversation extends CosmicObject {
  type: 'conversations'
  metadata: {
    messages?: Message[]
    created_date?: string
    last_updated?: string
  }
}

// Message interface
export interface Message extends CosmicObject {
  type: 'messages'
  metadata: {
    conversation?: string
    content?: string
    role?: 'user' | 'assistant'
    timestamp?: string
  }
}

// Chat message type for UI
export interface ChatMessage {
  id: string
  content: string
  role: 'user' | 'assistant'
  timestamp: string
}