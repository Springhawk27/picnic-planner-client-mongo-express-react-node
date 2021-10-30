import React from 'react';
import useSpots from '../../hooks/useSpots';
import Spot from '../Spot/Spot';

const Spots = (props) => {
    const [spots] = useSpots([]);

    return (

        <div >
            <section className="text-gray-600 body-font">
                <div className="container px-5 pt-8 mx-auto">
                    <div className="flex flex-col text-center w-full mb-1">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-1 text-green-700">Check Out Our  Picnic Spots</h1>
                    </div>
                </div>
            </section>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-8 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {
                            spots.map(spot => <Spot
                                key={spot.id}
                                spot={spot}
                            ></Spot>)
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Spots;





