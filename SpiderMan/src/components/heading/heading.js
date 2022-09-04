import "./heading.scss";

class Heading{
    render(pageName){
        const h1 = document.createElement("h1");
        const body = document.querySelector("body");
        h1.innerHTML = `Webpack is awesome I'm currently on ${pageName} Page`;
        body.appendChild(h1);
    }
}

export default Heading;