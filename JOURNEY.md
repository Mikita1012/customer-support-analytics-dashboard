## Day 1 - React Setup & useState Hook

### Learned

#### React Project Setup

* Created a React application using Vite.
* Understood why Vite is preferred over Create React App for modern React projects.
* Successfully ran the application locally.

#### Vite Project Structure

Understood the purpose of:

```text
src/
public/
App.jsx
main.jsx
index.css
package.json
vite.config.js
```

#### React Entry Point

Learned what `main.jsx` does:

```jsx
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
```

Key concepts:

* React application entry point.
* `createRoot()`.
* Rendering React into the DOM.
* `StrictMode`.

#### React Components

Learned that:

* Components are reusable UI building blocks.
* Components are JavaScript functions that return JSX.

Example:

```jsx
function App() {
  return <h1>Hello World</h1>;
}
```

#### useState Hook

Learned React's first Hook:

```jsx
const [count, setCount] = useState(0);
```

Key concepts:

* State management.
* State updates trigger re-renders.
* React automatically updates the UI when state changes.

#### State vs Local Variables

State Variable:

```jsx
const [count, setCount] = useState(0);
```

Local Variable:

```js
let count = 0;
```

Difference:

* React tracks state variables.
* React does not track local variables.
* State updates trigger UI updates.
* Local variable updates do not trigger re-renders.

### Completed

✅ Set up React using Vite

✅ Understood the Vite project structure

✅ Learned what `main.jsx` does

✅ Learned what a React component is

✅ Learned the `useState` Hook

✅ Understood the difference between state variables and local variables

### Challenges

* Could not start JavaScript fundamentals due to office work commitments.

### Next Steps

* Learn `let` vs `const`
* Learn Arrays
* Learn Objects
* Learn Functions

### Questions Explored

* What is the difference between state variables and local variables?

### Key Takeaways

* React re-renders when state changes.
* Local variables are not tracked by React.
* `useState` is the foundation of React state management.

## Day 2 - JavaScript Fundamentals

### Learned

#### let vs const

```js
let count = 0;
count = 1; // Allowed
```

```js
const count = 0;
count = 1; // Error
```

Key concepts:

* `let` can be reassigned.
* `const` cannot be reassigned.
* Both are block-scoped.

#### Arrays

Learned that arrays:

* Store ordered collections of values.
* Can contain mixed data types in JavaScript.

Example:

```js
const data = [
  "Mikita",
  30,
  true,
  { city: "Mumbai" }
];
```

#### Objects

Learned that objects:

* Store data as key-value pairs.

Example:

```js
const person = {
  name: "Mikita",
  age: 30
};
```

#### Mutating vs Reassigning Objects

Allowed:

```js
const user = {
  name: "Mikita"
};

user.name = "John";
```

Reason:

* Property values can be modified.

Not Allowed:

```js
const user = {
  name: "Mikita"
};

user = {
  name: "John"
};
```

Reason:

* `const` prevents reassignment of the object reference.

### Key Insights

#### const prevents reassignment, not mutation

Allowed:

```js
user.name = "John";
```

Not Allowed:

```js
user = {
  name: "John"
};
```

#### Arrays can contain mixed data types

Example:

```js
const values = [
  "Mikita",
  30,
  true,
  { city: "Mumbai" }
];
```

### Confidence Reflection

* Understanding of JavaScript fundamentals is improving.
* Need more practice with interview-style explanations.
* Need continued exposure to real-world JavaScript examples.

### Key Takeaways

* `let` and `const` are block-scoped.
* Arrays can contain mixed data types.
* Objects store key-value pairs.
* `const` protects references, not object properties.
* Understanding object references is important for React state management.



## Day 3 - Destructuring, Functions & Arrow Functions

### Learned

#### Object Destructuring

* Extracting properties from an object into variables.
* Traditional approach:

```js
const name = person.name;
const city = person.city;
```

* Destructuring approach:

```js
const { name, city } = person;
```

#### Array Destructuring

* Extracting values from an array into variables.

```js
const colors = ["Red", "Blue"];

const [first, second] = colors;
```

#### Function Declarations

```js
function greet() {
  console.log("Hello");
}
```

* Functions are hoisted.
* Can be called before they are defined.

```js
greet();

function greet() {
  console.log("Hello");
}
```

#### Arrow Functions

```js
const greet = () => {
  console.log("Hello");
};
```

* Shorter syntax.
* Commonly used in React.
* Not hoisted like function declarations.

#### Arrow Function Short Syntax

```js
const add = (a, b) => a + b;
```

#### React Connections

* `const [count, setCount] = useState(0)` uses array destructuring.
* React components are commonly written as arrow functions.
* Event handlers often use arrow functions:

```jsx
onClick={() => setCount(count + 1)}
```

### Key Takeaways

* Destructuring makes code cleaner and easier to read.
* Function declarations and arrow functions can achieve the same result.
* Function declarations are hoisted; arrow functions are not.
* React heavily relies on destructuring and arrow functions.


## Day 4 - Spread Operator (...)

### Learned

#### Array Spread Operator

Creating a new array by copying existing elements.

```js
const numbers = [1, 2, 3];

const newNumbers = [...numbers, 4];
```

Result:

```js
[1, 2, 3, 4]
```

#### Object Spread Operator

Creating a new object while copying existing properties.

```js
const user = {
  name: "Mikita",
  city: "Mumbai"
};

const updatedUser = {
  ...user,
  city: "Pune"
};
```

Result:

```js
{
  name: "Mikita",
  city: "Pune"
}
```

#### Property Overwriting

Properties defined later overwrite previous values.

```js
const updatedUser = {
  ...user,
  city: "Pune"
};
```

#### Immutability Concept

Instead of modifying existing arrays or objects directly, create new copies using the spread operator.

#### React Connections

Updating arrays in state:

```js
setTickets([
  ...tickets,
  "Ticket 3"
]);
```

Updating objects in state:

```js
setUser({
  ...user,
  city: "Pune"
});
```

#### Props

- Props are read-only data passed from parent components to child components.
- Props help create reusable components.

Example:

```jsx
<MetricCard
  title="Total Tickets"
  value={125}
/>
```

Parent and Child Components
   - App.jsx acts as the parent component.
   - MetricCard.jsx acts as the child component.

Reusable Components
    - Built a reusable MetricCard component.
    - Rendered multiple cards using different prop values.

className in React
    - React uses className instead of class.
    - class is a reserved keyword in JavaScript.

React Fragments -- <></>
    - Allow multiple elements to be grouped together.
    - Do not create extra DOM nodes.

### Key Takeaways

* The spread operator expands arrays and objects.
* Helps create new copies instead of mutating existing data.
* Commonly used in React state updates.
* Essential for maintaining predictable React rendering behavior.
* Props make components reusable.
* Parent components pass data to child components.
* Fragments help keep the DOM clean.
* React applications are built by composing reusable components.

## Day 5 - Reusable Components & Dynamic Rendering

### Learned

#### CSS Flexbox

Learned the purpose of:

```css
display: flex;
gap: 20px;
flex-wrap: wrap;
```

Key concepts:

* `display: flex` arranges child elements in a row.
* `gap` adds spacing between elements.
* `flex-wrap: wrap` moves items to the next row when there is insufficient space.

#### Dynamic Rendering using map()

Created UI dynamically using array data.

Example:

```jsx
{
  metrics.map((metric) => (
    <MetricCard
      key={metric.title}
      title={metric.title}
      value={metric.value}
    />
  ));
}
```

Benefits:

* UI is generated from data.
* Adding a new object to the array automatically renders a new card.
* Reduces repetitive code.

#### React Key Prop

Example:

```jsx
key={metric.title}
```

Purpose:

* Helps React identify list items uniquely.
* Improves rendering performance.
* Enables efficient updates during re-renders.

### Key Takeaways

* Props make components reusable.
* Parent components pass data to child components.
* React Fragments help keep the DOM clean.
* Flexbox is commonly used for dashboard layouts.
* `map()` is the standard way to render lists in React.
* React UIs should be data-driven rather than hardcoded.
* Keys help React efficiently update lists.

### Dashboard Progress

Completed:

✅ Built reusable `MetricCard` component

✅ Styled Metric Cards

✅ Created dashboard card layout using Flexbox

✅ Rendered cards dynamically using `map()`

✅ Learned React list rendering and key props

### Confidence Reflection

* Understanding of React component architecture is improving.
* Comfortable with props and component reusability.
* Need more practice with React terminology and interview-style explanations.

## Day 6 - Conditional Rendering & UI State

### Learned

#### Conditional Rendering using &&

Render content only when a condition is true.

Example:

```jsx
{
  isLoggedIn && <h1>Welcome</h1>
}
```

Behavior:

* If `isLoggedIn` is `true`, the element is rendered.
* If `isLoggedIn` is `false`, React renders nothing.

#### Conditional Rendering using Ternary Operator

Render different UI based on a condition.

Example:

```jsx
{
  hasTickets
    ? <p>Tickets Found</p>
    : <p>No Tickets Available</p>
}
```

Behavior:

* True condition → first UI is rendered.
* False condition → second UI is rendered.

#### Empty State Handling

Implemented a dashboard empty state.

Example:

```jsx
{
  metrics.length > 0
    ? <Dashboard />
    : <p>No Metrics Available</p>
}
```

Purpose:

* Show meaningful UI when no data is available.
* Common pattern used in production applications.

#### Truthy and Falsy Values

Falsy values:

```js
false
0
""
null
undefined
NaN
```

Truthy values:

```js
[]
{}
"Hello"
123
```

Key Learning:

```js
Boolean([])
```

returns:

```js
true
```

An empty array is truthy.

#### Why metrics.length > 0 is Important

Incorrect:

```jsx
{
  metrics && <Dashboard />
}
```

Reason:

* Empty arrays are truthy.
* Dashboard may render even when there is no data.

Correct:

```jsx
{
  metrics.length > 0 && <Dashboard />
}
```

Reason:

* Verifies that the array actually contains items.

#### Logical NOT Operator (!)

Example:

```js
!true
```

returns:

```js
false
```

Example:

```js
!false
```

returns:

```js
true
```

Purpose:

* Toggle boolean values.

#### Toggle UI using State

Example:

```jsx
const [showDashboard, setShowDashboard] = useState(true);
```

Update:

```jsx
setShowDashboard(!showDashboard);
```

Behavior:

* Dashboard Visible → Dashboard Hidden
* Dashboard Hidden → Dashboard Visible

### Key Takeaways

* React can render UI conditionally.
* `&&` is useful when rendering something only when a condition is true.
* Ternary operators are useful when choosing between two UI states.
* Empty arrays are truthy in JavaScript.
* Checking `.length` is safer than checking the array itself.
* The `!` operator is commonly used to toggle state values.
* Conditional rendering is heavily used for loading states, error states, authentication, and empty states.

### Dashboard Progress

Completed:

✅ Implemented conditional rendering

✅ Added empty state handling

✅ Added dashboard visibility toggle

✅ Used state to control UI visibility

### Confidence Reflection

* Comfortable with React conditional rendering.
* Better understanding of JavaScript truthy and falsy values.
* Starting to predict UI behavior before running the code.

## Day 7 - Event Handling & State Updates

### Learned

#### Event Handling in React

React handles user interactions through events.

Example:

```jsx
<button onClick={handleAddTicket}>
  Add Ticket
</button>
```

Common React Events:

```jsx
onClick
onChange
onSubmit
```

#### Event Handler Functions

Created functions that execute in response to user actions.

Example:

```jsx
const handleAddTicket = () => {
  console.log("Ticket Added");
};
```

Attached to UI elements:

```jsx
<button onClick={handleAddTicket}>
  Add Ticket
</button>
```

#### Function Reference vs Function Invocation

Correct:

```jsx
<button onClick={handleAddTicket}>
```

Reason:

* Passes a function reference.
* Function executes when the button is clicked.

Incorrect:

```jsx
<button onClick={handleAddTicket()}>
```

Reason:

* Function executes immediately during component rendering.
* React receives the return value instead of the function.

#### State Updates from User Actions

Used an event handler to update state.

Example:

```jsx
const [ticketCount, setTicketCount] = useState(125);

const handleAddTicket = () => {
  setTicketCount(ticketCount + 1);
};
```

Result:

* Clicking the button updates state.
* React re-renders the component.
* UI displays the updated value.

#### React Re-render Cycle

Learned the flow:

```text
User Click
    ↓
Event Handler Executes
    ↓
State Update
    ↓
React Detects State Change
    ↓
Component Re-renders
    ↓
UI Updates
```

#### Local Variables vs State Variables

Local Variable:

```jsx
let count = 0;
```

State Variable:

```jsx
const [count, setCount] = useState(0);
```

Key Difference:

* React does not track local variables.
* Updating local variables does not trigger re-renders.
* Updating state variables triggers re-renders.

Example:

```jsx
let count = 0;

const handleClick = () => {
  count++;
};
```

Result:

* Console value changes.
* UI does not update.

#### Why React Uses State

State allows React to:

* Track changes.
* Re-render components.
* Keep UI synchronized with data.

### Key Takeaways

* React responds to user actions using events.
* Event handlers are functions executed in response to events.
* Pass function references to event handlers.
* Avoid invoking functions directly inside event props.
* State updates trigger React re-renders.
* Local variables do not trigger UI updates.
* React UI is driven by state changes.

### Dashboard Progress

Completed:

✅ Added interactive button handling

✅ Updated ticket count using state

✅ Observed React re-render behavior

✅ Understood function references vs function calls

✅ Reinforced state vs local variable concepts

### Confidence Reflection

* Better understanding of how React handles user interactions.
* Comfortable predicting UI behavior after state updates.
* Beginning to understand React's rendering lifecycle.
* Able to reason about React code before running it.

## Day 8 - Forms, Input Handling & Dynamic Ticket Management

### Learned

#### Input Handling in React

Created an input field and connected it to React state.

Example:

```jsx
const [ticketTitle, setTicketTitle] = useState("");
```

```jsx
<input
  type="text"
  value={ticketTitle}
  onChange={(event) =>
    setTicketTitle(event.target.value)
  }
/>
```

#### onChange Event

Learned that `onChange` fires whenever the value of an input field changes.

Examples:

```text
M
Mi
Mik
Miki
Mikita
```

Each change triggers the `onChange` event.

#### event.target.value

Learned how to capture user input.

Example:

```jsx
event.target.value
```

Contains the current value entered by the user.

Example:

```text
User types:
Login Issue

event.target.value:
"Login Issue"
```

#### Controlled Components

Learned that React can control form inputs through state.

Example:

```jsx
<input
  value={ticketTitle}
  onChange={(event) =>
    setTicketTitle(event.target.value)
  }
/>
```

Key Insight:

* React state becomes the source of truth.
* UI always reflects the current state.

#### Managing Form State

Stored user input using `useState`.

Example:

```jsx
const [ticketTitle, setTicketTitle] = useState("");
```

Benefits:

* Easy to access user-entered values.
* Easy to validate input.
* Easy to submit form data.

#### Adding Items to an Array in State

Learned how to update arrays using the spread operator.

Example:

```jsx
setTickets([
  ...tickets,
  ticketTitle
]);
```

Key Insight:

* Create a new array.
* Copy existing tickets.
* Add the new ticket at the end.

#### Dynamic Rendering using map()

Rendered ticket data dynamically.

Example:

```jsx
{
  tickets.map((ticket, index) => (
    <li key={index}>{ticket}</li>
  ))
}
```

Key Insight:

* React creates UI based on data.
* UI automatically updates when state changes.

#### Input Validation

Prevented empty tickets from being added.

Example:

```jsx
if (ticketTitle.trim() === "") {
  return;
}
```

Purpose:

* Avoid empty entries.
* Improve user experience.

#### Clearing Input After Submission

Learned how to reset form fields.

Example:

```jsx
setTicketTitle("");
```

Result:

* Ticket added successfully.
* Input field becomes empty.
* Ready for next entry.

### Key Takeaways

* Forms are controlled through React state.
* `onChange` captures user input.
* `event.target.value` contains the current input value.
* Controlled components keep UI synchronized with state.
* Arrays in state should be updated immutably using the spread operator.
* `map()` is commonly used to render lists dynamically.
* Form validation improves application reliability.
* React re-renders automatically after state updates.

### Dashboard Progress

Completed:

✅ Added Create Ticket input field

✅ Captured user input using state

✅ Added ticket titles to an array

✅ Rendered tickets dynamically using map()

✅ Implemented input validation

✅ Cleared input field after successful submission

✅ Connected Forms + State + Dynamic Rendering

### Confidence Reflection

* Comfortable with handling form inputs in React.
* Able to predict state changes before running code.
* Better understanding of controlled components.
* Beginning to build real application features instead of isolated examples.
* More confident debugging React rendering issues.




**# INTERVIEW LEVEL ANSWERS **-

Q. Why use useState instead of a normal variable?
- React re-renders components only when state or props change. Normal variables are recreated every time the component function executes and React does not track changes to them. State created with useState is preserved between renders, and when updated through its setter function, React schedules a re-render and updates the UI.

Q. What is destructing ?
- Destructuring is a JavaScript feature that allows extracting values from arrays or properties from objects into separate
 variables using a concise syntax.

Object example - 
    const person = {
        name: "Mikita",
        age: 30
    };
    name = "Mikita"
    age = 30

Array example
    const colors = ["Red", "Blue"];
    const [first, second] = colors; 

    first = "Red"
    second = "Blue"   

Q. What is the difference between a function declaration and an arrow function?
- Both can define functions, but function declarations are hoisted while arrow functions are not. Arrow functions also handle this differently and provide a shorter syntax.  

Q. What is the spread operator?
- The spread operator (...) expands elements of an array or properties of an object. It is commonly used to create new arrays or objects, merge data, and update React state without mutating existing values.

Q. What are PROPS ?
- Props (Properties) are read-only inputs passed from a parent component to a child component. They allow components to be reusable and dynamic.

Q. Can a child component modify props?
- ❌ No
Props are read-only.
If data needs to change, state should be used.

Q. Why do we create reusable components?
- Reusable components reduce code duplication, improve maintainability, and allow the same UI structure to be rendered with different data through props.

Q. Why do we use className instead of class in React?
- JSX is syntactic sugar for JavaScript. Since class is a reserved keyword in JavaScript, React uses className to apply CSS classes to elements.

Q. What is a React Fragment?
- A React Fragment allows grouping multiple elements without adding an extra node to the DOM. It helps satisfy React's requirement of returning a single parent element while keeping the DOM cleaner.

Q. Why we use <></> instead of div when returning an element in react ?
- React Fragment acts as a single wrapper element from React's perspective. 
<></> these are called react fragments , and it does not create an extra DOM element like .div does. The advantages of <></> are that they don't create an extra DOM element on the DOM tree like div does. 

Q. What does flex-wrap: wrap do?
- It allows flex items to move onto multiple lines when there isn't enough space in the container, improving responsiveness.

Q. Why do we use a key prop in React lists?
- The key prop helps React uniquely identify elements in a list, allowing it to efficiently update, add, or remove items during re-rendering.

Q. Can we use index as key?
- Yes, but only when the list is static and items are not reordered, added, or removed. Using a unique identifier is preferred because it helps React correctly track changes in the list.

Q. Is using index as key a good practice?
- Index can be used for static lists, but for dynamic lists it's recommended to use a stable unique identifier because React relies on keys to track elements efficiently during re-renders.

Q. map iterates over the array and takes this value
- The UI is generated from data. Since the component is rendered using map(), adding a new object to the array automatically creates a new MetricCard during rendering.

Q. Why do we check metrics.length > 0 instead of metrics?
- Empty arrays are truthy values in JavaScript. Checking metrics.length > 0 ensures that the array actually contains data before rendering the UI.

Q. Why is this dangerous?
  {
    metrics && <Dashboard />
  }
- Because empty arrays are truthy in JavaScript. The condition will pass even when the array contains no data. It's safer to check metrics.length > 0 when we want to verify that data exists.  

Q. Why doesn't this update the UI?
   ```javascript
    let count = 0;

    const handleClick = () => {
      count++;
    };
   ```

- Because count is a local variable. React does not track local variables. Updating it does not trigger a re-render. To update the UI, the value should be stored in state using useState. 
React does not track changes to local variables. Updating a local variable does not trigger a re-render. Only state updates using useState notify React that the component should re-render.

Q. What do you think onChange does?
- onChange is an event that fires whenever the value of an input field changes.

Q. What is a Controlled Component ?
- A controlled component is a form element whose value is controlled by React state. The component updates state using events such as onChange, and React uses that state to determine the displayed value.

Q. Why can button access ticketTitle ?
- Because ticketTitle is a state variable defined inside the App component. Both the input and button are rendered within the same component and therefore have access to the same state.
