import { createBucketClient } from '@cosmicjs/sdk'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
})

export async function getConversations() {
  try {
    const { objects } = await cosmic.objects
      .find({ type: 'conversations' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return objects
  } catch (error: unknown) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch conversations')
  }
}

export async function createMessage(conversationId: string, content: string, role: 'user' | 'assistant') {
  try {
    const response = await cosmic.objects.insertOne({
      type: 'messages',
      title: content.substring(0, 50),
      metadata: {
        conversation: conversationId,
        content: content,
        role: role,
        timestamp: new Date().toISOString()
      }
    })
    
    return response.object
  } catch (error) {
    throw new Error('Failed to create message')
  }
}

// Simple error helper for Cosmic SDK
function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error
}