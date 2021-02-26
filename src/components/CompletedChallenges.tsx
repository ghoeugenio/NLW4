import styles from '../styles/pages/CompletedChallenges.module.css';

export function CompletedChallenges(){
    return(
        <div className={styles.completedChallengesContainer}>
            <span>Desafios Completos</span>
            <span>5</span>
        </div>
    );
}