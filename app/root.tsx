import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import { useNotificationProvider } from "@refinedev/antd";
import { GitHubBanner, Refine } from "@refinedev/core";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";
import routerProvider, {
  UnsavedChangesNotifier,
} from "@refinedev/remix-router";

import { ColorModeContextProvider } from "@contexts";
import resetStyle from "@refinedev/antd/dist/reset.css";
import { dataProvider } from "@refinedev/supabase";
import { App as AntdApp } from "antd";
import { authProvider } from "~/authProvider";
import { supabaseClient } from "~/utility";

export const meta: MetaFunction = () => [
  {
    title: "New Remix + Refine App",
  },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <GitHubBanner />
        <RefineKbarProvider>
          <ColorModeContextProvider>
            <AntdApp>
              <RefineKbarProvider>
                <DevtoolsProvider>
                  <Refine
                    routerProvider={routerProvider}
                    dataProvider={dataProvider(supabaseClient)}
                    authProvider={authProvider}
                    notificationProvider={useNotificationProvider}
                    resources={[
                      {
                        name: "blog_posts",
                        list: "/blog-posts",
                        create: "/blog-posts/create",
                        edit: "/blog-posts/edit/:id",
                        show: "/blog-posts/show/:id",
                        meta: {
                          canDelete: true,
                        },
                      },
                      {
                        name: "categories",
                        list: "/categories",
                        create: "/categories/create",
                        edit: "/categories/edit/:id",
                        show: "/categories/show/:id",
                        meta: {
                          canDelete: true,
                        },
                      },
                    ]}
                    options={{
                      syncWithLocation: true,
                      warnWhenUnsavedChanges: true,
                      useNewQueryKeys: true,
                      projectId: "xLEUtp-BVhr1u-2zCy1k",
                    }}
                  >
                    <>
                      <Outlet />
                      <UnsavedChangesNotifier />
                      <RefineKbar />
                    </>
                  </Refine>
                  <DevtoolsPanel />
                </DevtoolsProvider>
              </RefineKbarProvider>
            </AntdApp>
          </ColorModeContextProvider>
        </RefineKbarProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: resetStyle }];
}
