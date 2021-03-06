import React, { MouseEvent, useCallback, useRef } from "react"
import "./create-room.scss"
import { generateRoomId } from "../../shared/functions/generate-room-id"
import { useHistory } from "react-router-dom"
import { useUser } from "../../shared/hooks/useUser"


export const CreateRoomPage = () => {

  const history = useHistory()
  const { setUserName } = useUser()

  const roomNameRef = useRef<HTMLInputElement>(null)
  const userNameRef = useRef<HTMLInputElement>(null)

  const onCreateRoomButtonClick = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const id = generateRoomId(roomNameRef.current!.value)
    history.push(`/rooms/${id}`)
    setUserName!(userNameRef.current!.value)
  }, [history, setUserName])

  return (
    <div className="createRoomPage">
      <form className="createRoomForm container">
        <input ref={roomNameRef} placeholder="Имя комнаты" type="text" />
        <input ref={userNameRef} placeholder="Ваше имя" type="text" />
        <button onClick={onCreateRoomButtonClick}>Создать Комнату</button>
      </form>
    </div>
  )
}
