# DataNeuron Frontend Interface

The DataNeuron Frontend Interface facilitates the interaction with the backend API through a user-friendly web application. It features three primary resizable components, each dedicated to specific functionalities: adding data, displaying data with update capabilities, and showing operation counts.

## Base URL

The API is currently deployed at: [https://dataneuron-task2-frontend.vercel.app/]

## Components Overview

### Component 1: Data Entry

This component contains two input fields where users can input their data:

- **Task Input:** For entering the task name.
- **Description Input:** For entering the task's description.

Upon filling out these fields, the user can submit the data, which then gets added to the database through the backend API.

### Component 2: Data Display and Update

All the data added through Component 1 are displayed here in a table format. Each row represents a single entry with the following columns:

- **Task:** Shows the task name.
- **Description:** Shows the task description.
- **ADD:** Each row has an update button, allowing the user to modify the respective data entry. Clicking this button will enable editing fields directly in the table or pop up a modal/dialog box for editing, depending on implementation.

### Component 3: Operation Counts

This component displays the counts of operations performed:

- **Add Count:** Shows the number of times new data has been added.
- **Update Count:** Shows the number of times existing data has been updated.

These counts are fetched from the backend API, offering insight into how frequently data manipulation operations occur.

## General Features

- **Resizable Components:** Each of the three main components is resizable, allowing the user to adjust their size according to their preference or screen real estate requirements.
- **Reset Button:** A dedicated button is available at the top of the interface. Clicking this button resets all components to their default sizes, providing a quick way to revert to the standard layout.

