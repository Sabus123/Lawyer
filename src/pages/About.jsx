import React from 'react';

const About = () => {
    return (
        <div>
           <div class="max-w-4xl mx-auto p-6">

<header class="bg-indigo-600 text-white rounded-xl p-8 text-center shadow-lg mb-8">
  <h1 class="text-4xl font-bold mb-2">React Blog</h1>
  <p class="text-lg">A Quick Dive into React Core Concepts</p>
</header>


<article class="bg-white rounded-lg shadow p-6 mb-6">
  <h2 class="text-2xl text-indigo-600 font-semibold mb-2">What is useState and how does it work in React?</h2>
  <p class="leading-relaxed">
    The <code>useState</code> hook is a core feature in React that lets you add and manage state in functional components. 
    It returns an array containing the current state and a function to update it. When the update function is called, the component re-renders with the new state. 
    It's useful for toggles, input forms, counters, and dynamic UI changes.
  </p>
</article>


<article class="bg-white rounded-lg shadow p-6 mb-6">
  <h2 class="text-2xl text-indigo-600 font-semibold mb-2">What is the purpose of useEffect in React?</h2>
  <p class="leading-relaxed">
    The <code>useEffect</code> hook handles side effects in React components — like data fetching, subscriptions, and manually changing the DOM. 
    It runs after the component is rendered. You can control when it runs by specifying dependencies. 
    It replaces lifecycle methods like <code>componentDidMount</code>, <code>componentDidUpdate</code>, and <code>componentWillUnmount</code> in class components.
  </p>
</article>


<article class="bg-white rounded-lg shadow p-6 mb-6">
  <h2 class="text-2xl text-indigo-600 font-semibold mb-2">What is a custom hook in React and when should you use one?</h2>
  <p class="leading-relaxed">
    A custom hook is a reusable function in React that starts with the word "use" and uses built-in hooks internally. 
    You should create custom hooks when you need to reuse stateful logic (e.g., data fetching, form handling) across multiple components. 
    They improve code readability, maintainability, and avoid duplication.
  </p>
</article>


<article class="bg-white rounded-lg shadow p-6 mb-6">
  <h2 class="text-2xl text-indigo-600 font-semibold mb-2">Difference between controlled and uncontrolled components. Which one is better?</h2>
  <p class="leading-relaxed">
    In React, <strong>controlled components</strong> have their form data managed by state via hooks like <code>useState</code>. 
    <strong>Uncontrolled components</strong> manage their own state internally using <code>ref</code>. 
    Controlled components offer better control and are easier to validate and debug, so they are usually preferred in modern apps.
  </p>
</article>


<article class="bg-white rounded-lg shadow p-6 mb-6">
  <h2 class="text-2xl text-indigo-600 font-semibold mb-2">Tell us something about useFormStatus() in React.</h2>
  <p class="leading-relaxed">
    <code>useFormStatus()</code> is a hook in frameworks like Next.js (App Router) used to track the state of a form submission. 
    It provides helpful indicators like <code>pending</code> or <code>success</code>, allowing you to disable buttons, show spinners, or display messages. 
    It’s especially useful for enhancing UX in server-driven form handling.
  </p>
</article>

</div>
        </div>
    );
};

export default About;