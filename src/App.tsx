import React, { useEffect, useState } from "react"
import io from "socket.io-client"

export type Message = {
  text: string
}

const socket = io("http://localhost:8080")

function App() {
  const [messages, setMessages] = useState<Message[]>([])
  useEffect(() => {
    socket.on('message', ({text} : Message) => {
      console.log(text)
    })
    socket.emit('message', {text: 'Игорь!?'})
  }, [])

  return (
    <div className="App">

    </div>
  )
}

export default App
