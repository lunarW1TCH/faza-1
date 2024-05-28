import { Hono } from 'hono';
import { serveStatic } from 'hono/bun';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';
import { prettyJSON } from 'hono/pretty-json';

import Indicator1 from './routes/indicator-1/page';
import Indicator2 from './routes/indicator-2/page';
import Indicator3 from './routes/indicator-3/page';
import Klient from './routes/klient/page';
import Layout from './routes/layout';
import Home from './routes/page';

const app = new Hono();

app.use(logger());
app.use(prettyJSON());

app.use('/static/*', serveStatic({ root: './src' }));
app.use('/*', cors({ origin: '*' }));

app.get('/', (c) => {
  return c.render(
    <Layout>
      <Home />
    </Layout>
  );
});

app.get('/indicator-1', (c) => {
  return c.render(
    <Layout>
      <Indicator1 />
    </Layout>
  );
});

app.get('/indicator-2', (c) => {
  return c.render(
    <Layout>
      <Indicator2 />
    </Layout>
  );
});

app.get('/indicator-3', (c) => {
  return c.render(
    <Layout>
      <Indicator3 />
    </Layout>
  );
});

app.get('/klient', (c) => {
  return c.render(
    <Layout addClientScript>
      <Klient />
    </Layout>
  );
});

export default app;
