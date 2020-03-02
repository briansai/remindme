const todo = (state = [], action) => {
  const payload = action.payload;
  switch (action.type) {
    case 'ADD_TODO_SUCCESS':
      const data = payload.data[0];

      return (
        state.value ? {
          value: state.value.concat(data),
        } : {
          value: state.concat(data),
        }

      )
    case 'ADD_TODO_FAILURE':
      return {
        error: payload.message,
      }
    default:
      return state;
  }
};

export default todo;
