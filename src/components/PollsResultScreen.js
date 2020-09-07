import React from 'react'
import { Link } from 'react-router-dom';
import { PieChart } from 'react-minimal-pie-chart';


export const PollsResultScreen = ({ poll }) => {



    const {
        question,
        option1,
        option2,
        option3,
        option4,
        option1votes,
        option2votes,
        option3votes,
        option4votes
    } = poll;

    const data = [];

    option1 && data.push({ title: option1, value: option1votes, color: '#076BCD' });
    option2 && data.push({ title: option2, value: option2votes, color: '#00931B' });
    option3 && data.push({ title: option3, value: option3votes, color: '#FF9800' });
    option4 && data.push({ title: option4, value: option4votes, color: '#9C1D99' });

    const lineWidth = 60;

    return (
        <>
            <Link to='/' className='btn btn-primary float-right'>Back to Home</Link>
            <br />
            <br />
            <div className="row my-2 ">
                <div className="col">
                    <div className="card bg-light pad-fbs">

                        <h1 className="text-center">{question}</h1>



                        <div className="alert alert-success alert-dismissible fade show" role="alert">
                            <strong><i className="fas fa-info-circle"></i>  Thanks for voting!</strong>  Here are the results.
                                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>


                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-sm-4">

                                    <div className="card card-body bg-light flex-fill">

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
                                </div>

                                <div className="col-sm-8">
                                    <div className="card card-body bg-light flex-fill">



                                        <div className="row">
                                            <div className="col-sm-6">
                                                <h3>{option1}</h3>
                                            </div>
                                            <div className="col-sm-6">
                                                <h3>{option1votes} votes</h3>
                                            </div>
                                        </div>



                                        <div className="row">
                                            <div className="col-sm-6">
                                                <h3>{option2}</h3>
                                            </div>
                                            <div className="col-sm-6">
                                                <h3>{option2votes} votes</h3>
                                            </div>
                                        </div>





                                        {

                                            (option3) && (
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <h3>{option3}</h3>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <h3>{option3votes} votes</h3>
                                                    </div>
                                                </div>
                                            )
                                        }

                                        {

                                            (option4) && (
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <h3>{option4}</h3>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <h3>{option4votes} votes</h3>
                                                    </div>
                                                </div>

                                            )
                                        }

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
