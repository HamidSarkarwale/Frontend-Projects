var images = ["https://media.istockphoto.com/id/1438931606/photo/womans-hand-with-a-tree-she-is-planting-environmental-conservation-concept-protect-and.webp?b=1&s=612x612&w=0&k=20&c=qkiZnwOcwDunV8cnvxFZTEthGGTi8PnNcacRJ94Bifo=", "https://media.istockphoto.com/id/1419410282/photo/silent-forest-in-spring-with-beautiful-bright-sun-rays.webp?b=1&s=612x612&w=0&k=20&c=C318sxgBBIO66E7vi_0Eu3lXHm9uRDauKvRgeyxY2O4=",
 "https://media.istockphoto.com/id/1283852667/photo/touch-of-fresh-moss-in-the-forest.webp?b=1&s=612x612&w=0&k=20&c=S-JC0LTYfw-lIgO-O1RvUIq3DXKUzsGNG8qumxFJ1JU="];


var num = 0;
function next() {
    var slider = document.getElementById('slider');
    num++;
    if(num >= images.length) {
        num = 0;
    }
    slider.src = images[num];
}
function prev() {
    var slider = document.getElementById('slider');
    num--;
    if(num < 0) {
        num = images.length-1;
    }
    slider.src = images[num];
}