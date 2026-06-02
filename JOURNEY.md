Day 1

Learned:
- USESTATE HOOK

Completed: 
✅ Set up React using Vite

✅ Understood the Vite project structure

✅ Learned what main.jsx does

✅ Learned what a React component is

✅ Learned your first React Hook: useState

✅ Understood the difference between:
    Local variables
    State variables

Challenges:
- Could not start JavaScript fundamentals due to office work

Next Step:
- Learn let vs const
- Learn arrays, objects and functions

Questions:
- What is the difference between state and local variables


Day 2

Learned:
- let vs const
- Arrays in JavaScript
- Objects in JavaScript
- Difference between mutating and reassigning objects

Key Insight:
- const prevents reassignment, not object property updates
    means, 
            const user = {
                name ="Mikita" 
            }

            user = {
                name = "John"
            } // NOT ALLOWED

            user.name = "John" // ALLOWED
- Arrays can contain mixed data types in JavaScript

Confidence Level:
- Understanding improving
- Need more practice with JavaScript fundamentals


INTERVIEW LEVEL ANSWERS -

Q. Why use useState instead of a normal variable?
- React re-renders components only when state or props change. Normal variables are recreated every time the component function executes and React does not track changes to them. State created with useState is preserved between renders, and when updated through its setter function, React schedules a re-render and updates the UI.
