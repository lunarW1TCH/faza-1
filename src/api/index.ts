import { Hono } from 'hono';

const api = new Hono();

api.get('/', (c) => c.json({ message: 'test api' }));

export default api;
