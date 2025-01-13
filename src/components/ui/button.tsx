interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button = ({ children, ...props }: ButtonProps) => (
  <button {...props} className={`${props.className} px-4 py-2 rounded-lg bg-teal-500 text-white hover:bg-teal-600`}>
    {children}
  </button>
); 