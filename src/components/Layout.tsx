import type { ReactNode } from 'react'

import Navbar from './Navbar/Navbar'

interface ILayoutProps {
  children: ReactNode
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <div className="min-h-screen bg-black text-gray-200">
      <Navbar />
      {children}
    </div>
  )
}

export default Layout
