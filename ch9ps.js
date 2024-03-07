// Chapter 09 Practice set...

// Problem No -1
// Write a JS program to load a JS file in a browser using promises. Use .then() to display an alert when the load is completed...
function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

const scriptUrl =
  "https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js";

loadScript(scriptUrl)
  .then(() => {
    console.log("Script loaded successfully!");
  })
  .catch((error) => {
    console.log("Error loading script: " + error.message);
  });


// Problem No -2
// Write the same program from previous Question and use async/await syntex
async function loadScript2(src2) {
    return new Promise((resolve, reject) => {
      const script2 = document.createElement('script');
      script2.src = src2;
      script2.onload = resolve;
      script2.onerror = reject;
      document.head.appendChild(script2);
    });
  }
  async function main() {
    try {
      const scriptUrl2 = 'https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/components/prism-actionscript.min.js'; // Replace this with your script URL
      await loadScript2(scriptUrl2);
      console.log('Script2 loaded successfully!');
    } catch (error2) {
      console.log('Error loading script: ' + error2.message);
    }
  }
  main();

// Problem No -3
// Create a promise which rejects after 3 seconds... Use an async/await to get its value.. Use a try catch to handle its error...
function delayedRejection() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error('Promise rejected after 3 seconds'));
      }, 3000);
    });
  }
  async function main2() {
    try {
      const result = await delayedRejection();
      console.log('Promise resolved:', result);
    } catch (error3) {
      console.log('Caught error:', error3.message);
    }
  }
  main2();

// Problem No -4
// Write a program using Promise.all() inside an async/await to await 3 promises. Compare its results with the case where we await these promises one by one..
function asyncFunction1() {
    return new Promise(resolve => {
      setTimeout(() => resolve('Result from asyncFunction1'), 2000);
    });
  }
  
  function asyncFunction2() {
    return new Promise(resolve => {
      setTimeout(() => resolve('Result from asyncFunction2'), 1500);
    });
  }
  
  function asyncFunction3() {
    return new Promise(resolve => {
      setTimeout(() => resolve('Result from asyncFunction3'), 1000);
    });
  }
  
  async function awaitPromisesOneByOne() {
    try {
      const result1 = await asyncFunction1();
      console.log(result1);
      const result2 = await asyncFunction2();
      console.log(result2);
      const result3 = await asyncFunction3();
      console.log(result3);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  async function awaitPromisesWithPromiseAll() {
    try {
      const [result1, result2, result3] = await Promise.all([
        asyncFunction1(),
        asyncFunction2(),
        asyncFunction3()
      ]);
      console.log(result1);
      console.log(result2);
      console.log(result3);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  awaitPromisesOneByOne();
  awaitPromisesWithPromiseAll(); 
  