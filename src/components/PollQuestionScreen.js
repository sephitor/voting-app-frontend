import React, { useEffect, useState} from 'react'
import { useParams, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { pollStartLoadedByID, voteStartAdd } from '../actions/polls';
import { PollAnswerScreen } from './PollPanels/PollAnswerScreen';
import { PollsResultScreen } from './PollsResultScreen';
import {socket} from '../service/socket';

export const PollQuestionScreen = ({ history }) => {

    if (history.length <= 2)
        history.push('/');

    const { id } = useParams();

    const poll = useSelector(state => state.polls).find(poll => poll._id === id);

    const [esRespuesta, setEsRespuesta] = useState(false);

    const dispatch = useDispatch();
    
    useEffect(() => {

        dispatch(pollStartLoadedByID(id));

        // escuchamos si existe algun cambio desde el servidor.
        socket.on("updateVoging", data => {

            console.log("Se ejecuto el update!");

            if (data.id === id) {
                console.log("Y actualizó!!!!");
                dispatch(pollStartLoadedByID(id));
            }
        });


    }, [dispatch, id]) // eslint-disable-line react-hooks/exhaustive-deps
    


    try {


        const handleVote = (value) => {
            dispatch(voteStartAdd(id, value));

            socket.emit("vote", { id }, function (resp) {
                console.log("Y actualizó!!!!", resp);
            });

            setEsRespuesta(true);
        }


        const {
            question,
            option1,
            option2,
            option3,
            option4,
            // option1votes,
            // option2votes,
            // option3votes,
            // option4votes
        } = poll;


        return (!esRespuesta) ? (
            <>

                <br />
                <br />
                <div className="row my-2 text-center">
                    <div className="col">
                        <div className="card bg-light pad-fbs">

                            <h1>{question}</h1>

                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-sm d-flex">

                                        <div className="card card-body bg-light flex-fill">

                                            <PollAnswerScreen name="option1" color="warning" value={option1} pollID={id} handleVote={handleVote} />

                                            {option3 && (<PollAnswerScreen name="option3" color="success" value={option3} pollID={id} handleVote={handleVote} />)}


                                        </div>
                                    </div>

                                    <div className="col-sm d-flex">
                                        <div className="card card-body bg-light flex-fill">

                                            <PollAnswerScreen name="option2" color="danger" value={option2} pollID={id} handleVote={handleVote} />
                                            {option4 && (<PollAnswerScreen name="option4" color="success" value={option4} pollID={id} handleVote={handleVote} />)}

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        ) : (<PollsResultScreen poll={poll} />);

    } catch (error) {
        return <Redirect to='/' />
    }


}


