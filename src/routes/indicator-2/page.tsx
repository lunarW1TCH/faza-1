import type { FC } from 'hono/jsx';
import VStack from '~/components/containers/v-stack';
import FetchContainer from '~/components/strateg/fetch-container';
import { getStrategApiUrl } from '~/lib/api';

const Indicator2: FC = () => {
  const fetchUrl = getStrategApiUrl(4121, 6246);

  return (
    <VStack>
      <FetchContainer url={fetchUrl} pathname='/indicator-2' />
    </VStack>
  );
};

export default Indicator2;
