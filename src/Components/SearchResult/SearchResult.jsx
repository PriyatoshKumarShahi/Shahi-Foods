import styled from "styled-components";
import { BASE_URL, Button, Container } from "../../App";
const SearchResult = ({ data }) => {
  return (
    <FoodCardscontainer>
<Container>
<FoodCards>
        {data?.map(({ name, image, text, price }) => (
          <FoodCard key={name}>
            <div className="food-card">
              <div className="food-image">
                <img src={BASE_URL + image} alt="" />
              </div>
              <div className="food-info">
                <div className="info">
                  <h3>{name}</h3>
                  <p>{text}</p>
                </div>
              <Button>₹{price.toFixed(2)}</Button>
              </div>
            
            </div>
          </FoodCard>
        ))}
      </FoodCards>
</Container>
    </FoodCardscontainer>
  );
};

export default SearchResult;

const FoodCardscontainer = styled.section`
  background-image: url("/bg (3).png");
  background-size:cover;
  background-repeat: no-repeat;
  object-fit: contain;
height: calc(100vh-300px);
  opacity: 0.5;
  background-attachment:fixed;
`;
const FoodCards = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  padding-top: 40px;
  gap: 100px;
`;
const FoodCard = styled.div`

width: 340px;
height: 167px;
border: 0.66px solid;
border-image-source: radial-gradient(80.38% 222.5% at -13.75% -12.36%, #98F9FF 0%, rgba(255, 255, 255, 0) 100%) ,
radial-gradient(80.69% 208.78% at 108.28% 112.58%, #EABFFF 0%, rgba(135, 38, 183, 0) 100%) ;






background: url(.png),
radial-gradient(
  90.16% 143.01% at 15.32% 21.04%,
  rgba(165,239,255,0.2) 0%,
  rgba(118,191,244,0.0447917)77.08%,
  rgba(79,144,213,0)100%

);
background-blend-mode: overlay, normal;
backdrop-filter: Blur(13.18px);
border-radius:20px;
display: flex;
justify-content: center;



`;
