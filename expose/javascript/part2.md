1. At line 12, the console will output the value of i after the for loop had concluded. Since it was declared with var, the variable can be seen outside the scope of the loop. In this case, it would print 3 since i looped three times, which is the length of the prices array (which we also declared in the loop).
2. At line 13, the console will output the last value of discountedPrice after running through the loop. Since discountedPrice was declased with var, it can be seen outside the scope of the for loop. As a result, it would still hold the last value after the loop concludes. In this case since we are looping through the array [100,200,300] it would output 150 since we are storing 300 * 0.5 in discountedPrice on the last loop.
3. At line 14, the console will output the last value that was stored in finalPrice after the loop concludes. This is also because it was declared with var which makes variables callable outside the scope. In this case, we are taking discountedPrice (which was var as well, so it would store the variable and is the output from the previous question, 150) multiply it by 100 and then dividing the product by 100. This would give us the result of 150. 
4. This function will return an array of the discounted prices for the array that you passed in with the discount that you are applying to it. In this case, since we are passing in [100,200,300] and doing a 50% discount, the function would return [50,100,150]. This was also the output in the console if you were to change the last line to ```console.log(discountPrices([100,200,300], 0.5);```.
5. This would return an error. Since i was declared with the keyword let, it would only be callable within the scope of the function. In this case, it would only be callable within the for loop. As a result, if we try to call it outside of the for loop, we would get an error.
6. This would return an error. Similarly to the previous question, since discountedPrice was declared with the keyword let, it can only be called within the function's scope (the for loop). As a result, we can't call it outside of the for loop due to the variable's declaration within the for loop.
7. This would print 150. This doesn't have any errors since we declared the variable with the keyword let within the function's scope. As a result, the variable can be used throughout the function's scope (inside and outside the for loop). The reason why this line printed 150 was because it was the last updated value within the for loop, which was stored as the "local" variable within the function. In this case, it was storing the value of 300 with 50% off (the last value visited by the for loop from the passed in array).
8. This function would return [50,100,150]. This would function similarly to the previous function runs with the variable keyword let. However, unlike the previous declarations, the variables within the function can only be called within the function, and not outside of it. But, the process and the way that the function runs is the same (applying a 50% discount on the array of prices [100,200,300]).
9. Line 11 returns an error. Similarly to question 5, since i was declared with the keyword let, it can only be callable within the scope of the function (the for loop). Since we are calling i outside of the for loop, the program returns an error due to the out of scope for the variable.
10. This would return the length of the passed in array (3). This is because we declared the variable outside of the for loop and as a "local" variable for the function, but with the keyword const. This would mean that it would stay the same throughout the function and wouldn't change. So once it was declared as the length of the array (3), it would always stay as 3. Which was the result we got.
11. This function will return the discounted prices of the passed in array. In this case, it would return [50,100,150]. There are no errors within the function despite the variable discounted being const. Although it is declared as such, the variable can still take in "pushed" values and updated. Otherwise, the functionality of the function is the same (taking the discount of the passed in array and returning the discounted prices).
12. JSON File questions
    1.  student.name
    2.  student['Grad Year']
    3.  student.greeting()
    4.  student['Favorite Teacher'].name
    5.  student.courseLoad[0]
13. Arithmetic
    1.  32, This is adding the 2 as a char in a string to get the string '32'.
    2.  1, This reads the 3 as a number which is subtracted by 2 to get 1.
    3.  3, This sees null as a 0 and adds 3 to it to get 3.
    4.  3null, This sees 3 and null as strings and adds them to get '3null'.
    5.  4, This sees true as the value 1 and added to 3 gets 4.
    6.  0, This sees false and null as 0, which added together gets 0.
    7.  3undefined, This sees 3 and undefined as strings, which added together gets '3undefined'.
    8.  NaN, This sees undefined as a number, which doesn't have a numerical value so it returns NaN.
14. Comparison
    1.  true, This sees '2' as a number which is greater than 1, so true.
    2.  false, This seems to be comparing the first ascii values of '2' and '12' which seems to have '12' smaller than '2'.
    3.  true, This sees that both of the 2s as numbers or strings of the same value, so true.
    4.  false, This sees the both 2 and '2' are different types, so return false.
    5.  false, This sees true as the value 1, which isn't equal to 2, so false.
    6.  true, Boolean() converts all numerical values to true which is the same as true, so return true.
15. The difference between the two operators is that == only looks at the coerced values on either side of the operator. As a result, even if the types are different it can still return true. The === operator is a 'strict operator' so it looks at the type and the value to see if they are equivalent.
16. See ```part2-question16.js```.
17. The result should be the passed in array with each value multiplied by 2 (in this case, [2,4,6]). I got this result from knowing that you are passing the function (doSomething) into the function (modifyArray). By passing in this function (doSomething) into the function modifyArray, you can use it to modify the passed in array. By doing this, you can call the doSomething function and alter the values within the array individually, without worrying about any issues of function out of scope.
18. See ```part2-question18.js```.
19. The output for the code was 1 4 3 2. This was because of the timeouts that were set. Since 1 and 4 didn't have time outs they would be printed first. Then the timeouts would print. Since 3 had timeout of 0, it would print afterwards, then 2 would print after 1 second total.