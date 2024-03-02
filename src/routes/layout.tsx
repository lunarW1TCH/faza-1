import type { FC, PropsWithChildren } from 'hono/jsx';
import { html } from 'hono/html';
import Nav from '../components/layout/nav';
import Footer from '../components/layout/footer';
import Button from '../components/ui/button';
import VStack from '~/components/containers/v-stack';
import HStack from '~/components/containers/h-stack';

const Layout: FC<PropsWithChildren> = (props) => {
  const { children } = props;
  return (
    <html lang='en'>
      <head>
        <script
          defer
          src='https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js'
        ></script>
        <meta charset='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link href='/static/public/css/output.css' rel='stylesheet' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap'
          rel='stylesheet'
        />
        <title>Faza 1</title>
      </head>
      <body class='flex h-full flex-col'>
        <Nav />
        <main class='flex flex-col grow'>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
