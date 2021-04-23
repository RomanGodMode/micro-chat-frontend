import { useCallback, useEffect, useState } from "react"
import { Message } from "../types/message"
import io from "socket.io-client"


const socket = io("http://localhost:8080")


export const useMessages = (onNewMessage?: () => void) => {
  const [messages, setMessages] = useState<Message[]>([])

  const sendMessage = useCallback(({ text }: Message) => {
    socket.emit("message", { text })
  }, [])

  const handleNewMessage = useCallback(({ text }: Message) => {
    console.log(text)
    setMessages(prevMessages => [...prevMessages, { text }])
    onNewMessage?.()
  }, [])

  useEffect(() => {
    socket.on("message", handleNewMessage)
    return () => {
      socket.off("message", handleNewMessage)
    }
  }, [handleNewMessage])


  return {
    messages,
    sendMessage
  }
}