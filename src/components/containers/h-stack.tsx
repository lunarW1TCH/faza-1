import type { FC, PropsWithChildren } from 'hono/jsx';

const HStack: FC<HStackProps> = (props: HStackProps) => {
  const { class: className, children, ...hStackProps } = props;

  return (
    <div
      class={`flex flex-row gap-2.5 items-center ${className ?? ''}`}
      {...hStackProps}
    >
      {children}
    </div>
  );
};

export default HStack;

type HStackProps = Hono.IntrinsicElements['div'] & PropsWithChildren;
