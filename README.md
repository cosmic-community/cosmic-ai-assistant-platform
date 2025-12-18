# Cosmic AI Assistant Platform

![App Preview](https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=300&fit=crop&auto=format)

A sophisticated, dark-themed AI chat interface featuring cosmic-inspired aesthetics, glassmorphic UI components, and flowing gradient animations. Built with Next.js 16, TypeScript, and Tailwind CSS, this platform provides an immersive conversation experience suitable for enterprise AI applications, hackathon demonstrations, and modern SaaS products.

## ✨ Features

- **🌌 Cosmic Dark Theme** - Deep navy backgrounds with flowing nebula-inspired gradients
- **💎 Glassmorphism Design** - Premium translucent cards with backdrop blur effects
- **✨ Animated Gradients** - Slow-moving color flows creating ambient energy
- **💬 Real-time Chat Interface** - Seamless AI conversation with message history
- **🎯 Focus State Glows** - Interactive elements respond with elegant light effects
- **⚡ Performance Optimized** - GPU-accelerated animations with minimal overhead
- **📱 Responsive Layout** - Desktop-first design that adapts to all screen sizes
- **🔒 Type-Safe** - Full TypeScript implementation with strict typing

## Clone this Project

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6943f0818e077d184f32f9e9&clone_repository=6943f2648e077d184f32f9f6)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> No content model prompt provided - app built from existing content structure

### Code Generation Prompt

> Build a modern, dark-theme web frontend inspired by cosmic and futuristic aesthetics (nebula glow, soft light gradients, depth), but not literal outer space.
>
> The interface should feel like an advanced AI system or sci-fi control panel rather than a space game. Avoid planets, rockets, astronauts, or obvious space icons.
>
> Visual Style Requirements:
> - Dark background with deep navy / near-black base
> - Subtle moving gradient glow (purple, indigo, blue, magenta) resembling flowing energy or cosmic gas
> - Soft light diffusion and blurred glow effects
> - Minimalist star-like noise or particles in the background (very subtle)
> - Smooth, slow background motion (almost unnoticeable)
> - High contrast text for readability
>
> UI Design Language:
> - Glassmorphism cards (blurred background, soft borders, low opacity)
> - Rounded corners, premium feel
> - Clean typography (modern sans-serif)
> - Calm, professional, futuristic mood
>
> Layout Requirements:
> - Centered main chat panel
> - Header with product name (AI chatbot for websites)
> - Chat message bubbles (user vs AI)
> - Input box with glowing focus state
> - Subtle hover animations (glow or border highlight)

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🛠️ Technologies

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **CMS**: Cosmic
- **Package Manager**: Bun
- **Deployment**: Vercel-ready

## 🚀 Getting Started

### Prerequisites

- Bun installed on your machine
- A Cosmic account and bucket
- Node.js 18+ (for compatibility)

### Installation

1. Clone the repository and install dependencies:

```bash
bun install
```

2. Create a `.env.local` file in the root directory with your Cosmic credentials:

```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

3. Run the development server:

```bash
bun run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📚 Cosmic SDK Examples

### Fetching Conversation History

```typescript
import { cosmic } from '@/lib/cosmic'

export async function getConversations() {
  try {
    const { objects } = await cosmic.objects
      .find({ type: 'conversations' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return objects
  } catch (error) {
    if (error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch conversations')
  }
}
```

### Creating New Chat Messages

```typescript
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
```

## 🎨 Cosmic CMS Integration

This application uses Cosmic as a headless CMS to manage:

- **Conversation Templates** - Pre-configured chat scenarios for different use cases
- **AI Response Patterns** - Structured response templates for consistent AI behavior
- **UI Configuration** - Dynamic theme settings and gradient configurations
- **Analytics Data** - User interaction metrics and conversation analytics

The Cosmic integration provides a flexible backend for managing chat content and configuration without requiring code changes.

## 🚀 Deployment

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/cosmic-ai-assistant)

1. Click the "Deploy" button above
2. Configure your environment variables:
   - `COSMIC_BUCKET_SLUG`
   - `COSMIC_READ_KEY`
   - `COSMIC_WRITE_KEY`
3. Deploy!

### Manual Deployment

```bash
# Build the application
bun run build

# Start the production server
bun run start
```

### Environment Variables

Set the following environment variables in your deployment platform:

- `COSMIC_BUCKET_SLUG`: Your Cosmic bucket slug
- `COSMIC_READ_KEY`: Your Cosmic read key
- `COSMIC_WRITE_KEY`: Your Cosmic write key

## 📖 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Cosmic Documentation](https://www.cosmicjs.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

<!-- README_END -->