import React, { useEffect, useState } from "react";
import "../home.css";
let settingIcon =
  "data:image/png;base64,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";
const categoriesList = [
  {
    title: "Category 1",
    labels: ["Label 1", "Label 2", "Label 3", "Label 4"],
  },
  {
    title: "Category 2",
    labels: ["Label 5", "Label 6"],
  },
];
export default function Category() {
  const [categoriesList, setCategoryList] = useState([]);
  useEffect(() => {
    let res = fetch("https://646312614dca1a661353d0ee.mockapi.io/api/Category")
      .then((response) => response.json())
      .then((result) => setCategoryList(result));
  }, []);
  return (
    <div className="category_container">
      <div className="fixed_category">
        <div className="category_header">
          <span className="category_header_text">CATEGORIES</span>
          <img className="category_header_img" src={settingIcon} />
        </div>
        {categoriesList?.map((list,id) => {
          return (
            <div className="category_content" key={`category-${id}`}>
              <span className="category_content_title">{list.Name}</span>
              <ul className="category_content_ul">
                {list?.Labels?.map((name) => {
                  return (
                    <li className="category_content_li">
                      <input
                        type="checkbox"
                        className="category_content_checkbox"
                      />
                      <label className="category_content_label">{name.Name}</label>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
