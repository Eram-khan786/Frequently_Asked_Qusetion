const questions = document.querySelectorAll('.question');

questions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;

        if (answer.classList.contains('answerShow')) {
            answer.classList.remove('answerShow');
        } else {
            answer.classList.add('answerShow');
        }
    });
});
