import helloWorldButton from "../../hello-world/src/components/hello-world-button/hello-world-button";
import Heading from "./components/heading/heading";
import SpiderManImage from "./components/spiderman-image/spiderman-image";

const heading = new Heading();
heading.render("spider Buddy");
const spiderManImage = new SpiderManImage;
spiderManImage.render();

import("HelloWorldApp/HelloWorldButton")
    .then(HelloWorldButtonModule =>{
        const HelloWorldButton = HelloWorldButtonModule.default;
        const helloWorldButton = new HelloWorldButton();
        helloWorldButton.render();
    })