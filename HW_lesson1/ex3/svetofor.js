const traffic = prompt("enter color").toLocaleLowerCase();

switch (traffic) {
    case "red":
        alert("Stop u cannot go!");
        break;
    case "yellow":
        alert("Wait a bit.");
        break;
    case "green":
        alert("GOOOOOOOOOOOOOOOOOOOOOOOOOO!");
        break;
    default: 
        alert("This is traffic dude, there is no this kind of color!!!")
        break;
}