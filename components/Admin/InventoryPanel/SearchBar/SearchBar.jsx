import React, { useRef } from "react";

import { useSelector, useDispatch } from 'react-redux'
import {
    setSearch
} from "@store/adminInventory/reducer"

const SearchBar = () => {
    const inputSearchRef = useRef();

    const paginationState = useSelector((state) => state.pagination)
    const dispatch = useDispatch();

    const onSearchChange = () => {
        dispatch(setSearch({
            searchString: inputSearchRef.current.value
        }));
    }

    return (
        <form className="mt-4">
            <div className="flex">
                <label htmlFor="search-dropdown" className="mb-2 text-sm font-medium text-gray-900 sr-only">Your Email</label>
                <button id="dropdown-button" data-dropdown-toggle="dropdown" className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100" type="button">All categories <svg aria-hidden="true" className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></button>
                <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                    <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdown-button">
                        <li>
                            <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100">Mockups</button>
                        </li>
                        <li>
                            <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100">Templates</button>
                        </li>
                        <li>
                            <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100">Design</button>
                        </li>
                        <li>
                            <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100">Logos</button>
                        </li>
                    </ul>
                </div>
                <div className="relative w-full">
                    <input ref={inputSearchRef} onChange={onSearchChange} value={paginationState.searchString} type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Search Mockups, Logos, Design Templates..." required />
                </div>
            </div>
        </form>
    )
}

export default SearchBar;