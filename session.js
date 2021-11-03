// Session storage on Redis
const redis = require("redis");
const client = redis.createClient();

const setSession = (sid, data, ttl = 3600) =>
  client.setEx(`sess:${sid}`, ttl, JSON.stringify(data));
const getSession = (sid) =>
  client.get(`sess:${sid}`).then((s) => (s ? JSON.parse(s) : null));
module.exports = { setSession, getSession };
