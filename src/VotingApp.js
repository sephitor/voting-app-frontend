import React from 'react'
import { AppRouter } from './routers/AppRouter'
import { Provider } from 'react-redux';
import { store } from './store/store';

export const VotingApp = () => {
    return (
        <div className="container-fluid mt-3">
            <div className="card mb-3">
                <div className="card-body text-center bg-light">
                    <h1>Voting App</h1>
                </div>
            </div>


            <Provider store={store}>
                <AppRouter />
            </Provider>

        </div>
    )
}
