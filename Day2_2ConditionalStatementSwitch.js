function getLetter(argument) {
    let letter;           /* this literally doesn't look good, i know..I'm so much drunk 
    while writing this code..but.. first i wrote conditions after case 1: case 2: etc.. then 
    i realized it wouldn't work like that and i should write the code above switch statement....
     soo i wrote first if condition and it passed first test.. i continued with else if, but it didn't work..
     then i changed all of them to if code XD and it works perfectly fine.. Well i'll check this after couple 
     of weeks and try to modify it.. at least i am hoping so */
    
    const first ="aeiou";
    const second = "bcdfg";
    var third = "hjklm";
    var fourth= "npqrstvwxyz";
    if (first.includes(argument[0])) {letter = 1};
     if (second.includes(argument[0])) {letter = 2};
     if (third.includes(argument[0])) {letter = 3};
     if (fourth.includes(argument[0])) {letter = 4};
    
                            /* LOL after writing above statement.. just after 20 secs, i 
                            realized i don't even need switch with above code. I know  
                            the point is to use switch, but my mind went blank. I could  
                            simply change letter = "A", "B", "C", "D" above and below is
                            not needed except return letter. But i'll just  leave it in this way 
                            for now */
    switch (letter) {       
        case 1: 
            letter = "A";
            break;
        case 2: 
            letter ="B";
            break;
        case 3: 
            letter ="C";
            break;
        case 4: 
            letter ="D";
            
    }

    
    return letter;
}