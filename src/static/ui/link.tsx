import type { FC, PropsWithChildren } from 'hono/jsx';

const Link: FC<LinkProps> = (props: LinkProps) => {
  const { class: className, children, href, ...linkProps } = props;
  return (
    <a
      href={href}
      class={`link flex items-center text-fg-default text-accent font-medium hover:text-accent-default transition duration-300 ease-in-out underline relative ${
        className ?? ''
      }`}
    >
      {children}
    </a>
  );
};

export default Link;

type LinkProps = Hono.IntrinsicElements['a'] & PropsWithChildren;
