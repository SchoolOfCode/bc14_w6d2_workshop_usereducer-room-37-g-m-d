import "./app.css";

import Input from "../Input";
import List from "../List";
import { useReducer } from "react";

const initialState = {
  names: [],
};

function namesReducer(state, action) {
  switch (action.type) {
    case "ADD_NAME":
      return {
        names: [...state.names, {
          name: action.payload.newName,
          id: action.payload.id,
        }],
      };
    default:
      throw new Error();
  }
}

function App() {
  const [state, dispatch] = useReducer(namesReducer, initialState);

  function addName(addedName) {
    dispatch({
      type: "ADD_NAME",
      payload: {
        newName: addedName,
        id: state.names.length,
      }
    });
    console.log(
      "addName function has just sent a dispatch containing type and payload"
    );
  }

  return (
    <main>
      <Input addItem={addName} />
      <List items={state.names}/>
    </main>
  );
}

export default App;
