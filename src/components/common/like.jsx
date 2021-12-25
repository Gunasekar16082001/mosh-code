import React from "react";

const Like = ({ liked, onLikeToggle }) => {
  let classes = "fa fa-heart"
  if (!liked) classes += "-o";
  return (
    <i onClick={onLikeToggle}
       className={classes}
       style={{cursor: "pointer"}}
       aria-hidden="true"/>
  );
}

export default Like;
