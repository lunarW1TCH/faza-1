import type { FC } from 'hono/jsx';
import VStack from '~/components/containers/v-stack';
import FetchContainer from '~/components/strateg/fetch-container';
import { getStrategApiUrl } from '~/lib/api';

const Indicator3: FC = () => {
  const fetchUrl = getStrategApiUrl(1508, 1948);

  return (
    <VStack>
      <FetchContainer url={fetchUrl} pathname='/indicator-3' />
    </VStack>
  );
};

export default Indicator3;
