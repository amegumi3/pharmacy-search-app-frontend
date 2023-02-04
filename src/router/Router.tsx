import { memo, VFC } from "react";
import { Switch, Route } from "react-router-dom"

import { Home } from "components/pages/Home";
import { SignUp } from "components/pages/userAuth/SignUp";
import { SignIn } from "components/pages/userAuth/SignIn";

export const Router:VFC = memo(() => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/signup" component={SignUp} />
      <Route path="/signin" component={SignIn} />
    </Switch>
  );
});
