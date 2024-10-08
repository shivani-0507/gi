import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

import Shimmer from "./Shimmer";


const RestaurantMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);

    if (resInfo === null) {
        return (<Shimmer />)
    }
    const {
        name,
        cuisines,
        costForTwoMessage,
        avgRating
    } = resInfo?.cards?.[2]?.card?.card?.info || {};

    const itemCards = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards || [];
    return (
        <div className="restaurant-menu">
            <h1>{name}</h1>
            <h3>Restaurant Menu</h3>
            <p>{cuisines.join(", ")} - {costForTwoMessage} </p>
            <h5>{avgRating} Ratings</h5>
            {itemCards?.length > 0 ? (
                <ul>
                    {itemCards.map(item => (
                        <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>
                    ))}
                </ul>
            ) : (
                <p>No items available</p>
            )}
        </div>

    )
}

export default RestaurantMenu