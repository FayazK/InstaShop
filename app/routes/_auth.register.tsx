import { AppIcon } from "@components/app-icon";
import { AuthPage, ThemedTitleV2 } from "@refinedev/antd";

export default function Register() {
  return (
    <AuthPage
      type="register"
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
