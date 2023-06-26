import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";


const About = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {

  }, []);

  return (
    <p>This website is developed to help the government meet the vaccination task in collaboration with government and private hospitals.</p>
  );
};

export default About;
