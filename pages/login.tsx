
import * as React from "react";
import { PageParamsProvider as PageParamsProvider__ } from "@plasmicapp/react-web/lib/host";
import GlobalContextsProvider from "../components/plasmic/supabase_auth_test/PlasmicGlobalContextsProvider";
import { ScreenVariantProvider } from "../components/plasmic/supabase_auth_test/PlasmicGlobalVariant__Screen";
import { PlasmicLogin } from "../components/plasmic/supabase_auth_test/PlasmicLogin";
import { useRouter } from "next/router";

function Login() {

  return (
    <GlobalContextsProvider>
      <PageParamsProvider__
        route={useRouter()?.pathname}
        params={useRouter()?.query}
        query={useRouter()?.query}
      >
        <PlasmicLogin />
      </PageParamsProvider__>
    </GlobalContextsProvider>
  );
}

export default Login;
