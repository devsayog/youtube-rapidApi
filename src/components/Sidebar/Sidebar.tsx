import Link from 'next/link'
import React, { useEffect } from 'react'

import { useScreenResize } from '@/hooks/useScreenResize'
import { useAppDispatch, useAppSelector } from '@/store/useReduxHooks'

import { selectNav, showIconText } from '../Navbar/navSlice'
import { categories } from './sidebarConstants'

const Sidebar = () => {
  const { isHiddenText } = useAppSelector(selectNav)
  const { isScreenSize } = useScreenResize(1024)
  const dispatch = useAppDispatch()
  useEffect(() => {
    if (!isScreenSize) {
      dispatch(showIconText())
    }
  }, [dispatch, isScreenSize])
  return (
    <aside
      className={`overflow-x-auto bg-gray-900  lg:overflow-y-auto ${
        isHiddenText ? 'w-20' : 'lg:w-60'
      }`}
    >
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
                    <p
                      className={`min-w-max text-sm font-medium sm:text-base xl:text-lg 2xl:text-xl ${
                        isHiddenText ? 'hidden' : 'block'
                      }`}
                    >
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
