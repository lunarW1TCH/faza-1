import type { FC } from 'hono/jsx';
import { Home } from 'lucide';
import buttonRecipe from '~/styles/button';

const Nav: FC = () => {
  return (
    <nav class='flex w-full py-2 px-4 border-b-[1px] border-border-subtle bg-bg-default gap-2'>
      <a
        href='/'
        class={`${buttonRecipe.base} ${buttonRecipe.ghost} ${linkButton}`}
      >
        <svg {...Home[1]}>
          <path d={Home[2]?.[0][1].d}></path>
          <polyline points={Home[2]?.[1][1].points}></polyline>
        </svg>{' '}
      </a>
      <a
        href='/indicator-1'
        class={`${buttonRecipe.base} ${buttonRecipe.ghost} ${linkButton}`}
        style='font-weight: 300'
      >
        Wskaźnik 1
      </a>
      <a
        href='/indicator-2'
        class={`${buttonRecipe.base} ${buttonRecipe.ghost} ${linkButton}`}
        style='font-weight: 300'
      >
        Wskaźnik 2
      </a>
      <a
        href='/indicator-3'
        class={`${buttonRecipe.base} ${buttonRecipe.ghost} ${linkButton}`}
        style='font-weight: 300'
      >
        Wskaźnik 3
      </a>
      <a
        href='/klient'
        class={`${buttonRecipe.base} ${buttonRecipe.ghost} ${linkButton}`}
        style='font-weight: 300'
      >
        Klient
      </a>
    </nav>
  );
};

export default Nav;

const linkButton = 'textStyle_sm font-normal active:bg-accent-emphasized';
