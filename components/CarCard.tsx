"use client"
import { CarProps } from '@/types';
import CustomButton from './CustomButton';
import React from 'react'


interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
    const { city_mpg, class: carClass, combination_mpg, cylinders, displacement, drive, fuel_type, highway_mpg, make, model, transmission, year } = car;
  return (
    <div className='car-card group'>
      <div className='car-card__content'>
        <h2 className='car-card__content-title'>
            {make} {model}
        </h2>
        
        <p>
            <span>
                Car Rent...
            </span>
        </p>

      </div>
    </div>
  )
}

export default CarCard
