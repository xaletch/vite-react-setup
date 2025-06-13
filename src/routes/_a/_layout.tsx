import { Layout } from '@/app/layout'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_a/_layout')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    // <PrivateRoute>
      <Layout>
        <Outlet />
      </Layout>
    // </PrivateRoute>
  )
}
