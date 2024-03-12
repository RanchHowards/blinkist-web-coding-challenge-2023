# blinkist-web-coding-challenge-2023
I went with a rather lean approach to this challenge & decided to complete the task with Vanilla JS and a touch of Lodash.  I realize that a modern app would require a modern framework and much more, but Vanilla JS was more than enough to complete this task in a fun and sleek way 😉

## higher-level thoughts
- any framework would be quite helpful in creating a more expansive app
- adding TypeScript would provide some type security
- my choice of simply setting the "display" property to "block" for the A/B test could be done in any number of ways - this was a quick solution that got the job done
- the CTR can easily be calculated with the data we have saved.  We simply take the number of users who have a "signup" event saved, divided by the total number of unique users

## considerations
- I was thinking of the content editors & the fact that they will need to tinker with the code that is one reason this solution is a simple as can be & ideal for those without much coding knowledge
- I didn't touch the CSS because it didn't seem necessary & is a never-ending rabbit hole.

## assumptions
- only one user per browser is visiting the page

## limitations
- I created some extremely basic IDs - these should be made more unique
- I saved the view counts & clicks to local storage - these should be sent to an external API

### link to git repo 
[Github Repo](https://github.com/RanchHowards/blinkist-web-coding-challenge-2023)

### link to deployed solution

[Deployed Sandbox](https://codesandbox.io/p/sandbox/blinkist-web-coding-challenge-2023-forked-ndlfhn)
