import router from "/configs/routers.link.js";
import features from "/features/index.js";

var Footer = await features.getfile(`${router.components}/Footer/Footer.html`);

export default `
<div class="wrapper">
    ${Footer}
</div>`;
