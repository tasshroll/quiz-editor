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
