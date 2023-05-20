import React from "react";
import "./header.css";
export default function Header() {
  let iconbase64 =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAANklEQVR4nGNgGFHgPxSMWoAT/B8NIkLg/8gOov9UBgx0t4AY8J8SzaMWUAX8H42D4R9EgxIAADOHLuA9EPgjAAAAAElFTkSuQmCC";
  return (
    <header className="header">
      <h1 className="header_title">File Manager</h1>
      <button className="header_button">
        <img src={iconbase64} className="header_button_icon" />
        <span className="header_button_text">Upload</span>
      </button>
    </header>
  );
}
