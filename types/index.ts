import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;

    btnType?: "button" | "submit";
}

export interface SearchManufacturerProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;
}

export interface CarProps {
    city_mpg: string;
    class: string;
    combination_mpg: string
    cylinders: Number;
    displacement: Number;
    drive: string;
    fuel_type: string;
    highway_mpg: string;
    make: string;
    model: string;
    transmission: string;
    year:Number

}