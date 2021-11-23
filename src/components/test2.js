// import React from "react";
// import { useEffect, useState } from "react";
// import _ from "lodash";
// import "./style.css";
// import image from "../images/img1.png";
// import image1 from "../images/img2.jpg";
// import image2 from "../images/img3.jpg";

// const Memory = () => {
//   const allphoto = [
//     {
//       id: 1,

//       photo: image,

//       className: "x",
//     },
//     {
//       id: 2,

//       photo: image1,

//       className: "x",
//     },
//     {
//       id: 3,

//       photo: image2,

//       className: "x",
//     },
//     {
//       id: 1,

//       photo: image,

//       className: "x",
//     },
//     {
//       id: 2,

//       photo: image1,

//       className: "x",
//     },
//     {
//       id: 3,

//       photo: image2,

//       className: "x",
//     },
//   ];

//   const [opened, setOpened] = useState([]);
//   const [match, setMatch] = useState([]);

//   // const [flipped, setFlipped] = useState([]);

//   // shuffle all photos
//   const ShufflePhoto = _.shuffle(allphoto);
//   console.log(ShufflePhoto);
//   const [game, setGame] = useState(ShufflePhoto);

//   //map all photos
//   function handleClick(index) {
//     setOpened((opened) => [...opened, index]);
//     console.log(index);

//     // flipped ? setFlipped(false) : setFlipped(true);
//   }

//   useEffect(() => {
//     if (opened.length === 2) {
//       const firstMatched = allphoto[opened[0]];
//       const secondMatched = allphoto[opened[1]];

//       if (firstMatched.id === secondMatched.id) {
//         setMatch([...match, firstMatched.id]);
//       }
//       console.log(firstMatched.id, secondMatched.id);

//       setTimeout(() => setOpened([]), 1000);
//     }
//   }, [opened]);

//   return (
//     <div className="memory-game">
//       {game.map((img, index) => {
//         let isFlipped = false;

//         if (opened.includes(index)) isFlipped = true;
//         if (match.includes(img.id)) isFlipped = true;

//         return (
//           <div key={index} className="flip-card">
//             <div
//               className={`flip-card-inner ${isFlipped ? "x" : ""}`}
//               onClick={() => handleClick(index)}
//             >
//               <div className="front"></div>
//               <div className="back">
//                 <img className="image" src={img.photo} key={img.id} alt="" />
//               </div>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Memory;
