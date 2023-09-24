import React from "react";
import styles from "../SpecificProfile.module.scss";
// Creating an interface for accepting props
interface INotes {
  name: string;
  title: string;
  department: string;
}

export const Notes: React.FC<INotes> = ({ name, title, department }) => {
  return (
    // Output the data that came to the props
    <div className={styles.specificProfile}>
      <div>
        <h1>Name Company:</h1>
        <span>{name}</span>
      </div>
      <div>
        <h1>Title Company:</h1>
        <span>{title}</span>
      </div>
      <div>
        <h1>Department Company:</h1>
        <span>{department}</span>
      </div>
    </div>
  );
};
