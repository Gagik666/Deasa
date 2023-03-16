const initialState = {
  language: [
    {title: 'en', id: 0, active: true},
    {title: 'ru', id: 1, active: false},
    {title: 'arm', id: 2, active: false},
  ],
  lang: 'en',
};

export const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'editLanguage':
      return {
        ...state,
        language: state.language.map(el =>
          el.id === action.id
            ? {
                ...el,
                active: true,
              }
            : {
                ...el,
                active: false,
              },
        ),
      };
    case 'changeLanguage':
      return {
        ...state,
        lang: action.val,
      };
    default:
      return state;
  }
};

export const editLanguage = id => {
  return dispatch => {
    return dispatch({type: 'editLanguage', id});
  };
};

export const changeLanguage = val => {
  return dispatch => {
    return dispatch({type: 'changeLanguage', val});
  };
};
