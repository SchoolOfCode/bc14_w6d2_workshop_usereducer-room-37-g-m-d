import "./app.css";

import Input from "../Input";
import List from "../List";
import { useReducer } from "react";

const initialState = {
  names: []
}

function namesReducer(state, action) {
  switch(action.type){
    case "ADD_NAME": 
    return {
      names: [...state.names, action.payload]
    }
    default: 
    throw new Error()
  }


  // const updatedNames = [...names, addedName];
  // setNames(updatedNames);

}



function App() {
  const [state, dispatch] = useReducer(namesReducer, initialState);

  function addName(addedName) {

    dispatch({
      type: "ADD_NAME",
      payload: addedName
    }
      )
      console.log("ADD_NAME")
  }

  return (
    <main>
      <Input addItem={addName} />
      <List items={state.names} />
    </main>
  );
}

export default App;
