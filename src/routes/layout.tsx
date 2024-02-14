import type { FC, PropsWithChildren } from 'hono/jsx';
import Nav from '../components/layout/nav';
import Footer from '../components/layout/footer';

const Layout: FC<PropsWithChildren> = (props) => {
  return (
    <html lang='en'>
      <head>
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
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
