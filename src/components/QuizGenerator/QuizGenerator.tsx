import { useState } from "react";

type QuizGeneratorProps = {
  questionText: string;
  answerChoices: string[];
  correctAnswerIndex: number;
};

const QuizGenerator = ({
  answerChoices,
  correctAnswerIndex,
}: QuizGeneratorProps) => {
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [userAnswer, setUserAnswer] = useState<number>(0);

  return (
    <>
      <div className="quiz-container">
        <p className="quiz-header">{"Test your knowledge 🧠"}</p>
        <div className="choice-list">
          {answerChoices.map((answerChoice) => (
            <button
              onClick={() => {
                setUserAnswer(answerChoices.indexOf(answerChoice));
                setIsAnswered(true);
              }}
              key={answerChoice}
              className={
                correctAnswerIndex === answerChoices.indexOf(answerChoice) &&
                isAnswered
                  ? "green-background"
                  : isAnswered &&
                    correctAnswerIndex !== answerChoices.indexOf(answerChoice)
                  ? "red-background"
                  : ""
              }
              disabled={isAnswered}
            >
              <span className="answer-choice-index">
                {answerChoices.indexOf(answerChoice)}
              </span>{" "}
              {answerChoice}
              {isAnswered &&
              userAnswer === answerChoices.indexOf(answerChoice) ? (
                <span className="answer-choice-icon">{"👈 your answer"}</span>
              ) : null}
            </button>
          ))}
        </div>
        <style jsx>{`
          .quiz-container {
            border-style: solid;
            border-color: white;
            margin-top: 2rem;
            margin-bottom: 2rem;
          }

          .choice-list {
            margin-bottom: 1.5rem;
            margin-left: 1.25rem;
            margin-right: 1.25rem;
          }

          .answer-choice-index {
            border-style: solid;
            color: white;
            padding: 0.1rem 0.4rem 0.1rem 0.4rem;
            border-radius: 50%;
          }

          .answer-choice-icon {
            background: rgba(0, 0, 0, 0.5);
            padding: 0rem 1rem 0rem 1rem;
            margin-left: 1rem;
          }

          .quiz-header {
            margin-left: 1.25rem;
            margin-right: 1.25rem;
            padding: 1.5rem;
            text-align: center;
            background: white;
            color: #010f34;
          }

          button {
            text-align: left;
            line-height: 2rem;
            color: white;
            background: rgba(255, 255, 255, 0);
            border-style: none;
            margin-top: 1rem;
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
            padding-left: 0.5rem;
            padding-right: 0.5rem;
            margin-right: 1.25rem;
            width: 100%;
          }

          button:hover {
            border-style: solid;
            border-color: white;
          }

          button:active {
            border-style: solid;
            background: none;
          }

          .red-background {
            color: red;
            background: rgba(255, 0, 75, 0.2);
          }
          .green-background {
            color: lightgreen;
            background: rgba(0, 255, 75, 0.2);
          }
        `}</style>
      </div>
    </>
  );
};

export default QuizGenerator;
