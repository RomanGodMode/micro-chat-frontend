import { useCallback, useEffect, useState } from "react"
import { Message } from "../types/message"
import io from "socket.io-client"


const socket = io("http://localhost:8080")


export const useMessages = (onNewMessage?: () => void) => {
  const [messages, setMessages] = useState<Message[]>([])

  const sendMessage = useCallback((text: string) => {
    const message: Message = {
      text,
      creationTime: new Date(Date.now()),
      senderName: "Роома"
    }
    socket.emit("message", message)
  }, [])

  const handleNewMessage = useCallback((message: Message) => {
    console.log(message)
    setMessages(prevMessages => [...prevMessages, { ...message, creationTime: new Date(message.creationTime) }])
    onNewMessage?.()
  }, [onNewMessage])

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