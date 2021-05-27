import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './LeagueCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const LeagueCard = (props) => {
    const [leagueLogo, setLeagueLogo] = useState('');
    const { idLeague, strLeague, strSport } = props.league;

    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`)
            .then(res => res.json())
            .then(data => setLeagueLogo(data.leagues[0].strBadge))
    }, [idLeague])

    return (
        <div className="league__card">
            <div className="league__img--box">
                <img className="league__img" src={leagueLogo} alt={strLeague} />
            </div>
            <div className="league__content">
                <h2 className="league__name">{strLeague}</h2>
                <p className="league__type">Sprots type: {strSport}</p>
                <div className="league__btn--box">
                    <Link to={`/league/${idLeague}`} className="league__btn btn__primary">Explore <FontAwesomeIcon icon={faArrowRight} /></Link>
                </div>
            </div>
        </div>
    );
};

export default LeagueCard;