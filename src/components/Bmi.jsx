import React, { useMemo, useState } from 'react'

const Bmi = () => {

    const [Height, SetHeight] = useState(180)
    const [Weight, SetWeight] = useState(70)


    function onWeightchange(event) {
        SetWeight(event.target.value)
    }
    function onHeightchange(event) {
        SetHeight(event.target.value)
    }
    const output = useMemo(() => {
        const calculateHeight = Height / 100
        return (Weight / (calculateHeight * calculateHeight)).toFixed(1)
    }, [Weight, Height]);


    return (
        <div className=' bg-blue-300'>
            <div className='min-h-screen flex flex-col justify-center items-center '>
                <h1 className='text-5xl font-semibold bg-blue-800 h-20 flex items-center' >BMI CALCULATOR</h1>
                <div className='bg-white w-96 mt-5'>
                    <p >Weight:{Weight}</p>
                    <input
                        className='w-[75%]'
                        type='range'
                        step={1}
                        min={40}
                        max={200}
                        onChange={onWeightchange} />
                    <p className=''>Height:{Height}</p>
                    <input className='w-[75%]'
                        type='range'
                        step={1}
                        min={180}
                        max={300}
                        onChange={onHeightchange} />
                </div>
                <div className='bg-white w-96 flex justify-center items-center'>
                    <p>Your BMI is </p>
                    {output}
                </div>
            </div>
        </div>

    )
}

export default Bmi
