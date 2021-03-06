import React, { FC, MouseEvent, useCallback, useState } from "react"
import { useMessages } from "../../../shared/hooks/useMessages"
import { MessageItem } from "./message-item/message-item"
import "./messager.scss"

type Props = {
  room: string
}

const Messager: FC<Props> = ({ room }) => {
  const onNewMessage = useCallback(() => window.scrollTo(0, document.body.scrollHeight), [])

  const { messages, sendMessage } = useMessages(room, onNewMessage)

  const [newMessage, setNewMessage] = useState("")

  const handleSendMessage = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    sendMessage(newMessage)
    setNewMessage("")
  }, [sendMessage, newMessage])

  return (
    <div className="MessagerPage">
      <div className="container">
        <ul className="messagesList">
          {messages.map((m, i) => <MessageItem key={Date.now() + i} {...m} />)}
        </ul>
      </div>
      <div className="sendMessageFormWrapper">
        <form className="sendMessageForm container">
          <input name="newMessage" value={newMessage} onChange={e => setNewMessage(e.target.value)} />
          <button onClick={handleSendMessage}>Отправить</button>
        </form>
      </div>
    </div>
  )
}

export default Messager