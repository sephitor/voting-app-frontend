import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { pollStartAddNew } from '../actions/polls';

const initialState = {
    question: '',
    option1: '',
    option2: '',
    option3: '',
    option4: ''
}

export const PollAddScreen = ({history}) => {

    const dispatch = useDispatch();

    const [formValues, setFormValues] = useState(initialState);

    const [formError, setFormError] = useState(null);

    const { question, option1, option2, option3, option4 } = formValues;


    const handleInputChange = ({ target }) => {

        setFormValues({
            ...formValues,
            [target.name]: target.value
        });

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        switch (true) {
            case (question.trim().length < 10):
                setFormError(`Question is required and must have 10 caracters. Actual:${ question.length }`);
                break;
            case (option1.trim().length <= 0):
                setFormError('Option 1 is required ');
                break;
            case (option2.trim().length <= 0):
                setFormError('Option 2 is required ');
                break;

        
            default:
                
                dispatch(pollStartAddNew(formValues));
                setFormValues(initialState);

                history.push('/');

            break;
        }



    }

    return (
        <>
            <Link to='/' className='btn btn-primary float-right'>Back to Home</Link>
            <br />
            <br />
            <div className="row my-2">
                <div className="col">
                    <div className="card bg-light pad-fbs">


                        <form onSubmit={handleSubmit}>
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-sm d-flex">

                                        <div className="card card-body bg-light flex-fill">
                                            <div className="form-group">
                                                <label>Your Question <span className="text-danger">*</span></label>

                                                <textarea
                                                    name="question"
                                                    rows="10"
                                                    className="form-control mb-3"
                                                    value={question}
                                                    onChange={handleInputChange}
                                                />

                                                <button type="submit" className="btn btn-success btn-block">Submit Poll</button>
                                            </div>


                                            <p><span className="text-danger">* Indicates a requered field</span></p>

                                            {formError && (<div className="alert alert-danger">{formError}</div>)}

                                        </div>
                                    </div>

                                    <div className="col-sm d-flex">
                                        <div className="card card-body bg-light flex-fill">


                                            <div className="form-group">
                                                <label>Option 1<span className="text-danger">*</span></label>
                                                <input
                                                    name="option1"
                                                    className="form-control mb-3"
                                                    value={option1}
                                                    onChange={handleInputChange}
                                                />
                                            </div>

                                            <div className="form-group">
                                                <label>Option 2<span className="text-danger">*</span></label>
                                                <input
                                                    name="option2"
                                                    className="form-control mb-3"
                                                    value={option2}
                                                    onChange={handleInputChange}
                                                />
                                            </div>

                                            <div className="form-group">
                                                <label>Option 3</label>
                                                <input
                                                    name="option3"
                                                    className="form-control mb-3"
                                                    value={option3}
                                                    onChange={handleInputChange}
                                                />
                                            </div>

                                            <div className="form-group">
                                                <label>Option 4</label>
                                                <input
                                                    name="option4"
                                                    className="form-control mb-3"
                                                    value={option4}
                                                    onChange={handleInputChange}
                                                />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
