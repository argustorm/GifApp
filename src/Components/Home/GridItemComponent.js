import React from 'react';

const GridItemComponent = ({ image }) => {
    return (
        <div className='card animate__animated animate__fadeInLeftBig'>
            <img
                alt={image.title}
                src={image.url}
            />
            <p>{image.title}</p>
        </div>
    )
}

export default GridItemComponent;