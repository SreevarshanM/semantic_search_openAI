"use client";
import * as React from "react";
import NavBar from "@/app/components/ui/NavBar";
import Details from "@/app/components/ui/Details";
import TableData from "@/app/components/ui/Table";
import { useState } from "react";
import { Button } from "@/app/components/button";
import axios from "axios";

const Dashboard = () => {
  const [file, setFile]: any = useState();
  const [uploadedFile, setUploadedFile] = useState();
  const [error, setError] = useState();

  function handleChange(event: any) {
    setFile(event.target.files[0]);
  }
  async function createIndexAndEmbeddings() {
    try {
      const result = await fetch("/api/setup", {
        method: "POST",
      });
      const json = await result.json();
      console.log("result: ", json);
    } catch (err) {
      console.log("err:", err);
    }
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    const url = "/api/upload";
    const formData = new FormData();
    formData.append("file", file);
    formData.append("fileName", file.name);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    axios
      .post(url, formData, config)
      .then((response) => {
        console.log(response.data);
        setUploadedFile(response.data.file);
      })
      .catch((error) => {
        console.error("Error uploading file: ", error);
        setError(error);
      });
  }
  return (
    <>
      <div className="h-screen w-screen bg-gradient-to-tl from-[#ABBEED]">
        <div className="flex  gap-20 pt-20">
          <div>
            <NavBar />
          </div>
          <div className="w-full flex flex-col  pr-20 ">
            <div className="grid grid-cols-4 w-full gap-3 mb-8">
              <input
                type="text"
                placeholder=" Search Documents"
                className="text-black text-opacity-50 text-lg font-semibold whitespace-nowrap bg-slate-50 col-span-3 bg-opacity-98 w-full pl-12  h-16  py-4 rounded-3xl items-start max-md:px-5"
              />
              <div>
                <h1></h1>
              </div>
            </div>
            <Details />
            <form onSubmit={handleSubmit}>
              <div className="bg-indigo-200 flex min-h-[99px] flex-col rounded-b-lg">
                <input
                  type="file"
                  className="self-center pl-24 pt-8 text-black text-lg font-bold"
                  onChange={handleChange}
                />
                <button
                  type="submit"
                  className="self-center  pt-8 text-black text-lg font-bold"
                >
                  <span className="flex gap-2">
                    Upload
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b35a63cb17509abfc40dfb57af95ed4b5e4af662e9dc6a7475b08c5f618497e?apiKey=46db4d8e17f342d1b4e39be30ef612f9&"
                      className="aspect-square object-contain object-center w-[26px] overflow-hidden shrink-0 max-w-full"
                    />
                  </span>
                </button>
              </div>
            </form>
            <div className="grid justify-center">
              <Button
                className="w-[400px] mt-2 justify-center"
                onClick={createIndexAndEmbeddings}
              >
                Create index and embeddings
              </Button>
            </div>

            <TableData />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
