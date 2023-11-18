// Create Quiz Page
// When the user clicks on the "Create a new Quiz" button, they are taken to the Create Quiz page.


// Example of a quiz JSON object:
// {
//     "created": "2020-09-09 09:26:39",
//     "description": "Description",
//     "id": 29,
//     "modified": "2020-09-09 09:26:39",
//     "questions_answers": [
//       {
//         "answer_id": null,
//         "answers": [
//           {
//             "id": 122,
//             "is_true": false,
//             "text": "question 1 answer 1 false"
//           },
//           {
//             "id": 123,
//             "is_true": false,
//             "text": "question 1 answer 2 false"
//           },
//           {
//             "id": 124,
//             "is_true": true,
//             "text": "question 1 answer 3 true"
//           },
//           {
//             "id": 125,
//             "is_true": false,
//             "text": "question 1 answer 4 false"
//           }
//         ],
//         "feedback_false": "question 1 false feedback",
//         "feedback_true": "question 1 true feedback",
//         "id": 53,
//         "text": "question 1 text"
//       },
//       {
//         "answer_id": null,
//         "answers": [
//           {
//             "id": 126,
//             "is_true": true,
//             "text": "question 2 answer 1 true"
//           },
//           {
//             "id": 127,
//             "is_true": false,
//             "text": "question 2 answer 2 false"
//           }
//         ],
//         "feedback_false": "question 2 false feedback",
//         "feedback_true": "question 2 true feedback",
//         "id": 54,
//         "text": "question 2 text"
//       },
//       {
//         "answer_id": null,
//         "answers": [
//           {
//             "id": 128,
//             "is_true": false,
//             "text": "question 3 answer 1 false"
//           },
//           {
//             "id": 129,
//             "is_true": true,
//             "text": "question 3 answer 2 true"
//           },
//           {
//             "id": 130,
//             "is_true": false,
//             "text": "question 3 answer 3 false"
//           }
//         ],
//         "feedback_false": "question 3 false feedback",
//         "feedback_true": "question 3 true feedback",
//         "id": 55,
//         "text": "question 3 text"
//       }
//     ],
//     "score": null,
//     "title": "quiz title",
//     "url": "https://www.youtube.com/watch?v=e6EGQFJLl04"
//   }

// After user enters data into the form, the user clicks on the Submit button.
// When the user clicks on the Submit button, the form data is saved to localStorage.
// The user is then taken to the Home page and this quiz title is displayed there.
// The date and time this quiz was created is saved to the JSON object.

import React, { useState, useEffect } from 'react';
// React Bootstrap components
import {
    Container,
    Col,
    Button,
    Card,
    Row
} from "react-bootstrap"


export default function CreateQuiz() {

    console.log("CreateQuiz page");

    // Title
    // Description
    // URL
    // Question 1
    // Question 1 Text
    // Question 1 Answer 1
    //   is_true: false
    // Question 1 Answer 2
    //   is_true: false
    // Question 1 Answer 3
    //   is_true: true
    // Question 1 Answer 4
    //   is_true: false
    // Question 1 Feedback True
    // Question 1 Feedback False

    // Question 2
    // Question 2 Text
    // Question 2 Answer 1
    //   is_true: true
    // Question 2 Answer 2
    //   is_true: false
    // Question 2 Feedback True
    // Question 2 Feedback False

    // Question 3
    // Question 3 Text
    // Question 3 Answer 1
    //   is_true: false
    // Question 3 Answer 2
    //   is_true: true
    // Question 3 Feedback True
    // Question 3 Feedback False

    // state data to hold all form values.
    const [formData, setFormData] = useState({
        created: "", // Date format "YYYY-MM-DD HH:mm:ss"
        description: "",
        modified: "", // Date format "YYYY-MM-DD HH:mm:ss"
        score: null,
        title: "",
        url: "",
        questions_answers: [
            {
                answer_id: null,
                answers: [
                    { is_true: false, text: "" },
                    { is_true: false, text: "" },
                    { is_true: true, text: "" },
                    { is_true: false, text: "" }
                ],
                feedback_false: "",
                feedback_true: "",
                text: ""
            },
            {
                answer_id: null,
                answers: [
                    { is_true: true, text: "" },
                    { is_true: false, text: "" }
                ],
                feedback_false: "",
                feedback_true: "",
                text: ""
            },
            {
                answer_id: null,
                answers: [
                    { is_true: false, text: "" },
                    { is_true: true, text: "" },
                    { is_true: false, text: "" }
                ],
                feedback_false: "",
                feedback_true: "",
                text: ""
            }
        ]
    });


    const handleInputChange = (e) => {
        // Destructure the name and value properties off of event.target
        console.log("handleInputChange reached");
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        console.log(formData);
    };

    const handleQ1TextChange = (e) => {
        const { value } = e.target;
        const updatedQs = [...formData.questions_answers];
        updatedQs[0].text = value;
        setFormData({ ...formData, questions_answers: updatedQs });
    };

    const handleQ2TextChange = (e) => {
        const { value } = e.target;
        const updatedQs = [...formData.questions_answers];
        updatedQs[1].text = value;
        setFormData({ ...formData, questions_answers: updatedQs });
    };
    const handleQ3TextChange = (e) => {
        const { value } = e.target;
        const updatedQs = [...formData.questions_answers];
        updatedQs[2].text = value;
        setFormData({ ...formData, questions_answers: updatedQs });
    };

    const handleQ1Ans1CorrectChange = (e) => {
        const { value } = e.target;
        const updatedQs = [...formData.questions_answers];
        updatedQs[0].answers[0].is_true = value;
        setFormData({ ...formData, questions_answers: updatedQs });
    };

    // const handleQuestionTextChange = (qIndex, e) => {
    //     // Destructure the name and value properties off of event.target
    //     const { value } = e.target;
    //     const updatedQs = [...formData.questions_answers];
    //     // Set the text for this question
    //     updatedQs[qIndex].text = value;
    //     setFormData({ ...formData, questions_answers: updatedQs });
    // };

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
        const { value } = e.target;
        const updatedQs = [...formData.questions_answers];
        // Set True or False for this answer
        updatedQs[qIndex].answers[aIndex].is_true = value;
        setFormData({ ...formData, questions_answers: updatedQs });
    };

    const handleSubmit = (e) => {
        // Prevent default behavior of form submit
        e.preventDefault();
        // ToDo: Save data to localStorage
        console.log("Save user input to localStorage");
        // Redirect user to Home page
        window.location.href = "/";
    };

    // Component for managing answers for each question
    const AnswerInputs = ({ answers, handleAnswerTextChange, handleIsTrueChange }) => {
        // map thru answers array and prompt for answer text and if a answer is True or False
        return answers.map((answer, index) => (
            <div key={index}>
                <Row>
                    <Col>
                        <h2>{`Question Answer ${index + 1}`}</h2>
                        <input
                            style={styles.inputStyle}
                            value={answer.text}
                            onChange={(e) => handleAnswerTextChange(index, e)}
                            name={`q${index + 1}textAnswer${index + 1}`}
                            type="text"
                            className="form-control"
                            placeholder={`Question ${index + 1} Answer ${index + 1}`}
                            id={`q${index + 1}textAnswer${index + 1}`}
                        />
                        <input
                            style={styles.inputStyle}
                            value={answer.is_true}
                            onChange={(e) => handleIsTrueChange(index, e)}
                            name={`q${index + 1}Answer${index + 1}Boo`}
                            type="text"
                            className="form-control"
                            placeholder={`Question ${index + 1} True or False`}
                            id={`q${index + 1}Answer${index + 1}Boo`}
                        />
                    </Col>
                </Row>
            </div>
        ));
    };
    // css to style this page   
    const styles = {
        inputStyle: {
            pading: '8px',
            fontSize: '16px'
        },
    };

    // display user input fields to take in above data
    return (

        <Container style={{ margin: '20px auto', maxWidth: '600px' }}>
            <Row style={{ marginBottom: '10px' }}>
                <Col>
                    <h1>Create a new Quiz</h1>
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
                        {question.answers.map((answer, aIndex) => (
                            <div key={aIndex}>
                                <Row>
                                    <Col>
                                        <h2>{`Question Answer ${aIndex + 1}`}</h2>
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
                                            value={answer.is_true}
                                            onChange={(e) => handleIsTrue(qIndex, aIndex, e)}
                                            name={`q${qIndex + 1}Answer${aIndex + 1}Boo`}
                                            type="text"
                                            className="form-control"
                                            placeholder={`Question ${qIndex + 1} True or False`}
                                            id={`q${qIndex + 1}Answer${aIndex + 1}Boo`}
                                        />
                                    </Col>
                                </Row>
                            </div>
                        ))}
                    </div>
                ))}
            </form>

        </Container>

    )
};

