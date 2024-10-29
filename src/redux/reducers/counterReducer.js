import { ADD, MINUS, RESET } from "../actions/action";

const initialState = {
  count: 0,
};

const counterReducer = (state = initialState, action) => {
  console.log(state);

  switch (action.type) {
    case ADD:
      // console.log("add");
      return { count: state.count + 1 };
    case MINUS:
      // console.log("minus");
      return { count: state.count - 1 };
    case RESET:
      // console.log("reset");
      return { count: 0 };
    default:
      return state;
  }
};

export default counterReducer;
