import React, { useEffect, useState } from 'react';
import { getGifs } from '../../helpers/getGifs';
import GridItemComponent from './GridItemComponent';

const GridComponent = ({ category }) => {

    // HOOKS
    /**************/
    const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs(category)
                .then((gifs) => setImages(gifs));
    }, [category]);

    return (
        <div>
            <h3>{category}</h3>
            <div className='grid animate__animated animate__fadeInLeftBig'>
                {
                    images.map(image => {
                        return <GridItemComponent
                            image={image}
                            key={image.id}
                        />
                    })
                }
            </div>
        </div>
    );
}

export default GridComponent;