import { createGlobalStyle } from "styled-components";

export const theme = {
  light: {
    background: "#fff",
    color: "#363537",
  },
  dark: {
    background: "#272727",
    color: "#fff",
    textArea: "#121212",
  },
};

const GlobalStyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
body{
  background: ${(props) => props.theme.textArea};
  font-family: 'Montserrat', sans-serif;
}
h1,h2,h3,h4{
font-family: 'Oswald',sans-serif;

}
`;

export default GlobalStyle;
