import type { FC } from 'hono/jsx';
import buttonRecipe, { buttonGhost } from '~/styles/button';

const Nav: FC = () => {
  return (
    <nav class='flex w-full py-2 px-4 border-b-2'>
      <a href='/' class={linkClass}>
        Home
      </a>
      <a href='/todo1' class={linkClass}>
        Todo 1
      </a>
      <a href='/todo2' class={linkClass}>
        Todo 2
      </a>
      <a href='/todo3' class={linkClass}>
        Todo 3
      </a>
    </nav>
  );
};

export default Nav;

const linkClass = `text-2xl font-light text-center w-24 ${buttonGhost}`;
