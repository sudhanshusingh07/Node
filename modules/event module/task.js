//? Challenge: "Event Maestro: Handle It All!"

//! Objective
//* Create a program using Node.js EventEmitter that:

//? Listens for multiple types of user events (e.g., login, logout, purchase, and profile update).
//? Tracks how many times each event is emitted.
//? Logs a summary of all event occurrences when a special summary event is triggered.

//! Requirements
//? Create at least four custom events (e.g., user-login, user-logout, user-purchase, profile-update).
//? Emit these events multiple times with different arguments (e.g., username, item purchased).
//? Track and store the count of each event type.
//? Define a summary event that logs a detailed report of how many times each event was triggered.

const { log } = require("console");
const EventEmitter = require("events");
const emitter = new EventEmitter();

const eventCounts = {
  "user-login": 0,
  "user-logout": 0,
  "user-purchase": 0,
  "profile-update": 0,
};

emitter.on("user-login", (user)=>{
    eventCounts["user-login"]++;
        console.log(`${user} is login`);
        
})

emitter.on("user-logout", (user) => {
    eventCounts["user-logout"]++;
  console.log(`${user} is logout`);
});

emitter.on("user-purchase", (arg) => {
    eventCounts["user-purchase"]++;
  console.log(`${arg.user} purchase a ${arg.purchase}`);
});


emitter.on("profile-update", (arg) => {
    eventCounts["profile-update"]++;
  console.log(`${arg.name1} update his name as ${arg.name2}`);
});

emitter.on("summary",()=>{
    console.log(eventCounts);
    
})


emitter.emit("user-login","Rain");
emitter.emit("user-logout","Rain");
emitter.emit("user-purchase",{user:"Rain", purchase:"Laptop"});
emitter.emit("profile-update",{name1: "Rain", name2: "Thor"});
emitter.emit("summary");