import { Hono } from 'hono';
import Layout from './pages/layout';
import { serveStatic } from '@hono/node-server/serve-static';
import { serve } from '@hono/node-server';

const app = new Hono();

app.use('/static/*', serveStatic({ root: './src' }));

app.get('/', (c) => {
  return c.render(
    <Layout>
      <p class='text-2xl text-red-100'>polska</p>
    </Layout>
  );
});

const port = 3000;
console.log(`Server is running on http://localhost:${port}`);

serve({
  fetch: app.fetch,
  port,
});
