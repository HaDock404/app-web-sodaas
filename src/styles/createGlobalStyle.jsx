import { createGlobalStyle } from "styled-components"

const StyledGlobalStyle = createGlobalStyle`
    html {
        max-width: 100%;
        overflow-x: hidden;
    }
`

function GlobalStyle() {
    return <StyledGlobalStyle/>
}

export default GlobalStyle