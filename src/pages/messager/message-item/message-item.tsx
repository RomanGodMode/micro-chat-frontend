import React, { FC } from "react"
import { Message } from "../../../shared/types/message"
import { getNormalTime } from "../../../shared/functions/get-normal-time"

type Props = Message

export const MessageItem: FC<Props> = ({ text, senderName, creationTime }) => {

  return (
    <li className="messageItem">
      <div className="head">
        <span className="username">{senderName}</span>
        <span className="time">{getNormalTime(creationTime)}</span>
      </div>
      <p className="body">{text}</p>
    </li>
  )
}