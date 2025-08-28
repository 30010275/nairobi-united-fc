import React, { useEffect } from 'react';

const KenyaPremierLeagueWidgets = ({ dataHeight = '800px' }) => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://ls.soccersapi.com/widget/res/w_custom/widget.js';
        script.async = true;
        document.body.appendChild(script);
        
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="kenya-premier-league-widgets" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}>
            <div className="live-scores">
                <h2>Live Scores – FKF Premier League</h2>
                <div data-url="https://ls.soccersapi.com/widget/live?c=2677" style={{ height: dataHeight }}></div>
            </div>
            <div className="fixtures">
                <h2>Fixtures – FKF Premier League</h2>
                <div data-url="https://ls.soccersapi.com/widget/fixtures?c=2677" style={{ height: dataHeight }}></div>
            </div>
            <div className="standings">
                <h2>Standings – FKF Premier League</h2>
                <div data-url="https://ls.soccersapi.com/widget/standings?c=2677" style={{ height: dataHeight }}></div>
            </div>
        </div>
    );
};

export default KenyaPremierLeagueWidgets;
