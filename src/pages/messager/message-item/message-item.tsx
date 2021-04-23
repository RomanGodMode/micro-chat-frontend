import React, { FC } from "react"

type Props = {
  text: string
  userName: string
}

export const MessageItem: FC<Props> = ({ text, userName }) => {
  return (
    <li className="messageItem">
      <div className="head">
        <span className="username">{userName}</span>
        <span className="time">23:13</span>
      </div>
      <p className="body">{text}</p>
    </li>
  )
}