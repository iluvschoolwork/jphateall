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
      content: "¡Hola! Soy Smart ZIM, tu asistente de IA basado en GPT-4 integrado en ZIMGo. ¿En qué puedo ayudarte?",
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
          content: "Lo siento, hubo un error al procesar tu mensaje. Es posible que el contexto de la conversación exceda de los 5000 carácteres. Por favor, inicia una nueva conversación.",
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, errorMessage])
      }
    } catch (error) {
      console.error("Error:", error)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "ai",
        content: "Error de conexión. Intenta de nuevo o inicia una nueva conversación.",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="w-full h-[calc(100vh-64px)] bg-white flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#10B981] to-[#059669] p-4 border-b border-gray-200 shadow-sm">
        <div className="flex items-center gap-3 max-w-4xl mx-auto">
          <div className="p-2 rounded-lg bg-white bg-opacity-20 backdrop-blur">
            <Zap className="text-white" size={24} />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">Smart ZIM</h1>
            <p className="text-sm text-green-50">El asistente de IA desarrollado por ZIMGo</p>
          </div>
        </div>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white">
        <div className="max-w-4xl mx-auto w-full space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
              {message.type === "user" ? (
                <div className="max-w-2xl px-4 py-2 rounded-3xl bg-[#10B981] text-white rounded-br-none">
                  <p className="break-words whitespace-pre-wrap text-sm">{message.content}</p>
                </div>
              ) : (
                <div className="max-w-2xl text-gray-700 text-sm leading-relaxed">
                  <p className="break-words whitespace-pre-wrap">{message.content}</p>
                </div>
              )}
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="flex gap-2 items-center text-gray-700">
                <Loader2 size={16} className="animate-spin" />
                <span className="text-sm">Smart ZIM está pensando...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Form */}
      <div className="bg-white border-t border-gray-200 p-4">
        <form onSubmit={handleSendMessage} className="max-w-4xl mx-auto">
          <div className="flex gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Pregúntale algo a Smart ZIM..."
              disabled={isLoading}
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:ring-opacity-50 disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="px-6 py-3 bg-[#10B981] text-white rounded-lg hover:bg-[#059669] transition-all disabled:opacity-50 disabled:cursor-not-allowed font-semibold flex items-center gap-2"
            >
              {isLoading ? <Loader2 size={20} className="animate-spin" /> : <Send size={20} />}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
