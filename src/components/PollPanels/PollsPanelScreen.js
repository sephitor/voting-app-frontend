import React from 'react'
import { PollsItemScreen } from './PollsItemScreen';

export const PollsPanelScreen = ({ title, polls}) => {

    
    return (
        <div className="col-sm d-flex">
            <div className="card card-body bg-light flex-fill">
                <h3>{title}</h3>
                {
                    polls.map((poll) => {
                        return (
                            <PollsItemScreen key={poll._id} poll={poll} />
                        );
                    })
                }
            </div>
        </div>
    )
}
