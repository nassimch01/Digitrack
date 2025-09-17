import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardBody, CardFooter, Button } from '@material-tailwind/react';

const PricingSection = () => {
    const navigate = useNavigate();

    const plans = [
        {
            name: 'Free',
            price: '$0',
            features: ['Feature 1', 'Feature 2'],
            popular: false,
        },
        {
            name: 'Pro',
            price: '$49',
            features: ['Feature A', 'Feature B', 'Feature C'],
            popular: true,
        },
        {
            name: 'Enterprise',
            price: 'Contact Us',
            features: ['All Features', 'Priority Support'],
            popular: false,
        },
    ];

    return (
        <section className="pricing-section">
            {plans.map((plan, index) => (
                <Card key={index} className={`border-2 ${plan.popular ? 'border-blue-600' : 'border-gray-300'}`}>
                    <CardHeader className="text-center">
                        <h2 className="text-xl font-bold">{plan.name}</h2>
                        <p className="text-3xl font-extrabold">{plan.price}</p>
                    </CardHeader>
                    <CardBody>
                        <ul>
                            {plan.features.map((feature, idx) => (
                                <li key={idx}>{feature}</li>
                            ))}
                        </ul>
                    </CardBody>
                    <CardFooter className="px-0 pb-0">
                        <Button
                            onClick={() => navigate('/subscription-calculator')}
                            className={`w-full py-6 text-base font-semibold rounded-lg transition-all ${plan.popular
                                    ? 'bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white shadow-lg'
                                    : 'bg-gray-900 hover:bg-gray-800 text-white'
                                }`}
                        >
                            Get Started
                        </Button>
                    </CardFooter>
                </Card>
            ))}
        </section>
    );
};

export default PricingSection;
