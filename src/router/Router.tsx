import { memo, VFC } from "react";
import { Switch, Route } from "react-router-dom"

import { Home } from "components/pages/Home";
import { SignUp } from "components/pages/userAuth/SignUp";
import { SignIn } from "components/pages/userAuth/SignIn";
import { HeaderLayout } from "components/template/HeaderLayout";
import { AuthProvider } from "providers/Auth";

export const Router:VFC = memo(() => {
  return (
    <Switch>
      <AuthProvider>
        <HeaderLayout>
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
        </HeaderLayout>
      </AuthProvider>
    </Switch>
  );
});
