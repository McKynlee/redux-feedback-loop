# Setup
-[x] install/import redux/react-redux/redux-logger
-[x] create DB

# Components

## App
-[x] Router + Routes for each component (no Link to)

## Form One
-[x] Q: How are you feeling today?
-[x] number / dropdown input 1-5, required
-[x] alert user if input not filled with number
-[x] NEXT button
-[x] --> onClick takes you to Form Two (IF input correct) AND
- sends input to Redux Store

## Form Two
-[x] Q: How well are you understanding the content?
-[x] number / dropdown input 1-5, required
-[x] alert user if input not filled with number
-[x] NEXT button
-[x] --> onClick takes you to Form Three (IF input correct) AND
- sends input to Redux Store

## Form Three
-[x] Q: How well are you being supported?
-[x] number / dropdown input 1-5, required
- alert user if input not filled with number
-[x] NEXT button
-[x] --> onClick takes you to Form Four (IF input correct) AND
- sends input to Redux Store

## Form Four
-[x] Q: Any comments you want to leave?
-[x] text input, ok to be empty
-[x] NEXT button
-[x] --> onClick takes you to Review Page AND
- sends input to Redux Store

## Review Page
- Display current feedback values (dispatch from store)
- submit button
- onClick POSTS feedback to server + db/ dispatches to admin page

## Submission Success Page
- THANKS!
- Button to leave new Feedback --> useHistory to Form One AND reset all data


# STRETCH GOALS:

## Updates from Review Page
- user can click on data and edit
- still require number values

## Styling
- Material UI (cards, snackbars, buttons, nav bar, icons, theme)

## Admin Page
- Display all historical feedback
- Order by most recent feedback
- Ability to DELETE any feedback
- Prompt user to confirm prior to deleting (Sweet Alerts) --> delete from db
- Ability to flag a feedback entry for review

## Heroku