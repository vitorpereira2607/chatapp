import { MagnifyingGlassIcon as SearchIcon } from '@heroicons/react/24/solid'
import { useState } from 'react';
import useConversation from '../../zustand/useConversation'
import useGetConversations from '../../hooks/useGetConversations'
import toast from 'react-hot-toast';

function SearchInput() {

  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!search) return;

    const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()))

    if(conversation){
      setSelectedConversation(conversation)
      setSearch('')
    } else {
      toast.error('No such user found')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input type="text"
        placeholder="Search..."
        className="input input-bordered rounded-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit" className="btn btn-circle">
        <SearchIcon className="size-5 outline-none" />
      </button>
    </form>
  )
}

export default SearchInput;