import React from 'react';
import { useNavigate } from 'react-router-dom';

// UI components
const Card = ({ children, className }) => (
    <div className={`relative bg-white rounded-2xl shadow-xl border-2 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl ${className}`}>
        {children}
    </div>
);

const CardHeader = ({ children }) => (
    <div className="w-full text-center p-6">{children}</div>
);

const CardBody = ({ children }) => (
    <div className="w-full p-6 border-y border-gray-200">{children}</div>
);

const CardFooter = ({ children }) => (
    <div className="w-full p-6">{children}</div>
);

const Button = ({ onClick, children, className }) => (
    <button
        onClick={onClick}
        className={`px-4 py-3 font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 focus:outline-none ${className}`}
    >
        {children}
    </button>
);

const PricingMiniSection = () => {
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
    ];

    return (
        <section className="w-full py-20 px-4 bg-white text-gray-900">
            <div className="max-w-7xl mx-auto text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Simple, transparent pricing
                </h2>
                <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                    Choose a plan that's right for you. Start for free, or upgrade for premium features.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {plans.map((plan, index) => (
                    <Card
                        key={index}
                        className={plan.popular
                            ? 'border-blue-500 from-indigo-700 to-blue-600 bg-gradient-to-br shadow-blue-500/30 text-white'
                            : 'border-gray-200'
                        }
                    >
                        {plan.popular && (
                            <div className="absolute top-0 right-0 -mt-3 -mr-3 bg-blue-500 text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-md transform rotate-12">
                                Most Popular
                            </div>
                        )}

                        <CardHeader>
                            <h3 className={`text-2xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                                {plan.name}
                            </h3>
                            <p className={`mt-2 text-5xl font-extrabold ${plan.popular ? 'text-white' : 'text-gray-950'}`}>
                                {plan.price}
                            </p>
                        </CardHeader>

                        <CardBody>
                            <ul className={`space-y-4 text-sm ${plan.popular ? 'text-white' : 'text-gray-600'}`}>
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center text-left">
                                        <svg
                                            className="w-5 h-5 text-green-500 mr-2 flex-shrink-0"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </CardBody>

                        <CardFooter>
                            <Button
                                onClick={() => navigate('/subscription-calculator')}
                                className={`w-full py-4 text-base font-semibold rounded-lg ${plan.popular
                                    ? 'bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white shadow-lg'
                                    : 'bg-gray-900 hover:bg-gray-800 text-white'
                                    }`}
                            >
                                Get Started
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </section>
    );
};

export default PricingMiniSection;
