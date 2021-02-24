import React, { Children, useState } from 'react'
import NewPost from './NewPost'
import Votes from './Votes'

const Post = (props) => {
    const {entry} = props
    const [childrenList, setChildrenList] = useState(entry.children)
    const [id, setId] = useState(0)
    const [activeReply, setActiveReply] = useState(false)


    const addChild = (name, text) => {
        if (entry.depth < 3) {
            setChildrenList(
                [...childrenList, {id: id, name: name, text: text, depth: entry.depth +1, children: []}]
            )
            setId(id + 1)            
        }

        setActiveReply(false)

    }

    const replyForm = () => {
        if (activeReply) {
            return (
                <>
                    <div>
                        <NewPost submit = {addChild}></NewPost>
                    </div>
                </>
            )
        } else {
            return (
                <> </>
            )
        }
    }

    const replyResponse = () => {
        if (entry.depth < 3) {
            setActiveReply(!activeReply)
        } else {
            setActiveReply(false)
        }
        
    }


    return (
        <>
            <div className = "container card flex" >
                <div className = "card-body">

                    <div className = "row">
                        <h5 className = "card-title text-primary"> {"Name: " + entry.name} </h5>
                    </div>

                    <div className = "row">
                        <div className = "col">
                            <p className = "card-text"> {entry.text }</p>
                        
                        </div>

                        <div className = "col-1">
                            <Votes></Votes>    
                        </div>
                    </div>
                    
                    <div className = "row">
                        <br></br>
                        <button className = "btn btn-primary btn-sm" onClick = {
                                () => replyResponse() }> Reply </button>
                            <br></br>
                            {
                                replyForm()
                            }
                    </div>

                    {   
                        childrenList.map((childEntry) => (
                            <Post entry = {childEntry} key = {childEntry.id}></Post>
                        ))
                    }
                </div>    
                
            </div>
        </>
    )

}

export default Post