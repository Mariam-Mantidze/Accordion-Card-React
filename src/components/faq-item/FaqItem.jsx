import "./faqItem.css";
import Arrow from "/images/icon-arrow-down.svg";
import styled from "styled-components";

const faqItems = [
  {
    question: "How many team members can I invite?",
    answer:
      "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
  },
  {
    question: "What is the maximum file upload size?",
    answer:
      "No more than 2GB. All files in your account must fit your allotted storage space.",
  },
  {
    question: "How do I reset my password?",
    answer:
      "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
  },
  {
    question: "Can I cancel my subscription?",
    answer:
      "Yes! Send us a message and we’ll process your request no questions asked.",
  },
  {
    question: "Do you provide additional support?",
    answer:
      "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
  },
];

// const QuestionSection = styled.section`
//   display: flex;
//   flex-direction: column;
//   gap: 12px;
// `;

const Question = styled.h2`
  cursor: pointer;
  font-size: 13px;
  line-height: 16.12px;
  padding: 19px 0 18px 0px;
  text-align: left;
  color: #4b4c5f;
  font-weight: ${(props) => (props.answer === props.index ? "700" : "400")};
  margin-right: 35px;

  &:hover {
    color: rgba(244, 123, 86, 1);
  }

  /* border-bottom: 1px solid #e8e8ea;
  padding-bottom: 18px; */
`;

const Answer = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0px;
  text-align: left;
  color: #787887;
  margin-bottom: 16px;
  transition: 0.4s ease-in-out;
`;

export default function FaqItem({ answer, setAnswer }) {
  const handleClick = function (index) {
    setAnswer(index);
    if (answer === index) {
      setAnswer(null);
    } else {
      setAnswer(index);
    }
  };
  return (
    <>
      <div>
        <Question></Question>
      </div>

      <ul className="question-section">
        {faqItems.map((faqItem, index) => (
          <li
            className="faq-item"
            onClick={() => handleClick(index)}
            key={index}>
            <>
              <Question answer={answer} index={index}>
                {faqItem.question}
              </Question>

              {answer === index ? <Answer>{faqItem.answer}</Answer> : null}
              <div className="line"></div>
              <img
                style={answer === index ? { transform: "rotate(180deg)" } : {}}
                className="arrow"
                src={Arrow}
                alt="icon of arrow"
              />
            </>
          </li>
        ))}
      </ul>
    </>
  );
}
