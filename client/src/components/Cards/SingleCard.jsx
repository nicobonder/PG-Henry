import React from "react";
import { Link } from "react-router-dom";
import { addEditCartProduct } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { formatDate } from "../utils/formatedDate";
import { formatTime } from "../utils/formatTime";
import { formatPrice } from "../utils/formatPrice";
import { FaInfoCircle, FaShoppingCart } from "react-icons/fa";
import "../Shows/Shows.css";

import { UserAuth } from "../../context/AuthContext";


const SingleCard = (data) => {
  const [count, setCount] = React.useState(0);
  const dispatch = useDispatch();
  const { user } = UserAuth();

  const addToCartFromShows = () => {
    if (count < 10) {
      setCount(count + 1);
      dispatch(addEditCartProduct(data.data.id, 1, user));
    } else {
      alert("La cantidad máxima permitida es 10");
    }
  };


  /*Hover effect*/
  // const cardRef = useRef(null);
  // useEffect(() => {
  //   const card = cardRef.current;
  //   const THRESHOLD = 15;

  //   function handleHover(e) {
  //     const { clientX, clientY, currentTarget } = e;
  //     const { clientWidth, clientHeight, offsetLeft, offsetTop } =
  //       currentTarget;

  //     const horizontal = (clientX - offsetLeft) / clientWidth;
  //     const vertical = (clientY - offsetTop) / clientHeight;
  //     const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
  //     const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);
  //     card.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
  //   }

  //   function resetStyles(e) {
  //     card.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
  //   }

  //   card.addEventListener("mousemove", handleHover);
  //   card.addEventListener("mouseleave", resetStyles);

  //   return () => {
  //     card.removeEventListener("mousemove", handleHover);
  //     card.removeEventListener("mouseleave", resetStyles);
  //   };
  // }, [cardRef]);

  return (

    <div className="shows__cards-box1"
      //  ref={cardRef} 
      key={data.data.id}>

      <Link className="shows__cards-link" to={`product/${data.data.id}`}>
        <img
          src={data.data.Photos[0].Path}
          alt="imagen show1"
          className="shows__cards-show1"
        />

      </Link>
      <div className="shows__cards-textContainer">
        <h1 className="shows__cards-texth1">{data.data.name}</h1>
        <h2 className="shows__cards-texth2">
          {formatDate(data.data.StartDate).replace(/^\w/, (c) =>
            c.toUpperCase()
          )}
        </h2>
        <h3 className="shows__cards-texth3">
          {formatTime(data.data.StartTime)} Horas
        </h3>
        <h3 className="shows__cards-textPrice">
          {formatPrice(data.data.Price)}
        </h3>
        <FaShoppingCart
          className="shows_cards-cart"
          onClick={addToCartFromShows}
        />
        <Link to={`product/${data.data.id}`} className="shows_cards-linkInfo">
          <FaInfoCircle />
        </Link>
      </div>
    </div>
  );
};

export default SingleCard;
