import React from "react";
import "./deletePopup.css";
export default function DeletePopup({ id, data }) {
  return (
    
    <div className="delete_container">
      <div className="delete_header">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABTklEQVR4nO3YPyxDURiG8cdkY2VlJREJi0hYxDWTMLCyipHEwipGRmZGNn82YWWkjZKwtkPTgVYaZxIdNN/7nZs6T3Kme5P7/oY73AupVMqyJeAGqAKNH6cari2S07Z/Gd3qNO+VNwcU/zBKdYpA1g6glIPxjXBe/yUgAwo5GF8AZtsBpFKp78YjvsBjGNQfEdBnAegCahHG18KzTXqKAHjEsOsIgCtLwHEEwJElYDcCYMcSsBYBsGr9beANyCwBwxEAQ5aA3giAHowrO44vI+jBEXCvAJw7As4UgENHwIECsOUI2FQAVhwBywrAtCNgSgEYdAQMKADdQN1hfD08S9K7A+ANYXcOgFsl4NQBcKIE7DsA9pSADQfAuhKw4ACYVwJGHQAjSkDzR9OLcPyz5c+sVs0AH4Lxn+Hb26VJ4BKoGAyvABfAhNf4VKqT+gIqecJs5K/oYQAAAABJRU5ErkJggg==" />
        <span>Remove</span>
      </div>
      <div className="delete_body">
        <span>Are you sure</span>
        <div className="delete_check_box">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Cross_red_circle.svg/1024px-Cross_red_circle.svg.png"  />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Eo_circle_green_checkmark.svg/512px-Eo_circle_green_checkmark.svg.png?20200417132424" />
        </div>
      </div>
      
    </div>
    
  );
}

