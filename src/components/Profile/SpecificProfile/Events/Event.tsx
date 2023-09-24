import React from "react";
import styles from "../SpecificProfile.module.scss";
// Creating an interface for accepting props
interface IEvent {
  address: string | undefined;
  city: string | undefined;
}

export const Event: React.FC<IEvent> = ({ address, city }) => {
  return (
    // Output the data that came to the props
    <div className={styles.specificProfile}>
      <div>
        <h1>Address Location:</h1>
        <span>{address}</span>
      </div>
      <div>
        <h1>City Location:</h1>
        <span>{city}</span>
      </div>
    </div>
  );
};
