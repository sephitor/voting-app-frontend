import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { PollAddScreen } from "../components/PollAddScreen";
import { PollsListScreen } from "../components/PollsListScreen";
import { PollQuestionScreen } from "../components/PollQuestionScreen";

export const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/polls/new' component={ PollAddScreen } />
                <Route exact path='/polls/:id' component = { PollQuestionScreen }/>
                <Route exact path='/'component={ PollsListScreen }/>
                <Redirect to='/' />
            </Switch>
        </Router>
    )
}