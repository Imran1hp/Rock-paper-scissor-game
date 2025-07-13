

#This project is a classic Rock Paper Scissors game implemented using HTML, CSS, and JavaScript.

Rock Paper Scissors Game
This is an interactive web-based Rock Paper Scissors game where you play against the computer. Your score (wins, losses, ties) is tracked and saved locally in your browser.

How to Play
Click on one of the three buttons: "Rock", "Paper", or "Scissor" to make your move.

The computer will randomly select its move.

The game will display whether you "win", "lose", or if it's a "tie".

Your score (Wins, Losses, Ties) will be updated and displayed.

You can reset your score at any time by clicking the "Reset Score" button.

Project Structure
full-rock-paper-scissor-game.html: The main HTML file that structures the game interface.

rock-paper-scissor-game.css: Contains the styling for the game, including button appearance and layout.

full-rock-paper-scissor.js: Implements the game logic, score tracking, and UI updates.

image/rock-emoji.png, image/paper-emoji.png, image/scissor-emoji.png: Image files for the rock, paper, and scissor moves.

Features
Interactive Gameplay: Players can easily make moves by clicking buttons.

Computer AI: The computer makes a random move for each round.

Score Tracking: Keeps a tally of wins, losses, and ties.

Persistent Score: Your score is saved in your browser's local storage, so it persists even if you close and reopen the browser.

Reset Score: A button is provided to clear the current score.

Visual Feedback: Displays the player's and computer's moves using emojis.

Technologies Used
HTML5

CSS3

JavaScript (ES6+)

Local Storage for persistence

Code Explanation
full-rock-paper-scissor-game.html
Sets up the basic HTML structure with a title and links to rock-paper-scissor-game.css for styling.

Includes three button elements, one for "Rock", "Paper", and "Scissor" respectively.

Each button has an onclick attribute that calls the playerGame() JavaScript function with the corresponding move as an argument.

<img> tags within the buttons display the emoji icons for each move.

Three p elements with specific classes (js-result, js-move, js-score) are used to display the game result, the moves made by the player and computer, and the current score.

A "Reset Score" button is included, which, when clicked, resets the score object, removes the score from localStorage, and updates the displayed score.

Links to full-rock-paper-scissor.js at the end of the <body> to ensure HTML elements are loaded before the script tries to access them.

rock-paper-scissor-game.css
Sets a dark background color and white text for the body.

Styles the .title class for the game's heading.

Defines the appearance of the .move-icon (emojis) by setting height and border-radius to make them circular.

Styles the .move-button to be transparent, with a white circular border, fixed width and height, and a pointer cursor on hover.

Styles for .result and .score-css classes to control font size, weight, and margins for the game's output.

The .reset-button is styled with a white background, no border, and specific padding and font size.

full-rock-paper-scissor.js
score Object: Initializes the game score (wins, losses, ties). It attempts to load previous scores from localStorage if available; otherwise, it defaults to all zeros.

updateScoreElement(): A function that updates the text content of the .js-score paragraph to display the current wins, losses, and ties. This function is called initially when the script loads and after each game round.

playerGame(playerMove):

Takes the playerMove (rock, paper, or scissor) as an argument.

Calls pickComputerMove() to get the computer's random choice.

Determines the result of the game (You win, You lose, or tie) based on the classic Rock Paper Scissors rules.

Updates the score object based on the result.

Saves the updated score object to localStorage as a JSON string.

Calls updateScoreElement() to refresh the displayed score.

Updates the .js-result paragraph with the game's outcome.

Updates the .js-move paragraph to visually show the player's and computer's chosen emojis.

pickComputerMove():

Generates a randomNumber between 0 and less than 1.

Based on the randomNumber, it assigns computerMove as 'rock', 'paper', or 'scissor', ensuring an approximately even distribution for each move.

Returns the computerMove.

Setup and Running the Project
Save the three code files (full-rock-paper-scissor-game.html, rock-paper-scissor-game.css, full-rock-paper-scissor.js) in the same directory.

Create an image folder in the same directory.

Place the rock-emoji.png, paper-emoji.png, and scissor-emoji.png image files inside the image folder. (These image files are crucial for the game's visual display.)

Open full-rock-paper-scissor-game.html in your web browser.
