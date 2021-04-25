import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR'
import { useEffect, useState } from 'react';

import styles from './styles.module.scss';

export function Header() {
    const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
        locale: ptBR,
    })

    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    }, [isDark]);

    return (
        <header className={styles.headerContainer}>
            <img src="/logo.svg" alt="Podcastr"/>

            <p>O melhor para você ouvir, sempre</p>

            <span>{currentDate}</span>

            <div>
                <input 
                    type="checkbox" 
                    className={styles.checkbox}
                    id="checkbox"
                    checked={isDark} 
                    onChange={event => setIsDark(event.target.checked)}
                />
                <label htmlFor="checkbox" className="label">
                    <img src="/sun-light.svg" alt="Light mode"/>
                    <img src="/moon-dark.svg" alt="Dark mode"/>
                    <div className={styles.ball}></div>
                </label>
            </div>
        </header>
    )
}