import features from "/features/index.js";

var BreLink = await features.getfile(`components/comps/BreLink.html`);
var Content = await features.getfile(`components/Main/Content.html`);

export default `
<div class="wrapper">
    ${BreLink}
    ${Content}
</div>`;
