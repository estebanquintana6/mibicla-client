import React, { useRef, useState } from "react";

import { useSelector, useDispatch } from 'react-redux'
import {
    setSearch
} from "@store/adminInventory/reducer"

const SearchBar = ({ categories }) => {
    const [displayDropwdown, setDisplayDropwdown] = useState(false);
    const [selected, setSelected] = useState();

    const inputSearchRef = useRef();

    const paginationState = useSelector((state) => state.pagination);
    const dispatch = useDispatch();

    const onSearchChange = () => {
        dispatch(setSearch({
            searchString: inputSearchRef.current.value
        }));
    }

    const close = () => {
        setDisplayDropwdown(false);
    }

    const expand = (e) => {
        setDisplayDropwdown(true);
    }

    const handleSelection = (category) => {
        console.log(category);
        setSelected(category);
    }

    return (
        <form className="my-6">
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
            </div>
        </form>
    )
}

export default SearchBar;