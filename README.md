# Airbnb App

This is a project utilizing the reusability aspect of React. Each experience is saved in a data file, in which data can be added/removed. When data is added/removed, the app updates accordingly to accurately represent each object in the data file

## Reusable components

Each online experience is a reusable component. Each object in data.js is mapped to a card component, passing the values of the object as a props to the component. This allows users to add and remove experiences from the site, while maintaining the styling and allowing for the addition of new experiences without having to manually create a component for each one.

Example of Airbnb site populated with three experiences
![site](/public/home.png)