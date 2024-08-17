import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../redux_store/actions/actions";
import Item from "../Item/index"
import SearchInput from "../Input/searchInput";
import SpinLoader from "../Loaders/spinLoader";


const List = () => {
  const dispatch = useDispatch();
  const { users , loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    if (!users || users.length === 0 &&  error ===  null) {
      dispatch(getUsers('Your Git Key'));
    }
  }, [dispatch, users]);


  return (
    <>
      <SearchInput />
      {!loading && error === null ? (
        <div className="container mt-4">
          <div className="row">
            {users?.length !== 0 ? (
              users?.map((user) => (
                <Item key={user.id} user={user} />
              ))
            ) : (
              <p>No Result Found</p>
            )}
          </div>
        </div>
      ) : (
        error !== null ? (
          <h3 className="mt-5 pt-5">No Result Found</h3>
        ) : (
          <SpinLoader />
        )
      )}
    </>
  );
};

export default List;
