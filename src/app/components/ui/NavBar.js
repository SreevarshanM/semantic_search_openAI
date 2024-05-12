import * as React from "react";

const NavBar = (props) => {
  return (
    <div className="bg-slate-50 bg-opacity-50 flex max-w-[168px] flex-col items-stretch pt-10 pr-10 pb-5 px-5 rounded-3xl gap-7 ">
      <div className="flex items-stretch  gap-5 mt-10">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d32cffd79c90b822a7b4c0bd4fcf17eaf6660100104fe4dd1988784076493508?apiKey=46db4d8e17f342d1b4e39be30ef612f9&"
          className="aspect-square object-contain object-center w-[26px] overflow-hidden shrink-0 max-w-full"
        />
        <a
          href="/"
          className="text-black text-opacity-70 text-sm font-bold self-center my-auto"
        >
          Dashboard
        </a>
      </div>
      <div className="flex items-stretch  gap-5 mt-10">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b35a63cb17509abfc40dfb57af95ed4b5e4af662e9dc6a7475b08c5f618497e?apiKey=46db4d8e17f342d1b4e39be30ef612f9&"
          className="aspect-square object-contain object-center w-[26px] overflow-hidden shrink-0 max-w-full"
        />
        <a
          href="/"
          className="text-black text-opacity-70 text-sm font-bold self-center my-auto"
        >
          Queries
        </a>
      </div>

      <div className="flex items-stretch  gap-5 mt-11">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a2d523a0e6f282387dce9b13d3ed30091aa4824622d28d6a75430dde81efd525?apiKey=46db4d8e17f342d1b4e39be30ef612f9&"
          className="aspect-square object-contain object-center w-[26px] overflow-hidden shrink-0 max-w-full"
        />
        <a
          href="/"
          className="text-black text-opacity-70 text-sm font-bold self-center my-auto"
        >
          Settings
        </a>
      </div>
      <div className="flex items-stretch  gap-5 mt-11">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b5f30bcc44faf2f3a56ba83db03e578380a30a10782717fbc6a6582d7d7bdaa?apiKey=46db4d8e17f342d1b4e39be30ef612f9&"
          className="aspect-square object-contain object-center w-[26px] overflow-hidden shrink-0 max-w-full"
        />
        <a
          href="/"
          className="text-black text-opacity-70 text-sm font-bold self-center my-auto"
        >
          Help
        </a>
      </div>
      <div className="flex items-stretch  gap-5 mt-36">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/bd4d5f0dcec3f3c74354046a65d05ee3522dc40fc3fb785273e8b41125703452?apiKey=46db4d8e17f342d1b4e39be30ef612f9&"
          className="aspect-square object-contain object-center w-[26px] overflow-hidden shrink-0 max-w-full"
        />
        <button className="text-black text-opacity-60 text-sm font-bold self-center my-auto">
          Log Out
        </button>
      </div>
    </div>
  );
};
export default NavBar;
