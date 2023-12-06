const Container= ({ children }) => {
  return (
    <div className="max-w-[1800px] mx-auto xl:px-32 md:px-10 sm:px-6 px-4">
      {children}
    </div>
  );
};

export default Container;