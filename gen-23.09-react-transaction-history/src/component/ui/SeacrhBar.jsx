import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"

const SearchBar = ({ iconSize, placeHolder, customeStyle, ...props }) => {
  return (
    <div className="flex items-center relative text-gray-400 focus-within:text-gray-600">
      <MagnifyingGlassIcon className={`${iconSize} absolute ml-3 pointer-events-none`} />
      <input
        {...props}
        className={`${customeStyle} pr-3 pl-10 font-normal placeholder-gray-400 rounded-2xl ring-2 ring-orange-300 focus:outline-none focus:ring-orange-500 focus:ring-2`}
        type="text"
        placeholder={placeHolder}
      ></input>
    </div>
  )
}

export default SearchBar
