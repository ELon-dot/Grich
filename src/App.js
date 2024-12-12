import React, { useState, useEffect } from 'react';
import './App.css';

const Game = () => {
    const [loading, setLoading] = useState(true);
    const [bonus, setBonus] = useState(0);
    const [balance, setBalance] = useState(0);
    const [menuVisible, setMenuVisible] = useState(false);

    useEffect(() => {
        if (loading) {
            const bonusAmount = Math.floor(Math.random() * (1100 - 900 + 1)) + 900;
            let counter = 0;
            const interval = setInterval(() => {
                if (counter < bonusAmount) {
                    counter += 10; // Smaller increments for slower animation
                    setBonus(Math.min(counter, bonusAmount));
                } else {
                    clearInterval(interval);
                    setBalance(bonusAmount);
                    setLoading(false);
                    setMenuVisible(true);
                }
            }, 100); // Slower update interval
            return () => clearInterval(interval);
        }
    }, [loading]);

    return (
        <div className="game-container">
            {loading ? (
                <div className="loading-screen">
                    <h1>Loading...</h1>
                    <p>Calculating your GRINCH bonus...</p>
                    <p>Bonus: {bonus}</p>
                </div>
            ) : (
                <div className="main-menu">
                    <header className="header">
                        <p>Balance: {balance} GRINCH</p>
                    </header>
                    <div className="content">
                        <h1>Main Menu</h1>
                        {/* Add your main game content here */}
                    </div>
                    {menuVisible && (
                        <nav className="navigation-bar">
                            <button>Home</button>
                            <button>Shop</button>
                            <button>Profile</button>
                        </nav>
                    )}
                </div>
            )}
        </div>
    );
};

export default Game;
