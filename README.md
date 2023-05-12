# endless_money_chase

This is a game without point about earning money
a commentary on the pursuit of wealth and never being fulfilled

-   pictures width and height that calculates and gets by javascript seems to be sometimes inaccurate. I don't know the rules of them.
    the best way that seems to me be reasonable is to write them as width and height attributes for img tag.

*   the function that has been written for overlapping is based on when 2 elements are not overlapping and then making it negative.  
    I wrote another function as overlapping 2 but I wasn't sure is it working totally fine or not, because in stakoverflow they wrote it as the first.

*   window.getComputedStyle(elementObject) measures sizes differently from elementObject.getBoundingClientRect(), getComputedStyle measures for right, from right side of element to right side of browser, but, getBoundingClientRect calulate for right, from right side of element to left side of browser
*   after changing the position of an element in the page , numbers that getBoundingClientRect returns to us doesn't change and it's not good but get computed style measures changes when position changes and it's good and makes it more reliable or maybe something I'm doing wrong and I don't know yet
*   after giving value with elementObject.style we can readthem for increase or decreaase after event listener is triggered

*   The way we think about an app at the start isn't the same as the app works at the end. It means that at the end we may delete some codes that we needed to understand the problem and start to solve the problem but when work goes on our solution and our problem changes. at the start may I need a variable to tell where the position should be but at the end I don't need that because after loading the page with random function the position of every element will be made.
