// Cache-aside pattern with Redis
const redis = require("redis");
const client = redis.createClient();

async function getCached(key, fetchFn, ttl = 300) {
  const hit = await client.get(key);
  if (hit) return JSON.parse(hit);
  const data = await fetchFn();
  await client.setEx(key, ttl, JSON.stringify(data));
  return data;
}
module.exports = { getCached };
