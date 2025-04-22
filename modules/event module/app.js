//Import EventEmitter class
const EventEmitter = require('events')

// Create an instance of EventEmitter
const emitter = new EventEmitter();

//Define an event listener (addListener)
// emitter.on("greet", ()=>{
//     console.log(`hay rain`);
    
// });


// //Trigger (emit) the "greet" event
// emitter.emit("greet");

//you can also pass arguments while emitting.

// emitter.on("greet", (userName) =>{
//     console.log(`hello ${userName}`);
    
// });

// emitter.emit("greet", "Rain")

emitter.on("greet", (arg) => {
  console.log(`hello ${arg.userName}, you are a ${arg.prof}`);
});

emitter.emit("greet", {userName:"Rain", prof: "Full Stack dev"});