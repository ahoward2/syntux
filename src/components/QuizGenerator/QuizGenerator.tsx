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
  const [userAnswer, setUserAnswer] = useState<number>(null);

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
                <span className="answer-choice-icon">{" 👈"}</span>
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
            background: rgba(0, 0, 0, 0);
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
            background: green;
          }

          button:active {
            border-style: solid;
          }

          .red-background {
            background: red;
          }
          .green-background {
            background: green;
          }
        `}</style>
      </div>
    </>
  );
};

export default QuizGenerator;
