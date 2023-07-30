import router from "/configs/routers.link.js";
import features from "/features/index.js";

var BreLink = await features.getfile(`${router.components}/comps/BreLink.html`);
var Content = await features.getfile(`${router.components}/Main/Content.html`);

export default `
<div class="wrapper">
    ${BreLink}
    ${Content}
</div>`;
