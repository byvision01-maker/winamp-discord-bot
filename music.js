const queues = new Map();

function getQueue(guildId) {
  if (!queues.has(guildId)) {
    queues.set(guildId, []);
  }
  return queues.get(guildId);
}

function addTrack(guildId, track) {
  getQueue(guildId).push(track);
}

function nextTrack(guildId) {
  const queue = getQueue(guildId);
  return queue.shift() || null;
}

function getTracks(guildId) {
  return getQueue(guildId);
}

module.exports = {
  addTrack,
  nextTrack,
  getTracks
};