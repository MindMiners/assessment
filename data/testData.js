const inputData = {
  question: 'text of the question 1',
  answers: [
    {
      text: '1q1a',
      question: 'text of the question 2',
      answers: [
        {
          text: '2q1a',
          question: 'text of the question 3',
          answers: [
            {
              text: '3q1a',
              question: 'text of the question 4',
              answers: [],
            },
          ],
        },
        {
          text: '2q2a',
          question: 'text of the question 3',
          answers: ['answer1', 'answer2', 'answer3'],
        },
      ],
    },
    {
      text: '1q2a',
      question: 'text of the question 2',
      answers: ['answer1', 'answer2', 'answer3'],
    },
    {
      text: '1q3a',
      question: 'text of the question 2',
      answers: ['answer1', 'answer2', 'answer3'],
    },
  ],
};
exports.default = inputData;
