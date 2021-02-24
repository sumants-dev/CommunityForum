import React, {useState} from 'react'

// Got arrow icons from Bootstrap
// https://icons.getbootstrap.com/icons/arrow-down/
const Votes = props => {
  const [votes, setVotes] = useState(0)

  const downArrowSvg = () => {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" fill="currentColor" className="bi bi-arrow-down" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
        </svg>
    
      )
  }


  const upArrowSvg = () => {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" fill="currentColor" className="bi bi-arrow-up" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
        </svg>
    
      )
  }

  const votesElem = () => {
      if(votes >= 0) {
          return (<p>+{votes}</p>)
      }

      return (<p>{votes}</p>)
  }
  
  return (
    <>
            <div className = "col">
                <p id="upVote" onClick = {() => setVotes(votes + 1)}>
                    {upArrowSvg()}
                </p>
            </div>
            <div className = "col">
                
                {votesElem()}
            </div>
            <div className = "col">
                <p id="downVote" onClick = {() => setVotes(votes - 1)}>
                    {downArrowSvg()}
                </p>   
            </div>

    </>
  )
}

export default Votes