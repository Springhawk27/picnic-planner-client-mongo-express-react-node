import React from 'react';
import useGuides from '../../hooks/useGuides';
import Guide from '../Guide/Guide';

const Guides = (props) => {
    const [guides] = useGuides([]);

    return (

        <div >
            <section className="text-gray-600 body-font">
                <div className="container px-5 pt-8 mx-auto">
                    <div className="flex flex-col text-center w-full mb-1">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-1 text-green-700">Your Guide Wherever You Go</h1>
                    </div>
                </div>
            </section>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-8 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {
                            guides.map(guide => <Guide
                                key={guide._id}
                                guide={guide}
                            ></Guide>)
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Guides;





