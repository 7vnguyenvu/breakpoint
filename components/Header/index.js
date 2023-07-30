import router from "/configs/routers.link.js";
import features from "/features/index.js";

var Header = await features.getfile(`${router.components}/Header/Header.html`);

export default `
<div class="wrapper">
    ${Header}
</div>`;
