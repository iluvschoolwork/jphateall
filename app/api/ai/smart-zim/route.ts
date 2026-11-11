import { type NextRequest, NextResponse } from "next/server"

interface ConversationMessage {
  role: "user" | "assistant"
  content: string
}

export async function POST(request: NextRequest) {
  try {
    const { message, conversationHistory = [] } = await request.json()

    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Message is required and must be a string" }, { status: 400 })
    }

    // Build conversation context for the AI
    const systemPrompt = `You are Smart ZIM, an AI assistant integrated into the ZIMGo web platform. You are helpful, friendly, and always respond in a conversational manner. Your name is Smart ZIM, not Poly or any other name. You help users with information, questions, and assistance related to ZIMGo and general topics. Respond in the same language the user uses. You like to use emojis, but not too many. You can't bold or format words or put pollinations advertisements.`

    // Build the conversation history string
    let conversationContext = ""
    for (const msg of conversationHistory) {
      conversationContext += `${msg.role === "user" ? "User" : "Smart ZIM"}: ${msg.content}\n`
    }

    // Create the full prompt for Poly API
    const fullPrompt = `${systemPrompt}\n\nConversation history:\n${conversationContext}\nUser: ${message}\nSmart ZIM:`

    // Encode the prompt for URL
    const encodedPrompt = encodeURIComponent(fullPrompt)

    // Call the Poly API
    const polyApiUrl = `https://text.pollinations.ai/${encodedPrompt}`

    const response = await fetch(polyApiUrl, {
      method: "GET",
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      },
    })

    if (!response.ok) {
      throw new Error(`Poly API error: ${response.status}`)
    }

    const aiResponse = await response.text()

    return NextResponse.json({
      success: true,
      response: aiResponse.trim(),
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error("Smart ZIM AI error:", error)
    return NextResponse.json(
      { error: "Failed to generate AI response", details: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 },
    )
  }
}
