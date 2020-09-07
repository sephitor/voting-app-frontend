import React from 'react'
import { Link } from 'react-router-dom'
import { PieChart } from 'react-minimal-pie-chart';

export const PollsItemScreen = ({ poll }) => {

    const option1 = poll.option1 && (poll.option1 + ' ' + poll.option1votes + ' votes');
    const option2 = poll.option2 && (' - ' + poll.option2 + ' ' + poll.option2votes + ' votes');
    const option3 = poll.option3 && (' - ' + poll.option3 + ' ' + poll.option3votes + ' votes');
    const option4 = poll.option4 && (' - ' + poll.option4 + ' ' + poll.option4votes + ' votes');
    
    const data = [];
    
    option1 && data.push( { title: poll.option1 , value: poll.option1votes, color: '#076BCD' } );
    option2 && data.push( { title: poll.option2 , value: poll.option2votes, color: '#00931B' } );
    option3 && data.push( { title: poll.option3 , value: poll.option3votes, color: '#FF9800' } );
    option4 && data.push( { title: poll.option4 , value: poll.option4votes, color: '#9C1D99' } );
    
    const lineWidth = 60;
    
    return (

        <div key={poll._id} className="card mt-3" style={{ width: '100%' }}>
            <div className="row no-gutters">
                <div className="col-md-4">


                    <PieChart
                        className="ml-2"
                        style={{
                            fontFamily:
                                '"Nunito Sans", -apple-system, Helvetica, Arial, sans-serif',
                            fontSize: '12px',
                        }}
                        data={data}
                        lineWidth={lineWidth}
                        animate
                        label={({ dataEntry }) => Math.round(dataEntry.percentage) + '%'}
                        labelPosition={100 - lineWidth / 2}
                        labelStyle={{
                            fill: '#fff',
                            opacity: 0.75,
                            pointerEvents: 'none',
                        }}

                    />



                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title"><Link to={(`/polls/${poll._id}`)}>{poll.question}</Link></h5>
                        <p className="card-text">{option1}  {option2}  {option3}  {option4}</p>
                        <p className="card-text"><small>({poll.date})</small></p>
                    </div>
                </div>
            </div>
        </div>



    )
}