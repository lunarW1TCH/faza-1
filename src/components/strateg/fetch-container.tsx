import { fetcher, voivodeships } from '~/lib/api';
import cardRecipe from '~/styles/card';
import linkRecipe from '~/styles/link';

import VStack from '../containers/v-stack';
import BarGraph from './bar-graph';

import type { Numeric } from '~/types';

import type {
  StrategApiURL,
  StrategResponseBody,
  VoivodeshipID,
} from '~/types/api';
const FetchContainer = async (props: FetchContainerProps) => {
  const { url, pathname } = props;

  const title = getTitle(pathname);

  const data = (await fetcher(url)) as StrategResponseBody<Numeric>;
  const data2021 = Object.entries(data.real_values['2021']).map((entry) => ({
    name: voivodeships[entry[0] as VoivodeshipID],
    value: parseFloat(entry[1]),
  }));

  return (
    <VStack class='my-4'>
      <div
        class={`${cardRecipe.root} min-w-[280px] max-w-[550px] sm-down:max-w-[410px] flex flex-col justify-center items-center`}
      >
        <div class={cardRecipe.header}>
          <h3 class={`${cardRecipe.title} text-wrap text-[16px] ml-3`}>
            {getTitle(pathname)}
          </h3>
        </div>
        <div class={cardRecipe.body}>
          <BarGraph graphData={data2021} />
        </div>
      </div>
      <span class='text-[10px] text-accent-text'>
        Źródło: <a class={linkRecipe}>strateg.stat.gov.pl</a>
      </span>
    </VStack>
  );
};

export default FetchContainer;

const getTitle = (pathname: AppPathname) => {
  switch (pathname) {
    case '/indicator-1':
      return 'Odsetek gospodarstw domowych posiadających szerokopasmowy dostęp do Internetu w domu - 2021';
    case '/indicator-2':
      return 'Odsetek osób korzystających z Internetu w celu wyszukiwania informacji o towarach lub usługach - 2021';
    case '/indicator-3':
      return 'Przedsiębiorstwa (powyżej 9 pracujących) posiadające własną stronę internetową - 2021';
  }
};

type FetchContainerProps = {
  url: StrategApiURL;
  pathname: AppPathname;
};

type AppPathname = `/indicator-${1 | 2 | 3}`;
