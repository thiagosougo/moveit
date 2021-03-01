import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';


export function Profile(){
    const { level } = useContext(ChallengesContext);
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/thiagosougo.png" alt="Thiago Sougo"/>
            <div>
                <strong>Thiago Sougo</strong>
                <p>
                    <img src="icons/level.svg" alt="Nivel"/>    
                    Nível { level }
                </p>
            </div>
        </div>
    );
}