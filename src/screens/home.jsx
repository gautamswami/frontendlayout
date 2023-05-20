import React, { useState } from "react";
import "./home.css";
import DeletePopup from "../components/deletePopup/deletePopup";
export default function Home() {
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
  const tableData = [
    {
      name: "Sample Field 1",
      image:
        "https://cdn.dribbble.com/users/63407/screenshots/6732632/dribbble_gratification_corner_1x.png",
      ownerImage:
        "https://cdn.dribbble.com/users/63407/screenshots/6732632/dribbble_gratification_corner_1x.png",
      label: "Label 1",
      type: "PDF",
      modified: "4th April'23",
    },
    {
      name: "Sample Field 1",
      image:
        "https://cdn.dribbble.com/users/63407/screenshots/6732632/dribbble_gratification_corner_1x.png",
      ownerImage:
        "https://cdn.dribbble.com/users/63407/screenshots/6732632/dribbble_gratification_corner_1x.png",
      label: "Label 1",
      type: "PDF",
      modified: "4th April'23",
    },
    {
      name: "Sample Field 1",
      image:
        "https://cdn.dribbble.com/users/63407/screenshots/6732632/dribbble_gratification_corner_1x.png",
      ownerImage:
        "https://cdn.dribbble.com/users/63407/screenshots/6732632/dribbble_gratification_corner_1x.png",
      label: "Label 1",
      type: "PDF",
      modified: "4th April'23",
    },
  ];
  let settingIcon =
    "data:image/png;base64,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";
  const [visible, setVisible] = useState({ show: false, id: "" });
  const handleDelete = (id) => {
    if (visible.id === id) {
      setVisible({ show: !visible.show, id: id });
    } else {
      setVisible({ show: true, id: id });
    }
  };
  return (
    <div className="home_container">
      <div className="search_container">
        <div className="search_container_div">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAChklEQVR4nO2Zu24TQRSGPxeElgYbEVIYHoECCJdXQAIH+YKECA+AxEVESAl0wAsgUUEKpCiiIDFKDYGGS96AhhZSBZGQ2MFwpH+lKQxi8czYu+wnjbTy5f/3jPecOTOGgoKR5AAwDcwDa8A6sKPxBfig9y4DFUaQM0Ab6AC9vxz22WXgNCPAEWDFubku8Aq4BhwDysAeDbs+DlwHVvXZ5HsvgMPDCqIFfNWNfAPuAftTfN8Cuw9sSmMDaBCZOWc2F4DxAbQOAYuO3iyRuCvDH7ouedK9CuzGCqYlIzOsBdCfcoKpEzCxk5y4FcoEmHFyphrCYMXJiZCUnJxph1gneqowE4RnXJWwB5zyKdyWqJXYWFhpNs8ln21HRwtYmnViUGyd6aq9seuBuaKZeUl8Xsv7kg+xeYlZ2xGbG/J+7ENsTWLWO8VmUt7vfIitSyxmfiRU5P3Zh9i2xMaIz155f89LIBt5ebQ++kx22xTF5qS8rQznovw+8iE2LTHbnsbmjbzP+XpOkxbFS6uQskXpAPt8iS5rZqyRi8UDeVpL740TEt0aQht/1Ld425khX/v0fpj2M3k9D2FQ1cLU03Y0FLflYSeTB0OZNJzDBzso8M0F5/DhLIGZdYKZ8fSYlfRLJEHs6sSGWMEkOWOHbP/KhJMT7rDS2yQCdSdnNlWa06wzZZXYLacx7PYJpkEEqk41S4xX1VpMajEd06jotZvqndybXlBiN4cZDDqyWUr5t4JtD572aUZ/F0ydiJR1UPAEeK8Suq3F7RPwFniom/rTtqAxCsH4wsp7p08wF8lRMC0yyFSegqn9D8E0yWgwO0UwGSkAc2SU885jdoeMU4v5d3ZBwa8Z+Ak4rhMJLuUtjQAAAABJRU5ErkJggg==" />
          <input placeholder="Search by name" className="search_field" />
        </div>
      </div>
      <div className="content_container">
        <div className="category_container">
          <div className="category_header">
            <span className="category_header_text">CATEGORIES</span>
            <img className="category_header_img" src={settingIcon} />
          </div>
          {categoriesList?.map((list) => {
            return (
              <div className="category_content">
                <span className="category_content_title">{list.title}</span>
                <ul className="category_content_ul">
                  {list?.labels?.map((name) => {
                    return (
                      <li className="category_content_li">
                        <input
                          type="checkbox"
                          className="category_content_checkbox"
                        />
                        <label className="category_content_label">{name}</label>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <div className="table_content">
          <p className="table_content_header_text">All Items</p>

          <div className="table_header">
            <input type="checkbox" className="table_header_checkbox" />
            <p className="table_header_text_name table_header_text">Name</p>
            <p className="table_header_text">Owner</p>
            <p className="table_header_text">labels</p>
            <p className="table_header_text">Type</p>
            <p className="table_header_text">Modified</p>
            <p className="table_header_text">Action</p>
          </div>
          <div className="table_body">
            {tableData?.map((data, id) => {
              return (
                <div className="table_body_box" key={`bodyItem-${id}`}>
                  <input type="checkbox" className="table_body_box_input" />
                  <div className="table_body_name">
                    <img src={data.image} className="table_body_name_image" />
                    <p className="table_body_name_text">{data.name}</p>
                  </div>
                  <img src={data.ownerImage} className="table_body_owner" />
                  <p className="table_body_text">{data.label}</p>

                  <p className="table_body_text">{data.type}</p>
                  <p className="table_body_text">{data.modified}</p>
                  <div className="table_body_action">
                    <img
                      className="table_body_action_img"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAADp0lEQVR4nO2bW4hNURjHf4M5hgdRojy4RAjJZTyZBk9T5MUz4VXiyYNLecNgkHKbQsllRjGM64smL0jihRRJYVxKyS1mzMzWV+vUsux99t7n7MvaZ/a/Vue013e+tf7/vde31/rWOlDdqAFmAkuB2cAQBglqgA3AG8DRykdgCzCMKkYtcMEgbpbbQMHP0RKgHegG+nwcxlV6geaQ5C8bPr4Cj9Snfr2llJMTKRF2K98rIN8KjFT18nlaq+sBxrs5som8dHJ3APLyOHcYv93nIdJTzWaN22OvO7kCLAwyXlJEUPJFHNTstpuV7QZ521FQ/QxKXnBWs91kVnZrlXLnbSd/NSR5mRP80uzrTQM92heqjPxk4LVmf1/NF/6B7tBm8p1GX/eHJP8NmOVmaLsAUZCXstLL2LFYgOHAtQjIO2o+4ApbBYiC/B/tu8S6KVkRQMhfr5D8D7UifKxd25gFAaIiLxM8wS7t+iHbBXB71R3w+c1E4JVm/xNY5jELdF1k2SKA3PkbEd55wQjghVa/zlYB6oCbEZOXCc8po36sjQLERf644fO/RZANAgj5WwmQv1gqN+ikJEAhhjHvRV5yAtgkwFBjGR4X+bYgyVAnBQFajHYPl0G+0Yf8OSU0tgmw3mjzvE/uvhzyZ4KST1qAGWqiUmzvjnr/lzvJEfJHXAQNtQfgJCSAdOqB1tZLYFQFd16wzej/yXJ2gpyEBNihtfPbJ/02NQB5jJR4a7nbYE4CAsxXGx7FdjaXsK1X21l+5ItD6hKw1S3VZZMAXVobXSU626Q2RfQ0lhf5yODELECTkaCY62JTo54K/Sl5DywgATgxClBjBD5ZmpoY5zIdfgZMIiE4MQqwSvP9BRhtiLMW+GT04S4whgThxCjAQ833Hu26vAHuGW3L8NgZ8T7+XhVEm9MQYI7x2psAzFMTlX6j3eduOzYRoEf5l8/EBdiv+X2ixvmA0V6vSnlJ5iYOBOLmxCCAPMYfDN966VfL1GnEi9QEWOFBfEBta8vhpSSQmgCrDb+f1RJ4OskiNQHqVAyQ+flyv4xMNQpgC3IByJ8A8iFAHgPIgyCVRsqMIg+C5EGQPAiSB0HyIEilkTKjyIMgAW5uX0YOS4dFQeMlHD3RnaHj8mGwSOP1tpRhm2YoR1OrBR3GYQlPNBrBolOpl8XhUFB9N88YN/j98FiJDG7Wixyg8EUtcLRKyYfaaWpQ/8B8l+IfJyspfSrgye7T4jDEc+Rg8OAvY3xhDSjsnzUAAAAASUVORK5CYII="
                    />
                    <img
                      onClick={() => handleDelete(id)}
                      className="table_body_action_img"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABTklEQVR4nO3YPyxDURiG8cdkY2VlJREJi0hYxDWTMLCyipHEwipGRmZGNn82YWWkjZKwtkPTgVYaZxIdNN/7nZs6T3Kme5P7/oY73AupVMqyJeAGqAKNH6cari2S07Z/Gd3qNO+VNwcU/zBKdYpA1g6glIPxjXBe/yUgAwo5GF8AZtsBpFKp78YjvsBjGNQfEdBnAegCahHG18KzTXqKAHjEsOsIgCtLwHEEwJElYDcCYMcSsBYBsGr9beANyCwBwxEAQ5aA3giAHowrO44vI+jBEXCvAJw7As4UgENHwIECsOUI2FQAVhwBywrAtCNgSgEYdAQMKADdQN1hfD08S9K7A+ANYXcOgFsl4NQBcKIE7DsA9pSADQfAuhKw4ACYVwJGHQAjSkDzR9OLcPyz5c+sVs0AH4Lxn+Hb26VJ4BKoGAyvABfAhNf4VKqT+gIqecJs5K/oYQAAAABJRU5ErkJggg=="
                    />
                    {visible.show && visible.id === id ? (
                      <DeletePopup id={id} data={data} />
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
