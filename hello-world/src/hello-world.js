import HelloWorldButton from "./components/hello-world-button/hello-world-button";
import Heading from "./components/heading/heading";

const heading = new Heading();
heading.render("hello World");
const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();

if(process.env.NODE_ENV=="production"){
    console.log("In Production Mode");

}
else{
    console.log(" In Development Mode");
}

