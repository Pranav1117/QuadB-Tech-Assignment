// this file contains all the action creators 
// this action creators will be used to dispatch action to reducers

// this will return object with "ADD_TASK" type and payload that is coming from user
export const addTask = (task) => {
  return {
    type: "ADD_TASK",
    payload: {
      // using Date object to get unique id for every new task, Date.now() will give unique number every time
      id: Date.now(),
      // name of task
      name: task,
      // to handle if task is completed or not
      isCompleted: false,
    },
  };
};

// this will return object with "MARK_DONE" type and payload that is coming from user
export const markDone = (payload) => {
  return {
    type: "MARK_DONE",
    payload,
  };
};

// this will return object with "DELETE_TASK" type and payload that is coming from user
export const deleteTask = (payload) => {
  return {
    type: "DELETE_TASK",
    payload,
  };
};
