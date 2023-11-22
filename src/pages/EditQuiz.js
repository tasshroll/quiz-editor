// On Create Quiz page, the user is presented with a form to create new quiz with 3 questions.

// When user clicks on the Submit button, the form data is saved to localStorage.
// The user is then taken to the Home page and quiz title is displayed there.

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// React Bootstrap components
import {
    Container,
    Col,
    Button,
    Card,
    Row
} from "react-bootstrap"

import { getSavedQuizzes, saveQuiz } from '../utils/localStorage';

// export default function EditQuiz({quizTitle }) {

//         console.log("Quiz title is", quizTitle);
export default function EditQuiz(props) {
    const { quizTitle } = props.location.state;
    console.log("Quiz title is", quizTitle);

    useEffect(() => {
        if (quizTitle) {
            console.log("Quiz title is", quizTitle);

            const quizzes = getSavedQuizzes();

            if (quizzes) {
                console.log("Quizzes found in local storage:", quizzes);
                const quiz = quizzes.find((quiz) => quiz.quizData.title === quizTitle);

                if (quiz) {
                    console.log("Found quiz:", quiz);
                    // Further logic with the found quiz
                } else {
                    console.log("No quiz found with title:", quizTitle);
                }
            } else {
                console.log("No quizzes found in local storage.");
            }
        } else {
            console.log("Quiz title is undefined.");
        }
    }, [quizTitle]);


    // // Get the quiz title from the URL and convert to a string
    // const quizTitle = window.location.pathname.split('/').pop();
    // console.log("Quiz title is", quizTitle);

    // // convert quizTitle to a string
    // const quizTitleStr = quizTitle.toString();
    // console.log("Quiz title string is", quizTitleStr);


    // retreive saved quizzes from local storage
    // const quizzes = getSavedQuizzes();
    // console.log("Quizes from local storage are", quizzes);

    // // If no quizzes exist, return null
    // if (!quizzes) {
    //     // return null;
    //     console.log('No quizzes exist!');
    // }

    // Look through all quizzes in the returned array. Find the quizData where title matches quizTitle
// quizzes is an array
// Data is
// quizData

// created: "", 
//         description: "",
//         modified: "", 
//         score: null,
//         title: "",
//         url: "",
//         questions_answers: [
//             {
//                 answer_id: null,
//                 answers: [
//                     { is_true: false, text: "" },
//                     { is_true: false, text: "" },
//                     { is_true: false, text: "" },
//                     { is_true: false, text: "" }
//                 ],
//                 feedback_false: "",
//                 feedback_true: "",
//                 text: ""
//             },
//             {
//                 answer_id: null,
//                 answers: [
//                     { is_true: false, text: "" },
//                     { is_true: false, text: "" }
//                 ],
//                 feedback_false: "",
//                 feedback_true: "",
//                 text: ""
//             },
//             {
//                 answer_id: null,
//                 answers: [
//                     { is_true: false, text: "" },
//                     { is_true: false, text: "" },
//                     { is_true: false, text: "" }
//                 ],
//                 feedback_false: "",
//                 feedback_true: "",
//                 text: ""
//             }
//         ]


    // // Set formData to the quiz data
    // const [formData, setFormData] = useState(quiz.quizData);
    const [formData, setFormData] = useState();

    console.log("formData is", formData);

    const handleInputChange = (e) => {
        // Destructure the name and value properties off of event.target
        console.log("handleInputChange reached");
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        console.log(formData);
    };

    const handleFeedbackChange = (qIndex, type, e) => {
        const { value } = e.target;
        setFormData((prevFormData) => {
            const updatedQs = [...prevFormData.questions_answers];
            if (type === 'true') {
                updatedQs[qIndex].feedback_true = value;
            } else if (type === 'false') {
                updatedQs[qIndex].feedback_false = value;
            }
            return {
                ...prevFormData,
                questions_answers: updatedQs,
            };
        });
    };

    const handleQuestionTextChange = (qIndex, e) => {
        const { value } = e.target;
        setFormData((prevFormData) => {
            const updatedQs = [...prevFormData.questions_answers];
            updatedQs[qIndex].text = value;
            return {
                ...prevFormData,
                questions_answers: updatedQs,
            };
        });
    };

    const handleAnswerTextChange = (qIndex, aIndex, e) => {
        const { value } = e.target;
        setFormData((prevFormData) => {
            const updatedQs = [...prevFormData.questions_answers];
            updatedQs[qIndex].answers[aIndex].text = value;
            return {
                ...prevFormData,
                questions_answers: updatedQs,
            };
        });
    };

    const handleIsTrue = (qIndex, aIndex, e) => {
        // Destructure boolean value off of event.target
        const checked = e.target.checked;
        const updatedQs = [...formData.questions_answers];
        // Set True or False for this answer
        updatedQs[qIndex].answers[aIndex].is_true = checked;
        setFormData({ ...formData, questions_answers: updatedQs });
    };

    const handleSubmit = (e) => {
        // Prevent default behavior of form submit
        e.preventDefault();
        // Ensure that only 1 and at least 1 checkbox was marked true.
        const isAnyAnswerInvalid = formData.questions_answers.some((question) => {
            return question.answers.filter((answer) => answer.is_true).length !== 1;
        });
    
        if (isAnyAnswerInvalid) {
            alert('Please select one correct answer and only one correct answer for each question.');
            return;
        }
        // Record the time and save to formData
        const now = new Date();
        const nowStr = now.toLocaleString();
        // Update the created field
        // Create a new form data object with the updated 'created' field
        const updatedFormData = {
            ...formData,
            created: nowStr,
        };
        // Save data to localStorage
        saveQuiz(formData.title, updatedFormData);
        // Redirect user to Home page
        window.location.href = "/";
    };

    // css to style this page   
    const styles = {
        inputStyle: {
            pading: '8px',
            fontSize: '16px'
        },
        questionStyle: {
            pading: '8px',
            fontSize: '16px',
            color: 'blue'
        },
    };

    // display user input fields to take in above data
    return (

        <Container style={{ margin: '20px auto', maxWidth: '600px' }}>
            <Row style={{ marginBottom: '10px' }}>
                <Col>
                    <h1>Edit Quiz {`${quizTitle}`}</h1>
                </Col>
            </Row>
            <form onSubmit={handleSubmit}>
                <Row>
                    <Col>
                        <h2>Quiz Title</h2>
                        <input
                            style={styles.inputStyle}
                            onChange={handleInputChange}
                            value={formData.title}
                            name="title"
                            type="text"
                            className="form-control"
                            placeholder="Quiz Title"
                            id="title"
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2>Description</h2>
                        <input
                            style={styles.inputStyle}
                            onChange={handleInputChange}
                            value={formData.description}
                            name="description"
                            type="text"
                            className="form-control"
                            placeholder="Quiz Description"
                            id="description"
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2>URL</h2>
                        <input
                            style={styles.inputStyle}
                            onChange={handleInputChange}
                            value={formData.url}
                            name="url"
                            type="text"
                            className="form-control"
                            placeholder="url"
                            id="url"
                        />
                    </Col>
                </Row>
                {/* Map thru questions and answers */}
                {formData.questions_answers.map((question, qIndex) => (
                    <div key={qIndex}>
                        <Row>
                            <Col>
                                <h2>{`Question ${qIndex + 1}`}</h2>
                                <input
                                    style={styles.inputStyle}
                                    value={question.text}
                                    onChange={(e) => handleQuestionTextChange(qIndex, e)}
                                    name={`q${qIndex + 1}text`}
                                    type="text"
                                    className="form-control"
                                    placeholder={`Question ${qIndex + 1} Text`}
                                    id={`q${qIndex + 1}text`}
                                />
                            </Col>
                        </Row>
                        <h3>Check the box next to the answer that is correct. Only one question can be correct.</h3>
                        {/* // Ensure that only 1 and at least 1 checkbox was marked true. */}

                        {question.answers.map((answer, aIndex) => (
                            <div key={aIndex}>
                                <Row>
                                    <Col>
                                        <h2 style={styles.questionStyle}>{`Question Answer ${aIndex + 1}`}</h2>
                                        <input
                                            style={styles.inputStyle}
                                            value={answer.text}
                                            onChange={(e) => handleAnswerTextChange(qIndex, aIndex, e)}
                                            name={`q${qIndex + 1}textAnswer${aIndex + 1}`}
                                            type="text"
                                            className="form-control"
                                            placeholder={`Question ${qIndex + 1} Answer ${aIndex + 1}`}
                                            id={`q${qIndex + 1}textAnswer${aIndex + 1}`}
                                        />
                                        <input
                                            style={styles.inputStyle}
                                            type="checkbox"
                                            onChange={(e) => handleIsTrue(qIndex, aIndex, e)}
                                            name={`q${qIndex + 1}Answer${aIndex + 1}Boo`}
                                            className="form-control"
                                            placeholder={`Question ${qIndex + 1} True or False`}
                                            id={`q${qIndex + 1}Answer${aIndex + 1}Boo`}
                                        />
                                    </Col>
                                </Row>
                            </div>
                        ))}

                        {/* // Feedback for correct answer */}
                        <Row>
                            <Col>
                                <h2>Feedback for correct answer</h2>
                                <input
                                    style={styles.inputStyle}
                                    value={question.feedback_true}
                                    onChange={(e) => handleFeedbackChange(qIndex, 'true', e)}
                                    name={`q${qIndex + 1}feedback_true`}
                                    type="text"
                                    className="form-control"
                                    placeholder={`Question ${qIndex + 1} Feedback for correct answer`}
                                    id={`q${qIndex + 1}feedback_true`}
                                />

                                <h2>Feedback for incorrect answer</h2>
                                <input
                                    style={styles.inputStyle}
                                    value={question.feedback_false}
                                    onChange={(e) => handleFeedbackChange(qIndex, 'false', e)}
                                    name={`q${qIndex + 1}feedback_false`}
                                    type="text"
                                    className="form-control"
                                    placeholder={`Question ${qIndex + 1} Feedback for incorrect answer`}
                                    id={`q${qIndex + 1}feedback_false`}
                                />
                            </Col>
                        </Row>
                    </div>
                ))}
                <Row>
                    <Col>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Col>
                </Row>
            </form>

        </Container>

    )
};