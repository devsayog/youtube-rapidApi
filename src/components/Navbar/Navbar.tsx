import { MenuOutlined } from '@mui/icons-material'
import Link from 'next/link'

import SearchBox from '../SearchBox'

const Navbar = () => {
  return (
    <nav className="fixed inset-x-0 grid h-16 items-center bg-gray-900 px-2 sm:px-4 md:grid-cols-[auto,1fr] md:gap-2 md:px-6">
      <button className="focus-visible::outline-none hidden rounded-full p-1 focus:bg-gray-700 md:block">
        <MenuOutlined className="h-7 w-7" />
      </button>
      <div className="flex h-full items-center justify-between">
        <Link href="/">
          <a className="focus-visible::ring-1 flex items-center space-x-2 py-1 px-0.5 font-bold ring-gray-200 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              className="h-6 w-6"
              fill="red"
            >
              <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
            </svg>
            <span className="hidden text-sm sm:block sm:text-base md:text-lg xl:text-xl 2xl:text-2xl">
              YouTube
            </span>
          </a>
        </Link>
        <SearchBox />
        <div className="pointer-events-none hidden h-7 w-7 rounded-full bg-purple-800 sm:block" />
      </div>
    </nav>
  )
}

export default Navbar
