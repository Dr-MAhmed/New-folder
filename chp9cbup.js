// Async await in JS...
async function getData() {
    let x = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
            title: "foo",
            body: "bar",
            userId: 1,
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    });
    let data = await x.json();
    return data;
}

async function main() {
    console.log("Loading Modules");
    let data = await getData();
    console.log(data);
    console.log("Do something else");
    console.log("Load Data");
    console.log("Process Data");
}

main();