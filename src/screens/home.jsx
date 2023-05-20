import React, { useState } from "react";
import "./home.css";
import Table from "./table/table";
import Category from "./category/category";
import Search from "./search/search";
export default function Home() {
  return (
    <div className="home_container">
      <Search />
      <div className="content_container">
        <Category />
        <Table />
      </div>
    </div>
  );
}
