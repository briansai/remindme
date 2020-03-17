const todo = (state = [], action) => {
  const { payload } = action;
  const info = payload && payload.data[0];

  switch (action.type) {
    case 'ADD_TODO_SUCCESS':
      return (
        state.value ? {
          value: state.value.concat(info),
        } : {
          value: state.concat(info),
        }
      );
    case 'ADD_TODO_FAILURE':
      return {
        error: payload.message,
      };
    default:
      return state;
  }
};

export default todo;
