
# SimonSquared: Challenge yourself!    <img src="/assets/images/logoSiSq.png" height="100px">

This is a web-based game developed as an exercise project for the Code Institute Development Course.

The game is based on the classic “Simon”, with the twist that a player can choose to play with 4, 6 or 8 tiles, which adds a new dimension of difficulty. There is also a “secret” challenge that the player can access by clicking the text “Difficulty”. The secret challenge makes the simon game spin slowly.

The website can was deployed using GitHub Pages and can be viewed here: https://maururo.github.io/MSP2-SimonSquared/

## UX ##

This web application is developed for anybody who enjoys simple mind challenging games either for enjoyment or for training their memory capacity. The following user stories apply:
* As a user, I want to enjoy a game of classic “Simon”.
* As a user, I want to enjoy a game similar to “Simon”, but preferably a bit more complex.


For this project design I tried to emulate a certain “retro” vibe to emulate the same kind of “old school” design that the original Simon had. This led to the choice for primary colors and a simple background (which I made slightly more sophisticated by making it a radial gradiant, giving the whole thing a bit more depth). It is also the reason why I picked “Changa” as the main font: The slightly “blocky” quality of the font is reminiscent of the pixelated letters used in arcade games or cartoonish fonts that used to be popular back then.
You can view the original wireframe using this link: 
https://github.com/MauRuRo/MSP2-SimonSquared/blob/master/assets/pdf/SimonSquared%20Wireframe.pdf



## Features ##

### Existing Features ###

* Levels of difficulty: the user can navigate to three levels of difficulty by clicking on the navbar items “Four” (for four tiled games), “Six” (for six tiled games) and “Eight” (for eight tiled games).
* Lighting up of the tiles: the tiles of the game will light up according to the established sequence. This will instruct the user as to what the sequence is. When it’s the users turn, the tiles will light up as they click on them.
* Chiming of the tiles: the tiles of the game will chime according to the established sequence. This will reinforce the users memory as to which tile was where in the sequence. When it’s the users turn, the tiles will chime as they click on them. Each color has it’s own chime (Do, re, mi etc.). This feature is disabled for iOS Safari, because this browser is not able to process the audio code properly due to it’s limited audio track capability.
* The “Action” Indicator: The game indicates that it is done demonstrating the sequence and that it’s the users turn to play the game by showing a white ring around the game circle.
* The secret challenge: All good games have a hidden “easter egg”, an unannounced extra feature in the game. The game has a secret button in the header “Difficulty”. When clicked the Simon game will start rotating, increasing the difficulty of the game.
* The About button: the user can get information on the game by pressing the about button (circular button with a question mark in it). When pressed a text field will appear over the game with an explanation of the history of the game and how to play it. The text field can be made to disappear by pressing either the about button, or the closing X in the upper righthand corner.

### Features Left to Implement ###

* It would be great for further development of the project to get the audio to work for iOS Safari as well. 
* Buttons to increase or decrease the rate of rotation for the secret challenge. 
* When a certain “level” is reached the speed of the game to goes up, maybe combined with a change of background color.

## Technologies Used ##
* HTML5
  * To give the website content and structure.
* CSS3
  * To design the look and layout of the website.
* JavaScript
  * To enable animation and responsiveness (visual and auditory) of the game.
  * To enable a the "about" popup box.
* jQuery
  * To simpify DOM manipulation.
* Bootstrap
  * To layout the pages using the Grid system, enabling easy responsive design.
* FontAwesome
  * To enable icons (specifically the close button icon).
* GoogleFonts
  * To set the main fonts for the website.

_Stylesheet and script plugins used:_
* https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css
* https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css
* https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css
* https://code.jquery.com/jquery-3.5.1.js

## Testing ##

### Validating ###
The website was tested using W3 CSS/HTML validator (validator.w3.org).
Each page's HTML code was run through the validator as well as the CSS code. 

On the HTML validation I solved some issues concerning block elements within span elements.
On the CSS validation the validator mentioned a "Parse Error: | circle()" for both the .circle and .circle2 class. I think this is an error in the validator.

### Testing User Stories ###

User stories are tested by manually going through the proces of attaining the user goal on the website and checking if every step is working as expected.

* As a user, I want to enjoy a game of classic “Simon”.
    * The user finds the classic Simon game on the landing page. The User can also navigate to this page by clicking the menu nav button "Four".
    On any page, click the "Book Now Button" in the footer. OR: Go to contact page, click on "form" link in the text or the "Book Now" button on the page.
    * The user can start enjoying classing Simon by pressing "Start New Game" in the center of the Simon tiles.
* As a user, I want to enjoy a game similar to “Simon”, but preferably a bit more complex.
    * The user can find a more challenging game in two different ways:
        * The user can opt for a game with more than four tiles by clicking on "Six" or "Eight" in the navigation menu. Then pressing "Start New Game" in that respective game.
        * The user can opt to make each game (four, six or eight) more challenging by finding the secret challenge, hidden in the "Difficulty" header. When the user hovers over the header the challenge will reveal itself (unavailable on handheld devices). By clicking the header the game will start contiunously rotating, thus making it more challenging.
            * The rotation feature can be stopped at any time by clicking the "Press here to stop rotation" header, which reveals itself when rotation has been initiated.

### Testing Website responsiveness ###

The website was designed to have different layouts that are appropriate for respectively a phone, tablet or desktop device. In the design process I used an iPhone 6/7/8, iPhone SE, an iPad and an iPad Pro as my handheld device models.

All pages are tested by having them display in the respective format sizes. They are also tested by making the widht/height of the window gradually smaller to check if no weird "in between" layout transition issues occur.

### Testing Webgame logic responsiveness ###

The code of the game was tested by playing it many times (at least until "round 10" of the game) over to ensure that the following features functioned properly:
* Game demonstration.
    * The game builds a randomized sequence by adding a random tile to the sequence at the end of each turn.
    * The game repeats the same sequence propperly each time, adding a new addition at the end of the sequence each time.
    * The game demonstrates the sequence by flashing the tiles white, one after the other, following the sequence.
    * The game demonstrates the sequence by chiming the corresponding chimes (do,re,mi etc.) one after the other, following the sequence.
    * The game demonstrates the "Level" at the center of the circle, counting up each time a new demonstration starts.
* User action
    * The game will not respond to any clicks if it's not the user's turn (as indicated by the white circle around the game when it is.)
    * When user's turn is indicated the game respond to clicks.
    * When a user clicks a tile that tile will flash white and chime it's correspoding chime if the click corresponds with the sequence set by the game.
    * The game stops and displays the "GAME OVER" text when an incorrect tile is clicked by the user.

## Deployment ##

This website was deployed using Github Pages and is now accesible here: https://maururo.github.io/MSP2-SimonSquared/

This was done by: Going to the Githup repository file. Then going to "Settings". Then at the Github Pages menu selecting the master branch as the source.

One bug I ran in to after deployment was the fact that the interactive sound features did not perform well on iOS Safari. After doing some searching and reading it seemed to be a common issue because iOS Safari only allows for one audio track to play at the same time. I looked around for some work-around code but found none succesfull. Therefor I implemented code that would recognize the browser software and turn of the sound features if indeed it is iOS Safari.
## Credits ##
### Content ##
* All text and content were made up by myself.
### Acknowledgements ###
* For some coding issues I found solutions on the web. I'm listing my sources here and I refer to them in the code by comment where they are used:
    * https://stackoverflow.com/questions/9038625/detect-if-device-is-ios 
    * https://stackoverflow.com/questions/6893080/html5-audio-play-sound-repeatedly-on-click-regardless-if-previous-iteration-h
    * https://www.custarddoughnuts.co.uk/article/2016/5/14/making-segmented-circles-and-pie-charts-in-css 
After trying for a long time to come up with my own original project idea, I ended up doing this project because it was suggested by Code Institute.
