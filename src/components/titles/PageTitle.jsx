const PageTitle = (title) => {
  return (
    <>
      <div className="flex justify-center items-center w-full h-[40vh] bg-slate-300">
        <h1 className="uppercase text-3xl text-[#6FB1FC] font-bold">{title.heading}</h1>
      </div>
    </>
  );
};

export default PageTitle;
