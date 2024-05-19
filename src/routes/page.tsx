import type { FC } from 'hono/jsx';
import HStack from '~/components/containers/h-stack';
import VStack from '~/components/containers/v-stack';
import buttonRecipe from '~/styles/button';
import linkRecipe from '~/styles/link';

import cardRecipe from '../styles/card';

const Home: FC = () => {
  return (
    <VStack>
      <div class={`${cardRecipe.root} min-w-[300px]`}>
        <div class={cardRecipe.header}>
          <h3 class={cardRecipe.title}>Faza 1</h3>
          <p class={cardRecipe.description}>Aplikacja fazy 1 do pracy "..."</p>
        </div>
        <div class={cardRecipe.body}>
          <h5 class='font-semibold mb-2'>Pozostałe aplikacje:</h5>
          <HStack class='w-full justify-between'>
            <span>Faza 2:</span>
            <a
              target='_blank'
              rel='noreferrer noopener'
              href='https://faza-2.vercel.app/'
              class={linkRecipe}
            >
              faza-2.vercel.app
            </a>
          </HStack>
          <HStack class='w-full justify-between'>
            <span>Faza 3:</span>
            <a
              target='_blank'
              rel='noreferrer noopener'
              href='https://faza-3.vercel.app/'
              class={linkRecipe}
            >
              faza-3.vercel.app
            </a>
          </HStack>
        </div>
      </div>
    </VStack>
  );
};

export default Home;
