import { SearchOutlined } from '@mui/icons-material'
import { useState } from 'react'

const SearchBox = () => {
  const [searchKeyword, setSearchKeyword] = useState('')
  return (
    <form className="flex">
      <input
        value={searchKeyword}
        onChange={(e) => setSearchKeyword(e.target.value)}
        className="foucus:outline-none w-40 bg-black/70 p-1 font-medium text-gray-400 focus:ring-1 sm:w-72 sm:p-1.5 md:w-80"
        type="search"
        placeholder="Search . . ."
      />
      <button
        type="submit"
        className="bg-gray-700 px-1 focus:outline-none focus-visible:bg-gray-800 sm:px-3 md:px-5"
      >
        <SearchOutlined className="h-5 w-5 sm:h-7 sm:w-7" />
      </button>
    </form>
  )
}

export default SearchBox
