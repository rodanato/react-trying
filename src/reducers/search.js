const search = (state = '', action) => {
  switch (action.type) {
    case 'SEARCH':
      return action.searchValue;
      break;
    default:
      return state;
  }
};

export default search;