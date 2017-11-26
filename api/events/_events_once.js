const EventEmiiter = require('events')

class CustomEvent extends EventEmiiter {

}

const ce = new CustomEvent()

ce.once('test', () => {
    console.log('test event');
})

setInterval(() => {
    ce.emit('test')
}, 500)