import React from "react";
import { useState } from "react";
import { StyledCard } from "./card.styles.js";
import DeleteButton from "../delete-button/deleteButton.js";
import EditButton from "../edit-button/editButton.js";
import EditForm from "../edit-form/editForm.js";

export default function Card({ items, setItems, obj, index }) {
  let [mode, setMode] = useState(false);

  function updateMode() {
    setMode(!mode);
  }

  return (
    <StyledCard>
      {mode === false && (
        <div className="card_body">
          <EditButton onClick={updateMode} />
          <DeleteButton id={obj.id} setItems={setItems} />
          <h4>{obj.name}</h4>
          <p className="card__desc">{obj.description}</p>
          <h4>Breed: {obj.breed}</h4>
          <h4>Size: {obj.size}</h4>
          <h4>Owner: {obj.owner}</h4>
        </div>
      )}

      {mode === true && (
        <div className="card_body">
          <EditButton onClick={updateMode} />
          <DeleteButton id={obj.id} setItems={setItems} />
          <EditForm data={obj} setItems={setItems} setMode={setMode} />
        </div>
      )}
    </StyledCard>
  );
}
