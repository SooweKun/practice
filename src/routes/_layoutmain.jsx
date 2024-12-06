import { Header } from '/src/components/Header/header.jsx'
import { createFileRoute } from '@tanstack/react-router'
import { Outlet } from '@tanstack/react-router'
import { HeaderMenu } from '../components/HeaderMenu/headerMenu'
import { Footer } from '../components/Footer/footer'
import { Menu } from '../components/Menu/menu'

export const Route = createFileRoute('/_layoutmain')({
  component: () => (
    <div>
      <Header />
      <HeaderMenu />
      <Outlet />
    </div>
  ),
})

