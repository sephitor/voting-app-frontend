import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { pollStartLoading } from '../actions/polls';
import { PollsPanelScreen } from './PollPanels/PollsPanelScreen';
import { preparePolls , preparePollsTop } from "../helpers/preparePolls";

// import moment from 'moment';
// //import 'moment/locale/es';

// //moment.locale('es');

export const PollsListScreen = () => {

    const dispatch = useDispatch();

    const polls = useSelector(state => state.polls, shallowEqual);
    
    // 3 horas perdidas sin entender porque polls incluso con [...] mantenia referencia al store. 
    // haciendo que siempre se vieran iguales. aun procesando por separado en helpers 
    // la solucion fue hacer un deep copy y procesar por separado cada cosa. 
    
    let pollsOrderTop = JSON.parse(JSON.stringify(polls))
    pollsOrderTop = preparePollsTop( pollsOrderTop );

    let pollsOrderRecent = JSON.parse(JSON.stringify(polls))
    pollsOrderRecent = preparePolls( polls );

    useEffect(() => {

        dispatch(pollStartLoading());

    }, [dispatch])



    return (
        <>
            <Link to='/polls/new' className='btn btn-primary float-right'>Create your own Poll</Link>

            <br />
            <br />
            <div className="row my-2">
                <div className="col">
                    <div className="card bg-light pad-fbs">

                        <div className="container-fluid">
                            <div className="row">
                                <PollsPanelScreen 
                                    key="1"
                                    title="Top 3 Polls"
                                    polls={pollsOrderTop}
                                />

                                <PollsPanelScreen 
                                    key="2"
                                    title="Recent Polls"
                                    polls={pollsOrderRecent}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
