document.addEventListener('DOMContentLoaded', function (e) {
    const script = document.createElement('script');
    script.src = "./test.js";
    script.async = "false";
    document.body.append(script);

    function dynamicScript(src){
        const script = document.createElement('script');
        script.src = src;
        script.async = 'false';
        document.body.append(script);
    }
    dynamicScript('./ded.js');
});