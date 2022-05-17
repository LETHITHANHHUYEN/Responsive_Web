// This is Contact component, it will contain contact form.
import Facebook from "../../assets/facebook-square-brands.svg";
import Instagram from "../../assets/instagram-square-brands.svg";
import styled from "styled-components";

const ContactSection = styled.div`
  width: 100vw;
  padding: calc(2.5rem + 2.5vw) 0;
  background-color: var(--black);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  color: var(--white);
  display: inline-block;
  font-size: 2rem;
  /* margin-top: 4rem; */
  margin-top: 1rem;
  position: relative;
  &::before {
    content: "";
    height: 1px;
    width: 50%;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%);
    /* or 100px */
    border-bottom: 2px solid var(--purple);
  }
`;
const Icons = styled.div`
  display: inline;
  margin-bottom: 3rem;
  margin-top: 3rem;
  a{
    &:not(:last-child) {
      margin-right: 2rem;
    }
  }
  &:hover {
    img {
      filter: invert(20%) sepia(100%) saturate(300%) hue-rotate(580deg);
    }
  }
  img{
    width: 3rem;
    height: 3rem;
  }
`;
const Contact = () => {
  return <ContactSection id="contact">
    <Title>Get in touch</Title>
    <Icons>
      <a href="https://www.facebook.com/profile.php?id=100013379111277">
        <img src={Facebook} alt="Facebook" />
      </a>
      <a href="https://www.instagram.com/le__huyen/">
        <img src={Instagram} alt="Instagram" />
      </a>
    </Icons>
  </ContactSection>;
};

export default Contact;
