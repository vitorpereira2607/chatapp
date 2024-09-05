import { MagnifyingGlassIcon as SearchIcon } from '@heroicons/react/24/solid'
function SearchInput() {
  return (
    <form className="flex items-center gap-2">
        <input type="text" placeholder="Search..." className="input input-bordered rounded-full" />
        <button type="submit" className="btn btn-circle">
            <SearchIcon className="size-5 outline-none" />
        </button>
    </form>
  )
}

export default SearchInput;