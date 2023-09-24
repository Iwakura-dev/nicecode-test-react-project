import React from "react";
import styles from "../SpecificProfile.module.scss";
// Creating an interface for accepting props
interface IVideo {
  color: string;
  type: string;
}

export const Video: React.FC<IVideo> = ({ color, type }) => {
  return (
    // Output the data that came to the props
    <div className={styles.specificProfile}>
      <div>
        <h1>Hair Color:</h1>
        <span>{color}</span>
      </div>
      <div>
        <h1>Type Hair:</h1>
        <span>{type}</span>
      </div>
    </div>
  );
};
