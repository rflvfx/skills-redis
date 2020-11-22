# Redis Cheat Sheet

```
SET key value EX 3600      # set with TTL
GET key
INCR counter
LPUSH queue item           # list push
RPOP queue
HSET user:1 name "Ana"     # hash
HGETALL user:1
SADD tags "js" "redis"     # set
ZADD scores 100 "player1"  # sorted set
EXPIRE key 300
TTL key
```
