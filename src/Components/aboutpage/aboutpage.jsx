import * as React from "react";
import styled from "styled-components";

function AboutPage() {
  return (
    <MainWrapper>
      <HeroSection>
        <HeroImage
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d92783ec40c24087567185ad449b1126808c534451723e30ea2a3fa92c0668f?apiKey=a3c25f6e54a54eb681ff737ee21ae812&"
          alt="Hero Image"
        />
        <HeroQuote>
          "One cannot think well, love well, sleep well, if one has not dined
          well."
          <br />- Virginia Woolf
        </HeroQuote>
      </HeroSection>
      <AboutSection>
        <AboutHeader>
          <AboutSubtitle>About Us</AboutSubtitle>
          <AboutTitle>Welcome to Blue Moon</AboutTitle>
        </AboutHeader>
        <AboutContent>
          <AboutImageWrapper>
            <AboutImage
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ec0b83591e55c1c7cde09d354763afb5eb0275408a1e5baeef92424f1c7995b?apiKey=a3c25f6e54a54eb681ff737ee21ae812&"
              alt="About Us Image"
            />
          </AboutImageWrapper>
          <AboutDescription>
            Welcome to Blue Moon, where the serene beauty of nature meets the
            artistry of culinary delight. Nestled amidst lush greenery and
            overlooking breathtaking vistas, Blue Moon offers an unparalleled
            dining experience for nature enthusiasts and food connoisseurs
            alike.
            <br />
            At Blue Moon, we believe in harnessing the freshest ingredients from
            local farms and markets to craft dishes that celebrate the essence
            of seasonal flavors. Our menu is a harmonious fusion of contemporary
            cuisine with a rustic charm, curated by our talented team of chefs
            who are passionate about creating memorable dining moments.
            <br />
            As you dine beneath the open skies and bask in the gentle glow of
            moonlight, each dish at Blue Moon is not just a meal but a journey—a
            journey that transports you to the heart of nature, where every bite
            tells a story of sustainability, authenticity, and culinary mastery.
            <br />
            Whether you're savoring our signature wood-fired pizzas, indulging
            in our seafood delicacies, or delighting in our farm-to-table
            salads, every dish at Blue Moon is a testament to our commitment to
            excellence and our reverence for the natural world.
            <br />
            Come join us at Blue Moon, where every meal is a celebration of good
            food, great company, and the beauty of the great outdoors.
          </AboutDescription>
        </AboutContent>
      </AboutSection>
    </MainWrapper>
  );
}

const MainWrapper = styled.main`
  background-color: #e8e8e8;
  display: flex;
  flex-direction: column;
`;

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  mix-blend-mode: plus-darker;
  overflow: hidden;
  min-height: 693px;
  align-items: center;
  color: #fff;
  text-align: center;
  letter-spacing: 0.41px;
  justify-content: center;
  padding: 282px 60px 270px;
  font:
    400 30px/41px Habibi,
    sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
    padding: 40px 20px;
  }
`;

const HeroImage = styled.img`
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

const HeroQuote = styled.blockquote`
  position: relative;
`;

const AboutSection = styled.section`
  border-radius: 30px 30px 0 0;
  background-color: #fff;
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 80px;

  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;

const AboutHeader = styled.header`
  display: flex;
  flex-direction: row;

  color: #000;
  font-weight: 400;
  margin: 19px;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const AboutSubtitle = styled.h2`
  letter-spacing: -0.75px;
  width: 50%;
  font:
    50px/72% Habibi,
    sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
    font-size: 40px;
  }
`;

const AboutTitle = styled.h1`
  letter-spacing: -0.6px;
  align-self: end;
  margin-top: 33px;
  font:
    40px/90% Habibi,
    sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const AboutContent = styled.div`
  margin: 52px 0 22px;
  display: flex;
  gap: 20px;

  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    max-width: 100%;
    margin: 40px 7px 0 0;
  }
`;

const AboutImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 50%;
  margin-left: 0;
  justify-content: center;

  @media (max-width: 991px) {
    width: 100%;
    max-width: 100%;
    margin-top: 40px;
  }
`;

const AboutImage = styled.img`
  aspect-ratio: 1.22;
  object-fit: cover;
  object-position: center;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.3);

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const AboutDescription = styled.p`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 50%;
  margin-left: 20px;
  color: #000;
  letter-spacing: -0.36px;
  font:
    400 24px/36px Habibi,
    sans-serif;

  @media (max-width: 991px) {
    width: 100%;
    max-width: 100%;
    margin-top: 40px;
  }
`;

export default AboutPage;
