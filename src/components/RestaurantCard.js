import { CDN_URL } from "../utils/constants.js"
const RestaurantCard = (props) => {
   let { resData } = props;
   let { name, cuisines, avgRating, costForTwo, cloudinaryImageId } = resData;
   let imgurl = CDN_URL.replace("ywbucwbbxpo0ugaptvp0", cloudinaryImageId)
   return (
      <div className='res-card'>
         <img className="res-logo" src={imgurl}></img>
         <h3>{name}</h3>
         <h5>{cuisines.join(", ")}</h5>
         <h5>{avgRating} Ratings</h5>
         <h5>{`${costForTwo} for two people`}</h5>
      </div>
   )
}

export default RestaurantCard