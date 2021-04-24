import React from "react"
import { Route, Switch } from "react-router-dom"
import MessagerPage from "./pages/messager/messager"
import { CreateRoomPage } from "./pages/create-room/create-room"


function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path={"/"} component={CreateRoomPage} />
        <Route path={"/rooms/:id"} component={MessagerPage} />
      </Switch>
    </div>
  )
}

export default App
