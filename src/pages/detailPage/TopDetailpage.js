import React, { useEffect, useState } from "react";
import "./DetailPage.scss";
import { useParams } from "react-router-dom";
import { axiosClient } from "../../utils/axiosClient";

function TopDetailPage() {
  const [leader, setLeader] = useState(null);

  const params = useParams();
  async function fetchProducts() {
    const response = await axiosClient.get(
      `/top-leaders?filters[key][$eq]=${params.key}&populate=images`
    );
    setLeader(response.data.data[0]);
  }

  useEffect(() => {
    setLeader(null);
    //api call
    fetchProducts();
  }, [params]); // eslint-disable-next-line

  return (
    <>
      {
        <div className="detailPage">
          <img src={leader?.attributes.images.data.attributes.url} alt={leader?.name} />
          <div className="desc">
            <h3>{leader?.attributes.name}</h3>
            <p>{leader?.attributes.description}</p>
          </div>
          <div className="detail">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
              architecto adipisci debitis. Illum molestias veniam beatae? Ab,
              architecto ullam quo vel, doloremque, soluta optio ipsa nihil
              possimus dolorem officiis modi!
            </p>
          </div>
        </div>
      }
    </>
  );
}

export default TopDetailPage;