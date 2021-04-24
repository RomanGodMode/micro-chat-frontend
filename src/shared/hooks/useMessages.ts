import { useCallback, useEffect, useState } from "react"
import { Message, SendMessageDto } from "../types/message"
import io from "socket.io-client"


const socket = io("http://localhost:8080")


export const useMessages = (roomId: string, onNewMessage?: () => void) => {
  const [messages, setMessages] = useState<Message[]>([])

  const sendMessage = useCallback((text: string) => {
    const message: SendMessageDto = {
      id: roomId,
      text,
      creationTime: new Date(Date.now()),
      senderName: "Роома"
    }
    socket.emit("message", message)
  }, [roomId])

  const handleNewMessage = useCallback((message: Message) => {
    setMessages(prevMessages => [...prevMessages, { ...message, creationTime: new Date(message.creationTime) }])
    onNewMessage?.()
  }, [onNewMessage])

  useEffect(() => {
    socket.emit("joinRoom", roomId)

    socket.on("message", handleNewMessage)
    return () => {
      socket.emit("leaveRoom", roomId)
      socket.off("message", handleNewMessage)
    }
  }, [handleNewMessage, roomId])


  return {
    messages,
    sendMessage
  }
}