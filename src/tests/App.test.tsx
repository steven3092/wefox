import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../WefoxApp';
import { datasetBuild } from '../helpers/globe-helpers';


// C:\Users\LT45559\Projets\wefox-app\node_modules\three\examples\jsm\renderers\CSS2DRenderer.js:1
//     ({"Object.<anonymous>":function(module,exports,require,__dirname,__filename,jest){import {

//                              ^^^^^^

//     SyntaxError: Cannot use import statement outside a module

//       at Runtime.createScriptFromCode (node_modules/jest-runtime/build/index.js:1728:14)
//       at Object.<anonymous> (node_modules/globe.gl/dist/globe.gl.common.js:4:24)
describe('If App render correctly', () => {
  test('Button "Show the globe" appear in the App correctly', () => {
    render(<App />);
    expect(screen.getByText('Show the globe')).not.toBeNull();
  });
  
  test('Button "Add a new city" appear in the App correctly', () => {
    render(<App />);
    expect(screen.getByText('Add a new city')).not.toBeNull();
  });
  
  test('Button "Delete" appear in the App correctly', () => {
    render(<App />);
    expect(screen.getByText('Delete')).not.toBeNull();
  });
});


test('If datasetBuild give the result ecpected', () => {
  const array: any = [
    {
        "id": 1,
        "title": "Madrid",
        "content": "Madrid is the capital of Spain and the largest municipality in both the Community of Madrid and Spain as a whole.",
        "lat": "40.41678",
        "long": "-3.70379",
        "image_url": "https://c2.staticflickr.com/2/1269/4670777817_d657cd9819_b.jpg",
        "created_at": "2022-06-20T12:09:47.921Z",
        "updated_at": "2022-06-20T12:09:47.921Z"
    }
  ]
  const expected = [
    {
        "id": 1,
        "content": "Madrid is the capital of Spain and the largest municipality in both the Community of Madrid and Spain as a whole.",
        "color": "#1fdc84",
        "lat": 40,
        "lon": -3,
        "title": "Madrid",
        "value": 0.3,
    }
  ]
  const result = datasetBuild(array);
  expect(result).toEqual(expected);
});



