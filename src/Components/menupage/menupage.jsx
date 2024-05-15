import React from "react";
import styled from "styled-components";
import MenuItem from "./menuitem";
import MenuContainerComponet from "./menuContainerComponent";
import { useState } from "react";

// Define your menu items
const menuItems = {
  All: [
    { name: "Item 1", description: "Description of Item 1" },
    { name: "Item 2", description: "Description of Item 2" },
    { name: "Vegan Item 1", description: "Description of Vegan Item 1" },
    { name: "Vegan Item 2", description: "Description of Vegan Item 2" },
    {
      name: "Gluten Free Item 1",
      description: "Description of Glutton Free Item 1",
    },
    {
      name: "Gluten Free Item 2",
      description: "Description of Glutton Free Item 2",
    },
    {
      name: "Allergy Free Item 1",
      description: "Description of Allergy Free Item 1",
    },
    {
      name: "Allergy Free Item 2",
      description: "Description of Allergy Free Item 2",
    },
    // Add more items as needed
  ],
  Vegan: [
    { name: "Vegan Item 1", description: "Description of Vegan Item 1" },
    { name: "Vegan Item 2", description: "Description of Vegan Item 2" },
    // Add more items as needed
  ],
  "Gluten free": [
    {
      name: "Gluten Free Item 1",
      description: "Description of Gluten Free Item 1",
    },
    {
      name: "Gluten Free Item 2",
      description: "Description of Glutton Free Item 2",
    },
    // Add more items as needed
  ],
  "Allergy Free menu": [
    {
      name: "Allergy Free Item 1",
      description: "Description of Allergy Free Item 1",
    },
    {
      name: "Allergy Free Item 2",
      description: "Description of Allergy Free Item 2",
    },
    // Add more items as needed
  ],
};

// Styled components for CoverImage
const CoverImageContainer = styled.div`
  img {
    aspect-ratio: 2.08;
    object-fit: auto;
    object-position: center;
    width: 100%;
  }

  @media (max-width: 991px) {
    img {
      max-width: 100%;
    }
  }
`;

// Functional components
function CoverImage() {
  return (
    <CoverImageContainer>
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/78a9a96eee8849d5cbc1b797ed88deb8b3a318e010f7a8c0289bc95fe56c28da?apiKey=a3c25f6e54a54eb681ff737ee21ae812&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/78a9a96eee8849d5cbc1b797ed88deb8b3a318e010f7a8c0289bc95fe56c28da?apiKey=a3c25f6e54a54eb681ff737ee21ae812&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/78a9a96eee8849d5cbc1b797ed88deb8b3a318e010f7a8c0289bc95fe56c28da?apiKey=a3c25f6e54a54eb681ff737ee21ae812&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/78a9a96eee8849d5cbc1b797ed88deb8b3a318e010f7a8c0289bc95fe56c28da?apiKey=a3c25f6e54a54eb681ff737ee21ae812&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/78a9a96eee8849d5cbc1b797ed88deb8b3a318e010f7a8c0289bc95fe56c28da?apiKey=a3c25f6e54a54eb681ff737ee21ae812&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/78a9a96eee8849d5cbc1b797ed88deb8b3a318e010f7a8c0289bc95fe56c28da?apiKey=a3c25f6e54a54eb681ff737ee21ae812&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/78a9a96eee8849d5cbc1b797ed88deb8b3a318e010f7a8c0289bc95fe56c28da?apiKey=a3c25f6e54a54eb681ff737ee21ae812&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/78a9a96eee8849d5cbc1b797ed88deb8b3a318e010f7a8c0289bc95fe56c28da?apiKey=a3c25f6e54a54eb681ff737ee21ae812&"
        alt="Cover Image"
      />
    </CoverImageContainer>
  );
}

function MenuItems({items}){
  return <div>
    {
      items.map((item, index)=>{
        return <MenuItem key={index} item={item} />
      })
    }
  </div>
}

function MenuPage() {
  const [activeTab, setActiveTab] = useState("All");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      <CoverImage />
      {/* <MenuContainerComponent /> */}
      <MenuContainerComponet
        activeTab={activeTab}
        onTabClick={handleTabClick}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          paddingLeft: "100px",
          paddingRight: "100px",
          marginBottom: "100px",
        }}
      >
        <MenuItems items={menuItems[activeTab]}/>
      </div>
    </>
  );
}

export default MenuPage;
