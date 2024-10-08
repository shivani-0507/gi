import RestaurantCard from './RestaurantCard';
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus'

const Body = () => {
   const [restaurantList, setRestaurantList] = useState([]);
   const [filteredRestaurantList, setFilteredRestaurantList] = useState([])
   const [searchText, setSearchText] = useState("")
   useEffect(() => {
      fetchData()
   }, [])
   let fetchData = async () => {
      let data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.95250&lng=75.71050&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      setRestaurantList(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredRestaurantList(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);


   }

   const isOnline = useOnlineStatus();
   if(!isOnline){
      return(
         <>
         <h1>Looks like you are offline, Please check your internet connection!</h1>
         </>
      )
   }
   return restaurantList.length === 0 ? (<Shimmer />) : (
      <div>
         <div className='filter'>
            <div className='search-button'>
               <input type="text" className='search-input' value={searchText} onChange={(e) => { setSearchText(e.target.value) }}></input>
               <button onClick={() => {
                  const searchedRes = restaurantList.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                  setFilteredRestaurantList(searchedRes)
               }} >Search</button>
            </div>
            <div className="filter-button">
               <button onClick={() => {
                  let filteredList = restaurantList.filter((res) => { return res.info.avgRating > 4.5 });
                  setFilteredRestaurantList(filteredList)
               }
               }>Top Rated Restaurant</button>
            </div >
         </div>
         <div className='res-container'>
            {
               filteredRestaurantList.map(restaurant=> 
                  
             <Link key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id} >  <RestaurantCard resData={restaurant.info} /></Link>


               )
            }


         </div>
      </div >
   )
}

export default Body