"use client"
import { CarProps } from '@/types';
import CustomButton from './CustomButton';
import React from 'react'
import { calculateCarRent } from '@/utils';
import Image from 'next/image';


interface CarCardProps {
    car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
    const { city_mpg, class: carClass, combination_mpg, cylinders, displacement, drive, fuel_type, highway_mpg, make, model, transmission, year } = car;

    const carrent = calculateCarRent(
        typeof city_mpg === "number" ? city_mpg : 20, // default mpg if missing
        Number(year)
    );


    return (
        <div className='car-card group'>

            <h2 className='car-card__content-title'>
                {make} {model}
            </h2>

            <p className='flex mt-6 text-[32px] font-extrabold'>
                <span className='self-start text-[14px] font-semibold'>
                    $
                </span>
                {carrent}

                <span className='self-end text-[14px] font-medium'>
                    /day
                </span>
            </p>


            <div className='relative w-full h-40 my-3 object-contain'>
                <Image src="/hero.png" alt='car model' fill priority className='object-contain' />
            </div>
        </div>
    )
}

export default CarCard
