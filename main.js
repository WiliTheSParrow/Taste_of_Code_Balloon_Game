var balloon = $(".balloon");
var counter = 0;
var colors = ["#f6e58d", "#eb4d4b", "#ffbe76", "#ff7979", "#badc58", "#dff9fb", "#e056fd", "#686de0"];

for (var i = 0; i < 10; i++) {

    var balloonCopy = balloon.clone();
    balloonCopy.appendTo("body");
    var balloon_color

    balloonCopy.css({
        left: i * 200
    })


    inflatable = balloonCopy.find(".inflatable");
    string = balloonCopy.find(".string");

    balloon_color = colors[Math.floor(Math.random() * colors.length)];
    balloon_width = Math.max(20, Math.floor(Math.random() * 90) + 1);
    balloon_height = 1.2 * balloon_width;

    inflatable.css({
        "background-color": balloon_color,
        height: balloon_height,
        width: balloon_width,
        "border-radius": balloon_width + "px / " + balloon_height + "px"
    });
    string.css({
        "margin-left": (0.5 * balloon_width),
        height: (0.5 * balloon_height)
    });

    balloonCopy.css({
        left: '50%',
        bottom: 0
    });

    balloonCopy.click(function () {
        $(this).remove();
        counter = counter + 100 - balloon_width;
        $(".counter").html(counter);
    });

    var xdiff = Math.floor(Math.random() * 100);
    balloonCopy.show();

    balloonCopy.animate({
        bottom: '100%',
        left: xdiff + "%"
    }, (8000 - balloon_width * 10));
};

balloon.remove();


