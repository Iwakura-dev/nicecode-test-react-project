import styles from "./App.module.scss";
import { Collection } from "./components/Collection/Collection";

function App() {
  return (
    <>
      {/* Create a header  */}
      <div className={styles.header}></div>
      {/* Import the component that collects all remaining components */}
      <Collection />
    </>
  );
}

export default App;
