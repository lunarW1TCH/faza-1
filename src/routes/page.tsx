import type { FC } from 'hono/jsx';
import HStack from '~/components/containers/h-stack';
import VStack from '~/components/containers/v-stack';
import Button from '~/components/ui/button';
import Text from '~/components/ui/text';

const Home: FC = () => {
  return (
    <VStack>
      <Button variant='outline'>Miau</Button>
      <HStack>
        <Text>Miau</Text>
      </HStack>
    </VStack>
  );
};

export default Home;
