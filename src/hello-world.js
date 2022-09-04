import HelloWorldButton from "./components/hello-world-button/hello-world-button";
import Heading from "./components/heading/heading";
import React from 'react';

const heading = new Heading();
heading.render("hello World");
const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();

if(process.env.NODE_ENV=="production"){
    console.log("In Productino Mode");

}
else{
    console.log(" In Development Mode");
}

