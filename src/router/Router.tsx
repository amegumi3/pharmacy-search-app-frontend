import { memo, VFC } from "react";
import { Switch, Route } from "react-router-dom"

import { SignUp } from "../components/pages/userAuth/SignUp";
import { Home } from "../components/pages/Home"
import { SignIn } from "../components/pages/userAuth/SignIn";

export const Router:VFC = memo(() => {
  return (
    <Switch>
      <Route path="/signup" component={SignUp} />
      <Route path="/signin" component={SignIn} />
      <Route exact path="/" component={Home} />
    </Switch>
  )
});