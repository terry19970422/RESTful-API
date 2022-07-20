import React, { useEffect } from 'react'

//componentDidMount
//componentDidUpdated
//componentWillMount



function App() {

  const getData = async()=>{
    const r = await fetch('http://localhost:3600/address-book/api');
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

