import type { FC } from 'hono/jsx';
import VStack from '~/components/containers/v-stack';
import FetchContainer from '~/components/strateg/fetch-container';
import { getStrategApiUrl } from '~/lib/api';

const Indicator1: FC = () => {
  const fetchUrl = getStrategApiUrl(635, 490);

  return (
    <VStack>
      <FetchContainer url={fetchUrl} pathname='/indicator-1' />
    </VStack>
  );
};

export default Indicator1;
