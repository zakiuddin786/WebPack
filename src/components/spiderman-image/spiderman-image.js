import SpiderMan from "./spiderman.jpg";
import "./spiderman-image.scss";

class SpiderManImage{
    render(){
        const img = document.createElement("img");
        img.src = SpiderMan,
        img.alt = "Spider Man"
        img.classList.add("spiderman-image");

        const bodyDomElement = document.querySelector("body");
        bodyDomElement.appendChild(img);
    }
}

export default SpiderManImage;