import React, { useEffect, useState } from 'react';
import Watch from '../Watch/Watch';
import './OurWatches.css'

const OurWatches = () => {

    const [watches, setWatches] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/watches')
            .then(res => res.json())
            .then(data => {
                setWatches(data)
            })

    }, [])



    return (
        <div>
            <h2>All Available watch will be here</h2>
            {watches.length}

            <div className="watch-grid">
                {watches.map(watch => <Watch key={watch._id} watch={watch} ></Watch>)}

            </div>

        </div>
    );
};

export default OurWatches;