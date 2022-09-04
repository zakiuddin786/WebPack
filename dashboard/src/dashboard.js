const url = window.location.pathname;

if(url==="/hello-world-page"){
    console.log("importing hello world application")
    import ("HelloWorldApp/HelloWorldPage").then(HelloWorldPageModule =>{
        const HelloWorldPage = HelloWorldPageModule.default;
        const helloWorldPage = new HelloWorldPage();
        helloWorldPage.render();
    });
}
else if(url==="/spiderman-page"){
    console.log("importing spider application")
    import ("SpiderManApp/SpidermanPage").then(SpidermanPageModule =>{
        const SpidermanPage = SpidermanPageModule.default;
        const spidermanPage = new SpidermanPage();
        spidermanPage.render();
    });
}

console.log("dashboard");