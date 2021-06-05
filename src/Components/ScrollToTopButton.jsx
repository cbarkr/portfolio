import React, {useState, useEffect} from 'react';
import {FiArrowUp} from 'react-icons/fi';
import '.././App.css';

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
            <FiArrowUp className="scrollTop" onClick={scrollTop} style={{height: 20, width: 20, display: showScroll ? 'flex' : 'none'}}/>
    );
}

export default ScrollTopButton;