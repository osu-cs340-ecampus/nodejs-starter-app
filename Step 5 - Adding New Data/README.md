# Node.js - Step 5 - Adding New Data

At this point, we are able to effectively retrieve data from the database, and present it in a meaningful manner to the user of the application. We can now explore how to interact with that data.

## Staying Organized

Create a new folder in the root of your project called `public`. Inside of that new folder, create three new folders called `img`, `css`, `js`. These three folders will hold images we serve, style sheets we use, and scripts we implement, respectively, in our applicaiton. At this point, your project directory structure should look like this:

```
├─ app.js                         
├─ .gitignore (not required, but smart if you are using Git for version control)
├─ public
│   ├ img
│   ├ css
│   └ js
├─ views
│   ├ index.hbs
│   └ layouts
│      └ main.hbs
├─ node_modules  
└─ database
    ├ bsg_db.sql
    └ db-connector.js
```

We are doing this because the next step, depending on the path you take, will require some DOM manipulation.

# Method 1 - Adding New Data via Asynchronous Javascript and XML (AJAX)

This method will require some Document Object Model (DOM) manipulation. This is something that is covered thoroughly in CS 290, so this guide assumes you have a handle on the basics.

## Modifying `index.hbs`

Open up `/views/index.hbs` in your favorite text editor. We need to create a few text boxes, and a button to submit the data to the database. When you are done, your `index.hbs` should look something like this:

```html
<!-- /views/index.hbs -->

{{!-- Form to add a record to the table  --}}
<p>To add a new person, please enter their information below and click 'Submit'!</p>
<form id="add-person-form">
    <label for="input-fname">First Name: </label>
    <input type="text" name="input-fname" id="input-fname">
    
    <label for="input-lname">Last Name: </label>
    <input type="text" name="input-lname" id="input-lname">

    <label for="input-homeworld">Homeworld: </label>
    <input type="number" name="input-homeworld" id="input-homeworld">

    <label for="input-age">Age: </label>
    <input type="number" name="input-age" id="input-age">

    <input type="submit">
</form>

{{!-- Embed our javascript to handle the DOM manipulation and AJAX request --}}
<script src="./js/add_person.js"></script>
```

## Modify `app.js`

We need to make two separate changes in our `app.js`. The first change will be in the SETUP section, directly after the line that says `var app = express();`:

```javascript
// app.js - SETUP section

app.use(express.json())
app.use(express.urlencoded({extended: true}))
```

The second change will be to create a new route, but this one will be a POST route. So instead of `app.get()` we will use `app.post()`. Here's the example:

```javascript
// app.js - ROUTES section

app.post('/add-person', function(req, res) 
{
    // Capture the incoming data and parse it back to a JS object
    let data = req.body;

    // Create the query and run it on the database
    query1 = `INSERT INTO bsg_people (fname, lname, homeworld, age) VALUES ('${data.fname}', '${data.lname}', ${parseInt(data.homeworld)}, ${parseInt(data.age)})`;
    db.pool.query(query1, function(error, rows, fields){

        // Check to see if there was an error
        if (error) {

            // Log the error to the terminal so we know what went wrong, and send the visitor an HTTP response 400 indicating it was a bad request.
            console.log(error)
            res.sendStatus(400);
        }
        else
        {
            // If there was no error, send the visitor a 200, indicating the query was OK.
            res.sendStatus(200)
        }
    })
});