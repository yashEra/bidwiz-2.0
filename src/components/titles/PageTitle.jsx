const PageTitle = (title) => {
  return (
    <>
      <div className="flex justify-center items-center w-full h-[40vh] bg-slate-300">
        <h1 className="px-[5%] md:px-[9.895833333333333%] uppercase text-3xl text-[#6FB1FC] font-bold">{title.heading}</h1>
      </div>
    </>
  );
};

export default PageTitle;
