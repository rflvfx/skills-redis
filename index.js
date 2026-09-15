const { createClient } = require('redis');
const client = createClient({ url: 'redis://localhost:6379' });
client.on('error', e => console.log('Erro Redis', e));

(async () => {
  await client.connect();
  await client.set('nome', 'Rafael');
  const nome = await client.get('nome');
  console.log('Cache:', nome);
  await client.disconnect();
})();
