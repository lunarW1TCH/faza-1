import type { GraphData } from '~/types/api';
import BarItem from './bar-item';
import BarLines from './bar-lines';
import BarYAxis from './bar-y-axis';

const BarGraph = (props: BarGraphProps) => {
  const { graphData } = props;

  return (
    <div class='w-[480px] max-w-[480px] sm-down:max-w-[320px] h-[600px] border border-border-default flex flex-col rounded-md'>
      <div class='max-w-[480px] h-[600px] flex justify-evenly items-end relative gap-0'>
        <BarLines />
        <BarYAxis />
        {graphData.map((d) => (
          <BarItem name={d.name} value={d.value} />
        ))}
      </div>
    </div>
  );
};

export default BarGraph;

type BarGraphProps = {
  graphData: GraphData;
};
