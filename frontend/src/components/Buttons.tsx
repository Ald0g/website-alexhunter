export function ButtonPrimary({ children }: { children: React.ReactNode }) {
  return (
    <button
      className="
        bg-(--color-primary-60) 
        text-white 
        px-4 
        py-2 
        rounded-full 
        hover:bg-(--color-primary-40)
    "
    >
      {children}
    </button>
  );
}
