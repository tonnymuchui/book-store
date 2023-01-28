const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

const initState = {
  books: [],
};

export const checkStatus = () => ({
  type: CHECK_STATUS,
});

const categoriesReducer = (state = initState, action) => {
  if (action.type === CHECK_STATUS) {
    return 'Under construction';
  }
  return state;
};

export default categoriesReducer;
