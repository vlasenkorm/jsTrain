//Task1    
    const topRowKeyboardEng = "qwertyuiop[]";
    console.log(topRowKeyboardEng);
    const midleRowKeyboardEng = "asdfghjkl;'";
    console.log(midleRowKeyboardEng);
    const bottomRowKeyboardEng = "zxcvbnm,./";
    console.log(bottomRowKeyboardEng);
    
//Task2
    const lengthTopRowKeyEng = topRowKeyboardEng.length;
    console.log(lengthTopRowKeyEng);
    const lengthMidRowKeyEng = midleRowKeyboardEng.length;
    console.log(lengthMidRowKeyEng);
    const lengthBotRowKeyEng = bottomRowKeyboardEng.length;
    console.log(lengthBotRowKeyEng);
    
//Task3
//console.log(topRowKeyboardEng.charAt(0) + topRowKeyboardEng.charAt(--lengthTopRowKeyEng));???????
    
    console.log(topRowKeyboardEng.charAt(0) + topRowKeyboardEng.charAt(lengthTopRowKeyEng - 1));
    console.log(typeof(lengthTopRowKeyEng));
    console.log(midleRowKeyboardEng.charAt(0) + midleRowKeyboardEng.charAt(lengthMidRowKeyEng--));
    console.log(bottomRowKeyboardEng.charAt(0) + bottomRowKeyboardEng.charAt(lengthBotRowKeyEng - 1));

//Task4
    
    const positionCharOpenSB = topRowKeyboardEng.indexOf("[");
    console.log(positionCharOpenSB);
    const positionCharCloseSB = topRowKeyboardEng.indexOf("]");
    console.log(positionCharCloseSB);

//Task5

    console.log(`topRowKeyboardEng = ${topRowKeyboardEng} 
lengthTopRowKeyEng = ${lengthTopRowKeyEng}
midleRowKeyboardEng = ${midleRowKeyboardEng}
lengthMidRowKeyEng = ${lengthMidRowKeyEng}
bottomRowKeyboardEng = ${bottomRowKeyboardEng}
lengthBotRowKeyEng = ${lengthBotRowKeyEng}
positionCharOpenSB = ${positionCharOpenSB}
positionCharCloseSB = ${positionCharCloseSB}` );