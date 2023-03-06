import { memo, VFC } from "react";
import { Switch, Route } from "react-router-dom";

import { HeaderLayout } from "components/template/HeaderLayout";
import { AuthProvider } from "providers/AuthProvider";
import { PharmacyProvider } from "providers/PharmacyProvider";
import { Home } from "components/pages/Home";
import { SignUp } from "components/pages/auth/SignUp";
import { SignIn } from "components/pages/auth/SignIn";
import { Import } from "components/pages/Import";
import { DetailPharmacy } from "components/pages/DetailPharmacy";
import { Prologue } from "components/pages/Prologue";
import { Page404 } from "components/pages/Page404";

export const Router: VFC = memo(() => {
  return (
    <AuthProvider>
      <HeaderLayout>
        <PharmacyProvider>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/pharmacies/:id" component={DetailPharmacy} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/prologue" component={Prologue} />
            <Route exact path="/import" component={Import} />
            <Route path="*" component={Page404} />
          </Switch>
        </PharmacyProvider>
      </HeaderLayout>
    </AuthProvider>
  );
});
