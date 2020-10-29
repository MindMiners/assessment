import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as data from '../data/testData.js';
import '../styles.css';

function CreateQuiz({ data }) {
  const [userInfo, setUserInfo] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    type: '',
    emailConsent: false,
    saveResults: false,
    tookAssesment: false,
  });

  const [index, setIndex] = React.useState(0);
  
  const [current, setCurrent] = React.useState(data);
 

  const getVal = (e) => {
    let inputVal = false;
    console.log('from getVal function', e.target);
    if (e.target.type === 'radio') {
      if (e.target.value === 'yes') {
        inputVal = e.target.checked;
      }
    } else {
      inputVal = e.target.value;
    }

    setUserInfo({ ...userInfo, [e.target.name]: inputVal });
  };

  // const answers = [];

  // data.answers.forEach((answer, index) => {
  //   answers.push(
  //     <span key={index}>
  //       <label htmlFor='yes'>{answer.text}</label>
  //       <input type='radio' id='yes' name='answers' value='yes' />
  //     </span>
  //   );
  // });

  const answerQuestion = (e) => {
    setCurrent(current.answers[e.target.id]);
  }

  const TestComponent = () => {
    let result = '';
    console.log('DATA: ', data)
    const answerArr = [];
    if (current.answers && current.answers.length) {
      current.answers.forEach((answer, index) => {
        // console.log('answer->', answer);
        answerArr.push(
          <span key={index}>
            <label htmlFor='yes'>{answer.text}</label>
            <input
              type='radio'
              id={index}
              name='answers'
              value='yes'
              onChange={answerQuestion}
            />
          </span>
        );
      });
    }
    // result =
    //   result +
    //   (
    //     <div>
    //       {data.question}
    //       {answers}
    //     </div>
    //   );

    return (
      <div>
        {current.question}
        {answerArr}
      </div>
    );
  };
  // const Comp1 = () => {
  //   return <div>text1</div>;
  // };

  return (
    <form>
      <h1>Quiz</h1>
      <fieldset>
        <legend>Personalia:</legend>

        <p>
          The goal of this assessment is to put language to your thought
          processes. Be careful not to select an answer based on what you think
          you "should be” or wish you were.
        </p>
        <p>
          This might be more wordy than other assessments you've taken and we
          know that can be a challenge for some people, especially if English
          isn’t a first language for you.
        </p>
        <p>
          Try to stick with it and go through each option fully before choosing
          your response. We've built it this way to help you reflect on how your
          mind works while you're answering the questions.
        </p>
        <p>
          The first question might take the most thought, especially if you are
          in your forties or older. As we grow and mature, we often develop
          other parts of you that were weaker when you were a child. We'd like
          you to focus on what you naturally prefer and value most, which may
          not be what you've put the most work into developing.
        </p>
        <p>
          Some people find it helpful to think about their natural default when
          they were a child, if they had moments when they weren’t being pushed
          to be a certain way because someone else wanted it.
        </p>
        <p>
          Also, feel free to try different options in the first question to see
          where they lead you by the final question! This is a tool designed to
          come alongside you, not something meant to dictate to you what your
          type “must be”.
        </p>
        <p>
          Once you've reached a selection for question 3 that describes you
          best, click "What's My Type?" to get your results!
        </p>
        <label htmlFor='firstName'>First name</label>
        <input type='text' name='firstName' onChange={getVal} />
        <label htmlFor='lastName'>Last name</label>
        <input type='text' name='lastName' onChange={getVal} />

        <p>Would you like to get emails from us?</p>
        <label htmlFor='yes'>Yes</label>
        <input
          type='radio'
          id='yes'
          name='emailConsent'
          value='yes'
          onChange={getVal}
        />
        <label htmlFor='no'>No</label>
        <input
          type='radio'
          id='no'
          name='emailConsent'
          value='no'
          onChange={getVal}
        />

        <p>Would you like us to save your result?</p>
        <label htmlFor='yes'>Yes</label>
        <input
          type='radio'
          id='yes'
          name='saveResults'
          value='yes'
          onChange={getVal}
        />
        <label htmlFor='no'>No</label>
        <input
          type='radio'
          id='no'
          name='saveResults'
          value='no'
          onChange={getVal}
        />

        {/* conditional on 'yes' */}
        <label htmlFor='email'>Email address</label>
        <input type='email' name='email' onChange={getVal} />
      </fieldset>

      <fieldset></fieldset>

      <TestComponent data={data}></TestComponent>
      {/* {1 < 0 && <Comp1></Comp1>} */}
    </form>
  );
}

ReactDOM.render(
  <CreateQuiz data={data.default} />,
  document.getElementById('root')
);
