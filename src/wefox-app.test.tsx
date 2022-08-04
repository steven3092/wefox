import { render, screen, fireEvent } from '@testing-library/react';
import App from './wefox-app';
import { datasetBuild } from './helpers/helpers';

describe('If App render correctly', () => {
  test('Text "Show the globe" appear in the App correctly', () => {
    render(<App />);
    expect(screen.getByText('Show the globe')).not.toBeNull();
  });
  
  test('Text "Add a new city" appear in the App correctly', () => {
    render(<App />);
    expect(screen.getByText('Add a new city')).not.toBeNull();
  });
  
  test('Text "Delete" appear in the App correctly', () => {
    render(<App />);
    expect(screen.getByText('Delete')).not.toBeNull();
  });

  test('Text "Modify" appear in the App correctly', () => {
    render(<App />);
    expect(screen.getByText('Modify')).not.toBeNull();
  });

  test('Text "Id" appear in the App correctly', () => {
    render(<App />);
    expect(screen.getByText('Id')).not.toBeNull();
  });

  test('Text "Content" appear in the App correctly', () => {
    render(<App />);
    expect(screen.getByText('Content')).not.toBeNull();
  });

  test('Text "Lat" appear in the App correctly', () => {
    render(<App />);
    expect(screen.getByText('Lat')).not.toBeNull();
  });

  test('Text "Long" appear in the App correctly', () => {
    render(<App />);
    expect(screen.getByText('Long')).not.toBeNull();
  });

  test('Text "Title" appear in the App correctly', () => {
    render(<App />);
    expect(screen.getByText('Title')).not.toBeNull();
  });

  test('Text "Created At" appear in the App correctly', () => {
    render(<App />);
    expect(screen.getByText('Created At')).not.toBeNull();
  });

  test('Text "Updated At" appear in the App correctly', () => {
    render(<App />);
    expect(screen.getByText('Updated At')).not.toBeNull();
  });

  test('Text "Actions" appear in the App correctly', () => {
    render(<App />);
    expect(screen.getByText('Actions')).not.toBeNull();
  });

  test('Table render properly in the App', () => {
    render(<App />);
    expect(screen.getByTestId('table-element')).not.toBeNull();
  });
});

describe('Click button should open modal', () =>{
  test('If click button "Add a new city" opens the modal', () => {
    render(<App />);
    const button = screen.getByTestId('button-add-city')
    fireEvent.click(button)
    expect(screen.getByText('Info : Add a new city')).not.toBeNull();
  });

  test('If click button "Modify" opens the modal', () => {
    render(<App />);
    const button = screen.getByTestId('button-modify-city')
    fireEvent.click(button)
    expect(screen.getByText('Info : Modify the current city')).not.toBeNull();
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



