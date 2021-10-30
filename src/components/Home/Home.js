import React from 'react';
// import Article from '../Article/Article';
import Banner from '../Banner/Banner';
import FeaturedSpots from '../FeaturedSpots/FeaturedSpots';
// import FeaturedDoctors from '../FeaturedDoctors/FeaturedDoctors';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedSpots></FeaturedSpots>
            {/* <Article></Article> */}
            {/* <FeaturedDoctors></FeaturedDoctors> */}
        </div>
    );
};

export default Home;