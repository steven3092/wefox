# Wefox App is available at :

https://frabjous-crostata-beaebb.netlify.app/

To get data from the docker image provided by Wefox,
run locally the container by running the command `docker-compose up` 
and then `npm start` to run the server on the port 3000.

You'll get data in the app on your browser.

## Via the git clone command:

You can get the project by cloning this one : `https://github.com/steven3092/wefox.git`

When you get the project directory, you can run:

### `npm start`

It'll run locally the app in the development mode on the port 4000.
(Open [http://localhost:4000](http://localhost:4000) to view it in the browser)

You also have to run the docker image as explained just above.

### `npm test`

You can run tests with command `npm test`.

There is an issue because of the react-globe.gl library. 
react-globe.gl uses three.js and when Jest try to compile the code in its virtual DOM,
it is not able to understand the js or ts file imported inside because of ternary expression.
I've tried to see with Babel but still and it works in production because the browser is able to read ternary expressions.

So I didn't do test on the globe, but I did on the table.

I recommend to put on comment (in src/wefox-app.tsx) : 

`{isShowingGlobe
        && (
        <Globe
        setIsShowingGlobe={setIsShowingGlobe}
        listOfCities={listOfCities}
        />
        )}`
 
And then you can run the tests with the command `npm test`.

Hope you'll enjoy it !

PS: If you have any idea with the issue I have with the globe by running test, do not hesitate.
