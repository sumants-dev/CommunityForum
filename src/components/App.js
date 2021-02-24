import React, { useState } from 'react'
import NewPost from './NewPost'
import Post from './Post'
const App = (props) => {
  const [parentEntryList, setParentEntryList] = useState([])
  const [parentId, setParentId] = useState(0)
  const [depth, setDepth] = useState(0)

  const addEntryToParentList = (name, text) => {
    parentEntryList.push({id: parentId, name: name, text: text, depth: depth, children: [] })
    setParentId(parentId + 1)
  }


  return (
    <>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossOrigin="anonymous"></link>
      <div className = "container">
        <h1 className = "text-secondary"> Community Forum </h1>
        <NewPost submit = {addEntryToParentList}/>
        <br></br>
        <br></br>
        {
          parentEntryList.map((entry) => 
          <>
            <Post entry = {entry} key = {entry.id}></Post>
          </>
          )
        }
      </div>
      
    </>
  )

}



export default App