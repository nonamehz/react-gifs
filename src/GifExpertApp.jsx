import { useState } from 'react';

import { GifGrid, AddCategory } from './components';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Gohan']);

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            <h1>GifExpertApp 💀</h1>

            <AddCategory
                onNewCategory={onAddCategory}
            />


            {
                categories.map((category) => (
                    <GifGrid
                        key={category}
                        category={category}
                    />
                ))
            }

        </>
    )
}