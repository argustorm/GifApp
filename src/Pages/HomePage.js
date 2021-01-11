import React, { useState } from 'react';
import GridComponent from '../Components/Home/GridComponent';
import InputComponent from '../Components/Home/InputComponent';

const HomeComponent = () => {

    const [category, setCategory] = useState(null);

    return (
        <div>
            <h1>Repaso GifAppExpert</h1>
            <InputComponent setCategory={setCategory} />
            <hr />
            <GridComponent category={category} />
        </div>
    )
}

export default HomeComponent;