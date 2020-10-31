import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as data from '../data/testData.js';
import './styles.css';

function CreateQuiz({ data }) {
  const [userInfo, setUserInfo] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    emailConsent: false,
    saveResults: false,
    tookAssesment: false,
    q1: true,
    q2: false,
    q2value: '',
    q3: false,
    q3value: '',
    submited: false,
    type: '',
  });

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
  const getAnswer = (e) => {
    const lngt = e.target.value.length;
    const value = e.target.value;
    if (lngt == 4) {
      setUserInfo({
        ...userInfo,
        type: value,
      });
    } else {
      setUserInfo({
        ...userInfo,
        [`q${lngt + 1}`]: true,
        [`q${lngt + 1}value`]: value,
      });
    }
  };

  const handleSubmit = (e: any) => {
    // prevent page from refreshing on submit
    e.preventDefault();

    let firstName = '';
    if (userInfo.firstName) {
      firstName = userInfo.firstName;
    }
    let lastName = '';
    if (userInfo.lastName) {
      lastName = userInfo.lastName;
    }
    let email = '';
    if (userInfo.email) {
      email = userInfo.email;
    }
    

    // build up data to send in body
    const requestBody = {
      firstName,
      lastName,
      email,
      type: userInfo.type,
      emailConsent: userInfo.emailConsent,
      saveResults: userInfo.saveResults,
      tookAssessment: true,
    }

    console.log(requestBody);

    // fetch request to the backend with some of the state
    fetch('/api/db', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })
      .then(() => {
        console.log('sent user data to backend')
      })
      .catch((e) => {
        console.log('error is: ', e);
      })

    // change submited to true once the submit button is clicked so we can render the person's results
    setUserInfo({
      ...userInfo,
      submited: true,
    });

    console.log();
  };

  return (
    <form onSubmit={handleSubmit}>
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

      <fieldset>
        <div>
          <p>{data.inputData.question}</p>
          {data.inputData.answers.map((answer) => {
            // console.log(answer);
            return (
              <>
                <input
                  type='radio'
                  // id='yes'
                  name={data.inputData.name}
                  value={answer.name}
                  // ref={register}
                  onChange={getAnswer}
                />
                <label htmlFor={data.inputData.name}>{answer.option}</label>
              </>
            );
          })}{' '}
        </div>
        {userInfo.q2 && (
          <div>
            <p>{data[userInfo.q2value].question}</p>
            {data[userInfo.q2value].answers.map((answer) => {
              // console.log(answer);
              return (
                <>
                  <input
                    type='radio'
                    // id='yes'
                    name={data[userInfo.q2value].name}
                    value={answer.name}
                    // ref={register}
                    onChange={getAnswer}
                  />
                  <label htmlFor={data[userInfo.q2value].name}>
                    {answer.option}
                  </label>
                </>
              );
            })}
          </div>
        )}
        {userInfo.q3 && (
          <div>
            <p>{data[userInfo.q3value].question}</p>
            {data[userInfo.q3value].answers.map((answer) => {
              // console.log(answer);
              return (
                <>
                  <input
                    type='radio'
                    // id='yes'
                    name={data[userInfo.q3value].name}
                    value={answer.name}
                    // ref={register}
                    onChange={getAnswer}
                  />
                  <label htmlFor={data[userInfo.q3value].name}>
                    {answer.option}
                  </label>
                </>
              );
            })}
          </div>
        )}
        {userInfo.type && (
          <div>
            <button type='submit'>Submit</button>
          </div>
        )}
      </fieldset>
    </form>
  );
}

ReactDOM.render(
  <CreateQuiz data={data.default} />,
  document.getElementById('root')
);
