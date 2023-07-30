import features from "/features/index.js";

var Footer = await features.getfile(`components/Footer/Footer.html`);

export default `
<div class="wrapper">
    ${Footer}
</div>`;
