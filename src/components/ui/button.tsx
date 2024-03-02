import { PropsWithChildren, type FC } from 'hono/jsx';
import { tv, type VariantProps } from 'tailwind-variants';

const styles = tv(
  {
    base: 'button',
    defaultVariants: { variant: 'solid', size: 'md' },
    variants: {
      variant: {
        solid: 'button--variant_solid',
        outline: 'button--variant_outline',
        ghost: 'button--variant_ghost',
        link: 'button--variant_link',
        subtle: 'button--variant_subtle',
      },
      size: {
        xs: 'button--size_xs',
        sm: 'button--size_sm',
        md: 'button--size_md',
        lg: 'button--size_lg',
        xl: 'button--size_xl',
        '2xl': 'button--size_2xl',
      },
    },
  },
  { twMerge: false }
);

const Button: FC<ButtonProps> = (props: ButtonProps) => {
  const { size, variant, class: className, children, ...buttonProps } = props;

  return (
    <button
      class={styles({ size, variant, className: className as string })}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

export default Button;

type ButtonVariantProps = VariantProps<typeof styles>;
type ButtonProps = Hono.ButtonHTMLAttributes &
  ButtonVariantProps &
  PropsWithChildren;
