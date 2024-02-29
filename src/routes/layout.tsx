import type { FC, PropsWithChildren } from 'hono/jsx';
import { html } from 'hono/html';
import Nav from '../components/layout/nav';
import Footer from '../components/layout/footer';
import Button from '../components/ui/button';

const Layout: FC<PropsWithChildren> = (props) => {
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
        <title>Document</title>
      </head>
      <body class='flex h-full flex-col'>
        <Nav />
        <main class='flex flex-col grow'>
          <p class='text-3xl font-bold hover:text-red-700'>miau</p>
          {props.children}
          <div class='bg-red-400'>polska</div>
          <button x-on:click="alert('Hello World!')">Say Hi</button>
          {html` <button @click="alert('Hello World!')">btn</button> `}
          <div class='flex flex-col' x-data='{ count: 0 }'>
            <button x-on:click='count++'>click</button>
            <button x-on:click="console.log('oi')">cl</button>
            <span x-data x-text='count'></span>
          </div>
          <Button variant='ghost'>Miau</Button>
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
