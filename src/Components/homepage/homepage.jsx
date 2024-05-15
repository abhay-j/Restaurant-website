import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const quotes = [
  {
    text: "Cooking is like love. It should be entered into with abandon or not at all.",
    author: "– Harriet Van Horne",
  },
];

function HeroSection() {
  return (
    <HeroContainer>
      <HeroBackground />
      <HeroContent>
        {quotes.map((quote, index) => (
          <QuoteWrapper key={index}>
            <Quote>{quote.text}</Quote>
            <Author>{quote.author}</Author>
          </QuoteWrapper>
        ))}
        <CTAButton to="/menu">View menu</CTAButton>
      </HeroContent>
    </HeroContainer>
  );
}

const HeroContainer = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 693px;
  padding: 80px 60px;
  color: #fff;
  font-weight: 400;
  text-align: center;
  mix-blend-mode: plus-darker;
  overflow: hidden;

  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const HeroBackground = styled.div`
  position: absolute;
  inset: 0;
  background-image: url("https://cdn.builder.io/api/v1/image/assets/TEMP/55688e17583374787fe114a2831425e968eb62e9031d4811c65b071030deb1c9?apiKey=a3c25f6e54a54eb681ff737ee21ae812&");
  background-size: cover;
  background-position: center;
`;

const HeroContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1059px;
  width: 100%;
  margin: 199px 0 96px;

  @media (max-width: 991px) {
    margin: 40px 0;
  }
`;

const QuoteWrapper = styled.div`
  margin-bottom: 86px;

  @media (max-width: 991px) {
    margin-bottom: 40px;
  }
`;

const Quote = styled.p`
  font:
    30px/41px Habibi,
    sans-serif;
  letter-spacing: 0.41px;
`;

const Author = styled.p`
  font-size: 15px;
  letter-spacing: -0.22px;
`;

const CTAButton = styled(Link)`
  padding: 15px 27px;
  font-family: Habibi, sans-serif;
  font-size: 15px;
  color: #fff;
  background-color: #fb1818;
  border: none;
  text-decoration: none;
  cursor: pointer;

  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const data = [
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/b9e9bd952144a837b8c8f4170e7721d7ad48700312b1d79a2ba2ba5a47050a2c?apiKey=a3c25f6e54a54eb681ff737ee21ae812&",
    title: "Steak Gets Its Name from Scandinavia",
    description:
      'When you\'re enjoying a delicious steak, the last thing you\'re probably thinking about is where its name comes from. But while steak is an American favorite, you might be surprised to learn that the term actually has Scandinavian roots. The Scandinavian word "steik," which refers to a thick cut of meat for roasting or grilling, dates back to about the mid-15th century. Eventually, the term evolved into the modern English "steak."',
  },
];

function SectionOne() {
  return (
    <SectionOneWrapper>
      {data.map((item, index) => (
        <SectionOneContent key={index}>
          <SectionOneImageColumn>
            <SectionOneImageWrapper>
              <SectionOneImage
                src={item.imageUrl}
                alt="Article"
                loading="lazy"
              />
            </SectionOneImageWrapper>
          </SectionOneImageColumn>
          <SectionOneTextColumn>
            <SectionOneTextWrapper>
              <SectionOneTitle>{item.title}</SectionOneTitle>
              <SectionOneDescription>{item.description}</SectionOneDescription>
            </SectionOneTextWrapper>
          </SectionOneTextColumn>
        </SectionOneContent>
      ))}
    </SectionOneWrapper>
  );
}

const SectionOneWrapper = styled.article`
  border-radius: 30px 30px 0 0;
  background-color: #fff;
  width: 100%;
  padding-right: 26px;

  @media (max-width: 991px) {
    max-width: 100%;
    padding-right: 20px;
  }
`;

const SectionOneContent = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0;
  }
`;

const SectionOneImageColumn = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 50%;
  margin-left: 0;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

const SectionOneImageWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 38px;
  }
`;

const SectionOneImage = styled.img`
  aspect-ratio: 1.2;
  object-fit: cover;
  object-position: center;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.3);

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const SectionOneTextColumn = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 50%;
  margin-left: 20px;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

const SectionOneTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 61px;
  font-size: 24px;
  color: #000;
  font-weight: 400;
  letter-spacing: -0.36px;
  line-height: 36px;

  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const SectionOneTitle = styled.h2`
  font-family: Habibi, sans-serif;
  text-align: center;
`;

const SectionOneDescription = styled.p`
  font-family: Habibi, sans-serif;
  text-align: center;
  margin-top: 40px;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

function SectionTwo() {
  return (
    <SectionTwoSection>
      <SectionTwoContent>
        <SectionTwoTextWrapper>
          <SectionTwoTitle>A HISTORY OF THE TRADITION</SectionTwoTitle>
          <SectionTwoDescription>
            The English breakfast is an iconic dish in British culinary culture,
            embodying a centuries-old breakfast tradition that has been
            passionately sustained and adapted throughout its history by
            successive generations of British society. The tradition of the
            English breakfast has journeyed down a long road, and I believe that
            the idea of an "English breakfast" began in the 11th century with
            Anglo-Saxon nobles who sought to preserve their culinary traditions
            in the face of the Norman invasion.{" "}
          </SectionTwoDescription>
        </SectionTwoTextWrapper>
        <SectionTwoImageWrapper>
          <SectionTwoImage
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/97a5de3b5a62e1caa12f42fc4326a72479f2efdfd8a408d51733565593c2f9db?apiKey=a3c25f6e54a54eb681ff737ee21ae812&"
            alt="English Breakfast"
          />
        </SectionTwoImageWrapper>
      </SectionTwoContent>
    </SectionTwoSection>
  );
}

const SectionTwoSection = styled.section`
  border-radius: 0 0 30px 30px;
  background-color: #fff;
  z-index: 10;
  width: 100%;
  padding: 0 1px 0 20px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const SectionTwoContent = styled.div`
  gap: 20px;
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0;
  }
`;

const SectionTwoTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 50%;
  margin-left: 0;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const SectionTwoTitle = styled.h2`
  font-family: Habibi, sans-serif;
  line-height: 150%;
  align-self: center;
  font-size: 24px;
  color: #000;
  font-weight: 400;
  letter-spacing: -0.36px;
  margin-top: 64px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const SectionTwoDescription = styled.p`
  text-align: center;
  font-family: Habibi, sans-serif;
  line-height: 36px;
  margin-top: 65px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const SectionTwoImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 50%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const SectionTwoImage = styled.img`
  aspect-ratio: 1.22;
  object-fit: cover;
  object-position: center;
  width: 100%;
  flex-grow: 1;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const menuItems = [
  {
    name: "Ramen",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/40a14eb85373d95939b750814c22293cbe8d7a06eaddfd3d6d836b78044b7a6b?apiKey=a3c25f6e54a54eb681ff737ee21ae812&",
  },
  {
    name: "Sushi",
    description:
      "Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/be960da1ba982bf0e62a04a49a34a31816533cef4d55883f4c33d95b42b39a44?apiKey=a3c25f6e54a54eb681ff737ee21ae812&",
  },
  {
    name: "Nemo enim ipsam",
    description:
      "Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/34632121f56beff72a1989de13d405d82b0793b37d94ec6583333d977585f001?apiKey=a3c25f6e54a54eb681ff737ee21ae812&",
  },
];

function MenuSection() {
  return (
    <MenuSectionWrapper>
      <Heading>Checkout our new Offerings</Heading>
      <Description>
        Explore our new dishes and embark on a adventure filled with tantalizing
        flavors, vibrant colors, and unforgettable culinary experiences that
        will delight your senses and leave you craving for more.
      </Description>
      <MenuItemsWrapper>
        {menuItems.map((item, index) => (
          <MenuItemColumn key={index}>
            <MenuItemCard>
              <MenuItemImageWrapper>
                <MenuItemImage
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                />
              </MenuItemImageWrapper>
              <MenuItemContent>
                <MenuItemName>{item.name}</MenuItemName>
                <MenuItemDescription>{item.description}</MenuItemDescription>
              </MenuItemContent>
            </MenuItemCard>
          </MenuItemColumn>
        ))}
      </MenuItemsWrapper>
      <ViewFullMenuButton to="/menu">View full menu</ViewFullMenuButton>
    </MenuSectionWrapper>
  );
}

const MenuSectionWrapper = styled.section`
  background-color: #fff;
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 80px 59px;

  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const Heading = styled.h2`
  color: #000;
  letter-spacing: -0.72px;
  margin-top: 54px;
  font:
    400 48px/150% Habibi,
    sans-serif;

  @media (max-width: 991px) {
    margin-top: 40px;
    font-size: 40px;
  }
`;

const Description = styled.p`
  color: rgba(0, 0, 0, 0.8);
  letter-spacing: -0.54px;
  margin-top: 103px;
  font:
    400 36px/50px Habibi,
    sans-serif;

  @media (max-width: 991px) {
    margin: 40px 7px 0 0;
  }
`;

const MenuItemsWrapper = styled.div`
  margin-top: 66px;
  display: flex;
  gap: 20px;

  @media (max-width: 991px) {
    flex-direction: column;
    gap: 0;
    margin-top: 40px;
  }
`;

const MenuItemColumn = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 33%;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

const MenuItemCard = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.49);
  background-color: #fff;
  display: flex;
  flex-grow: 1;
  padding-bottom: 69px;
  flex-direction: column;
  width: 100%;

  @media (max-width: 991px) {
    margin-top: 11px;
  }
`;

const MenuItemImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const MenuItemImage = styled.img`
  aspect-ratio: 1.56;
  object-fit: cover;
  width: 100%;
`;

const MenuItemContent = styled.div`
  display: flex;
  margin-top: 81px;
  flex-direction: column;
  padding: 0 66px;

  @media (max-width: 991px) {
    margin-top: 40px;
    padding: 0 20px;
  }
`;

const MenuItemName = styled.h3`
  color: #000;
  letter-spacing: -0.36px;
  font:
    700 24px/150% Montserrat,
    sans-serif;
`;

const MenuItemDescription = styled.p`
  color: rgba(0, 0, 0, 0.8);
  letter-spacing: -0.27px;
  margin-top: 41px;
  font:
    400 18px/30px Montserrat,
    sans-serif;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const ViewFullMenuButton = styled(Link)`
text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: start;
  border: 1px solid rgba(251, 24, 24, 1);
  margin: 57px auto 0;
  width: 278px;
  max-width: 100%;
  color: #000;
  letter-spacing: -0.45px;
  padding: 17px 27px;
  font:
    400 30px Habibi,
    sans-serif;

  @media (max-width: 991px) {
    margin-top: 40px;
    padding: 0 20px;
  }
`;

const footerData = [
  {
    title: "Quick Links",
    links: [{
      linkTitle:"Home",
      linkTo:"/"
    }, {
      linkTitle:"About",
      linkTo:"/about"
    }, {
      linkTitle:"Menu",
      linkTo:"/menu"
    }, {
      linkTitle:"Contact",
      linkTo:"/"
    }],
  },
  {
    title: "Get In Touch",
    content: "Email: contact@mysite.com\nPhone: 123-456-7890",
  },
];

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <CompanyInfo>
          <CompanyLogo>Logo</CompanyLogo>
          <CompanyDescription>
            Summarize your business so the visitor can learn about your
            offerings from any page on your website.
          </CompanyDescription>
          <CompanyImage
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c8dd6853b54ca9e9a00d26370421fbb2621023ff34a1a3eedac754ed770a77b?apiKey=a3c25f6e54a54eb681ff737ee21ae812&"
            alt="Company"
          />
        </CompanyInfo>
        <FooterLinks>
          {footerData.map((section, index) => (
            <FooterSection key={index}>
              <SectionTitle>{section.title}</SectionTitle>
              {section.links ? (
                section.links.map(({linkTitle, linkTo}, i) => (
                  <FooterLink key={i} to={linkTo}>{linkTitle}</FooterLink>
                ))
              ) : (
                <SectionContent>{section.content}</SectionContent>
              )}
            </FooterSection>
          ))}
          <FooterSection>
            <FooterImage
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a79c88e9479931ebc4320665fad34af7717dd9580b999b5f408890a77123207?apiKey=a3c25f6e54a54eb681ff737ee21ae812&"
              alt="Footer"
            />
          </FooterSection>
        </FooterLinks>
      </FooterContent>
      <FooterBottom>© All Rights Reserved.</FooterBottom>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding-top: 80px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const FooterContent = styled.div`
  display: flex;
  gap: 20px;
  margin: 33px 46px 0 47px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-right: 10px;
    flex-wrap: wrap;
  }
`;

const CompanyInfo = styled.div`
  align-self: start;
  display: flex;
  flex-direction: column;
  text-transform: capitalize;
`;

const CompanyLogo = styled.h2`
  align-self: start;
  color: var(--Primary, #1c2448);
  text-align: center;
  font:
    600 22px/118% Poppins,
    sans-serif;
`;

const CompanyDescription = styled.p`
  color: var(--Body-text, #324a6d);
  margin-top: 36px;
  font:
    300 16px/24px Poppins,
    sans-serif;
`;

const CompanyImage = styled.img`
  aspect-ratio: 3.45;
  object-fit: auto;
  object-position: center;
  width: 89px;
  margin-top: 28px;
`;

const FooterLinks = styled.div`
  /* flex-grow: 1; */
  /* flex-basis: auto; */
  display: flex;
  justify-content: space-between;
  gap: 20px;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
    max-width: 100%;
  }
`;

const FooterSection = styled.section`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 25%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
    margin-top: 40px;
  }
`;

const SectionTitle = styled.h3`
  color: var(--Primary, #1c2448);
  font:
    600 22px/118% Poppins,
    sans-serif;
`;

const FooterLink = styled(Link)`
  color: var(--Body-text, #324a6d);
  text-decoration:none;
  font:
    300 16px/150% Poppins,
    sans-serif;
  text-transform: capitalize;
  margin-top: 24px;
  &:first-child {
    margin-top: 40px;
  }
`;

const SectionContent = styled.p`
  color: var(--Body-text, #324a6d);
  margin-top: 12px;
  font:
    300 16px/24px Poppins,
    sans-serif;
  white-space: pre-line;
`;

const FooterImage = styled.img`
  align-self: end;
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 100%;
  margin-top: 4px;
  flex-grow: 1;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const FooterBottom = styled.div`
  background-color: #fb1818;
  margin-top: 66px;
  width: 100%;
  color: #fff;
  text-align: center;
  text-transform: capitalize;
  padding: 17px 60px;
  font:
    300 16px/24px Poppins,
    sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
    padding: 17px 20px;
  }
`;

function HomePage() {
  return (
    <>
      <HeroSection />
      <SectionOne />
      <SectionTwo />
      <MenuSection />
      <Footer />
    </>
  );
}
export default HomePage;
