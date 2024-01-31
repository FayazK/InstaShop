import { AppIcon } from "@components/app-icon";
import { AuthPage, ThemedTitleV2 } from "@refinedev/antd";

export default function Login() {
  return (
    <AuthPage
      type="login"
      formProps={{
        initialValues: {
          email: "info@refine.dev",
          password: "refine-supabase",
        },
      }}
      title={
        <ThemedTitleV2
          collapsed={false}
          text="Refine Project"
          icon={<AppIcon />}
        />
      }
    />
  );
}
