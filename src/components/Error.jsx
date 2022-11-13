import styled from "@emotion/styled";

const Error = ({ children }) => {
  return <Texto>{children}</Texto>;
};

export default Error;

const Texto = styled.div`
  background-color: #b7322c;
  color: #fff;
  font-size: 20px;
  padding: 15px;
  text-transform: uppercase;
  font-family: "lato", sans-serif;
  font-weight: 700;
  text-align: center;
  border-radius: 10px;
`;
