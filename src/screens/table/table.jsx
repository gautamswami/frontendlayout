import React, { useContext, useEffect, useMemo, useState } from "react";
import "../home.css";
import DeletePopup from "../../components/deletePopup/deletePopup";
import { MyContext } from "../../MyContext";
let saveddata = [];
export default function Table() {
  const [data, setData] = useState([]);
  const [loading,setLoading] = useState(true)
  const context = useContext(MyContext);
  let { searchstate, setSearchState } = context;
  const getData = async () => {
    await fetch("https://646312614dca1a661353d0ee.mockapi.io/api/Files")
      .then((response) => response.json())
      .then((result) => {
        setData(result);
        saveddata = result;
        setLoading(false)
      });
  };
  const [visible, setVisible] = useState({ show: false, id: "" });
  const handleDelete = (id) => {
    if (visible.id === id) {
      setVisible({ show: !visible.show, id: id });
    } else {
      setVisible({ show: true, id: id });
    }
  };
  const getDate = (inputDate) => {
    const date = new Date(inputDate);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "short" });
    const year = date.getFullYear().toString().slice(-2);

    const formattedDate = `${day} ${month} '${year}`;
    return formattedDate;
  };
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    console.log(searchstate, "ss", searchstate?.trim(), saveddata);
    if (searchstate?.trim() === "") {
      setData(saveddata);
    } else {
      const filtered = data.filter(
        (item) =>
          item?.Name &&
          item?.Name?.toLowerCase()?.includes(searchstate?.toLowerCase())
      );
      setData(filtered);
    }
  }, [searchstate]);
  return (
    <>
    { loading ?  <div className="loader"></div> :
      <div className="table_content">
        <p className="table_content_header_text">All Items</p>

        <div className="table_header">
          <input type="checkbox" className="table_header_checkbox" />
          <p className="table_header_text_name table_header_text">Name</p>
          <p className="table_header_text owner">Owner</p>
          <p className="table_header_text owner">Type</p>
          <p className="table_header_text owner">Modified</p>
          <p className="table_header_text">Action</p>
        </div>
        <div className="table_body">
          {data.length !== 0 ? (
            <>
              {data?.map((data, id) => {
                return (
                  <div className="table_body_box" key={`bodyItem-${id}`}>
                    <input type="checkbox" className="table_body_box_input" />
                    <div className="table_body_name">
                      <img src={data.file} className="table_body_name_image" />
                      <p className="table_body_name_text">{data.Name}</p>
                    </div>
                    <div className="owner_image_div">
                      <img src={data.Owner} className="table_body_owner" />
                      {/* <p className="table_body_text">{data.label}</p> */}
                    </div>
                    <p className="table_body_text owner">{data.Type}</p>
                    <p className="table_body_text owner">
                      {getDate(data.ModifietAt)}
                    </p>
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
            </>
          ) : (
            <div className="no_data_show">NO DATA</div>
          )}
        </div>
      </div>}
    </>
  );
}
