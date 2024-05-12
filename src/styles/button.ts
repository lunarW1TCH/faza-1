import { tv } from 'tailwind-variants';

const base =
  'items-center appearance-none cursor-pointer inline-flex font-semibold justify-center outline-none rounded duration-200 transition-colors transition-shadow ease-default select-none align-middle whitespace-nowrap h-10 min-w-10 text-sm px-4 [&_svg]:w-5 [&_svg]:h-5';

const ghost =
  'text-accent-text hover:bg-bg-muted selection:bg-bg-muted disabled:text-fg-disabled disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-fg-disabled focus-visible:outline-2 focus-visible:outline-fg-default focus-visible:outline-offset-2 active:bg-bg-emphasized';

const solid =
  'bg-accent-default text-accent-fg hover:bg-accent-emphasized focus-visible:outline-2 focus-visible:outline-fg-default outline-offset-2 disabled:text-fg-disabled disabled:bg-bg-disabled disabled:cursor-not-allowed disabled:hover:text-fg-disabled disabled:hover:bg-bg-disabled';

const buttonRecipe = {
  base,
  ghost,
  solid,
};

export default buttonRecipe;
