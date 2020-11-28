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
  const [idx, setidx] = useState(0);
  const [cityidx, setCityidx] = useState(0);

  return <div id="main">

    {townName ? (
      <>
      <ol key="town">
        {states[idx].cities[cityidx].towns.map((town, townindex)=>(
          <li id={`town${townindex+1}`} key={`${town}_${townindex}`}>{town.name}</li>
        ))}
      </ol>
      </>
    ):(
      cityName ? (
        <>
        <ol key="cities">
          {states[idx].cities.map((citie, citieindex)=>(
            <li id={`city${citieindex+1}`} onClick={()=>{setTownName(true), setCityidx(citieindex)}} key={`${citie}_${citieindex}`}>{citie.name}</li>
          ))}
        </ol>
        </>
      ):(
        <>
        <ol key="state">
          {states.map((state, stateindex)=>(
            <li id={`state${stateindex+1}`} onClick={()=>{setcityName(true), setidx(stateindex)}} key={`${state}_${stateindex}`}>{state.name}</li>
          ))}
        </ol> 
        </>
      )
    )}
  </div>;
}

export default App;


