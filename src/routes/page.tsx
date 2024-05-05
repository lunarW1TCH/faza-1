import type { FC } from 'hono/jsx';
import VStack from '~/components/containers/v-stack';
import { buttonBaseClasses } from '~/styles/button';

import cardRecipe from '../styles/card';

const Home: FC = () => {
  return (
    <VStack>
      <div class={cardRecipe().root()}>
        <div class={cardRecipe().header()}>
          <h3 class={cardRecipe().title()}>Faza 1</h3>
        </div>
        <div class={cardRecipe().body()}></div>
      </div>
      <button class={buttonBaseClasses}>Test</button>
    </VStack>
  );
};

export default Home;
