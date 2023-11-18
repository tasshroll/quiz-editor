import React, { useState, useEffect } from "react";

// React Bootstrap components
import {
    Container,
    Col,
    Button,
    Card,
    Row
} from "react-bootstrap"

export default function Home() {

    // Title page is "Quiz Creator"

    // Display button to create a new Quiz

    // get saved Quizzes from localStorage if JSON object exists for quizzes
    // If quizzes exists, 
    //      Display Quiz titles
    //      Display button to edit a Quiz

    // Example of a quizzes JSON object:

    // {
    //   "created": "2020-09-09 09:26:39",
    //   "description": "Description",
    //   "id": 29,
    //   "modified": "2020-09-09 09:26:39",
    //   "questions_answers": [
    //     {
    //       "answer_id": null,
    //       "answers": [
    //         {
    //           "id": 122,
    //           "is_true": false,
    //           "text": "question 1 answer 1 false"
    //         },
    //         {
    //           "id": 123,
    //           "is_true": false,
    //           "text": "question 1 answer 2 false"
    //         },
    //         {
    //           "id": 124,
    //           "is_true": true,
    //           "text": "question 1 answer 3 true"
    //         },
    //         {
    //           "id": 125,
    //           "is_true": false,
    //           "text": "question 1 answer 4 false"
    //         }
    //       ],
    //       "feedback_false": "question 1 false feedback",
    //       "feedback_true": "question 1 true feedback",
    //       "id": 53,
    //       "text": "question 1 text"
    //     },
    //     {
    //       "answer_id": null,
    //       "answers": [
    //         {
    //           "id": 126,
    //           "is_true": true,
    //           "text": "question 2 answer 1 true"
    //         },
    //         {
    //           "id": 127,
    //           "is_true": false,
    //           "text": "question 2 answer 2 false"
    //         }
    //       ],
    //       "feedback_false": "question 2 false feedback",
    //       "feedback_true": "question 2 true feedback",
    //       "id": 54,
    //       "text": "question 2 text"
    //     },
    //     {
    //       "answer_id": null,
    //       "answers": [
    //         {
    //           "id": 128,
    //           "is_true": false,
    //           "text": "question 3 answer 1 false"
    //         },
    //         {
    //           "id": 129,
    //           "is_true": true,
    //           "text": "question 3 answer 2 true"
    //         },
    //         {
    //           "id": 130,
    //           "is_true": false,
    //           "text": "question 3 answer 3 false"
    //         }
    //       ],
    //       "feedback_false": "question 3 false feedback",
    //       "feedback_true": "question 3 true feedback",
    //       "id": 55,
    //       "text": "question 3 text"
    //     }
    //   ],
    //   "score": null,
    //   "title": "quiz title",
    //   "url": "https://www.youtube.com/watch?v=e6EGQFJLl04"
    // }

    console.log("Home Page");
    const [savedQuizzes, setSavedQuizzes] = useState([]);

    // create function to getSavedQuizzes from local storage
    const quizzes = localStorage.getItem("quizzes");

    // localStorage contains object quizzes. questions_answers is an array of objects
    // On page load, see if quizzes exist and display them
    useEffect(() => {
        if (!quizzes) {
            localStorage.setItem("quizzes", JSON.stringify([]));
            displayQuizzes([]);
        }
    }, []);

    function displayQuizzes(quizzes) {
        console.log("in function displayQuizzes");
        console.log(quizzes);

        // if quizzes is null, return null
        if (!quizzes) {
            return null;
        }
        //return quizzes.map((quiz, index) => {
        quizzes.map((quiz, index) => {

            return (
                <Card key={index}>
                    <Card.Body>
                        <Card.Title>{quiz.title}</Card.Title>
                        <Card.Text>{quiz.description}</Card.Text>
                        <Button variant="primary" href="/edit">Edit</Button>
                    </Card.Body>
                </Card>
            )
        })
    } // end of displayQuizzes

    return (
        <Container>
            <Row>
                <Col>
                    <h1>Quiz Creator</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2>Available Quizzes</h2>
                    {/* {quizzes ? displayQuizzes(quizzes) : null} */}
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button variant="primary" href="/create">Create a new Quiz</Button>
                </Col>
            </Row>
        </Container>
    )

    };
