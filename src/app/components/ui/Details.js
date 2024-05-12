import * as React from "react";

const Details = () => {
  return (
    <>
      <div className="bg-slate-50 pl-10 pr-10 py-6 rounded-t-lg w-full max-md:px-5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[44%] max-md:w-full max-md:ml-0">
            <div className="flex flex-col items-stretch max-md:mt-10">
              <div className="text-black text-opacity-70 text-2xl font-semibold whitespace-nowrap">
                Total Documents Uploaded
              </div>
              <div className="text-black text-3xl font-bold self-center whitespace-nowrap mt-3.5">
                2
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[30%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex flex-col items-stretch max-md:mt-10">
              <div className="text-black text-opacity-70 text-2xl font-semibold whitespace-nowrap">
                Total Contributors
              </div>
              <div className="flex w-[92px] max-w-full justify-between gap-5 mr-10 mt-4 self-end items-start max-md:mr-2.5">
                <div className="text-black text-3xl font-bold">1</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[26%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex flex-col items-stretch max-md:mt-10">
              <div className="text-black text-opacity-70 text-2xl font-semibold whitespace-nowrap">
                Policies Updated
              </div>
              <div
                className="text-black text-3xl font-bold center
              self-center whitespace-nowrap mt-3.5"
              >
                2
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
