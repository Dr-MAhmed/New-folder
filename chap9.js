// 1- Callback functions.
let div = document.getElementById("container");
function main() {
  const fn = () => {
    console.log("Another callback function is running");
  };
  const callback = (arg, fn) => {
    console.log(arg);
    fn();
  };
  const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = () => callback("Script has been loaded!", fn);
    document.head.append(sc);
  };
  loadScript(
    "https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",
    callback,
    (fun = () => {
      console.log("One more callback function is running");
    })
  );
  fun();
}
main();
div.innerHTML = `<b>Callback hell</b><br> ${main}`;

// 2- Promises in JS.
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const data = Math.random();
    if (data < 0.5) {
      reject(data);
    } else {
      resolve(data);
    }
  }, 2000);
});

const myPromise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const data = Math.random();
    if (data < 0.5) {
      reject(data);
    } else {
      resolve(data);
    }
  }, 2000);
});
//Consumers...
myPromise
  .then((result) => {
    console.log("Promise resolved with data:", result);
  })
  .catch((error) => {
    console.log("Promise rejected with error:", error);
  });

myPromise2
  .then((result) => {
    console.log("Promise resolved with data2:", result);
  })
  .catch((error) => {
    console.log("Promise rejected with error2:", error);
  });

// Attaching multiple handlers to a promise...
// This is known as promise chaining...
const myPromise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const data = Math.random();
    if (data < 0.5) {
      reject(data);
    } else {
      resolve(data);
    }
  }, 2000);
});
myPromise3
  .then((res) => {
    console.log("Data from promise 3 is fetching successfully", res);
    return res; // Return the result to chain another handler
  })
  .then((res) => {
    console.log("Second Handler returns new promise:", res);
    return res; // Return the result to chain another handler
  })
  .catch((err) => {
    console.log("Third Handler with err:", err);
  });

// Promise API...
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const data = Math.random();
    if (data < 0.5) {
      reject(data);
    } else {
      resolve(data);
    }
  }, 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const data = Math.random();
    if (data < 0.5) {
      reject(data);
    } else {
      resolve(data);
    }
  }, 3000);
});
// let p3 = Promise.all([p1, p2]);
// let p4 = Promise.allSettled([p1, p2]);
// let p5 = Promise.race([p1, p2]);
// let p6 = Promise.any([p1, p2]);
// let p7 = Promise.resolve([p1, p2]);
let p4 = Promise.reject([p1, p2]);
p4.then((res) => {
  console.log("Promise Resolved",res);
}).catch((err) => {
  console.log("Promise Rejected",err);
});

// loadScript function using Promise..
const loadScriptSrc = (src) => {
  return new Promise((resolve, reject) => {
    let scr = document.createElement("script");
    scr.src = src;
    scr.onload = resolve;
    scr.onerror = reject;
    document.head.append(scr);
  });
};

let ls = loadScriptSrc('https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/components/prism-actionscript.min.js');
ls.then(res=>{
    console.log('Script has been loaded:', res);
}).catch((err)=>{
    console.log('Script has not been loaded:', err)
});