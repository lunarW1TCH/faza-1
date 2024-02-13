import type { FC } from 'hono/jsx';

const Layout: FC = (props) => {
  return (
    <html lang='en'>
      <head>
        <meta charset='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link href='/static/public/css/output.css' rel='stylesheet' />
        <title>Document</title>
      </head>
      <body>
        <p class='text-3xl font-bold'>miau</p>
        {props.children}
        <div class='bg-red-400'>polska</div>
      </body>
    </html>
  );
};

export default Layout;
