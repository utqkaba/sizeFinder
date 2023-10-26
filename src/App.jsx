import { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

export default function GfgInput() {
  const [height, setHeight] = useState(165)
  const [weight, setWeight] = useState(60)
  const [size, setSize] = useState("?")

  const handleHeightChange = (newValue) => {
    setHeight(newValue)
  }

  const handleWeightChange = (newValue) => {
    setWeight(newValue)
  }

  const handleBodyMassIndex = (newHeight, newWeight) => {
    const heightInMetre = newHeight / 100
    const Bmi = (newWeight / Math.pow(heightInMetre, 2)).toFixed(2)
    console.log(Bmi);

    if (Bmi < 18.5) {
      setSize("XS")
    } else if (Bmi >= 18.5 && Bmi < 24.9) {
      setSize("M")
    } else if (Bmi >= 25 && Bmi < 29.9) {
      setSize("L")
    } else if (Bmi >= 30 && Bmi < 34.9) {
      setSize("L")
    } else if (Bmi >= 35 && Bmi < 39.9) {
      setSize("L")
    } else {
      setSize("XXXL")
    }
  }

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-white text-black dark:bg-black dark:text-white'>
      <img src={"src/assets/vefaklnc.jpeg"} alt="Uppstairs" className='object-scale-down h-48 w-96' />
      <span className='font-extralight p-6 my-4'>Find out which size is the most suitable size right now!</span>
      <div className='w-[23%] border-2 border-double border-gray-800 rounded-xl'>
        <div className='p-4 mx-6 text-center my-2'>
          <span className='font-thin text-sm'>Height: {height} </span>
          <Slider
            min={165}
            max={200}
            onChange={handleHeightChange}
          />
        </div>
        <div className='p-4 mx-6 text-center mt-2 mb-4'>
          <span className='font-thin text-sm'>Weight: {weight} </span>
          <Slider
            min={60}
            max={120}
            onChange={handleWeightChange} />
        </div>
      </div>
      <button className='border border-double border-gray-800 rounded-xl m-4 mt-6 px-4 font-thin animate-bounce hover:bg-gray-800 hover:text-white'
        onClick={() => { handleBodyMassIndex(height, weight) }}>Find Size</button>
      <span className='font-medium text-lg'>Your size is {size}. </span>
    </div>
  );
}
