import type { ReactNode } from 'react'

import Navbar from './Navbar/Navbar'
import Sidebar from './Sidebar/Sidebar'

interface ILayoutProps {
  children: ReactNode
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <div className="bg-black text-gray-200">
      <Navbar />
      <main className="flex h-screen flex-col pt-16 lg:flex-row">
        <Sidebar />
        {children}
      </main>
    </div>
  )
}

export default Layout
