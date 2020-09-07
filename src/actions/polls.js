import { types } from "../types/types";
import { fetchBackEnd } from "../helpers/fetch";
import Swal from 'sweetalert2';



export const pollStartAddNew = (poll) => {
    return async (dispatch) => {

        const resp = await fetchBackEnd('polls/new', poll, 'POST');
        const body = await resp.json();

        console.log(body);

        if (body.ok) {

            dispatch(pollAddNew(body.poll));

        }
        else {
            Swal.fire('Error', body.err.message, 'error');
        }

    }
}


const pollAddNew = (poll) => ({
    type: types.pollAddNew,
    payload: poll
});




export const pollStartLoading = () => {
    return async (dispatch) => {

        try {

            const resp = await fetchBackEnd('polls');
            const body = await resp.json();

            dispatch(pollsLoaded(body.polls));

        } catch (error) {
            Swal.fire('Error', 'Faild to load Polls', 'error');
        }

    }
}

const pollsLoaded = (polls) => ({
    type: types.pollsLoaded,
    payload: polls
})



export const pollStartLoadedByID = (id) => {
    return async (dispatch) => {

        try {

            const resp = await fetchBackEnd(`polls/${id}`);
            const body = await resp.json();

            dispatch(pollLoadedByID(body.poll));

        } catch (error) {
            Swal.fire('Error', `Faild to load Poll ${error} `, 'error');
        }

    }
}

const pollLoadedByID = (poll) => ({
    type: types.pollLoadedByID,
    payload: poll
})


export const voteStartAdd = (id, option) => {
    return async (dispatch) => {

        try {


            const resp = await fetchBackEnd(`answer/${id}`, {option} , 'PUT');
            const body = await resp.json();

            if (body.ok) {

                dispatch(voteAdd(body.poll));
                

            }
            else {
                Swal.fire('Error', body.err.message, 'error');
            }



        } catch (error) {
            Swal.fire('Error', 'Faild to Vote Poll', 'error');
        }

    }
}


const voteAdd = (poll) => ({
    type: types.voteAdd,
    payload: poll
})