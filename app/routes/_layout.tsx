import { ThemedLayoutV2, ThemedSiderV2, ThemedTitleV2 } from "@refinedev/antd";
import { Outlet } from "@remix-run/react";

import type { LoaderArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { authProvider } from "~/authProvider";

import { AppIcon } from "@components/app-icon";
import { Header } from "@components/header";

export default function BaseLayout() {
  return (
    <>
      <ThemedLayoutV2
        Header={() => <Header sticky />}
        Sider={(props) => <ThemedSiderV2 {...props} fixed />}
        Title={({ collapsed }) => (
          <ThemedTitleV2
            collapsed={collapsed}
            text="Refine Project"
            icon={<AppIcon />}
          />
        )}
      >
        <Outlet />
      </ThemedLayoutV2>
    </>
  );
}

/**
 * We're checking if the current session is authenticated.
 * If not, we're redirecting the user to the login page.
 * This is applied for all routes that are nested under this layout (_protected).
 */
export async function loader({ request }: LoaderArgs) {
  const { authenticated, redirectTo } = await authProvider.check(request);

  if (!authenticated) {
    throw redirect(redirectTo ?? "/login");
  }

  return {};
}
