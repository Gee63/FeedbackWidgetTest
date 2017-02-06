## Scaffolding

````
├── app
│   ├── apple-touch-icon-precomposed.png
│   ├── assets
│   │   ├── css
│   │   ├── fonts
│   │   ├── img
│   │   └── js
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── js
│   │   └── scripts.js
│   └── scss
│       ├── mixins
│       ├── modules
│       ├── partials
│       ├── vendor
│       └── style.scss
├── docs
├── grunt-build.command
├── grunt-build.bat
├── grunt-dev.command
├── grunt-dev.bat
├── package.json
├── README.md
├── .editorconfig
├── .gitignore
├── .jshintrc
└── .travis.yml
````

App folder container deployable / working files.

##Concept:

Feedback form for a single paged parallax event website.

Ask user for feedback on the event. Artist selection, venue, date and time, value for money. These questions will have a star/number rating that the user can select.
Have you  attended one of these events before?
If yes what was your experience?
Add a night mode for site. More gimmicky but just for fun. (inject CSS for night and day mode)

*NB – try using radio, checkboxes, range sliders to make the process as quick and simple as possible. This process must avoid irritating the user as much as possible.


##Conditions for showing feedback form:

Has the user scrolled to the bottom of the page? True/false
Has the user clicked on the buy tickets button? True/false
How long has the user been on the site? If more than 1 minute show feedback form.
Allow closing of form but explain to them how they can find it again.
Form button will be displayed in the form of a fob (floating action button) in the bottom right hand side of the screen.

We will achieve a less annoying experience by only showing the form after a user has seen the whole site ie: scrolled to the bottom of the page. 
If the user declines to give feed back on the first attempt the form will close and the floating button will be visible in the bottom right hand corner of the screen.

After the form is declined the first time there will be a timer set to trigger a subtle bounce animation on the feedback button. Reminding the user that we want their feedback
without being too aggressive about it.

Consider adding a checkbox for 'don't ask again' which will hide the button and form for the duration of the session.

Consider 

Once form is submitted the animation will stop / the fob will disappear
Form submission can be stored as a google analytics / google tag manger event in the following structure.
-	Category -> Feedback Form
-	Action -> This will be a custom variable set to the title of the question. Eg: What do you r rate our artist selection?
-	Label -> This will be set to another custom variable which will capture the rating that the user has given to the actions question. Eg the number / star rating.
-	Custom dimensions can be created for the users feedback regarding their experience. Character count limit must be set!!

The benefits of capturing data via Google Analytics is that once data is received you can set up custom dashboards to represent your data in a graph which is easily for anyone to understand and see patterns.

Add tracking for:
-	How many times form was displayed
-	How many times the form was closed
-	How many times the fob was clicked
-	How many times the form was completed / submitted

##Design:

Using material design concepts for fast implementation and slick look and feel.
Consider using collapsible accordions. Try not to overwhelm user with too many questions. Accordion could help in this regard when there are a lot of questions

*feedback icon sucks :( But will suffice for test purposes.
