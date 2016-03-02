export default function socketEventsHandler(io) {
    io.on('connection', socket => {

        console.log(`socket [${socket.id}] connected to ${socket.request.connection.remoteAddress.split(':').pop()}`);

        socket.on('init', msg => {
            console.log(`Received: ${msg}`);

            socket.emit('init', 'exampleResponse');
        });
    });
}