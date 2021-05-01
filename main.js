var images = ["Taj.jpg","Rome.jpg","MATAI.jpg","ITZA.jpg","Patra.jpg","Christ.jpg","China.jpg"];
var Pera = ["TAJ MAHAL", "THE ROMAN COLOSSEUM","MACHU PICCHU","CHICHEN ITZA","PETRA","CHRIST THE REDEMMER STATUE","THE GREAT WALL OF CHINA"];
var i = 0;
function change(){
    if(i==7){
        i=0;
    }
    document.getElementById("Seven_Images").src = images[i];
    document.getElementById("Seven_words").innerHTML = Pera[i];
    i++;
}