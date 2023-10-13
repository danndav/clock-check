import React, { useEffect, useState } from 'react'
import { checkDistance } from '../src/utils/checkDistance';
import Layout from '../src/Section/Login';


const Home = () => {

  const [isSignedIn, setIsSIgnedIn] = useState(false)
  const [isNearby, setIsNearby]  = useState(false)
  const [location, setLocation] = useState({
    latitude: 0.0,
    longitude: 0.0
  })

  const geolocation = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const userLatitude = position.coords.latitude;
        const userLongitude = position.coords.longitude;
        // console.log(userLatitude, userLongitude);
        setLocation({
          latitude:userLatitude,
          longitude:userLongitude
        })

        // Call the function to check the distance
        setIsNearby(checkDistance(userLatitude, userLongitude));
        // console.log(checkDistance(userLatitude, userLongitude));
        
      });
    } else {
      return "not working"

    }
  }

  console.log(isNearby);
  

  useEffect(() => {
    geolocation()
  },[])

  // console.log(geolocation());


  return (
    <div>
      <Layout nearby={isNearby} location={location} />
    </div>

  )
}

export default Home