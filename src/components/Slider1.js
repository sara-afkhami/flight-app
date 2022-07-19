import React, { useState, useEffect } from 'react';
import ItemsCarousel from 'react-items-carousel';
import range from 'lodash/range';
import rightArrow from "../assets/icons/wave_arrow-right.svg"
import leftArrow from "../assets/icons/wave_arrow_left.svg"
import pic1 from "../assets/img/mesut-kaya-eOcyhe5-9sQ-unsplash.png"
import pic2 from '../assets/img/spencer-davis-0QcSnCM0aMc-unsplash.png'
import pic3 from '../assets/img/link-hoang-UoqAR2pOxMo-unsplash.png'

const pics = [pic1, pic2, pic3]
const Slider = () => {

    useEffect(() => {
        setChildren([])
        setActiveItemIndex(0)
        setTimeout(() => {
            setChildren(
                createChildren(20)
            )
        }, 100);


    }, [])


    const createChildren = (n) => pics.map(i => <img className='slider-photo' alt='' src={i} style={{}}/>);

    const changeActiveItem = (activeItemIndex) => setActiveItemIndex(activeItemIndex);


    const [activeItemIndex, setActiveItemIndex] = useState();
    const [children, setChildren] = useState();
    return (
        <ItemsCarousel
            // Placeholder configurations
            // style={{display:"flex", flexDirection: "row", justifyContent: "space-between"}}
            enablePlaceholder
            numberOfPlaceholderItems={3}
            minimumPlaceholderTime={1000}
            placeholderItem={<div style={{ height: 100, backgroundColor: '#fff' ,width:100 }}>Placeholder</div>}

            // Carousel configurations
            infiniteLoop={true}
            numberOfCards={3}
            gutter={0}
            showSlither={false}
            firstAndLastGutter={true}
            freeScrolling={true}

            // Active item configurations
            requestToChangeActive={changeActiveItem}
            activeItemIndex={activeItemIndex}
            activePosition={'center'}

            chevronWidth={24}
            rightChevron={<img src={rightArrow}/>}
            leftChevron={<img src={leftArrow}/>}
            outsideChevron={false}
        >
            {children}
        </ItemsCarousel>
    );
}
export default Slider;
