// Desc: Local storage functions
// Get saved quizzes from local storage
export const getSavedQuizzes = () => {
    const savedQuizzes = localStorage.getItem('quizzes')
        ? JSON.parse(localStorage.getItem('quizzes'))
        : [];

    return savedQuizzes;
}

// Append a new quiz to existing quizzes in local storage or create a new quizzes object
export const saveNewQuiz = (quizTitle, quizData) => {
    const savedQuizzes = getSavedQuizzes();
    if (!savedQuizzes) {
        // create a new quizzes object
        const newSavedQuizzes = [{ quizTitle, quizData }];
        localStorage.setItem('quizzes', JSON.stringify(newSavedQuizzes));
        return newSavedQuizzes;
    }

    if (savedQuizzes) {
        // append to existing quizzes object
        const newSavedQuizzes = [...savedQuizzes, { quizTitle, quizData }];
        localStorage.setItem('quizzes', JSON.stringify(newSavedQuizzes));
        return newSavedQuizzes;
    }
}

// Save an editted quiz to the quizzes object. Replace it to existing quizzes in local storage
export const saveQuiz = (quizTitle, quizData) => {
    const savedQuizzes = getSavedQuizzes();
    const existingQuiz = savedQuizzes.find((quiz) => quiz.title === quizTitle);

    if (!existingQuiz) {
        const newSavedQuizzes = [...savedQuizzes, { quizTitle, quizData }];
        localStorage.setItem('quizzes', JSON.stringify(newSavedQuizzes));
        return newSavedQuizzes;
    }

    return savedQuizzes;
}