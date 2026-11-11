"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Send, Zap, Loader2 } from "lucide-react"

interface Message {
  id: string
  type: "user" | "ai"
  content: string
  timestamp: Date
}

export default function SmartZIMPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "initial",
      type: "ai",
      content: "¡Hola! Soy Smart ZIM, tu asistente inteligente integrado en ZIMGo. ¿En qué puedo ayudarte?",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: input,
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      // Prepare conversation history
      const conversationHistory = messages.map((msg) => ({
        role: msg.type === "user" ? "user" : "assistant",
        content: msg.content,
      }))

      const response = await fetch("/api/ai/smart-zim", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: input,
          conversationHistory: conversationHistory,
        }),
      })

      const data = await response.json()

      if (data.success) {
        const aiMessage: Message = {
          id: (Date.now() + 1).toString(),
          type: "ai",
          content: data.response,
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, aiMessage])
      } else {
        const errorMessage: Message = {
          id: (Date.now() + 1).toString(),
          type: "ai",
          content: "Lo siento, hubo un error al procesar tu mensaje. Intenta de nuevo.",
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, errorMessage])
      }
    } catch (error) {
      console.error("Error:", error)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "ai",
        content: "Error de conexión. Intenta de nuevo.",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="w-full h-[calc(100vh-64px)] bg-gradient-to-br from-[#10B981] via-[#059669] to-[#047857] flex flex-col">
      {/* Header */}
      <div className="bg-black bg-opacity-20 p-4 border-b border-white border-opacity-20">
        <div className="flex items-center gap-3 max-w-4xl mx-auto">
          <div className="p-2 rounded-lg bg-white bg-opacity-10 backdrop-blur">
            <Zap className="text-yellow-300" size={24} />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">Smart ZIM</h1>
            <p className="text-sm text-gray-200">Tu asistente inteligente en ZIMGo</p>
          </div>
        </div>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <div className="max-w-4xl mx-auto w-full space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-2xl px-4 py-3 rounded-lg ${
                  message.type === "user"
                    ? "bg-white text-gray-900 rounded-br-none"
                    : "bg-white bg-opacity-90 text-gray-900 rounded-bl-none"
                }`}
              >
                <p className="break-words whitespace-pre-wrap">{message.content}</p>
                <p className="text-xs mt-2 opacity-60">
                  {message.timestamp.toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" })}
                </p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white bg-opacity-90 text-gray-900 px-4 py-3 rounded-lg rounded-bl-none">
                <div className="flex gap-2 items-center">
                  <Loader2 size={16} className="animate-spin" />
                  <span>Smart ZIM está escribiendo...</span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Form */}
      <div className="bg-black bg-opacity-20 p-4 border-t border-white border-opacity-20">
        <form onSubmit={handleSendMessage} className="max-w-4xl mx-auto">
          <div className="flex gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Pregúntale algo a Smart ZIM..."
              disabled={isLoading}
              className="flex-1 px-4 py-3 rounded-lg bg-white bg-opacity-90 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-opacity-50 disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="px-6 py-3 bg-white bg-opacity-90 text-[#10B981] rounded-lg hover:bg-opacity-100 transition-all disabled:opacity-50 disabled:cursor-not-allowed font-semibold flex items-center gap-2"
            >
              {isLoading ? <Loader2 size={20} className="animate-spin" /> : <Send size={20} />}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
