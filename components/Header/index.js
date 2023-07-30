import features from "/features/index.js";

var Header = await features.getfile(`/components/Header/Header.html`);

export default `
<div class="wrapper">
    ${Header}
</div>`;
