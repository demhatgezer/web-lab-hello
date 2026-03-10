type InputProps = {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
};

export default function Input({
  label,
  id,
  type = "text",
  placeholder,
}: InputProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block font-medium">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-blue-500 focus:outline-none dark:border-slate-600 dark:bg-slate-900"
      />
    </div>
  );
}