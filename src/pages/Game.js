import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { TriviaQuestion } from '../components/TriviaQuestion';

class Game extends Component {
  tokenCheck = () => {
    const { history, questions } = this.props;
    const responseCode = questions.response_code;
    const invalidToken = 3;
    if (responseCode === invalidToken) {
      localStorage.clear();
      history.push('/');
    }
  };

  render() {
    this.tokenCheck();
    const { questions } = this.props;
    console.log(questions);
    const first = [questions.results[0]];
    return (
      <>
        {first.map((question, questionIndex) => (
          <TriviaQuestion key={ questionIndex } eachQuestion={ question } />
        ))}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  questions: state.game.questions,
});

Game.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.objectOf.string),
}.isRequired;

export default connect(mapStateToProps)(Game);
