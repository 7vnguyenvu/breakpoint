import Comps from "../components/index.js";

export default `
    <Header>
        ${Comps.Header ? Comps.Header : ""}
    </Header>
    <Main>
        ${Comps.Main ? Comps.Main : ""}
    </Main>
    <Footer>
        ${Comps.Footer ? Comps.Footer : ""}
    </Footer>    
`;
