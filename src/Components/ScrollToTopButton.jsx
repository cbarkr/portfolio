import React, {useState, useEffect} from 'react';
import {FiArrowUp} from 'react-icons/fi';

const ScrollTopButton = () =>{
    const [showScroll, setShowScroll] = useState(false)

    useEffect(()=>{
        window.addEventListener('scroll', checkScrollTop)
        return function cleanup() {
        window.removeEventListener('scroll', checkScrollTop)
        }
    })

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400){
        setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 400){
        setShowScroll(false)
        }
    };

    const scrollTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    return (
            <FiArrowUp className="scrollTop" aria-label="Scroll To Top" tabIndex="0" onClick={scrollTop} onKeyDown={scrollTop} style={{display: showScroll ? 'flex' : 'none'}}/>
    );
}

export default ScrollTopButton;