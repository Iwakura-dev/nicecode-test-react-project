import React from "react";
import styles from "./ContactsList.module.scss";

// Creating an interface for accepting props

interface IContactsLists {
  id: number;
  firstName: string;
  lastName: string;
  image: string;
  handleGetOneUser: (url: string) => void;
}

export const ContactsLists: React.FC<IContactsLists> = ({
  id,
  firstName,
  lastName,
  image,
  handleGetOneUser,
}) => {
  // Create a function which, when clicked, calls another function with the passed id
  const handleGetClickOneUsers = () => {
    handleGetOneUser(`https://dummyjson.com/users/${id}`);
  };
  return (
    // Output the data that came to us
    <div className={styles.contacts} onClick={handleGetClickOneUsers}>
      <div className={styles["contacts__image"]}>
        <img src={image} alt={`${firstName}--${image}`} />
      </div>
      <div className={styles["contacts__title"]}>
        <h1>{`${firstName} ${lastName}`}</h1>
      </div>
    </div>
  );
};
