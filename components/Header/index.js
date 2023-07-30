import getfile from "../../features/get.content.htmlfile.js";

var Header = await getfile(`components/Header/Header.html`);

export default `
<div class="wrapper">
    ${Header}
</div>`;
