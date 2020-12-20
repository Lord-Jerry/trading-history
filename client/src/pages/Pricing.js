import React from 'react';
import PricePlan from '../components/pricing/PricePlan';
import PageWrapper from './wrapper/PageWrapper';

const Pricing = () => (
    <PageWrapper>
        {/* <section className=""> */}
        <div className="container px-5 pt-6 pb-12 mx-auto text-gray-700 body-font overflow-hidden">
            <div className="flex flex-col text-center w-full mb-20">
                <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
                    Pricing
                </h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                    Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.
                </p>
                <div className="flex mx-auto border-2 border-blue-700 rounded overflow-hidden mt-6 -pt-px">
                    <button className="py-1  -mt-px px-4 bg-blue-700 border-gray-900 text-white focus:outline-none">
                        Monthly
                    </button>
                    <button className="py-1 px-4 focus:outline-none">Annually</button>
                </div>
            </div>

            <div className="flex flex-wrap -m-4 max-w-5xl mx-auto">
                {allPrice.map((eachPrice) => (
                    <PricePlan key={eachPrice.key} eachPrice={eachPrice} />
                ))}
            </div>
        </div>
        {/* </section> */}
    </PageWrapper>
);

export default Pricing;

const allPrice = [
    {
        key: '11',
        state: null,
        plan: 'Start',
        price: 'Free',
        attribute: [
            'Single User',
            'Unlimited trades',
            'Unlimited portfolios',
            'Available only for 14 days',
        ],
    },
    {
        key: '12',
        state: 'popular',
        plan: 'Pro',
        price: '$59',
        attribute: ['Everything on free', 'Trade as you want'],
    },
    {
        key: '13',
        state: 'coming soon',
        plan: 'Team',
        price: '$149',
        attribute: ['Everything on Pro', 'Unlimited team member', 'As many devices'],
    },
];
