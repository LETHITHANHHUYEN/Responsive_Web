// This is About component, It will contain about us info.
import waves from "../../assets/waves.svg";
import hand from "../../assets/hand.svg";
import styled from "styled-components";
import rocket from "../../assets/rocket image.png";
import human from "../../assets/human.svg";

const AboutSection = styled.div`
  width: 100vw;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Waves = styled.img`
  width: 100%;
  position: absolute;
  top: -1rem;
`;
const Hand = styled.div`
  position: absolute;
  bottom: -1rem;
  right: 0;
`;

const Main = styled.div`
  margin: 0 15rem;
  margin-top: 15rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  display: inline-block;
  font-size: 2rem;
`;
const CurvedLine = styled.div`
  width: 7rem;
  height: 2rem;
  border: 5px solid var(--purple);
  border-color: var(--purple) transparent transparent transparent;
  border-radius: 150%/60px 70px 0 0;
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Rocket = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  padding-bottom: 5 rem;
`;
const AboutText = styled.div`
  width: 50%;
  position: relative;
`;
const Human = styled.div`
  width: 50%;
  position: absolute;
  right: 0;
  bottom: 100%;
`;
const Text = styled.h4`
  font-size: calc(0.5rem + 1vw);
  line-height: 1.5;
  color: var(--nav2);
`;
const Circle = styled.span`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: var(--black);
  margin-right: 0.5rem;
  margin-to: 1rem;
`;

const About = () => {
  return (
    <AboutSection id="about">
      <Waves src={waves} alt="Waves" width="400" height="400" />
      <Hand>
        <img src={hand} alt="Hand" width="400" height="400" />
      </Hand>
      <Main>
        <div>
          <Title>About Us</Title>
          <CurvedLine />
        </div>
        <Content>
          <Rocket>
            <img src={rocket} alt="Rocket" width="400" height="400" />
          </Rocket>
          <AboutText>
            <Human>
              <img src={human} alt="Human" width="400" height="400" />
            </Human>
            <Text>
              We have our customers to tell about themselves, to grow and stnad out in an inscreasingly competitive digital world,
              through creative projects that are able to attract and involve, creating strategic value.
            </Text>
            <div>
              <Circle style={{ background: "var(--purple)" }} />
              <Circle style={{ background: "var(--pink)" }} />
              <Circle style={{ background: "var(--black)" }} />
            </div>
          </AboutText>
        </Content>
      </Main>
    </AboutSection>
  )
};

export default About;
