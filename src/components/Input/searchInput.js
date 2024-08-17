import React, { useState } from "react";
import { FaSearch } from "react-icons/fa"; 
import './inputStye.css'
import { useDispatch } from "react-redux";
import { getSearchUser , getUsers } from '../../redux_store/actions/actions';
const SearchInput = () => {
    const dispatch = useDispatch();

  const [query, setQuery] = useState("");


  const handleChange = (e) => {
    setQuery(e.target.value);
    if (e.target.value) {
      dispatch(getSearchUser(e.target.value,'Your Git Key'));
    }
    
    if(!e.target.value)
    {
        dispatch(getUsers('Your Git Key'));
      
    }
  };


  return (

    <div className="form-group has-search">
    <FaSearch  className="form-control-feedback" />

    <input
        type="text"
        className="form-control"
        placeholder="Search users..."
        aria-label="Search"
        aria-describedby="basic-addon1"
        value={query}
        onChange={handleChange}
      />

  </div>

    
  );
};

export default SearchInput;
