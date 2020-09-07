import React from 'react'

export const PollAnswerScreen = ({ pollID, name, value, color = 'success', handleVote}) => {

    return (
        <div key={pollID + name} className="card mt-3" style={{ width: '100%' }}>
            <div className="card-body">
                <h5 className="card-title mb-4">{value}</h5>
                <br />
                <button 
                    onClick={()=> handleVote(name)}
                    className={`btn btn-${color} btn-block mt-4`}
                >{value}</button>
            </div>
        </div>
    )
}
