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

