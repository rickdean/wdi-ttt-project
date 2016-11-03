[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# TTT Project Notes

## Introduction

Welcome to Tic-Tac-Zen.  In this game each player, who wishes to have their game stats tracked, is required to sign-up, and to then sign-in.  The game will then track who has won and allow a sign-in player to view their stats.

## The Layout

One mistake I made was jumping the gun and beginning the project before learning about Bootstrap.  This caused me to do away with my original plan and to utilize what Bootstrap had to offer (navbar, etc).  I did encounter some problems with sizing the boxes but once I had tyhat solved I moved onto the aesthetics of the site.  My goal was not to spend too much time on the look and feel as the game logic would provide more than enough challenges.  I went with a soothing, zen-like interface and tried to remain consistent with the styling, font, colors, etc.

## Code Separation

I went with the recommended modular approach and utilized the template structure that was provided.  This allowed me to keep the HTML, SCSS, and Javascript code separate and compartmentalized.  One regret I have is in not separating the events.js for the game state and player authorization.  This may have made for a cleaner solution.

## The Game Logic

I followed a checklist of the requirements when approaching a solution.  After looking and vetting various solution ideas I went with one similar to what I had previosuly envisioned.  Instead of utilizing an array (more on the dilemma I faced with that in the section on 'gamestate') I assigned values (X or O) to each box as it was checked and then evaluating the game status to determine the winner.  This seemed to work well and also enabled me to ensure that if a div's set value wasn't 'null' the box couldn't be replayed.

## Authorization

The game authorization took a little time and I stuck with my original goal of meeting the specs for sign-up, sign-in, change password, and sign-out.  There is more I would have liked to accomplish in this section, such as specialized messages, but time did not allow for this.  I would like to continue with this piece as it is evident in the code that I had started to do so.

## The Game State (Creation, Stats, etc)

I saved the Game State for last, assuming that it would be an easier piece to tackle.  I was wrong.
