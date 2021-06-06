# Coach Helper

View the live project here. [link](https://pjdijxhoorn.github.io/milestone-project-2/)

This is A website to help Fieldhockey coaches solve a real life problem with their coaching. I am a field hockey coach,
and a problem that I kept running in to as well as most of my colleagues is the subbing(switching) of players and how to
keep this as fair as possible. This website is designed to solve that problem by listing all the players and giving them
stopwatches for both time played and time on the bench. accessibility is important because as coach you don't want to
drag too much equipment around there for this website is designed to be able to work well on phone, tablet and computer.
It is designed with a phone in mind, for (beginning) coaches will probably use phones or ipads for their coaching on the
field.

![alt text](assets/images/website.PNG?raw=true)

## User Experience (UX)

-   ## User stories

    -   #### First Time Visitor Goals

        1. As a First Time Visitor, I want to know what the site is about and how the site works. The expected first
           time visitors would be (beginning) coaches for fieldhockey.  
           I want them to understand that this is a tool for them to use to time players field and bench time.
        2. As a First Time Visitor, I want to have no trouble to find all the information and functions of the website
           therefore I want a clear cut navigation and clear explanations of the functions of the site.
        3. As a First Time Visitor, I want to discover how the timer functions work.

    -   #### Returning Visitor Goals

        1. As a Returning Visitor, I want to use the timer function.
        2. As a Returning Visitor, I want to be able to easily switch bench to field timers and vice versa.
        3. As a Returning Visitor, I want to be able to make a players list.
        4. As a Returning Visitor, I want to be able to use this website on a phone and tablet while on the hockey
           pitch.

    -   #### Frequent User Goals
        1. As a Frequent User, I want to see results of matches.
        2. As a Frequent User, I want to store my team.
        3. As a Frequent User, I want to see additional functionality

    ## Design
    -   ### Colour Scheme
        Within this website There are only 3 colors used. two variations of green. One button with a reddish color. The
        usages of only these 2 variations of green are to not distract the user of the functions of this website. Green
        was used as main color for this is the color of most of the fields and give a familiar and calming feeling to
        users.

        ![alt text](assets/validation/Colors.png?raw=true)

        For text the colours black and white were used. White was used for all the menubar buttons. Black was used for
        all the content text.  
        To ensure that the site is usable for colorblind people the colors were tested with
        https://contrastchecker.com/.

        The color test - [View](assets/validation/my-wcag-color-samples.pdf)

    -   #### Typography
        The Font-family's used on the website are 'Aldrich', with as back-up sans-serif and 'Roboto Slab', with back-up
        serif. Aldrich is chosen for the menu-bar for its block/ bold typeface this gives it a Sporty look. Roboto Slab
        was chosen for its easily readability and modern style.

-    ### Imagery


-   ### Wireframes

    - Wireframe for Coach helper - [View](assets/wireframes/wireframe pdf.pdf)

## Features

- ### general

    - The navigation bar has big buttons, so it is easy to navigate even on mobile devices.
    - The buttons on the site are interactive for computer users to give the users visual conformation. when they mouse
      over.

    - ### Home
        - The Home page has 2 buttons one to add players and one to remove players from a table. With these buttons you
          can build a team that will be displayed in a table beneath the buttons. the names that you fill in will be
          used on the next pages as well for all the other functions.

    - ### Timer
        - The timer page has 2 timers for every player. 16 players in total for 16 is the maximum amount of players that
          is allowed to participate within any given match. The names of the homepage will be shown again. If not enough
          players will be made then the names will be player1 ,player2 etc. Every player will have 1 toggle switch that
          switches between a bench timer and a field-timer. For a player is either playing or is on the bench. The
          toggle switches are all switched on towards the field-timer. This will save / time actions for the coach
          Because the coach normally starts with 11 players in the field. On the bottom there are 3 buttons and a
          mainTimer. The main timer will show the total time that elapsed. The start button wil start the main timer,
          and the timers that the toggle switches are pointing add. the stop button will stop all the timers, and the
          reset button will reset all timers. While the timers are running, and you switch from a bench to a field timer
          the bench-timer resets. This will give the coach a time that the player is on the bench at that sub and not
          the overall bench time. Which is more useful for a coach to know for than he can see how long the player has
          rested and can be subbed in again.
        - On bigger screens the timer page also shows a field with drag-able name boxes to keep track of the positions
          of all the players in the field. These names again come from the function from the home-page.

    - ### Results
        - the results page will display the field time and overall time next to each other for each player. this is a
          timestamp of the timer-page timers. But without the buttons and timers to remove the visual input for users.

    - ### future features
        - The *3 players with most playtime will have their timers turn red to show who is getting fatigued.
        - Counters for goals for opponent and own team.
        - Players on the bench will turn green after 5*min to show that the have rested and can be subbed
        - A input to make your own goal and create counters for that goal, for example how many times does the opponent
          come into our 25 area.
        - Remove stopwatches on a tablet and pc and add timers to the drag-able blocks. When the blocks enter the field,
          the field-timers will run. When removing the blocks from the field the bench timers will run.
        - On the results page replace the overall time with total bench time
        - a way to store a team/ names for the next match.
        - refactor the code so that it is using code more dry. The code is working but due to time constrains some of
          the more complex code is repeated and there is room to improve.
        - A way to store results over a longer time. Maybe with a screenshot of the results or better a results page
          that also counts time over multiple matches.
        - Testing with for example jasmine to test the more complex code on the timer functions.

## Technologies Used

- ### Languages Used

    - [HTML5](https://en.wikipedia.org/wiki/HTML5)
    - [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
    - [Javascript](https://en.wikipedia.org/wiki/JavaScript)

    - ### Frameworks, Libraries & Programs Used
        1. [Bootstrap 5.0.x:](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
            - Bootstrap was used to create the rows and columns and to make the website more responsive.
        1. [Hover.css:](https://ianlunn.github.io/Hover/)
            - Hover.css was used for all the menu buttons.
        1. [Google Fonts:](https://fonts.google.com/)
            - Google fonts was used to get the 'Aldrich' & 'Roboto Slab' fonts into the style.css file.
        1. [Font Awesome:](https://fontawesome.com/)
            - Font Awesome was used for all the menu-bar icons and all the social links of this website.
        1. [GitHub:](https://github.com/)
            - GitHub was used to store all the code, and the code was pushed from Webstorm.
        1. [Jquery:](https://jquery.com/)
            - jquery was used to simplify the javascript.
        1. [Mockplus classic:](https://www.mockplus.com/)
            - was used to make the wireframes.

## Testing

Webstorm has a build-in code validator, So the code was checked at the moment it was written. However, the code was also
tested using the W3C Markup Validator, The W3C CSS Validator and the JShint validator Services, to make sure that there
weren't any errors in the project.

[W3C Markup Validator](https://validator.w3.org/)
![alt text](assets/images/html test.PNG?raw=true)

[W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input)
![alt text](assets/images/csscheck.PNG?raw=true)

[jshint javascrip validator](https://jshint.com/)
![alt text](assets/images/javascripttest.PNG?raw=true)

### Testing User Stories from User Experience (UX) Section

-   #### First Time Visitor Goals
    1. As a First Time Visitor, I want to know what the site is about and how the site works. The expected first time
       visitors would be (beginning) coaches for fieldhockey.  
       I want them to understand that this is a tool for them to use to time players field and bench time.

       1.On the first page there is a explanation what the website does and how to create a players-list 2.On the timer
       page there is 1 text-blocks to explain the functions on that page. For ipad screen size or up there is a second
       text-block that explains the field, and the drag-able blocks.

    2. As a First Time Visitor, I want to have no trouble to find all the information and functions of the website
       therefore I want a clear cut navigation and clear explanations of the functions of the site.

       1.All the pages have a minimalistic build so to not distract users. 2.There is a nav-bar at the top which is
       sticky so that the users can always go to anyt part of the site with just one click.

    3. As a First Time Visitor, I want to discover how the timer functions work.

       1.On the timer page there is a explanation of the timer and how it works. 2.To make it more intuitive I added
       icons to the buttons for stop, start and reset. 3.To make it more intuitive I made the toggle-switch so that when
       you slide it to a side that timer starts running.

-   #### Returning Visitor Goals
    1. As a Returning Visitor, I want to use the timer function.
       
        1.the timer is on the timer page and is working well.
       
    2. As a Returning Visitor, I want to be able to easily switch bench to field timers and vice versa.
       
        1. switching players is just 1 swipe of a button, and the timers switch from bench to field and the other way around.
           Note that the main timer should be running to start any timers this is done by pressing the start button.
        
    3. As a Returning Visitor, I want to be able to make a players list.
        
        1.on the first page you can make a player-list by typing in the player names and hitting the add player button. 
       When you made a mistake, or you want to switch players you can delete players by the delete icon behind the names
       of the players.
       
    4. As a Returning Visitor, I want to be able to use this website on a phone and tablet while on the hockey pitch.

        1.the website is build with mobile phone and ipad in mind. For it is expected that most (beginning)coaches 
       will not have something bigger then an ipad with them. It does work on pc.
       the main function of timing is build mostly for phones for it can be expected that all coaches have at least 
       a phone. this makes it accesabilty for coaches high and there for its useability high as well 
       
-   #### Frequent User Goals
    1. As a Frequent User, I want to see results of matches.

       1.On the results page you can see the total match time and the time played for each player.

    2. As a Frequent User, I want to store my team.

       1.Storing the team isn't possible yet but this is a feature that will be coming up.

    3. As a Frequent User, I want to see additional functionality
    
        1. As described in the future features there will be more features in the future. I will be in constant dailoge
           with users on my field hockey club at what they are still missing and what could be improved.

### Further Testing

- The website was tested on Google Chrome, Microsoft Edge .
- The website was tested with a android phone, a desktop, a laptop and an ipad. The pages were tested vigorously to make
  sure that all the links were working.
- The pages were tested vigorously to make sure that all the links were working.
- the site was tested on if all the functions / interactive parts were working.

### know bugs

- When adding the same name to the player list several times, hinders removing that name.
- While using webstorm the jquery functions of .hide gives inline errors.
- When removing names from the player list the names stay in the other two tables however they can be overwritten when
  adding new names.

## Deployment

### GitHub Pages

The project was deployed to GitHub Pages using the following steps...

1. First sign in to GitHub and locate the [GitHub Repository](https://github.com/pjdijxhoorn/milestone-project-2)
2. Under the github logo left upper corner you have the repository name. Under that is menu bar. Here you click
   settings.
3. On this new page you get a vertical menu bar here you click on pages.
4. When you clicked pages you will see the "GitHub Pages" Section. you click the branch button under "source" instead of
   none you select "master" and, press save.
5. The page should refresh itself.
6. After this you should see the deployed site [link](https://pjdijxhoorn.github.io/milestone-project-2/).

### Forking the GitHub Repository

- When you fork a repository on Github you make a copy of the original. By doing this you can view and make changes
  without the original changing. You can fork the repository with these steps:

1. Locate the  [GitHub Repository](https://github.com/pjdijxhoorn/milestone-project-2) After you logged in.
2. On the left top of the site you will find the fork button press it.
3. This should provide you with a copy of the repository in your own github account.

### Making a Local Clone

1. Sign in/up to Github and go to the main page of the
   repository [GitHub Repository](https://github.com/pjdijxhoorn/milestone-project-2)
2. Above the files click the button for Code.
3. Copy the link under the HTTPS tab.
4. Open your code editor.
5. Open a new work directory, or a existing one where you want the directory to be created.
6. In the command line write `git clone`, and after that paste the URL you from Step 3 and hit enter.

        Cloning into 'milestone-project-2'...
        remote: Enumerating objects: 258, done.
        remote: Counting objects: 100% (258/258), done.
        remote: Compressing objects: 100% (118/118), done.
        Receiving objects:  71% (184/258)
        Receiving objects: 100% (258/258), 1.15 MiB | 4.22 MiB/s, done.
        Resolving deltas: 100% (117/117), done.

## Credits

### Code

- https://www.kirupa.com/html5/drag.htm#tutorialInformation from kirupa was used to create the base of the code for the
  drag-able blocks.
- https://jsfiddle.net/dalinhuang/op8ae79j/  from Dalin Huang was used for the base of the stopwatches code.

### Content

- All text content was written by the developer

### Acknowledgements

- My Mentor for the feedback and support.
- The trainers coaches of the field Hockeyclub Oranje-Rood, For the talks about what problems the run into while
  coaching.
- The teams of field Hockeyclub Oranje-Rood for testing the website and its usefulness.
