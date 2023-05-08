import { useContext } from "react";
import React from "react";
import { StyledDeleteButton } from "./deleteButton.styles.js";
import { crudProcesses } from "../../backend/controller/crudProcesses.js";
import { QueryContext } from "../find/find.js";

export default function DeleteButton({ id, setItems }) {
  let query = useContext(QueryContext);
  function handleClick() {
    crudProcesses.deleteObject(id);
    setItems([...crudProcesses.searchAll(query)]);
  }

  return (
    <StyledDeleteButton
      className="deleteButton"
      onClick={() => {
        handleClick();
      }}
    ></StyledDeleteButton>
  );
}
