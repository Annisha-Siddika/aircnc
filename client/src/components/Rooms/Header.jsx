import React from 'react';
import Heading from '../Heading/Heading';

const Header = () => {
    return (
        <>
            <Heading 
            title='Kecamatan Selemadeg, Bali'
            subtitle='Selemadeg, Bali'
            
            />
            <div className="w-full md:h-[60vh] overflow-hidden rounded-xl">
                <img className='object-cover w-full h-full' src="https://a0.muscache.com/im/pictures/e25a9b25-fa98-4160-bfd1-039287bf38b6.jpg" alt="" />
            </div>
        </>
    );
};          

export default Header;