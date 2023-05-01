console.log("Starting")

setTimeout(() => {
    console.log('Timeout')
}, 2000)


console.log("Stopping")


/*

1. First it will add console statement to stack and start executing it so it i will print Starting
2. Second it will push this asynchronous (Timeout) code to Stack. Since it is an asynchronous code it will be moved to event stack and start timer
3. Since node stack is empty the second console statement will added to the stack. Till timer is not completed by that time it will execute second console and print the statement as Stopping.
4. Node staqck is empty now it will be in rest mode.
5. Then if the timer is completed then the asynchronous code is moved to event queue.
6. Since node will continuously check its stack and event queue. Now event queue is not empty it i will execute asynchronous code.



*/