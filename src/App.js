import React, { useEffect } from 'react'
import {AB_GET_LIST} from './config/ajax-path'

//componentDidMount
//componentDidUpdated
//componentWillMount



function App() {

  const getData = async()=>{
    const r = await fetch(AB_GET_LIST);
    const obj = await r.json();
    console.log(obj);
  }

  useEffect(()=>{
    getData();
  },[])

  return (
    <div>App</div>
  )
}


export default App

