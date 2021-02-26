import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';
export function Profile() {
  const {level} = useContext(ChallengesContext);
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/davidscarmo.png" alt="David Carmo" />
      <div>
        <strong>David Carmo</strong>
        <p>
            <img src="icons/level.svg" alt="Level up img"/>
            Level {level}
            </p>
      </div>
    </div>
  );
}
