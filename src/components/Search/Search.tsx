import React from 'react';
import { IoSearch } from "react-icons/io5";

const Search: React.FC = () => {
    return (
        <>
            <form className="d-flex align-items-center">
                <input className="form-control" placeholder="Search for products" />
                <div className="d-flex align-items-center">
                    <select>
                        <option value="all">All</option>
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select>
                    <button className="btn btn-primary fs-5">
                        <IoSearch />
                    </button>
                </div>
            </form>
        </>
    );
}

export default Search;
