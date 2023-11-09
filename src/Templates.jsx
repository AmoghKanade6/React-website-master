import React, { useState } from "react";
import Card from "./Card";
import data from "./data";

const Templates = () => {
  const [searchTerm , setSearchTerm ]=  useState('')

  const handleSearch=(e)=>{
     setSearchTerm(e.target.value)
  }

  const updatedList = data.filter((item)=> item.title.toLowerCase().includes(searchTerm.toLowerCase()))
  return (
    <>
      <div className="my-5">
        <h1 className="text-center desc"> After Effects Templates </h1>
        <p className="text-center desc mt-3">
          Logo Animation , Cinematic Intros , Text Animation , Title Animation ,
          3D Title Animation and lot more!
        </p>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="search">
              <input className="search-field" placeholder="Search..." onChange={handleSearch} />
            </div>
            <div className="row gy-3">
              {updatedList?.map((val, ind) => {
                return (
                  <Card
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    desc={val.desc}
                    download={val.download}
                  />
                );
              })}
            </div>
            {searchTerm.length && <h2 className="no-search">No Templates Found</h2>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Templates;
