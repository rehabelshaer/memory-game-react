import React from "react";
import { useEffect, useState } from "react";
import _ from "lodash";
import "./style.css";
import image from "../images/img1.png";
import image1 from "../images/img2.jpg";
import image2 from "../images/img3.jpg";

const Memory = () => {
  const allphoto = [
    {
      id: 1,
      photo: image,
      status: false,
    },
    {
      id: 2,
      photo: image1,
      status: false,
    },
    {
      id: 3,
      status: false,
      photo: image2,
    },
    {
      id: 4,
      status: false,
      photo: image,
    },
    {
      id: 5,
      photo: image1,
      status: false,
    },
    {
      id: 6,
      status: false,
      photo: image2,
    },
  ];

  // shuffle all photos
  const ShufflePhoto = _.shuffle(allphoto);
  const [game, setGame] = useState(ShufflePhoto);

  const [swap, setSwap] = useState({});

  //map all photos
  function handleClick(index, obj) {
    swap[index] = obj;
    game[index] = { ...obj, status: true };
    setGame([...game]);

    if (Object.keys(swap).length > 1) {
      if (
        swap[Object.keys(swap)[0]].photo == swap[Object.keys(swap)[1]].photo
      ) {
        game[Object.keys(swap)[0]] = {
          ...Object.values(swap)[0],
          status: true,
        };
        game[Object.keys(swap)[1]] = {
          ...Object.values(swap)[1],
          status: true,
        };

        setSwap({});
        setGame([...game]);

        if (!game.some((e) => e.status == false)) {
          setTimeout(() => {
            alert("finished");
          }, 800);
        }
      } else {
        console.log("x");
        game[Object.keys(swap)[0]] = {
          ...Object.values(swap)[0],
          status: false,
        };
        game[Object.keys(swap)[1]] = {
          ...Object.values(swap)[1],
          status: false,
        };

        setTimeout(() => {
          setGame([...game]);
        }, 700);
        setSwap({});
      }
    }

    console.log(index);
  }

  return (
    <div className="memory-game">
      {game.map((img, index) => (
        <div key={img.id} className="flip-card">
          <div
            className={`flip-card-inner ${img.status ? "x" : ""}`}
            onClick={() => (img.status ? "" : handleClick(index, img))}
          >
            <div className="front"></div>
            <div className="back">
              <img className="image" src={img.photo} key={img.id} alt="" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Memory;
