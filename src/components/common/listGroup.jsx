import React from "react";

const ListGroup = ({genres, textProperty, valueProperty, onItemSelect, selectedItem}) => {
  
  return (
    <ul className="list-group">
      {genres.map(item => (
        <li className={item === selectedItem ? "list-group-item active" : "list-group-item"}
            key={item[valueProperty]}
            onClick={() => onItemSelect(item)}>
          {item[textProperty]}
        </li>
      ))}
    </ul>
  )
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id"
}

export default ListGroup;
