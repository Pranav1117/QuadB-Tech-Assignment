// this is the initial state of our redux store
// redux state is always in object form
const initialState = {
  tasks: [],
};

// this is reducer responsible for the new state based on action type and payload
const reducer = (state = initialState, action) => {
  // this will check action type 
  switch (action.type) {
    // different case for different action types
    case "ADD_TASK":
      // it will not update previous state, it will takes previous state and return new state based on action type
      return {
        // taking all the previous states
        ...state,
        // updating only tasks in redux state
        // will takes every previous tasks and add new task that is sent from UI in the form of payload
        tasks: [...state.tasks, action.payload],
      };
    case "DELETE_TASK":
      return {
        ...state,
        // filter out task that does not match with the id coming from payload
        tasks: state.tasks.filter((task) => task.id !== action.payload.id),
      };
    case "MARK_DONE":
      return {
        ...state,
        // if payload id matches it will change property "isCompleted" value to true so we can show that to the user
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? { ...task, isCompleted: true } : task
        ),
      };
    default:
      return state;
  }
};

export default reducer;
