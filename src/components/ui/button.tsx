import { PropsWithChildren } from 'hono/jsx';

export const buttonClass =
  'border-solid border rounded border-slate-300 text-slate-600 font-semibold hover:bg-slate-50 transition-colors p-2 w-auto';

const Button = (props: ButtonProps) => {
  const { children, class: className, ...rest } = props;

  return (
    <button class={`${buttonClass} ${className || ''}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;

type ButtonProps = Hono.ButtonHTMLAttributes & PropsWithChildren;
