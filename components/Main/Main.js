import getfile from "../../features/get.content.htmlfile.js";

var BreLink = await getfile(`components/comps/BreLink.html`);
var Content = await getfile(`components/Main/Content.html`);

export default `
<div class="wrapper">
    ${BreLink}
    ${Content}
</div>`;
