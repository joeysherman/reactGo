

export default function initSocketIO(io) {
  io.on('connection', (socket) => {
    console.log('Client connected...');
  });
}
