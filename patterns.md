# Redis Patterns

- cache-aside: read-through cache with TTL
- session store: sess:* keys, short expiry
- rate limiting: INCR + EXPIRE windows
- queues: LPUSH/BRPOP; pub/sub for events
