import React, { useEffect, useState } from 'react';
import './League.css';
import LeagueCard from '../LeagueCard/LeagueCard';

const League = () => {
    const [leagues, setLeagues] = useState([]);

    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
            .then(res => res.json())
            .then(data => {
                const first12League = data.leagues.slice(0, 12);
                setLeagues(first12League);
            })
    }, [])

    return (
        <section className="league">
            <div className="container">
                <div className="league__inner">
                    {
                        leagues.map(league => <LeagueCard league={league} key={league.idLeague} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default League;