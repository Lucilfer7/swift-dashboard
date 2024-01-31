const SearchInput = ({searchTerm, setSearchTerm}) => {
  return (
    <div className="relative w-full">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="block w-full p-4 ps-10 text-sm text-gray-900 bg-transparent rounded-3xl border-gray-300 appearance-none border-2 focus:outline-none focus:ring-0 focus:border-swift-purple-700 peer dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700"
          placeholder="Search authors..."
          required=""
        />
      </div>
  )
}

export default SearchInput