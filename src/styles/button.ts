import { tv } from 'tailwind-variants';

const buttonRecipe = tv(
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

export default buttonRecipe;

export const buttonSolid = buttonRecipe({ variant: 'solid' });
export const buttonGhost = buttonRecipe({ variant: 'ghost' });
export const buttonOutline = buttonRecipe({ variant: 'outline' });

export const buttonBaseClasses =
  'items-center appearance-none cursor-pointer inline-flex font-semibold justify-center outline-none rounded duration-200 transition-colors transition-shadow ease-default select-none align-middle whitespace-nowrap h-10 min-w-10 text-sm px-4 [&_svg]:w-5 [&_svg]:h-5';
