import catApi from '../api/catApi';

export function loadCats() {  
  return function(dispatch) {
    return catApi.getAllCats().then(cats => {
      dispatch(loadCatsSuccess(cats));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadCatsSuccess(cats) {  
    return {type: 'LOAD_CATS_SUCCESS', cats};
  }