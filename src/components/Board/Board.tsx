import React from "react";
import styles from "./Board.module.scss";

// Creating an interface for accepting props

interface IBoard {
  title: string;
  id: number;
  updateToggle: (id: number) => void;
}

export const Board: React.FC<IBoard> = ({ title, id, updateToggle }) => {
  return (
    // Output the data that came to us
    <div className={styles.board}>
      <button type="button" onClick={() => updateToggle(id)}>
        {title}
      </button>
    </div>
  );
};
