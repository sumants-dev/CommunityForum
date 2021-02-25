import React, {useState} from 'react'

const NewPost = (props) => {
    const {submit} = props
    const [name, setName] = useState("")
    const [text, setText] = useState("")

    const submitForm = () => {
        if (name !== "" && text !== "") {
            submit(name, text)
        } else {
            alert("Empty Name or Post")
        }
        
        setName("")
        setText("")
    }
    return (
        // Got styling guidelines for forms from bootstrap docs
        // https://getbootstrap.com/docs/4.0/components/forms/
        <>
            <div className = "container card text-center">
                <form className = "container">
                    <div className="form-group row">
                        <label> Name </label>
                        <input type="text" className="form-control" id="name" placeholder="John" onChange={(e) => setName(e.target.value)} value = {name}/>
                    </div>

                    <div className="form-group row">
                        <label> Post </label>
                        <textarea type="text" className="form-control" id="newPost" placeholder="What are you thinking about?" rows = "3" onChange={(e) => setText(e.target.value)} value = {text}/>
                    </div>

                    <div className="form-group row">
                        <button type="button" className="btn btn-primary" onClick = {(e) => submitForm()}> 
                            Submit 
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default NewPost