import styles from '../styles/components/Profile.module.css';
export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/davidscarmo.png" alt="David Carmo" />
      <div>
        <strong>David Carmo</strong>
        <p>
            <img src="icons/level.svg" alt="Level up img"/>
            Level 1
            </p>
      </div>
    </div>
  );
}
