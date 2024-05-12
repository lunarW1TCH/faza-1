import { tv } from 'tailwind-variants';

const root =
  'bg-bg-default rounded-l3 flex flex-col overflow-hidden relative shadow-md';

const header = 'flex flex-col gap-1 p-6';

const body = 'flex flex-grow flex-col pb-6 px-6';

const footer = 'flex justify-end pb6 pt-2 px-6';

const title = 'text-fg-default textStyle_lg font-semibold';

const description = 'text-fg-muted textStyle_sm';

const cardRecipe = { root, header, body, footer, title, description } as const;

export default cardRecipe;
