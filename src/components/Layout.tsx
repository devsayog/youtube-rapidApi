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
      <main className="flex h-screen pt-16">
        <Sidebar />
        {children}
      </main>
    </div>
  )
}

export default Layout
