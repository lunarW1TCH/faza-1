import type { FC } from 'hono/jsx';
import Link from '../ui/link';

const Nav: FC = () => {
  return (
    <nav class='flex w-full my-2 mx-4'>
      <Link href='/' class='text-2xl font-light text-center w-24'>
        Home
      </Link>
      <Link href='/todo1' class='text-2xl font-light text-center w-24'>
        Todo 1
      </Link>
      <Link href='/todo2' class='text-2xl font-light text-center w-24'>
        Todo 2
      </Link>
      <Link href='/todo3' class='text-2xl font-light text-center w-24'>
        Todo 3
      </Link>
    </nav>
  );
};

export default Nav;
