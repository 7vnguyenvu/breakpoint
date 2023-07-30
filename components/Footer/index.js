import getfile from "../../features/get.content.htmlfile.js";

var Footer = await getfile(`components/Footer/Footer.html`);

export default `
<div class="wrapper">
    ${Footer}
</div>`;
