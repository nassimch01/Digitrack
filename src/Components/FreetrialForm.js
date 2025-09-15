import { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/Input";
import { Button } from "./ui/Button";

function FreetrialForm() {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email submitted:", email);
        alert(`Thank you! We've sent a trial link to ${email}`);
        setEmail("");
    };



    return (
        <div className="w-full max-w-md mx-auto p-6 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl shadow-lg">
            <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-white">Start Your Free Trial</h2>
                <p className="text-blue-100 mt-2">
                    Get instant access to all features for 14 days
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <Label htmlFor="email" className="sr-only">
                        Email
                    </Label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="Enter your work email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white"
                        required
                    />
                </div>

                <Button
                    type="submit"
                    className="w-full px-6 py-3 bg-white text-blue-600 hover:bg-gray-100 font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                >
                    Start Free Trial
                </Button>
            </form>

            <p className="mt-4 text-center text-blue-200 text-sm">
                No credit card required. 14-day free trial.
            </p>
        </div>
    );
}

export default FreetrialForm