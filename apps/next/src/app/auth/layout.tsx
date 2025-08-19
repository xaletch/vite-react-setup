import { ReactNode } from "react";

import { AuthLayout as AuthLayoutComponent } from "./_components/auth-layout";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <AuthLayoutComponent>{children}</AuthLayoutComponent>
  );
};

export default AuthLayout;