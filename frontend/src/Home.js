import React, { useState, useEffect } from 'react';

//import section components
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ResultsPage from './pages/ResultsPage';



const Home = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [pageView, setPageView] = useState('home');
    const [resultData, setResultData] = useState([]);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);


    const toSetPageView = (view) => {
        setPageView(view);
        if (view === 'home') {
            setResultData([]);
        }

    }

    return (
        <>
            <div className="body-wrapper">


                <div className="content-wrapper">
                    <Header screenWidth={screenWidth} toSetPageView={toSetPageView} />
                    {pageView === 'home' &&
                        <HomePage screenWidth={screenWidth} toSetPageView={toSetPageView} toSetResultsData={setResultData} />
                    }
                    {pageView === 'results' &&
                        <ResultsPage screenWidth={screenWidth} toSetPageView={toSetPageView} resultData={resultData} />
                    }
                    <footer> Designed & Developed by Swaathi </footer>
                    <div id="attribution">Image by storyset on Freepik</div>
                </div>

            </div>

        </>
    )
}

export default Home;
