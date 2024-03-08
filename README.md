# React + Vite

This project is an accordion-style FAQ section created with React. It's one of my first projects using React, where I focused on understanding the basics of components, useState, and props.

[Live Demo](https://accordion-card-react.vercel.app/)

## Implementation

### Structure

The FAQ section is structured into two main components:

- **App Component:** This is the root component that renders the FAQ section. It maintains the state for the currently active answer and passes it down to the FaqItem component.
- **FaqItem Component:** This component is responsible for rendering the list of questions and their corresponding answers. It also handles the click events to expand or collapse the answers.

### State Management

The useState hook is used to manage the state of the currently active answer. The state is initialized with false, indicating that no answer is expanded initially.

```javascript
const [answer, setAnswer] = useState(false);
```

### Event Handling

The handleClick function is defined in the FaqItem component. It is responsible for toggling the expansion of the answers. When a question is clicked, it checks if the clicked question is already active. If it is, it collapses the answer; otherwise, it expands the answer.

```javascript
const handleClick = function (index) {
  setAnswer(index);
  if (answer === index) {
    setAnswer(null);
  } else {
    setAnswer(index);
  }
};
```

### Conditional Rendering

The answers are conditionally rendered based on the active state. If the state matches the index of the question, the answer is displayed; otherwise, it remains hidden.

```javascript

{answer === index ? <p className="answer">{faqItem.answer}</p> : null}
Styling
Styling is applied to give a visual indication of the active state. When an answer is expanded, the arrow icon rotates 180 degrees.


<img
  style={answer === index ? { transform: "rotate(180deg)" } : {}}
  className="arrow"
  src={Arrow}
  alt="icon of arrow"
/>
```

### Conclusion

This project was a great learning experience for understanding the basics of React, including component structure, state management, event handling, and conditional rendering. It provided a practical example of creating an interactive FAQ section that can be easily integrated into any website.
