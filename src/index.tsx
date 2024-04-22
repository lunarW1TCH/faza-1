import { Hono } from 'hono';
import Layout from './routes/layout';
import { serveStatic } from '@hono/node-server/serve-static';
import { serve } from '@hono/node-server';

import { logger } from 'hono/logger';
import { prettyJSON } from 'hono/pretty-json';
import api from './api';
import Home from './routes/page';
import Todo1 from './routes/todo1/page';
import Todo2 from './routes/todo2/page';
import Todo3 from './routes/todo3/page';
import Klient from './routes/klient/page';

const app = new Hono();

app.use(logger());
app.use(prettyJSON());

app.use('/static/*', serveStatic({ root: './src' }));

app.get('/', (c) => {
  return c.render(
    <Layout>
      <Home />
    </Layout>
  );
});

app.get('/todo1', (c) => {
  return c.render(
    <Layout>
      <Todo1 />
    </Layout>
  );
});

app.get('/todo2', (c) => {
  return c.render(
    <Layout>
      <Todo2 />
    </Layout>
  );
});

app.get('/todo3', (c) => {
  return c.render(
    <Layout>
      <Todo3 />
    </Layout>
  );
});

// ! ręczne dzielenie skryptów klienckich i ich dodawanie, next robi to sam
app.get('/klient', (c) => {
  return c.render(
    <Layout addClientScript>
      <Klient />
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
