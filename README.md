# Rock Paper Scissors Lizard Spock2

This is a simple Rock Paper Scissors Lizard Spock game implemented using JavaScript, HTML, and CSS.

## *My Goals and Description*
---
The purpose of this site is to show that i have created a functional game within Java script that holds up to a decent standard. The actual site itself is a spin on rock papare sicissors with two other options that the player can uses to play againts the computer.

the live site is linked here - https://dom123x456.github.io/Rockpaperscissors2/

# **Contents**

- UX Design
- My Game across different devices
- Technologies used
- Website Features
- Testing 
- Bugs and Issues
- Material used and References


## UX Design

The game provides a user-friendly interface with buttons for each choice, allowing players to easily make their selections. The layout and styling are designed to be visually appealing and intuitive, enhancing the overall user experience.

## My Game across different devices

The game is designed to be responsive and compatible with various devices and screen sizes. Whether you're playing on a desktop, laptop, tablet, or mobile phone, the game should adapt and display properly for optimal gameplay on different devices.

## Technologies Used

The game is built using the following technologies:

- HTML: Provides the structure and markup of the game.
- CSS: Handles the styling and layout of the game elements. The following colors were used:
    - Background color: #F4F4F4
    - Button background color: #4CAF50 (Rock), #2196F3 (Paper), #FF5722 (Scissors), #FF9800 (Lizard), #9C27B0 (Spock)
    - Button text color: #FFFFFF
    - Result text color: #000000
    - Scoreboard text color: #000000
- JavaScript: Implements the game logic and interaction.

## Website Features

- Player vs. Computer Mode: Play against the computer and test your skills.
- Tally System: Keep track of the scores with a tally system.
- Round Result Display: Each round's result is displayed on the screen.
- Winning Score: The first player to reach 5 points wins the game.

## Testing
***Validation***
The game has been tested on various browsers and devices to ensure cross-browser compatibility and responsiveness. Extensive testing has been performed to verify that the game logic is working correctly and that the user interface functions as expected.
***Desktop view***


![image](https://github.com/Dom123x456/Restaurant_Management_System_Project_Django/assets/108178672/12873d68-7cdb-4b6a-a602-94ac7a1dec95)


***Mobile view***


![image](https://github.com/Dom123x456/Restaurant_Management_System_Project_Django/assets/108178672/4a3305cc-309e-41cd-b3aa-07d98f4f1546)


## Bugs and Issues

Had one issue were the lack of a const winningScore = ; was causing for my buttons to not work as intended and instead froze up the site.This was correctly swiftly by adding const winningScore = 5; to set the value

![image](https://github.com/Dom123x456/Restaurant_Management_System_Project_Django/assets/108178672/460e344b-9984-46b4-96dd-f8942b7264ae)

had issue in validator where i forgot to add lang  = "en" in my html

## Materials Used and References

## Gameplay

The game follows the rules of Rock Paper Scissors Lizard Spock, an extension of the classic Rock Paper Scissors game. The available choices are:

- Rock
- Paper
- Scissors
- Lizard
- Spock

The player can choose one of these options by clicking the corresponding button. The computer will also randomly choose an option. The result of each round will be displayed on the screen, indicating whether the player won, lost, or if it was a tie.

## Tally System

The game includes a tally system to keep track of the scores. At the start of the game, both the player and the computer have a score of 0. The score will be updated after each round based on the result. The first player to reach 5 points wins the game.

## Player vs. Computer

The game supports a player vs. computer mode. The player can compete against the computer by making their choices and playing rounds. The game will continue until one of the players reaches the winning score of 5.

# **Material used and References**
I uesed refrence material from who is a fellow student whos work I used as refrence material to help with the construction of my own game.
another would be from Competent Programming YouTube channel that i used to help construct my javascript with some helpful input. 

Links below.

https://www.youtube.com/c/CompetentProgramming

https://github.com/Robrowno/rock-paper-scissors


## Usage

To play the game, simply open the `index.html` file in a web browser that supports JavaScript.



