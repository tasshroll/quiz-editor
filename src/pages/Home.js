import React, { useState, useEffect } from "react";

// React Bootstrap components
import {
    Container,
    Col,
    Button,
    Card,
    Row
} from "react-bootstrap"
import { getSavedQuizzes } from '../utils/localStorage';


export default function Home() {


    const [savedQuizzes, setSavedQuizzes] = useState([]);

    // create function to getSavedQuizzes from local storage
    const quizzes = getSavedQuizzes();

    // localStorage contains object quizzes. questions_answers is an array of objects
    // On page load, see if quizzes exist and display them
    useEffect(() => {
        displayQuizzes([]);
    }, []);

    // function to display previously saved quizzes
    function displayQuizzes() {

        const quizzes = getSavedQuizzes();
        console.log(quizzes);

        if (!quizzes) {
            return null;
        }

        return quizzes.map((quiz, index) => (
            <Card key={index}>
                <Card.Body>
                    <div className="d-flex justify-content-between align-items-center">
                        {/* Display quiz title */}
                        <div>
                            <p style={styles.quizTitle}>{quiz.quizTitle}</p>
                        </div>

                        {/* Display edit button */}
                        <div>
                            <Button variant="primary" href={`/edit/${quiz.id}`}>Edit</Button>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        ));
    }     // end of displayQuizzes

    const styles = {
        quizTitle: {
            marginBottom: 0,
            marginTop: 30,
            color: 'green',
            fontSize: '1.5rem',
            textAlign: "center"
        },
        title: {
            fontSize: "1rem",
            fontWeight: "bold",
            textAlign: "center"
        },
        text: {
            width: 400,
            padding: 15,
            margin: 40,
            fontSize: "1.5rem",
            textAlign: "center"
        },
        button: {
            paddingTop: 0,
            color: 'pink',
            fontSize: '1.5rem',
            textAlign: "center",
            backgroundColor: 'aqua',
        }
    };
    return (
        <Container>
            <Row>
                <Col style={styles.title}>
                    <h1>Quiz Creator</h1>
                </Col>
            </Row>
            <Row>
                <Col style={styles.title}>
                    <h2>Available Quizzes to Edit</h2>
                    <div>
                        {displayQuizzes()}
                    </div>
                    <Row>
                        <Col style={{ marginTop: "30px" }}>
                            <Button style={styles.button} variant="primary" href="/create">Create a new Quiz</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
};
