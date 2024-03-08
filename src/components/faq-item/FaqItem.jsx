import "./faqItem.css";
import Arrow from "/images/icon-arrow-down.svg";

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
      <ul className="question-section">
        {faqItems.map((faqItem, index) => (
          <li
            className="faq-item"
            onClick={() => handleClick(index)}
            key={index}>
            <>
              <h3 className="question">{faqItem.question}</h3>
              {answer === index ? (
                <p className="answer">{faqItem.answer}</p>
              ) : null}
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
