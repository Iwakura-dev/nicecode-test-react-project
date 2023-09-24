import React, { useState } from "react";
import styles from "./Profile.module.scss";
import combinedShape from "../../assets/icons/combinedShape.svg";
// Creating an interface for accepting props
interface IProfileProps {
  id: number;
  firstName: string;
  lastName: string;
  image: string;
  age: number;
  gender: string;
}

export const Profile: React.FC<IProfileProps> = ({
  firstName,
  lastName,
  image,
  age,
  gender,
}) => {
  // Create a state for our dropdown menu
  const [dropDown, setDropDown] = useState<boolean>(false);
  return (
    <>
      {/* Create a check in which we check the state of dropdown menu, if the state has changed to true, then output a part of HTML code */}
      {dropDown && (
        <div className={styles["dropdown"]}>
          <div className={styles["dropdown__open"]}>
            <div>
              <button type="button">Изменить</button>
            </div>
            <div>
              <button type="button">Удалить</button>
            </div>
          </div>
        </div>
      )}
      <div className={styles.profile}>
        <div className={styles["profile__information"]}>
          <div className={styles["profile__wrapper"]}>
            <img src={image} alt={`${firstName}--${image}`} />
            <div className={styles["profile__text"]}>
              <h1>{firstName + " " + lastName}</h1>
              <p>{age + " age" + "," + gender}</p>
            </div>
          </div>
          <div>
            <button type="button" onClick={() => setDropDown(!dropDown)}>
              <img src={combinedShape} alt="combined-shape" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
