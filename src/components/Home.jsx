import React, { useState } from 'react'

function StateArraySample2() {

    let numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const [numbers, setnumbers] = useState(numberList)

    const addRandom = () => {
        let j=  Math.floor(Math.random() * 100);
        numbers.push(j);
        setnumbers([...numbers])
    }

    return (<>
    <button onClick={addRandom}>Add Random Number</button>
        <ul>
            
        {numbers.map(item=> <li>{item}</li> )}
            
        </ul>
    </>
    )
}

export default StateArraySample2