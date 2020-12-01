import React, { Component, useState } from "react";
import "./../styles/App.css";


// Do not alter the states const and values inside it.
const states = [
  {
    name: "Madhya Pradesh",
    cities: [
      {
        name: "Indore",
        towns: [
          {
            name: "Mhow",
          },
          {
            name: "Dewas",
          },
        ],
      },
      {
        name: "Bhopal",
        towns: [
          {
            name: "Manit",
          },
          {
            name: "Berasia",
          },
        ],
      },
      {
        name: "Gwalior",
        towns: [
          {
            name: "Ajaypur",
          },
        ],
      },
    ],
  },
  {
    name: "Jharkhand",
    cities: [
      {
        name: "Dhanbad",
        towns: [
          {
            name: "IIT(ISM) Dhanbad",
          },
          {
            name: "Hirapur",
          },
        ],
      },
      {
        name: "Wasseypur",
        towns: [
          {
            name: "Sardar khan's",
          },
          {
            name: "Faizal khan's",
          },
        ],
      },
      {
        name: "Mirzapur",
        towns: [
          {
            name: "Kaleen bhaiya's",
          },
          {
            name: "Guddu bhaiya's",
          },
        ],
      },
    ],
  },
  {
    name: "Assam",
    cities: [
      {
        name: "Guwhati",
        towns: [
          {
            name: "Amin",
          },
          {
            name: "Jalah",
          },
        ],
      },
      {
        name: "Jungle1",
        towns: [
          {
            name: "Tiger found at IIT Guwahati",
          },
          {
            name: "Leopard found in IIT Guwahati",
          },
        ],
      },
      {
        name: "Tezpur",
        towns: [
          {
            name: "Dibrugarh",
          },
          {
            name: "Silchar",
          },
        ],
      },
    ],
  },
  {
    name: "Bihar",
    cities: [
      {
        name: "Patna",
        towns: [
          {
            name: "Sonpur",
          },
          {
            name: "Maner",
          },
        ],
      },
      {
        name: "Gaya",
        towns: [
          {
            name: "Bakraur",
          },
          {
            name: "Barachatti",
          },
        ],
      },
      {
        name: "Darbhanga",
        towns: [
          {
            name: "Singhwara",
          },
          {
            name: "Jale",
          },
        ],
      },
    ],
  },
];


function App() {
  const [cityName, setcityName] = useState(false);
  const [townName, setTownName] = useState(false);
  const [idx, setidx] = useState(-1);
  const [cityidx, setCityidx] = useState(-1);
  const toggleItem=(index)=>{
    idx === index ? setidx(-1):setidx(index)
  }
  const toggleCityItem=(index)=>{
    cityidx === index ? setCityidx(-1):setCityidx(index)
  }
  return <div id="main">

    <ol key="state">
      {states.map((state, stateindex)=>(
        <>
        <li id={`state${stateindex+1}`} onClick={()=>{setcityName(!cityName), toggleItem(stateindex)}} key={`${state}_${stateindex}`}>{state.name}</li>
        {idx === stateindex ? 
        <>
        <ol key="cities">
          {states[idx].cities.map((citie, citieindex)=>(
            <>
            <li id={`city${citieindex+1}`} onClick={()=>{setTownName(!townName), toggleCityItem(citieindex)}} key={`${citie}_${citieindex}`}>{citie.name}</li>
            {cityidx === citieindex ? (
              <>
              <ol key="towns">
                {states[idx].cities[cityidx].towns.map((town, townidx)=>(
                  <li id={`town${townidx+1}`}>{town.name}</li>
                ))}
              </ol>
              </>
            ):(null)}
            
            </>
          ))}
        </ol>
        </>
        :null}
        </>
      ))}
    </ol> 
  </div>;
}

export default App;


