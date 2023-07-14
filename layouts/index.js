import Comps from "../components/index.js";

export default `

    <Header>
        ${Comps.Header ? Comps.Header : ""}
    </Header>
    <Main>
        <p class="link">320</p>
        <p class="link">480p</p>
        <p class="link">768p</p>
        <p class="link">1024</p>
        <p class="link">1280</p>
        <p class="link">1920</p>
    </Main>
    <Footer>
        ${Comps.Footer ? Comps.Footer : ""}
    </Footer>


    
`;
