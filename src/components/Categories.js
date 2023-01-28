import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const status = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(checkStatus());
  };

  return (
    <>
      <button type="submit" onClick={handleClick}>Check Status</button>
      <p>{status}</p>
    </>
  );
};

export default Categories;
