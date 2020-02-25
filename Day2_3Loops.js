function vowelsAndConsonants(argument) { // i modified it as argument for visibility
    const vowels = 'aeiou'; 
    var consonants = "";
    
    for(var i = 0; i < argument.length; i++) { // to loop over our argument
       if (vowels.includes(argument[i])) { /* used includes method more  here:
                                            https://developer.mozilla.org/tr/docs/Web/                                               JavaScript/Reference/Global_Objects/Array/                                              includes   */
           console.log(argument[i]);   /* we log result here, everytime it matches it's                                             gonna print */
       }
       else {
           consonants += argument[i] + '\n'; /* here if it doesn't match it's gonna add it                                         into our variable consonants */
       }
    }
    
    console.log(consonants); // lastly to print our consonants after vowels..
}