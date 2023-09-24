import { useState, useEffect } from "react";
import { ControlPanel } from "../ControlPanel/ControlPanel";
import { ContactsLists } from "../ContactsLists/ContactsLists";
import {
  IGetAllUsers,
  TGetAllUsersResponse,
} from "../../types/interface/getAllUsers";
import { Profile } from "../Profile/Profile";
import { IGetOneUsers } from "../../types/interface/getOneUsers";
import { Board } from "../Board/Board";
import styles from "./Collection.module.scss";
import axios from "axios";
import { BOARD_ITEM } from "../Board/board-item";
import { Notes } from "../Profile/SpecificProfile/Notes/Notes";
import { Counseling } from "../Profile/SpecificProfile/Counseling/Counseling";
import { Video } from "../Profile/SpecificProfile/Video/Video";
import { Event } from "../Profile/SpecificProfile/Events/Event";

export const Collection = () => {
  // Creates a state for all users, objects will be stored in this state
  const [allUsers, setAllUsers] = useState<IGetAllUsers[]>([]);
  // Creates a state for one user, objects will be stored in this state
  const [oneUsers, setOneUsers] = useState<IGetOneUsers[]>([]);
  // Create a tab menu for switching
  const [toggle, setToggle] = useState<number>(0);
  // Create a function that allows you to switch by tab menu
  const updateToggle = (id: number) => {
    setToggle(id);
  };
  // Create an asynchronous function in which we make a query for all users and put them into the state
  const handleGetAllUsers = async (url: string) => {
    try {
      const { data } = await axios.get<TGetAllUsersResponse>(url);
      setAllUsers(data.users);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log("Error >>> ", error.message);
        return error.message;
      } else {
        console.log("Unexpected error >>> ", error);
        return "An unexpected error occurred";
      }
    }
  };
  // Create an asynchronous function in which we make a query for one user and put them into the state
  const handleGetOneUser = async (url: string) => {
    try {
      const { data } = await axios.get(url);
      setOneUsers([data]);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log("Error >>> ", error.message);
        return error.message;
      } else {
        console.log("Unexpected error >>> ", error);
        return "An unexpected error occurred";
      }
    }
  };
  // Create an effect and at the first render call a function that sends a request to all users
  useEffect(() => {
    handleGetAllUsers("https://dummyjson.com/users");
  }, []);
  return (
    <div className={styles.collection}>
      <div className={styles["collection__leftside"]}>
        <ControlPanel />
        <div className={styles["collection__leftside--cider"]}>
          <span>{allUsers.length}</span>
          <button type="button">Выбрать</button>
        </div>
        <div className={styles["collection__leftside--profile"]}>
          {/* We access the state that stores all users and iterate over it */}
          {allUsers.map((users, index) => {
            return (
              <ContactsLists
                key={index}
                id={users.id}
                firstName={users.firstName}
                lastName={users.lastName}
                image={users.image}
                handleGetOneUser={handleGetOneUser}
              />
            );
          })}
        </div>
      </div>
      {/* Create a check to hide a user's profile if we have not clicked on any user */}
      <div className={styles["collection__rightside"]}>
        {oneUsers.length < 1 ? (
          <></>
        ) : (
          <>
            {/* We access the state that stores one user and iterate over it */}
            {oneUsers.map((user, index) => {
              return (
                <Profile
                  key={index}
                  id={user.id}
                  firstName={user.firstName}
                  lastName={user.lastName}
                  image={user.image}
                  age={user.age}
                  gender={user.gender}
                />
              );
            })}
            {/* Iterate and display the tab menu */}
            <div className={styles["collection__rightside--board"]}>
              {BOARD_ITEM.map((item, index) => {
                return (
                  <Board
                    key={index}
                    id={index}
                    title={item.title}
                    updateToggle={updateToggle}
                  />
                );
              })}
            </div>
            <>
              {/* Check the menu tab, if id is 0, then output the null tab */}
              {toggle === 0 ? (
                <>
                  {oneUsers.map((item, index) => {
                    return (
                      <Notes
                        name={item.company?.name as string}
                        title={item.company?.title as string}
                        department={item.company?.department as string}
                      />
                    );
                  })}
                </>
              ) : (
                <></>
              )}
            </>
            <>
              {/* Check the menu tab, if id is 1, then output the 1 id tab */}
              {toggle === 1 ? (
                <>
                  {oneUsers.map((item, index) => {
                    return (
                      <Counseling
                        cardExpire={item.bank?.cardExpire}
                        cardNumber={item.bank?.cardNumber}
                        cardType={item.bank?.cardType}
                        currency={item.bank?.currency}
                      />
                    );
                  })}
                </>
              ) : (
                <></>
              )}
            </>
            <>
              {/* Check the menu tab, if id is 2, then output the 2 id tab */}
              {toggle === 2 ? (
                <>
                  {oneUsers.map((item, index) => {
                    return (
                      <Video color={item.hair.color} type={item.hair.type} />
                    );
                  })}
                </>
              ) : (
                <></>
              )}
            </>
            <>
              {/* Check the menu tab, if id is 3, then output the 3 id tab */}
              {toggle === 3 ? (
                <>
                  {oneUsers.map((item, index) => {
                    return (
                      <Event
                        address={item.address?.address}
                        city={item.address?.city}
                      />
                    );
                  })}
                </>
              ) : (
                <></>
              )}
            </>
          </>
        )}
      </div>
    </div>
  );
};
