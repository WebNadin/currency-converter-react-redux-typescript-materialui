import React, {useEffect} from 'react';
import './App.css';
import Converter from "./Converter/Converter";
import {useDispatch} from "react-redux";
import {fetchComments, GET_COMMENTS} from "./Converter/actions";

function App() {
  const dispatch = useDispatch();

  useEffect(()=> {
    fetchComments().then(comments=> {
      dispatch({ type: GET_COMMENTS, payload: comments });
    });
  },[dispatch])

  return (
    <div className="App">
      <Converter />
    </div>
  );
}

export default App;
