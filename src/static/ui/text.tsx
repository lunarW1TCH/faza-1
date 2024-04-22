import { type FC } from 'hono/jsx';
import { tv, type VariantProps } from 'tailwind-variants';

const styles = tv(
  {
    base: 'text',
    variants: {
      variant: { heading: 'text--variant_heading' },
      size: {
        xs: 'text--size_xs',
        sm: 'text--size_sm',
        md: 'text--size_md',
        lg: 'text--size_lg',
        xl: 'text--size_xl',
        '2xl': 'text--size_2xl',
        '3xl': 'text--size_3xl',
        '4xl': 'text--size_4xl',
        '5xl': 'text--size_5xl',
        '6xl': 'text--size_6xl',
        '7xl': 'text--size_7xl',
      },
    },
  },
  { twMerge: false }
);

const Text: FC<TextProps> = (props: TextProps) => {
  const { as = 'p', size, class: className, ...elementProps } = props;
  const classes = styles({ size, className: className as string });

  switch (as) {
    case 'p':
      return <p class={classes} {...elementProps}></p>;
    case 'span':
      return <span class={classes} {...elementProps}></span>;
    case 'div':
      return <div class={classes} {...elementProps}></div>;
    case 'label':
      return <label class={classes} {...elementProps}></label>;
  }
};

export default Text;

type As = 'p' | 'span' | 'div' | 'label';

type TextVariantProps = VariantProps<typeof styles>;

export type TextProps = {
  as?: As;
} & TextVariantProps &
  Hono.IntrinsicElements[As];
