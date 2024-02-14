import { Hono } from 'hono';
import Layout from './routes/layout';
import { serveStatic } from '@hono/node-server/serve-static';
import { serve } from '@hono/node-server';

import { logger } from 'hono/logger';
import { prettyJSON } from 'hono/pretty-json';
import api from './api';

const app = new Hono();

app.use(logger());
app.use(prettyJSON());

app.use('/static/*', serveStatic({ root: './src' }));

app.get('/', (c) => {
  return c.render(
    <Layout>
      <p class='text-2xl text-red-100'>polska</p>
    </Layout>
  );
});

app.route('/api', api);

const port = 2137;
console.log(`Server is running on http://localhost:${port}`);

serve({
  fetch: app.fetch,
  port,
});
