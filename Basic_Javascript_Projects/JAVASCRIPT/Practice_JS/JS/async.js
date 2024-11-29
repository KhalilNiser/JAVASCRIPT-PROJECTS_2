// alert( document.getElementById( "p1").innerHTML );

function color_Function()
{
    var colorOutput;

    var colors = document.getElementById( "color_input" ).value;

    var colorString = " is a great color!";

    switch( colors )
    {
        case "Red":
            colorOutput = "Red" + colorString;
        break;
        case "Yellow":
            colorOutput = "Yellow" + colorString;
        break;
        case "Green":
            colorOutput = "Green" + colorString;
        break;
        case "Blue":
            colorOutput = "Blue" + colorString;
        break;
        case "Pink":
            colorOutput = "Pink" + colorString;
        break;
        case "Purple":
            colorOutput = "Purple" + colorString;
        default:

        colorOutput = "Please Enter the Color Exactly as it" 
        + " is Written: From the List Above";
        
    }
    
    document.getElementById( "output" ).innerHTML = colorOutput;


}