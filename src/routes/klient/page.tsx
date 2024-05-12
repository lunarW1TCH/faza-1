import type { FC } from 'hono/jsx';
import VStack from '~/components/containers/v-stack';
import buttonRecipe from '~/styles/button';

import inputRecipe from '../../styles/input';

// import { buttonSolid } from '~/styles/button';

const Page: FC = () => {
  return (
    <VStack class='my-4'>
      <input id='nameInput' class={`${inputRecipe()} w-[200px]`}></input>
      <button
        id='confirmBtn'
        class={`${buttonRecipe.base} ${buttonRecipe.solid} w-[200px]`}
      >
        Akceptuj
      </button>
    </VStack>
  );
};

export default Page;
