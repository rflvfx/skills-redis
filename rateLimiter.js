// Fixed-window rate limiter with INCR + EXPIRE
const redis = require("redis");
const client = redis.createClient();

async function allow(key, limit, windowSec) {
  const n = await client.incr(`rl:${key}`);
  if (n === 1) await client.expire(`rl:${key}`, windowSec);
  return n <= limit;
}
module.exports = { allow };
