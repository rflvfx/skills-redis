// Pub/Sub example
const redis = require("redis");
const pub = redis.createClient();
const sub = redis.createClient();

sub.subscribe("events", (msg) => console.log("event:", msg));
pub.publish("events", JSON.stringify({ type: "user.created", id: 1 }));
