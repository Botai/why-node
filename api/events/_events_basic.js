const EventEmiiter = require('events')

class CustomEvent extends EventEmiiter {

}

const ce = new CustomEvent()

ce.on('test', () => {
    console.log('this is a test');
})

setInterval(() => {
    ce.emit('test')
}, 500)