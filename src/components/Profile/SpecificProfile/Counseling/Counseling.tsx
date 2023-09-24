import React from "react";
import styles from "../SpecificProfile.module.scss";
// Creating an interface for accepting props
interface ICounselingProps {
  cardExpire: string | undefined;
  cardNumber: string | undefined;
  cardType: string | undefined;
  currency: string | undefined;
}
export const Counseling: React.FC<ICounselingProps> = ({
  cardExpire,
  cardNumber,
  cardType,
  currency,
}) => {
  return (
    // Output the data that came to the props
    <div className={styles.specificProfile}>
      <div>
        <h1>Card Expire:</h1>
        <span>{cardExpire}</span>
      </div>
      <div>
        <h1>Card Number:</h1>
        <span>{cardNumber}</span>
      </div>
      <div>
        <h1>Card Type:</h1>
        <span>{cardType}</span>
      </div>
      <div>
        <h1>Currency:</h1>
        <span>{currency}</span>
      </div>
    </div>
  );
};
