import React, { useEffect, useState } from "react";
import { db } from "../firebaseConnect";
import { collection, getDocs } from "firebase/firestore";

const PropertyList = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "properties"));
      const data = querySnapshot.docs.map((doc) => doc.data());
      setProperties(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      {properties.map((property, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <h2>{property.location}</h2>
          <p>{property.description}</p>
          <div style={{ display: "flex", gap: "10px" }}>
            {property.banners.map((banner, i) => (
              <img
                key={i}
                src={banner}
                alt={`Banner ${i}`}
                width="200"
                height="150"
                style={{ objectFit: "cover" }}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyList;