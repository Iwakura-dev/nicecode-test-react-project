import React, { useState } from "react";
import styles from "./ControlPanel.module.scss";
import add from "../../assets/icons/add.svg";
import filter from "../../assets/icons/filter.svg";
import search from "../../assets/icons/search.svg";
import loupe from "../../assets/icons/loupe.svg";
import close from "../../assets/icons/close.svg";
export const ControlPanel = () => {
  // Create a state for the output of our input
  const [input, setInput] = useState<boolean>(false);
  return (
    <>
      {/* We create a check when if our state is true then we output a part of html code otherwise we leave it in the state false */}
      {input && (
        <div className={styles.search}>
          <div className={styles["search__group"]}>
            <img src={loupe} alt="button-icon-loupe" />
            <input type="input" placeholder="" name="search" />
          </div>
          <div className={styles["search__close"]}>
            <button type="button">
              <img
                src={close}
                alt="button-icon-close"
                onClick={() => setInput(false)}
              />
            </button>
          </div>
        </div>
      )}
      <div className={styles.panel}>
        <div className={styles["panel__group"]}>
          <div>
            <button type="button" onClick={() => setInput(!input)}>
              <img src={search} alt="button-icon-search" />
            </button>
          </div>
          <div className={styles["panel__group--button"]}>
            <div>
              <button type="button">
                <img src={filter} alt="button-icon-filter" />
              </button>
            </div>
            <div>
              <button type="button">
                <img src={add} alt="button-icon-add" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
