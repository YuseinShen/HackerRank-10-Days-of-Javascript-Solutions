function getGrade(score) {
    let grade; 
    /* this doesn't need explanation but i'm gonna write a confession.. 

    i knew how to write it but was just too lazy to write by my own all since i knew
    it's gonna be a bit long..so I copy-pasted only the pattern, and tried to change 
    only variables.. all the time i got compilation error bcz of extra or missing bracket.
    So I ended up losing more time than writing it from first try. In the end i wrote one by 
    one each line. And got correct answer at my first try. */

    /* we should use && operator between ranges. Since OR operator would be including e.g
    <= 10 would include also 4, and that would cause problem in the code. We want 4 to 
    be categorized as "F" grade */

    if  (score <= 5) { 
        grade = "F"
    }
    else if ((score > 5) && (score <=10)) { 
        grade = "E"
    }
    else if ((score > 10) && (score <= 15)) {
        grade = "D"
    }
    else if ((score > 15) && (score <= 20)) {
        grade = "C"
    }
    else if ((score >20) && (score <= 25)) {
        grade = "B"
    }
    else if ((score > 25) && (score <=30)) {
        grade = "A"
    }

    return grade;
}