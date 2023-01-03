/* 
1 .a <p> with red text that says “Hey I’m red!”
2. an <h3> with blue text that says “I’m a blue h3!”
3. a <div> with a black border and pink background color with the following elements inside of it:
    1.  another <h1> that says “I’m in a div”
    2. a <p> that says “ME TOO!”
    3. Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.
*/


//Initialize container by getting reference
const container = document.querySelector('#container');





//1nitialze p element 'paragraph'
const paragraph = document.createElement('p');

//Add text to paragraph
paragraph.textContent = "Hey, I'm red!";

//Add CSS class to paragraph
paragraph.classList.add('paragraph')

//Style content red
paragraph.style.color = 'red';

//Append paragraph to content
container.appendChild(paragraph);




//Initialize <h3> element
const subtitle = document.createElement('h3');

//Add class to <h3> element
subtitle.classList.add('subtitle');

//Add text content to subtitle
subtitle.textContent = "I'm a blue h3";

//Add style to subtitle
subtitle.style.color = 'blue';

//Append h3 to container
container.appendChild(subtitle);



//Initialize new div element
const section = document.createElement('div')

//Add black border and pink background to new div
section.style.border = '2px solid black'
section.style.background = 'pink'



//Create h1 to be added to new div
const another_title = document.createElement('h1')

//Add text to new h1
another_title.textContent = "I'm in a div"

//Append new h1 to new div
section.appendChild(another_title);



//Create p for new div
const new_p = document.createElement('p')

//Add text to new p
new_p.textContent = "ME TOO!"

//Append new p to new div after h1
section.appendChild(new_p)


//Finally append new div with it's children to container
container.appendChild(section)