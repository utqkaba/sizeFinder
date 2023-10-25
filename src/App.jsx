import { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

export default function GfgInput() {
  const [height, setHeight] = useState(165)
  const [weight, setWeight] = useState(60)
  // const [bmi, setBmi] = useState(0)
  const [size, setSize] = useState("Large")

  const handleHeightChange = (newValue) => {
    setHeight(newValue)
  }

  const handleWeightChange = (newValue) => {
    setWeight(newValue)
  }

  const handleBodyMassIndex = (newHeight, newWeight) => {
    const heightInMetre = newHeight / 100
    const Bmi = newWeight / Math.pow(heightInMetre, 2)
    switch (Bmi) {
      case (Bmi < 18.5):
        // setSize("Xs")
        break;
      case (18.5 < 24.9):
        // setSize("S")
        console.log(Bmi < 23);

        break;
      case (25.0 < 29.9):
        // setSize("M")
        break;
      case (30.0 < 34.9):
        // setSize("L")
        break;
      case (35.0 < 39.9):
        // setSize("Xl")
        break;
      case (Bmi > 40.0):
        // setSize("Xxl")
        break;
      default:
        break
    }
    // setBmi(Bmi)
    // isThisMySize(bmi)
  }
  //fonskiyonları ayırabilirim. state güncellemede bir sorun çıktı, erteledim.
  // const isThisMySize = (bmi) => {
  //   console.log("lol:", bmi);

  // }

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-white text-black'>
      <img src={"src/assets/vefaklnc.jpeg"} alt="Uppstairs" className='object-scale-down h-48 w-96' />
      <span className='font-extralight p-6 my-4'>Find out which size is the most suitable size right now!</span>
      <div className='w-[21.5%] border-2 border-double border-gray-800 rounded-xl'>
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
      <span className='font-medium text-lg'>Your size is '{size}' </span>
    </div>
  );
}
