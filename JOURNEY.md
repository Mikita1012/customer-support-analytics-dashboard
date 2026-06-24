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

## Day 9 - useEffect & Dependency Arrays

### Learned

#### What is useEffect?

`useEffect` is a React Hook used to perform side effects after a component renders.

Examples of side effects:

* API Calls
* Timers
* Local Storage Operations
* Analytics Tracking
* Event Listeners

Example:

```jsx
useEffect(() => {
  console.log("Component Mounted");
}, []);
```

#### Why useEffect Exists

React components should focus on:

```text
State + Props
      ↓
Render UI
```

Operations that interact with the outside world should be handled using `useEffect`.

#### Render vs Effect

Learned the execution order:

```text
Component Render
      ↓
UI Appears
      ↓
useEffect Runs
```

Example:

```jsx
console.log("Render");

useEffect(() => {
  console.log("Effect");
}, []);
```

Output:

```text
Render
Effect
```

#### useEffect with No Dependency Array

Example:

```jsx
useEffect(() => {
  console.log("Runs Every Render");
});
```

Behavior:

* Runs after every render.
* Runs whenever any state update causes a re-render.

#### useEffect with Empty Dependency Array

Example:

```jsx
useEffect(() => {
  console.log("Runs Once");
}, []);
```

Behavior:

* Runs only once after the initial render.
* Commonly used for initial API calls.

#### useEffect with Single Dependency

Example:

```jsx
useEffect(() => {
  console.log("Ticket Count Changed");
}, [ticketCount]);
```

Behavior:

* Runs on initial render.
* Runs whenever `ticketCount` changes.

#### Dependency Tracking

React checks the dependency array after each render.

Example:

```jsx
useEffect(() => {
  console.log("Count Effect");
}, [count]);
```

React internally checks:

```text
Did count change?

YES → Run Effect
NO  → Skip Effect
```

#### Multiple Dependencies

Example:

```jsx
useEffect(() => {
  console.log("Effect Running");
}, [ticketCount, ticketTitle]);
```

Behavior:

* Runs on initial render.
* Runs when `ticketCount` changes.
* Runs when `ticketTitle` changes.
* Does not run for unrelated state changes.

#### Dependency Arrays Control Effect Execution

Examples:

```jsx
useEffect(() => {}, []);
```

Runs:

```text
Initial Render Only
```

---

```jsx
useEffect(() => {}, [count]);
```

Runs:

```text
Initial Render
+
Whenever count changes
```

---

```jsx
useEffect(() => {});
```

Runs:

```text
After Every Render
```

### Key Takeaways

* `useEffect` runs after rendering.
* Dependency arrays control when effects execute.
* Empty dependency array (`[]`) means run once.
* No dependency array means run after every render.
* React only tracks values listed in the dependency array.
* State changes alone do not trigger an effect unless the changed state is part of the dependency array.
* Effects are commonly used for API calls and side effects.

### Dashboard Progress

Completed:

✅ Added first `useEffect`

✅ Observed render vs effect execution order

✅ Learned dependency arrays

✅ Tested single dependency tracking

✅ Tested multiple dependency tracking

✅ Connected `ticketCount` changes with `useEffect`

✅ Understood when effects run and when they do not

### Confidence Reflection

* Comfortable explaining why `useEffect` exists.
* Understand the difference between rendering and side effects.
* Can predict when an effect will run based on its dependency array.
* More confident answering React interview questions related to `useEffect`.
* Ready to learn API calls using `useEffect`.

## Day 11 - React Router Fundamentals

### Learned

#### Why React Router Exists

React applications often contain multiple pages such as:

* Dashboard
* Tickets
* Customers
* Settings

Instead of placing everything on a single page, React Router allows navigation between different pages using URLs.

Example:

```text
/dashboard
/tickets
/customers
/settings
```

#### Routes and URLs

A route maps a URL path to a React component.

Example:

```jsx
<Route
  path="/tickets"
  element={<Tickets />}
/>
```

When the URL is:

```text
/tickets
```

React Router renders:

```jsx
<Tickets />
```

#### BrowserRouter

Learned that `BrowserRouter` provides routing functionality to the entire React application.

Example:

```jsx
<BrowserRouter>
  <App />
</BrowserRouter>
```

Responsibilities:

* Reads the browser URL
* Tracks URL changes
* Enables navigation
* Allows Route matching

#### Routes and Route Components

Learned how React Router determines which component should be displayed based on the current URL.

Example:

```jsx
<Routes>
  <Route
    path="/"
    element={<Dashboard />}
  />

  <Route
    path="/tickets"
    element={<Tickets />}
  />
</Routes>
```

#### Creating Separate Pages

Created page components:

```text
Dashboard.jsx
Tickets.jsx
Customers.jsx
Settings.jsx
```

Each page represents a separate screen in the application.

#### Navigation Using Link

Learned how to navigate between pages without refreshing the browser.

Example:

```jsx
<Link to="/tickets">
  Tickets
</Link>
```

Benefits:

* Updates the URL
* Renders the correct component
* Does not refresh the page

#### Link vs Anchor Tag

React Router:

```jsx
<Link to="/tickets">
  Tickets
</Link>
```

Behavior:

```text
URL Changes
↓
Component Updates
↓
No Page Refresh
```

Traditional HTML:

```html
<a href="/tickets">
  Tickets
</a>
```

Behavior:

```text
URL Changes
↓
Full Page Refresh
```

#### Browser History Integration

Learned that React Router works with browser history.

Example:

```text
/dashboard
↓
/tickets
```

Pressing Back:

```text
/tickets
↓
/dashboard
```

The appropriate component is rendered automatically.

#### URL-Driven Rendering

React Router is driven by the current URL.

Example:

```text
http://localhost:5173/tickets
```

React Router checks the URL and renders:

```jsx
<Tickets />
```

even if the user directly enters the URL in the browser.

#### Layouts and Outlet

Learned why navigation bars usually remain visible across pages.

Example:

```jsx
<Navbar />
<Outlet />
```

Navbar:

```text
Always Visible
```

Outlet:

```text
Displays the component matching the current route
```

Examples:

```text
/dashboard
```

Outlet renders:

```jsx
<Dashboard />
```

---

```text
/customers
```

Outlet renders:

```jsx
<Customers />
```

### Key Takeaways

* React Router enables multi-page React applications.
* URLs determine which component gets rendered.
* BrowserRouter provides routing functionality.
* Link enables navigation without page refresh.
* Route maps URLs to components.
* Browser history works automatically with React Router.
* Layouts allow shared UI elements such as Navbar and Sidebar.
* Outlet acts as a placeholder for route content.

### Dashboard Progress

Completed:

✅ Installed React Router

✅ Understood BrowserRouter

✅ Learned Routes and Route

✅ Created separate page components

✅ Learned Link navigation

✅ Understood URL-based rendering

✅ Learned browser history integration

✅ Learned Layout and Outlet concepts

### Confidence Reflection

* Comfortable explaining what React Router does.
* Understand how URLs map to React components.
* Can explain the difference between Link and anchor tags.
* Understand navigation without page refresh.
* Ready to build a multi-page dashboard application.

# Day 12, 13 - Context API

## Topic Covered

Context API

---

## What I Learned

### Props Drilling

Learned that props drilling occurs when data must be passed through multiple intermediate components that do not actually use the data.

Example:

App → Dashboard → Layout → Navbar

Even though only Navbar needs the data, every component in between must pass it forward.

---

### Context API

Learned that Context API helps solve the props drilling problem by allowing components to access shared data directly.

Context acts like a shared data container that can be accessed by multiple components.

---

### createContext()

Used createContext() to create a new Context object.

Example:

const UserContext = createContext();

This creates a Context that can store and share data across components.

---

### Provider

Learned that Provider is responsible for making data available to child components.

Example:

<UserContext.Provider value={user}>
...
</UserContext.Provider>

The value prop contains the data that will be shared.

---

### useContext()

Learned that useContext() is used to read data from a Context.

Example:

const user = useContext(UserContext);

This allows components to directly access shared data without receiving props.

---

### State vs Context

Important understanding:

* useState stores data.
* Context distributes data.

Context does not replace state.

State owns data while Context shares data.

---

## What I Built

Created a UserContext file.

Created a user object:

{
name: "Mikita",
role: "Admin"
}

Created a Navbar component.

Used useContext() inside Navbar to access user information from Context.

Displayed:

* Welcome Mikita
* Role: Admin

---

## Challenges Faced

Initially forgot to pass the value prop to the Provider.

Example:

<UserContext.Provider>

This caused useContext() to return undefined.

Learned that the Provider must receive data through the value prop.

Example:

<UserContext.Provider value={user}>

---

## Questions & Answers



---

## Key Takeaway

Before Context API:

App → Dashboard → Layout → Navbar

After Context API:

Navbar ← Context

Dashboard ← Context

Settings ← Context

Components can directly access shared data without prop drilling.


# Day 14 - Custom Hooks

## Learned

### Why Custom Hooks Exist

As React applications grow, multiple components may require the same logic.

Example:

```text
Dashboard
↓
Fetch Users

Customers
↓
Fetch Users

Settings
↓
Fetch Users
```

Without Custom Hooks, the same logic must be written repeatedly in multiple components.

Custom Hooks allow reusable logic to be written once and reused anywhere.

Benefits:

* Reduces code duplication
* Improves readability
* Improves maintainability
* Keeps components focused on UI

### What is a Custom Hook?

A Custom Hook is a JavaScript function that starts with the word:

```text
use
```

Example:

```jsx
function useUsers() {
  ...
}
```

Custom Hooks allow developers to extract reusable logic from components.

#### Custom Hooks Share Logic, Not State

One of the most important concepts learned today.

Example:

```jsx
const users1 = useUsers();
const users2 = useUsers();
```

Behavior:

```text
Same Logic
↓
Separate State
```

Learned:

* Custom Hooks share logic
* Custom Hooks do not share state
* Every hook invocation creates its own state

#### Extracting Logic From Components

Before:

```jsx
useState(...)
useEffect(...)
fetch(...)
loading
error
```

All logic existed directly inside App.jsx.

After:

```jsx
const {
  users,
  isLoading,
  error
} = useUsers();
```

Behavior:

```text
Component
↓
Calls Hook
↓
Receives Data
```

This keeps components clean and easier to understand.

#### Returning Values From Custom Hooks

Learned that a Custom Hook should return whatever data or functions a component needs.

Example:

```text
useUsers()
↓
users
isLoading
error
```

The component can then consume these values without needing to know how the data was fetched.

#### Separation of Concerns

Learned the importance of separating UI from business logic.

```text
Component
↓
Handles UI
```

```text
Custom Hook
↓
Handles Logic
```

This makes React applications easier to scale and maintain.

#### Building useUsers()

Created:

```text
src/hooks/useUsers.js
```

Moved user-fetching logic from App.jsx into a reusable hook.

Managed:

```jsx
const [users, setUsers] = useState([]);
const [isLoading, setIsLoading] = useState(true);
const [error, setError] = useState(null);
```

Fetched data from:

```text
https://jsonplaceholder.typicode.com/users
```

Returned:

```jsx
{
  users,
  isLoading,
  error
}
```

Consumed inside App.jsx:

```jsx
const {
  users,
  isLoading,
  error
} = useUsers();
```

#### Hook Responsibility

Initially moved unrelated state into the hook:

```text
ticketCount
ticketTitle
tickets
showDashboard
```

Learned that a hook should have a single responsibility.

Since the hook is:

```jsx
useUsers()
```

it should only manage:

```text
users
isLoading
error
```

### Key Takeaways

* Custom Hooks are reusable JavaScript functions.
* Custom Hooks must start with the word "use".
* Custom Hooks help remove duplicate logic.
* Components should focus on UI.
* Custom Hooks should focus on logic.
* Custom Hooks share logic, not state.
* Each hook invocation gets its own state.
* Custom Hooks should return whatever the component needs.
* Hooks should follow a single responsibility principle.

### Dashboard Progress

Completed:

✅ Learned Custom Hooks

✅ Created first custom hook (useUsers)

✅ Extracted API fetching logic from App.jsx

✅ Moved loading and error handling into custom hook

✅ Learned how hooks return data

✅ Consumed hook data inside App.jsx

✅ Understood hook responsibility

✅ Understood logic vs state sharing

### Confidence Reflection

* Comfortable explaining what a Custom Hook is.
* Understand why Custom Hooks exist.
* Can explain the difference between sharing logic and sharing state.
* Understand how to return data from a Custom Hook.
* Can create a basic Custom Hook using useState and useEffect.
* Beginning to think about separating UI from business logic.
* Ready to learn more advanced state management using useReducer.






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

Q What is [] in useEffect ?
- An empty dependency array tells React to run the effect only once after the initial render.

Q. What if we have a value in dependcy array ?
- The dependency array tells React when to run the effect. If any value inside the dependency array changes between renders, React executes the effect again.

Q. When does useEffect run ?
- useEffect runs after React renders the component. React first updates the UI and then executes the effect.

Q.  const [count, setCount] = useState(0);
const [name, setName] = useState("Mikita");
  useEffect(() => {
    console.log("Count Effect");
  }, [count]);

User changes - Mikita to John, will useEffect run on this change ?

- The effect does not run because React only tracks values listed in the dependency array. Since name is not a dependency, changing it does not trigger the effect.

What if  count = 0 ---> 1 ??
Will useEffect run ?
The effect runs because count is included in the dependency array. When React detects that count changed between renders, it executes the effect again.

Q. What's wrong with this?
useEffect(() => {
  fetchTickets();
});
- Since there is no dependency array, the effect runs after every render. If the API call updates state, it can cause another render, which triggers the e

Q What is an API ?
- APIs act as a bridge between the frontend and the database. The frontend sends requests to the API, and the API retrieves data from the database and returns it in a format that the frontend can understand, usually JSON.


Q. Why do we wrap App inside BrowserRouter?
- BrowserRouter provides routing functionality to the entire React application. It monitors the browser URL and allows Route and Routes components to determine which page should be rendered.

Q What is Link in React Router ?
- Link is provided by React Router. It allows navigation between routes without causing a full page refresh, helping maintain the Single Page Application experience.

Q. WHy not use <a> ?
- React reloads the entire page unlike Link

Q. What happens when a user clicks a React Router Link?
- React Router updates the URL, matches the route against the configured Route components, renders the corresponding component, and updates the UI without performing a full page refresh.

Q. What problem does Context API solve?
- Context API solves props drilling by allowing components to access shared data directly without passing props through multiple intermediate components.

Q. What is Props Drilling?
- Props drilling is the process of passing data through several components that do not need the data themselves, only to deliver it to a deeper child component.

Q. What are the three main parts of Context API?
- * createContext()
  * Provider
  * useContext()


Q. What is the difference between useState and Context API?
- useState stores and updates data. Context API shares data across multiple components.

Q. What happens when useContext is used without a Provider?
- React returns the Context's default value. If no default value was supplied to createContext(), the result is undefined.

Q. Which is responsible for making data available ?
- Provider - is what shares data with all components inside it 
State - owns data 
Context - shares data

Q. Q. Does Context store data permanently?
- No. It stores data in React memory while the application is running. Refreshing the page resets it unless persisted elsewhere.

Q. Is Context API a replacement for all state management?
- No.
It is useful for shared application state, but large applications may use solutions like Redux, Zustand, or other state management libraries.

Q. What is a Custom Hook?
- A Custom Hook is a JavaScript function that starts with "use" and allows reusable stateful logic to be shared between components.

Q. Does a Custom Hook share state between components?
- ❌ No
This is a trick question.
Example:
const users1 = useUsers();
const users2 = useUsers();
Each call gets its own state.
Custom Hooks share logic.
Not state.


Q. Why must Custom Hooks start with "use"?
- React uses the naming convention to identify Hooks and enforce Hook rules.

Q. Can a Custom Hook use other Hooks?
- ✅ Yes, Very common.

Example:
useState()
useEffect()
useContext()
inside a Custom Hook.

Q.  What problem do Custom Hooks solve?
- Custom Hooks help reuse stateful logic across multiple components, reducing code duplication and improving maintainability.

Notice the difference:

Code Duplication
        +
Reusable Logic
        +
Maintainability


Q. Explain Your useUsers Hook
- The useUsers() hook is responsible for fetching users from an API. It manages three pieces of state: users, loading, and error. When the component mounts, the hook makes an API request using useEffect. If the request succeeds, users are stored in state. If it fails, an error message is stored. The hook then returns users, loading, and error so that any component can use the data without needing to implement the API logic itself.







