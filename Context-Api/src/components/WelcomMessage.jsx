import styles from "./WelcomeMessage.module.css";

const WelcomeMessage = ({ todoItem }) => {
  return (
    todoItem.length === 0 && <p className={styles.welcome}>Enjoy your day</p>
  );
};
export default WelcomeMessage;
