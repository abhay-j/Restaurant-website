import React from "react";
import styled from "styled-components";

// Styled components for MenuItem
const MenuItemContainer = styled.div`
  border-radius: 15px;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: #fff;
  display: flex;
  width: 80%;
  align-items: center;
  gap: 20px;
  padding: 27px 63px;
  margin-top: 20px;

  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
    padding: 0 20px;
  }
`;

const Column = styled.div`
  /* background-color: pink; */
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 10%;
  margin-left: 0px;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Image = styled.img`
  aspect-ratio: 0.72;
  object-fit: auto;
  object-position: center;
  width: 104px;
  max-width: 100%;
  flex-grow: 1;

  @media (max-width: 991px) {
    margin-top: 21px;
  }
`;

const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 50%;
  margin-left: 20px;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

const StyledSpan = styled.span`
  font-family: Habibi, sans-serif;
  font-weight: 400;
`;

const Div6 = styled.div`
  color: #718096;
  margin-top: 19px;
  font:
    400 16px/22px Habibi,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
`;

const Div7 = styled.div`
  align-self: stretch;
  display: flex;
  gap: 14px;
  font-size: 22px;
  color: #393939;
  font-weight: 600;
  white-space: nowrap;
  line-height: 100%;
  margin: auto 0;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Img2 = styled.img`
  aspect-ratio: 0.74;
  object-fit: auto;
  object-position: center;
  width: 26px;
`;

const DivPriceCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Div10 = styled.div`
  color: #393939;
  margin-right: 20px;

  font:
    25px Habibi,
    sans-serif;
`;

const Div12 = styled.div`
  font-family: Habibi, sans-serif;
  border-radius: 6px;
  background-color: #ff3939;
  padding: 10px;

  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;
function MenuItem({ item }) {
  return (
    <MenuItemContainer>
      <Column>
        <Image
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e2bc9a6b060408caad6b58ac6a23607963ee45754d19da05742844ae4add95cf?apiKey=a3c25f6e54a54eb681ff737ee21ae812&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e2bc9a6b060408caad6b58ac6a23607963ee45754d19da05742844ae4add95cf?apiKey=a3c25f6e54a54eb681ff737ee21ae812&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e2bc9a6b060408caad6b58ac6a23607963ee45754d19da05742844ae4add95cf?apiKey=a3c25f6e54a54eb681ff737ee21ae812&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e2bc9a6b060408caad6b58ac6a23607963ee45754d19da05742844ae4add95cf?apiKey=a3c25f6e54a54eb681ff737ee21ae812&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e2bc9a6b060408caad6b58ac6a23607963ee45754d19da05742844ae4add95cf?apiKey=a3c25f6e54a54eb681ff737ee21ae812&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e2bc9a6b060408caad6b58ac6a23607963ee45754d19da05742844ae4add95cf?apiKey=a3c25f6e54a54eb681ff737ee21ae812&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e2bc9a6b060408caad6b58ac6a23607963ee45754d19da05742844ae4add95cf?apiKey=a3c25f6e54a54eb681ff737ee21ae812&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e2bc9a6b060408caad6b58ac6a23607963ee45754d19da05742844ae4add95cf?apiKey=a3c25f6e54a54eb681ff737ee21ae812&"
          alt="Menu Item Image"
        />
      </Column>
      <Column2>
        <div>
          <StyledSpan>{item.name}</StyledSpan>
        </div>
        <Div6>{item.description}</Div6>
      </Column2>
      <Div7>
        <div>1</div>
        <Img2
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ef138522339032aa7f99de78eb331dac631424532bed3f74014b243365aad38?apiKey=a3c25f6e54a54eb681ff737ee21ae812&"
          alt="Menu Item Icon"
        />
      </Div7>
      <DivPriceCart>
        <Div10>$6.81</Div10>

        <Div12>Add to Cart</Div12>
      </DivPriceCart>
    </MenuItemContainer>
  );
}

export default MenuItem;
