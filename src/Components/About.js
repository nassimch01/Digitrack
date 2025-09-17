import { CheckCircleIcon } from '@heroicons/react/24/solid'; // Make sure you have @heroicons/react installed

const reasons = [
    {
        title: 'Simplicité',
        description: 'Une interface claire et intuitive.',
    },
    {
        title: 'Tout-en-un',
        description: 'Ventes, achats, CRM, e-commerce, reporting.',
    },
    {
        title: 'Productivité',
        description: 'Automatisez vos tâches et gagnez du temps.',
    },
    {
        title: 'Polyvalence',
        description: 'Adaptée à tous les secteurs et tailles d’entreprise.',
    },
    {
        title: 'Sécurité',
        description: 'Données protégées et accessibles partout.',
    },
];

function About() {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10">
                    Pourquoi choisir <span className="text-blue-600">DigiTrack</span> ?
                </h2>

                <ul className="space-y-6 text-left">
                    {reasons.map((reason, index) => (
                        <li key={index} className="flex items-start space-x-4">
                            <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                            <div>
                                <p className="text-lg font-medium text-gray-900">{reason.title}</p>
                                <p className="text-gray-600">{reason.description}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
export default About