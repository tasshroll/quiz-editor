import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
// import history


// React Bootstrap components
import {
    Container,
    Col,
    Button,
    Card,
    Row
} from "react-bootstrap"
import { getSavedQuizzes } from '../utils/localStorage';
import EditQuiz from "./EditQuiz";
import EditQ from "./EditQ";

import { useNavigate } from 'react-router-dom';


export default function Home() {

    const navigate = useNavigate();


    const [savedQuizzes, setSavedQuizzes] = useState([]);

    // create function to getSavedQuizzes from local storage
    const quizzes = getSavedQuizzes();

    // localStorage contains object quizzes. questions_answers is an array of objects
    // On page load, see if quizzes exist and display them
    useEffect(() => {
        displayQuizzes([]);
    }, []);

    const handleEditClick = (quizTitle) => {
        console.log("Edit button clicked for", quizTitle);
        navigate('/edit', { state: { quizTitle: quizTitle } });

    }

    // const handleEditClick = (e) => {
    //     console.log("Edit button clicked");
    //     e.preventDefault();
    //     console.log(e.target.value, "is the quiz to edit");
    //     const quizTitle = e.target.value;
    //     return (
    // <EditQuiz quizTitle={quizTitle}/>

    // Change route to "edit" so it runs EditQuiz page and pass quizTitle as props
    //         <Link to="/edit" state={{ quizTitle: quizTitle }} />
    //     )
    // }

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
                        {/* <div> */}
                        {/* <Link to={`/edit`} state={{ quizTitle: quiz.quizTitle }}> */}


                        {/* <Button variant="primary">Edit</Button> */}
                        {/* </Link> */}
                        {/* </div> */}
                        {/* // Invoke EditQuiz component */}
                        <div>
                            {/* When Edit button is clicked, invoke EditQuiz component and get quizTitle */}
                            {/* Edit button with link to the EditQuiz page */}
                            <Link to={`/edit/${quiz.quizTitle}`} >

                                <Button style={styles.button} variant="primary">
                                    Edit
                                </Button>
                            </Link>


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
                            {/* Create New Quiz button with link to the CreateQuiz page */}
                            <Link to={`/create`} >
                                <Button style={styles.button} variant="primary">
                                    Create New Quiz
                                </Button>
                            </Link>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
};
