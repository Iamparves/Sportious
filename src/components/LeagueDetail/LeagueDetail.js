import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './LeagueDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMars, faFutbol, faFlag, faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Male from '../../img/male.jpg';
import Female from '../../img/female.jpg';
import stBanner from '../../img/stadium-2.jpg';

const LeagueDetail = () => {
    const [league, setLeague] = useState({});
    const { leagueID } = useParams();

    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${leagueID}`)
            .then(res => res.json())
            .then(data => setLeague(data.leagues[0]))
    }, [leagueID]);

    const { strBadge, strLeague, strSport, intFormedYear, strGender, strCountry, strDescriptionEN, strBanner, strFacebook, strTwitter, strYoutube } = league;

    return (
        <main>
            <section className="leagueDetail">
                <div className="container">
                    <div className="lgDetail__banner" style={{ background: `linear-gradient(#04b1dcbf, #15b846bf), url(${strBanner || stBanner}) no-repeat center bottom / cover` }}>
                        <div className="lgDetail__logo--box">
                            <img src={strBadge} alt={strLeague} className="lgDetail__logo" />
                        </div>
                    </div>
                    <div className="lgDetail__content">
                        <div className="lgDetail__info--box">
                            <div className="lgDetail__info">
                                <h2>{strLeague}</h2>
                                <h4><span><FontAwesomeIcon icon={faCalendarCheck} /> </span> Founded: {intFormedYear}</h4>
                                <h4><span><FontAwesomeIcon icon={faFlag} /></span> Country: {strCountry}</h4>
                                <h4><span><FontAwesomeIcon icon={faFutbol} /></span> Sport Type: {strSport}</h4>
                                <h4><span><FontAwesomeIcon icon={faMars} /></span> Gender: {strGender}</h4>
                            </div>
                            <div className="lgDetail__img--box">
                                <img src={strGender?.toLowerCase() === 'male' ? Male : Female} alt={strLeague} className="lgDetail__img" />
                            </div>
                        </div>
                        <div className="lgDetail__desc--box">
                            <p className="lgDetail__desc">{strDescriptionEN}</p>
                        </div>
                        <div className="lgDetail__social">
                            <a className="facebook" href={strFacebook ? `https://${strFacebook}` : 'https://www.facebook.com/'} target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                            <a className="twitter" href={strTwitter ? `https://${strTwitter}` : 'https://www.twitter.com/'} target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a className="youtube" href={strYoutube ? `https://${strYoutube}` : 'https://www.youtube.com/'} target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faYoutube} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default LeagueDetail;