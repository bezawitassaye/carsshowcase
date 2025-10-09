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
    city_mpg: String;
    class: String;
    combination_mpg: String
    cylinders: Number;
    displacement: Number;
    drive: String;
    fuel_type: String;
    highway_mpg: String;
    make: String;
    model: String;
    transmission: String;
    year:number

}