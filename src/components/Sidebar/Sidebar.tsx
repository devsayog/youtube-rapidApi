import Link from 'next/link'
import React from 'react'

import { categories } from './sidebarConstants'

const Sidebar = () => {
  return (
    <aside className="overflow-x-auto bg-gray-900 lg:w-60 lg:overflow-y-auto">
      <nav>
        <ul className="mb-1 flex space-x-2 p-2 lg:mb-0 lg:block lg:space-x-0 lg:p-0 lg:pr-3 lg:pt-2">
          {categories.map((c) => {
            const link = c.name === 'new' ? '/' : `/feed/${c.name}`
            return (
              <li key={c.name}>
                <Link href={link}>
                  <a
                    className="flex items-center space-x-3 rounded-3xl bg-slate-500 py-2 px-6 capitalize transition-all hover:bg-gray-600 focus:outline-none focus-visible:bg-gray-600 lg:space-x-4 lg:rounded-none lg:bg-transparent lg:py-3"
                    title={c.name === 'new' ? 'home' : c.name}
                  >
                    <c.Icon />
                    <p className="min-w-max text-sm font-medium sm:text-base xl:text-lg 2xl:text-xl">
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
