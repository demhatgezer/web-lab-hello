type ButtonVariant = "primary" | "secondary" | "danger" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-blue-700 text-white hover:bg-blue-800",
  secondary:
    "bg-slate-600 text-white hover:bg-slate-700",
  danger:
    "bg-red-600 text-white hover:bg-red-700",
  ghost:
    "bg-transparent border border-slate-400 text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-5 py-2.5 text-base",
  lg: "px-6 py-3 text-lg",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  type = "button",
  onClick,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`rounded-lg font-medium transition ${variantStyles[variant]} ${sizeStyles[size]}`}
    >
      {children}
    </button>
  );
}