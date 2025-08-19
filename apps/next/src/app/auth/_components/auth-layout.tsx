import React, { ReactNode } from 'react'

type LayoutProps = {
  children: ReactNode;
};

export const AuthLayout = ({ children }: LayoutProps) => {
  return (
    <div>
      <div>
        {children}
      </div>
    </div>
  )
}
