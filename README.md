# Thought Saver Coding Challenge

Recommended time
- 10 minutes reading instructions 
- 1 hour coding
- 15 minutes answering free text questions

## Coding Goal

One of Thought Saver's core features is flash cards. Flash cards are a way of learning, where cards have two sides: a front, e.g. "What is the French word for ‘yes’?", and a back, e.g. "oui".
Your task is to create a simplified version of Thought Saver, where users can review cards. It should have the following screens:

### Card List

A list of all the cards, with fronts and backs shown, and navigation buttons to go between 'quiz' mode and 'card list' mode

![Card List Page](/wireframes/CardListPage.png)

### Quiz Page

On clicking 'quiz', go to a quiz page, where the user quizzes on every card. Each card is shown one at a time, in the following steps:

- The card front, with one button saying “Reveal Back”
  ![Quiz Card Front](/wireframes/QuizCardFront.png)
- After pressing "Reveal", the card back appears, with two buttons: "Remembered" and "Didn’t remember"
  ![Quiz Card Front](/wireframes/QuizCardBack.png)

The user goes through all of the cards, pressing ‘remembered’ or ‘didn’t remember’. Once they press ‘remembered’, the card is not shown again. If they press ‘didn’t remember’ the card is sent to the back of the cards that remain to be shown and shown again at the end of the quiz.

Once the cards are all done, the user sees a “Congratulations, you’re done!” screen
![Quiz Finished](/wireframes/QuizFinished.png)

This is the same as our existing embed feature. [Here](https://app.thoughtsaver.com/embed/SCfLnsdRF8) is a live demo if it helps make this clearer.

### Further instructions

- The app can, but doesn’t need to look exactly like the wireframe images above
- Use any framework (React, Vue, Svelte etc) you like, or no framework if you prefer
- TypeScript is preferable if you know it, but Javascript is OK if you don’t
- We’re more interested in coding style, structure, and thought patterns than having all the features above - you don't necessary need to finish everything. Get as far as you can in the recommended times, focusing on clean code over feature completeness. The challenge is not timed, but out of respect for your time we recommend the times above.
- flashcards.ts and flashcards.js in this repository contain some flashcard fronts/backs you can use. Both files are the same, use whichever you like. 
- You don't need to set up a database or any backend. 
- Please fork this repository _privately_, and share the repository with the github users willfind and dgmp88

  - Create a new repository using the [Github Import feature](https://github.com/new/import)
  - Enter https://github.com/dgmp88/ThoughtSaverCodingChallenge2023 as the clone URL
  - _Select 'private'_
  - Begin import (this should take less than a minute)

- Feel free to leave comments in the app saying what you might do with more time (or write them in the answer to the first free text question if you prefer)

- Edit this README.md with instructions for how to run your application

# How to run this app

Edit this section with instructions. e.g.

Setup with `npm install`
Run with `npm run dev`

# Free Text Questions (15 minutes)

Please answer the following questions.

## What did you like/not like about your coding solution? What would you improve on with more time? (max 100 words)

**Answer goes here, feel free to answer in bullet points**

## Assume you wanted the data to be stored permanently for the user. What database might you use? Why? What might some core tables and their schemas look like? (100 words max)

**Answer goes here, feel free to answer in bullet points**

## Where/how might you deploy/manage the database? (50 words max)

**Answer goes here, feel free to answer in bullet points**

## What other technology that you like would you likely use if you were making this app more fully featured? Why? (100 words max)

NB: We're not looking for a comprehensive/exhaustive list of everything, just a flavour of what technologies you like and work with.

e.g. any of css/component libraries, testing libraries, linting tools, state management tools, frontend frameworks, deployment tooling like vercel, etc

**Answer goes here, feel free to answer in bullet points**
