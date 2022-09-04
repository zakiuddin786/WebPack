import Heading from "../heading/heading";
import SpiderManImage from "../spiderman-image/spiderman-image";

class SpiderManPage{
    render(){
        const heading = new Heading();
        heading.render("spider Buddy");
        const spiderManImage = new SpiderManImage;
        spiderManImage.render();
    }
}

import("HelloWorldApp/HelloWorldButton")
    .then(HelloWorldButtonModule =>{
        const HelloWorldButton = HelloWorldButtonModule.default;
        const helloWorldButton = new HelloWorldButton();
        helloWorldButton.render();
    })

export default SpiderManImage;