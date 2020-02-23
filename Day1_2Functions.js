function factorial(num) {
    if (num === 0 || num === 1) // If num = 0 or num = 1, the factorial will return 1
      return 1;
    for (var i = num - 1; i >= 1; i--) { /* start the for loop with i (num -1) then 
                                          decrement i after each iteration until 1 */
     var result = (num *= i); //store the value of num at each iteration on result
    }
    return result;
  }