import { AppIcon } from "@components/app-icon";
import { AuthPage, ThemedTitleV2 } from "@refinedev/antd";

export default function ForgotPassword() {
  return (
    <AuthPage
      type="forgotPassword"
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
