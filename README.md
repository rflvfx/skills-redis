<div align="center">
<img src="https://cdn.simpleicons.org/redis" height="70"/>

# skills-redis

**Redis** — cache-aside, sessions, rate limiting e pub/sub.

</div>

## 📋 Sobre

Padrões práticos de uso do Redis além do cache: sessões, limitação de requisições, filas e mensageria.

## 📂 Conteúdo

- `cache.js` — cache-aside com TTL
- `session.js` — session store
- `rateLimiter.js` — fixed-window com INCR+EXPIRE
- `pubsub.js` — publisher/subscriber
- `commands.md` — cheat sheet de comandos
- `patterns.md` — guia de padrões

## 🚀 Quick start

```bash
docker compose up -d
npm install && node index.js
```

## 🧠 Tópicos cobertos

`caching` `TTL` `hashes` `sorted sets` `pub/sub` `streams` `rate limiting` `sentinel`
