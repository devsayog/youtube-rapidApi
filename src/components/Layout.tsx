import type { ReactNode } from 'react'

import Navbar from './Navbar/Navbar'
import Sidebar from './Sidebar/Sidebar'

interface ILayoutProps {
  children: ReactNode
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <>
      <Navbar />
      <main className="flex h-screen flex-col overflow-hidden pt-16 lg:flex-row">
        <Sidebar />
        <div className="h-full overflow-y-auto p-3">{children}</div>
      </main>
    </>
  )
}

export default Layout
