window.onload = function(){
    var container = $("#container");
    let widthAmnt = $("#circleWidth");
    let growthSize = $("#growthSize");
    let interval = $("#growInterval");
    let numberOfCircle = $("#numberCircle")
    let start = $("#startBtn");
    let timer;
    let top = 25;
    let left = 50;
    let colors = ["red", "yellow", "black", "gray", "purple", "lightblue"];

    function resizeCircle(intv, gsize){

        $(".circle").each(function(id, e){
            // window.alert("12");
            timer = setInterval(() => {
                $(e).css("height", (index, old) => {
                    return parseInt(old) + parseInt(gsize) + "px";
                });
        
                $(e).css("width", (index, old) => {
                    return parseInt(old) + parseInt(gsize) + "px";
                });
        
        
            }, parseInt(intv));
        });
    }
    

    


    start.click(() => {
        var randomColor = '';

        for(let i = 0; i < numberOfCircle.val(); i++){
            randomColor = colors[Math.floor(Math.random()*colors.length)];
            container.prepend($("<div>", {
                id: `${i}`,
                class: "circle",
                click: function(){
                    $("div").remove(`#${i}`);
                    clearInterval(timer);
                },
                css: {"position": "absolute",
                    "border": "black solid 1px",
                    "width": widthAmnt.val() + "px",
                    "height": widthAmnt.val() + "px",
                    "border-radius": 50 + "%",
                    "background-color": randomColor,
                    "top": (top) + "vh",
                    "left": (left - (i + 5)) + "%"
                }
            }));
        }

        
        resizeCircle(interval.val(),  growthSize.val());
        
    });
}