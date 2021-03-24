import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';
import styles from '../styles/pages/ChallengeBox.module.css';

export function ChallengeBox(){

    const {activeChallenge, resetChallenge} = useContext(ChallengeContext);

    return (
        <div className={styles.challengeBoxContainer}>
            {activeChallenge? (
            <div className={styles.challengeActive}>
                <header>{activeChallenge.amount}</header>

                <main>
                    <img src={`icons/${activeChallenge.type}.svg`}alt='body'/>
                    <strong>Novo Desafio</strong>
                    <p>{activeChallenge.description}</p>
                </main>

                <footer>
                    <button onClick={resetChallenge}>
                        Falhei
                    </button>
                    <button>
                        Completei
                    </button>
                </footer>
            </div> 
            ) : (
                <div className={styles.challengeNotActive}>
                <strong>Filanize um ciclo para receber o desafio</strong>
                <p>
                    <img src='icons/level-up.svg' alt='Level up'/>
                    Avance de level completando desafios
                </p>
                </div>
            )} 
        </div>
    )
}