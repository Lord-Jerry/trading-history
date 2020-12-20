import React from 'react';

const Footer = () => (
    <div className="bg-white border-t mt-10">
        <div className="container mx-auto px-4">
            <div className="md:flex justify-between items-center text-sm">
                <div className="text-center md:text-left py-3 md:py-4 border-b md:border-b-0">
                    <a href="/" className="no-underline text-grey-dark mr-4">
                        Home
                    </a>
                    <a href="/pricing" className="no-underline text-grey-dark mr-4">
                        Get Started
                    </a>
                    <a href="/" className="no-underline text-grey-dark">
                        Legal &amp; Privacy
                    </a>
                </div>
                <div className="md:flex md:flex-row-reverse items-center py-4">
                    <div className="text-center mb-4 md:mb-0 md:flex">
                        <div>
                            <a
                                href="/"
                                className="inline-block leading-tight bg-blue-700 border border-blue-dark hover:bg-blue-dark px-3 py-2 text-white no-underline rounded"
                            >
                                Need help?
                            </a>
                        </div>
                    </div>
                    <div className="text-gray-700 text-center md:mr-4">&copy; 2020 Tradelog</div>
                </div>
            </div>
        </div>
    </div>
);

export default Footer;
