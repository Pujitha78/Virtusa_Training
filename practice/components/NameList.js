import React from 'react'
import Person from './Person'
function NameList() {
  const names=['Bruce','Clark','Diana']
   const persons=[
    {
      id:1,
      name1:'Bruce',
      age:30,
      skill:'React'
    },
    {
      id:2,
      name1:'Clark',
      age:25,
      skill:'Angular'
    },
    {
      id:3,
      name1:'Diana',
      age:28,
      skill:'Vue'
    }
   ]
   const nameList=names.map((name,index)=><h2 key={index}>{index} {name}</h2>)
   return <div>{nameList}</div>
}

export default NameList
