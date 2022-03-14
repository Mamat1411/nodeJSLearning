//Synchronous
// const getUserSync = (id) => {
//     const name = id === 1 ? 'Muhammad' : 'Mujahid';
//     return {id, name};
// };

// const firstUser = getUserSync(1);
// console.log(firstUser);

// const secondUser = getUserSync(2);
// console.log(secondUser);

// const greetings = "Hello World!";
// console.log(greetings);

//Asynchronous
const getUser = (id, callback) => {
    const time = id === 1 ? 3000 : 2000;
    setTimeout(() => {
        const name = id === 1 ? 'Muhammad' : 'Mujahid';
        callback({id, name});
    }, time);
};

const firstUser = getUser (1, (results) =>{
    console.log(results);
});
const secondUser = getUser (2, (results) =>{
    console.log(results);
});
const greetings = 'Hello World!';
console.log(greetings);