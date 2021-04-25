import React from "react"
import { useParams } from "react-router-dom"
import Messager from "./messager/messager"
import { useUser } from "../../shared/hooks/useUser"
import SelectUsernameForm from "./select-username-form/select-username-form"
import "./messager-page.scss"


type MessagerPageParams = { id: string }


const MessagerPage = () => {
  const { id } = useParams<MessagerPageParams>()

  const { userName } = useUser()

  return (
    <div className="MessagerPage">
      {!userName
        ? <SelectUsernameForm />
        : <Messager room={id} />
      }

    </div>
  )
}

export default MessagerPage