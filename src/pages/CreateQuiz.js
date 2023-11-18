// Create Quiz Page
// When the user clicks on the "Create a new Quiz" button, they are taken to the Create Quiz page.


// Exmaple of a quiz JSON object:
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
        title: "",
        description: "",
        url: "",
        score: "",
        created: "",
        modified: "",
        id: "",
        questions: [
            {
                text: "",
                answers: [
                    { text: "", is_true: false },
                    { text: "", is_true: false },
                    { text: "", is_true: true },
                    { text: "", is_true: false }
                ],
                feedback_true: "",
                feedback_false: ""
            },
            // ToDo: Add objects for Q2-3
        ]
    });

    const handleInputChange = (e) => {
        // Destructure the name and value properties off of event.target
        // Update the appropriate state
        console.log("handleInputChange reached");
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        console.log(formData);
    };

    const handleSubmit = (e) => {
        // Prevent default behavior of form submit
        e.preventDefault();
        // ToDo: Save data to localStorage
        console.log("Save user input to localStorage");
        // Redirect user to Home page
        window.location.href = "/";
    };

    // display user input fields to take in above data
    return (

        <Container>
            <Row>
                <Col>
                    <h1>Create a new Quiz</h1>
                </Col>
            </Row>
            <form onSubmit={handleSubmit}>
                <Row>
                    <Col>
                        <h2>Quiz Title</h2>
                        <input
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
                <Row>
                    <Col>
                        <h2>Question 1</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2>Question 1 Text</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2>Question 1 Answer 1</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2>Question 1 Answer 2</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2>Question 1 Answer 3</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2>Question 1 Answer 4</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2>Question 1 Feedback if True</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2>Question 1 Feedback if False</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2>Question 2</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2>Question 2 Text</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2>Question 2 Answer 1</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2>Question 2 Answer 2</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2>Question 2 Feedback if True</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2>Question 2 Feedback if False</h2>
                    </Col>
                </Row>
            </form>

        </Container>

    )
};

