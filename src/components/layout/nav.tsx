import type { FC } from 'hono/jsx';

const Nav: FC = () => {
  return (
    <nav class='my-10 h-10 w-full flex space-x-10 align-middle justify-center'>
      <div class='flex flex-col justify-center h-full'>
        <a href='/'>HOME</a>
      </div>
      <div class='flex flex-col justify-center h-full'>
        <a href='/api'>API</a>
      </div>
    </nav>
  );
};

export default Nav;
