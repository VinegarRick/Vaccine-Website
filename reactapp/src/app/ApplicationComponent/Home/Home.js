import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";


const Home = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {

  }, []);

  return (
    <div>
        <p>0 doses have been administered.</p>
        <div className={"loadimage"}>
        
        </div>
    </div>
  );
};

export default Home;
