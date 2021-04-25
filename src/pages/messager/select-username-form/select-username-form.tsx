import React, { MouseEvent, useCallback, useRef } from "react"
import { useUser } from "../../../shared/hooks/useUser"

const SelectUsernameForm = () => {
  const { setUserName } = useUser()

  const newUserNameRef = useRef<HTMLInputElement>(null)

  const enterChat = useCallback((e: MouseEvent) => {
    e.preventDefault()
    setUserName!(newUserNameRef.current!.value)
  }, [setUserName, newUserNameRef])

  return (
    <div className="SelectUsernameFormWrapper">
      <form className="SelectUsernameForm">
        <input ref={newUserNameRef} placeholder="Ваше имя" type="text" />
        <button onClick={enterChat}>Войти в чат</button>
      </form>
    </div>
  )
}

export default SelectUsernameForm