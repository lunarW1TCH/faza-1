const BarItem = (props: BarItemProps) => {
  const { name, value } = props;

  return (
    <div class='group h-[600px] px-[3px] flex flex-col justify-end items-center'>
      <div
        class='barBg w-[20px] sm-down:w-[10px] bg-fg-default z-10 rounded-t-[4px] relative justify-center flex  mb-[200px] duration-300 group-hover:bg-[#8D8D8D] group-hover:w-[80px] group-hover:sm-down:w-[60px] group-active:bg-[#8D8D8D] group-active:w-[80px] group-active:sm-down:w-[60px]'
        style={{ height: value * 4 }}
      />
      <span class='barValue hidden absolute text-center transition-[opacity] transition-[width] duration-500 bottom-[170px] text-[14px] sm-down:text-[12px] group-hover:flex group-hover:opacity-100 group-active:flex group-active:opacity-100'>{`${value
        .toString()
        .replace('.', ',')}%`}</span>
      <span class='absolute rotate-[270deg] bottom-[110px] text-wrap text-center w-[200px] text-[14px] sm-down:text-[12px] text-start'>
        {name}
      </span>
    </div>
  );
};

export default BarItem;

type BarItemProps = {
  name: string;
  value: number;
};
