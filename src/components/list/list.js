import React from "react";
import { StyledList } from "./list.styles.js";
import Card from "../card/card.js";

export default function List({ items, setItems }) {
  return (
    <StyledList>
      {items.length >= 1 &&
        items.map((obj, index) => {
          return (
            <section key={`${obj.id}`}>
              <Card obj={obj} index={index} setItems={setItems} />
            </section>
          );
        })}
      {items.length < 1 && <p>No items were found matching this search</p>}
    </StyledList>
  );
}
