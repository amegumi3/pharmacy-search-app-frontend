import { memo, VFC } from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "components/pages/Home";
import { SignUp } from "components/pages/auth/SignUp";
import { SignIn } from "components/pages/auth/SignIn";
import { HeaderLayout } from "components/template/HeaderLayout";
import { AuthProvider } from "providers/AuthProvider";
import { Import } from "components/pages/Import";
import { PharmacyProvider } from "providers/PharmacyProvider";

export const Router: VFC = memo(() => {
  return (
    <Switch>
      <AuthProvider>
        <HeaderLayout>
          <PharmacyProvider>
            <Route exact path="/" component={Home} />
          </PharmacyProvider>
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
          <Route path="/import" component={Import} />
        </HeaderLayout>
      </AuthProvider>
    </Switch>
  );
});
