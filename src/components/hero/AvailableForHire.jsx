function AvailableForHire() {
  return (
    <div className="flex items-center justify-center button button--ghost text-indigo-500 pointer-events-none gap-2.5 px-2.5 md:button--big md:px-2.5 dark:text-indigo-400 text-sm md:text-xl font-semibold">
      <span className="relative flex h-2 w-2">
        <span className="bg-indigo-600 absolute -top-1 -left-1 inline-flex h-4 w-4 animate-ping rounded-full opacity-75 dark:bg-indigo-300" />
        <span className="bg-indigo-500 relative inline-flex h-2 w-2 rounded-full dark:bg-indigo-400" />
      </span>
      AVAILABLE FOR HIRE
    </div>
  );
}

export default AvailableForHire;
