import getfile from "../../features/get.content.htmlfile.js";

var BreLink = await getfile(`components/comps/BreLink.html`);
var Content = await getfile(`components/Main/Content.html`);

export default `
<div class="wrapper">
    <!-- ${BreLink} -->
    <div class="scr-row l-i-center">
        <p class="link">320p</p>
        <p class="link">375p</p>
        <p class="link">425p</p>
        <p class="link">768p</p>
        <p class="link">1024p</p>
        <p class="link">1280p</p>
        <p class="link">1440p</p>
        <p class="link">1920p</p>
        <p class="link">2560p</p>
    </div>
    <!-- ${Content} -->
    <div class="scr-row l-i-center mv-16">
        <h2>...WELCOME...</h2>
    </div>
</div>`;
