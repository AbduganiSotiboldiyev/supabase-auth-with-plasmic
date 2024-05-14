
import * as React from "react";
import { PageParamsProvider as PageParamsProvider__ } from "@plasmicapp/react-web/lib/host";
import GlobalContextsProvider from "../components/plasmic/supabase_auth_test/PlasmicGlobalContextsProvider";
import { ScreenVariantProvider } from "../components/plasmic/supabase_auth_test/PlasmicGlobalVariant__Screen";
import { PlasmicHomepage } from "../components/plasmic/supabase_auth_test/PlasmicHomepage";
import { useRouter } from "next/router";
import { supabase } from "@/utils/supabaseClient";

function Homepage() {
  const router = useRouter();
  return (
    <GlobalContextsProvider>
      <PageParamsProvider__
        route={useRouter()?.pathname}
        params={useRouter()?.query}
        query={useRouter()?.query}
      >
        <PlasmicHomepage 
          logoutButton = {{
            onClick : async () => {
              await supabase.auth.signOut()
              router.replace("/login")
            }
          }}
        />
      </PageParamsProvider__>
    </GlobalContextsProvider>
  );
}

export default Homepage;
