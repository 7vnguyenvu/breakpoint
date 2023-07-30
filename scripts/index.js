import DOM_config from "/configs/dom.config.js";
import Layout from "/layouts/index.js";

// SET FAVICON => <link rel="shortcut icon" href="/images/target.png" type="image/x-icon" />
var link_favicon = document.createElement("link");
link_favicon.rel = "shortcut icon";
link_favicon.href = DOM_config.favicon;
link_favicon.type = "image/x-icon";
document.head.appendChild(link_favicon);

// SET CSS => <link rel="stylesheet" href="styles/index.css" />
var link_css = document.createElement("link");
link_css.rel = "stylesheet";
link_css.href = DOM_config.css;
document.head.appendChild(link_css);

// SET TITLE
document.title = undefined || DOM_config.title;

// SET ELEMENTS
document.getElementById("app").innerHTML = Layout;
