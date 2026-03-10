type AlertProps = {
  variant?: "info" | "success" | "warning" | "error";
  children: React.ReactNode;
};

const variantStyles = {
  info: "border-blue-200 bg-blue-50 text-blue-800 dark:border-blue-700 dark:bg-blue-950 dark:text-blue-200",
  success:
    "border-green-200 bg-green-50 text-green-800 dark:border-green-700 dark:bg-green-950 dark:text-green-200",
  warning:
    "border-yellow-200 bg-yellow-50 text-yellow-800 dark:border-yellow-700 dark:bg-yellow-950 dark:text-yellow-200",
  error:
    "border-red-200 bg-red-50 text-red-800 dark:border-red-700 dark:bg-red-950 dark:text-red-200",
};

export default function Alert({
  variant = "info",
  children,
}: AlertProps) {
  return (
    <div className={`rounded-lg border px-4 py-3 ${variantStyles[variant]}`}>
      {children}
    </div>
  );
}