import type { FC, PropsWithChildren } from 'hono/jsx';

const VStack: FC<VStackProps> = (props: VStackProps) => {
  const { class: className, children, ...vStackProps } = props;

  return (
    <div
      class={`flex flex-col gap-2.5 items-center ${className ?? ''}`}
      {...vStackProps}
    >
      {children}
    </div>
  );
};

export default VStack;

type VStackProps = Hono.IntrinsicElements['div'] & PropsWithChildren;
