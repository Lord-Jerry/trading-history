import React from 'react';

const Tabs = ({ activeTab, handleActiveTab }) => {
    const activeColor = 'border-indigo-500 bg-gray-50 text-indigo-700';
    const inactiveColor = 'border-gray-200 text-gray-800 hover:text-indigo-500';

    let openTab;
    let closeTab;
    if (activeTab === 'open') {
        openTab = activeColor;
        closeTab = inactiveColor;
    } else {
        openTab = inactiveColor;
        closeTab = activeColor;
    }
    return (
        <div className="container mx-auto flex flex-wrap flex-col">
            <div className="flex w-full border-b text-sm bg-gray-50 pt-2">
                <span
                    onClick={() => handleActiveTab('open')}
                    className={`sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b title-font font-medium inline-flex items-center leading-none ${openTab} cursor-pointer tracking-wider`}
                >
                    <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5 mr-3"
                        viewBox="0 0 24 24"
                    >
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                    Open
                </span>
                <span
                    onClick={() => handleActiveTab('closed')}
                    className={`sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b title-font font-medium inline-flex items-center leading-none ${closeTab} cursor-pointer tracking-wider`}
                >
                    <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5 mr-3"
                        viewBox="0 0 24 24"
                    >
                        <circle cx="12" cy="5" r="3" />
                        <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3" />
                    </svg>
                    Closed
                </span>
            </div>
        </div>
    );
};

export default Tabs;
