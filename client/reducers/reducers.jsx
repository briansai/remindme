const getTodo = (state = [], action) => {
  const { payload } = action;
  const info = payload && payload.data;
  switch (action.type) {
    case 'GET_TODO_SUCCESS':
      return info || state;
    case 'GET_TODO_FAILURE':
      return {
        error: payload.message,
      };
    default:
      return state;
  }
};

const todo = (state = {}, action) => {
  const { payload } = action;
  switch (action.type) {
    case 'ADD_TODO_SUCCESS':
      return {};
    case 'ADD_TODO_FAILURE':
      return {
        error: payload.message,
      };
    default:
      return state;
  }
};

const register = (state = {}, action) => {
  const { payload } = action;
  switch (action.type) {
    case 'REGISTER_SUCCESS':
      return {};
    case 'REGISTER_FAILURE':
      return {
        error: payload.message,
      };
    default:
      return state;
  }
};

export { todo, register, getTodo };
