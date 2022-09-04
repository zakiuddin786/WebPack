import "./hello-world-button.scss"

class helloWorldButton {
    buttonCssClass = "hellow-world-button";

    render(){
        const button = document.createElement("button");
        button.innerHTML = "Hello Worlld";
        button.classList.add("hello-world-button")
        const body = document.querySelector("body");

        button.onclick = ()=>{
            const p = document.createElement("p");
            p.innerHTML = "Hello World";
            p.classList.add(this.buttonCssClass)
            body.appendChild(p);
        }
        body.appendChild(button)
    }
}

export default helloWorldButton;