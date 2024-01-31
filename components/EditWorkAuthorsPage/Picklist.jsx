const Picklist = ({children}) => {
  return (
    <ul className=" max-h-80 block overflow-auto rounded-md bg-white dark:bg-gray-800 py-1 text-base shadow-lg focus:outline-none sm:text-sm">
        {children}
    </ul>
  )
}

export default Picklist