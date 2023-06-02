# Thought Saver Coding Challenge

Recommended time
45 minutes coding
15 minutes answering free text

## Coding Goal (45 minutes)

One of [Thought Saver's](app.thoughtsaver.com) core features is Flash Cards. Flash cards are a way of learning, where cards have two sides: a front, e.g. "What is the French word for ‘yes’?", and a back, e.g. "oui".
Your task is to create a simple flash card app, where users can review cards. There should be two pages:

1. A list of all the cards, with fronts and backs shown.
   ![Card List Page](/wireframes/CardListPage.png)
2. A quiz page, where the user goes through every card in any order. Each card is shown one at a time, in the following steps:
   a. The card front, with one button saying “Reveal Back”
   ![Quiz Card Front](/wireframes/QuizCardFront.png)
   b. After pressing "Reveal", the card back appears, with two buttons: "Remembered" and "Didn’t remember"
   ![Quiz Card Front](/wireframes/QuizCardFront.png)
3. The user goes through all of the cards, pressing ‘remembered’ or ‘didn’t remember’. Once they press ‘remembered’, the card is not shown again. If they press ‘didn’t remember’ the card is sent to the back of the cards that remain to be shown and shown again at the end of the quiz.
4. Once the cards are all done, the user sees a “Congratulations, you’re done!” screen
   ![Quiz Finished](/wireframes/QuizFinished.png)

### Further instructions

- The app can, but doesn’t need to look exactly like the wireframe images above
- Use any framework (React, Vue, Svelte etc) you like, or no framework if you prefer
- TypeScript is preferable if you know it, but Javascript is OK if you don’t
- We’re more interested in coding style, structure, and thought patterns than having all the features above. Get as far as you can in about 45 minutes, focusing on clean code over feature completeness. The challenge is not timed, but out of respect for your time we recommend spending ~10 minutes reading these instructions and setting up, and 35 minutes coding, before moving on to the plain text questions.
- flashcards.ts and flashcards.js in this repository contain some flashcard fronts/backs you can use.
- Please fork this repository _privately_, and share the repository with the github users willfind and dgmp88

  - Create a new repository using the [Github Import feature](https://github.com/new/import)
  - Enter https://github.com/dgmp88/ThoughtSaverCodingChallenge2023 as the clone URL
  - _Select 'private'_
  - Begin import (this should take less than a minute)

- Edit this README.md with instructions for how to run your application

# How to run this app

Edit this section with instructions. e.g.
Setup with `npm install`
Run with `npm run dev`

# Free Text Questions (15 minutes)

Please answer the following questions.

## Assume you wanted the data to be stored permanently for the user. What database might you use? Why? What might some core tables look like? (100 words max)

## What other technology that you like would you likely use if you were making this app more fully featured? Why? (100 words max)

- NB: We'er not looking for a comprehensive/exhaustive list of everything, we're just curious for a flavour of what technologies you like and work with. e.g. any of css/component libraries, testing libraries, linting tools, state management tools, frontend frameworks, deployment tooling like vercel, etc
