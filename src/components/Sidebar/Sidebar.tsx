import Link from 'next/link'
import React from 'react'

import { categories } from './sidebarConstants'

const Sidebar = () => {
  return (
    <aside className="w-60 overflow-y-auto bg-gray-900">
      <nav>
        <ul className="pr-3 pt-2">
          {categories.map((c) => {
            const link = c.name === 'new' ? '/' : `/feed/${c.name}`
            return (
              <li key={c.name}>
                <Link href={link}>
                  <a
                    className="flex items-center space-x-4 py-2 px-6 capitalize hover:bg-gray-600 focus:outline-none focus-visible:bg-gray-600"
                    title={c.name === 'new' ? 'home' : c.name}
                  >
                    <c.Icon />
                    <p className="text-sm font-medium sm:text-base xl:text-lg 2xl:text-xl">
                      {c.name}
                    </p>
                  </a>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
