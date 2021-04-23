import React, { MouseEvent, useCallback, useState } from "react"
import "./messager.scss"
import { MessageItem } from "./message-item/message-item"
import { useMessages } from "../../shared/hooks/useMessages"

//TODO: Микро-хедер

const MessagerPage = () => {
  const onNewMessage = useCallback(() => window.scrollTo(0, document.body.scrollHeight), [])

  const { messages, sendMessage } = useMessages(onNewMessage)

  const [newMessage, setNewMessage] = useState("")

  const handleSendMessage = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    sendMessage({ text: newMessage })
    setNewMessage("")
  }, [sendMessage, newMessage])

  // TODO: Добавить в Message В дату и имя отправителя

  return (
    <div className="MessagerPage">
      <div className="container">
        <ul className="messagesList">
          {messages.map((m, i) => <MessageItem key={Date.now() + i} {...m} userName={"Игорь"} />)}
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

export default MessagerPage