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
      <hr class='border border-border-muted w-[500px] my-2' />
      <img
        alt='Kod implementujący powyższą funkcjonalność'
        src='static/public/client-example.png'
        class='w-[500px] border border-border-subtle rounded-md'
      />
      <p class='w-[500px] text-[12px] italic text-fg-muted text-center'>
        Kod implementujący powyższą funkcjonalność. Znajduje się on w folderze
        serwowanym statycznie i jest napisany w JavaScript.
      </p>
    </VStack>
  );
};

export default Page;
