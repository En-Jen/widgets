import React from 'react';

const Link = ({ className, href, children }) => {
    const onClick = (event) => {
        // If user holds command (on mac) or control (on PC) and clicks link, open link in new tab
        if (event.metaKey || event.ctrlKey) {
           return; 
        }

        event.preventDefault();
        window.history.pushState({}, '', href);

        // Communicate to Route components that URL has changed
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    };

    return (
        <a onClick={onClick} className={className} href={href}>
            {children}
        </a>
    );
};

export default Link;