function start() {
    paralelogram();
    circle();
    ellipse();
    square();
    rectangle();
    right_triangle()
}
function paralelogram() {
    var paralelogram = document.getElementById("paralelogram");

    a = document.getElementById("paralelogram_A").value;
    b = document.getElementById("paralelogram_B").value;
    angle = document.getElementById("paralelogram_Angle").value;

    paralelogram.style.height = (a * 37.936267) / 10 + "px";
    paralelogram.style.width = (b * 37.936267) / 10 + "px";
    paralelogram.style.transform = "skew(" + angle * -1 + "deg)";

    document.getElementById("paralelogram_Area").value = (a * b * Math.sin(angle * Math.PI / 180)).toFixed(4);
    document.getElementById("paralelogram_H").value = (document.getElementById("paralelogram_Area").value / a).toFixed(4);
}

function circle() {
    var circle = document.getElementById("circle");

    r = document.getElementById("circle_R").value;

    circle.style.height = ((r * 2) * 37.936267) / 10 + "px";
    circle.style.width = ((r * 2) * 37.936267) / 10 + "px";

    document.getElementById("circle_Area").value = (Math.PI * Math.pow(r, 2)).toFixed(4);
    document.getElementById("circle_L").value = (2 * Math.PI * r).toFixed(4);
}

function ellipse() {
    var ellipse = document.getElementById("ellipse");

    ellipse_Horizontal_r = document.getElementById("ellipse_Horizontal_r").value;
    ellipse_Vertical_r = document.getElementById("ellipse_Vertical_r").value;

    ellipse.style.height = ((ellipse_Vertical_r * 2) * 37.936267) / 10 + "px";
    ellipse.style.width = ((ellipse_Horizontal_r * 2) * 37.936267) / 10 + "px";

    document.getElementById("ellipse_Area").value = (Math.PI * ellipse_Horizontal_r * ellipse_Vertical_r).toFixed(4);

    document.getElementById("ellipse_L").value = (2 * 3.14 * Math.sqrt((ellipse_Vertical_r * ellipse_Vertical_r + ellipse_Horizontal_r * ellipse_Horizontal_r) / (2 * 1.0))).toFixed(4)
}

function square() {
    var square = document.getElementById("square");

    a = document.getElementById("square_A").value;

    square.style.height = (a * 37.936267) / 10 + "px";
    square.style.width = (a * 37.936267) / 10 + "px";

    document.getElementById("square_Diagonal").value = (Math.sqrt(2) * a).toFixed(4);
    document.getElementById("square_Area").value = (Math.pow(a, 2)).toFixed(4);
}

function rectangle() {
    var rectangle = document.getElementById("rectangle");

    a = document.getElementById("rectangle_A").value;
    b = document.getElementById("rectangle_B").value;

    rectangle.style.height = (a * 37.936267) / 10 + "px";
    rectangle.style.width = (b * 37.936267) / 10 + "px";

    document.getElementById("rectangle_Diagonal").value = (Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))).toFixed(4);
    document.getElementById("rectangle_Area").value = (a * b).toFixed(4);
}

function right_triangle() {
    var right_triangle = document.getElementById("right_triangle");

    a = document.getElementById("right_triangle_A").value;
    b = document.getElementById("right_triangle_B").value;
    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

    right_triangle.style.borderBottom = (a * 37.936267) / 10 + "px" + " solid steelblue";
    right_triangle.style.borderRight = (b * 37.936267) / 10 + "px" + " solid transparent";

    document.getElementById("right_triangle_C").value = c.toFixed(4);
    document.getElementById("right_triangle_Area").value = ((a * b) / 2).toFixed(4);
    document.getElementById("right_triangle_angle_A").value = (Math.asin(a / c) * 180 / Math.PI).toFixed(4) + " deg";
    document.getElementById("right_triangle_angle_B").value = (Math.asin(b / c) * 180 / Math.PI).toFixed(4) + " deg";
    document.getElementById("right_triangle_angle_C").value = 90 + " deg";
    document.getElementById("right_triangle_H").value = ((a * b) / c).toFixed(4);
}