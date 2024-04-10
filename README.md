# DataNeuron Task1
Resize three compnents
## Base URL

currently deployed at: [https://dataneurontask-resize.vercel.app/]


# DataNeuron Frontend Interface

The DataNeuron Frontend Interface facilitates the interaction with the backend API through a user-friendly web application. It features three primary resizable components, each dedicated to specific functionalities: adding data, displaying data with update capabilities, and showing operation counts.

## Base URL

currently deployed at: [https://dataneuron-task2-frontend.vercel.app/]

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


## Technologies Used

- React
- JavaScript
- Chakra UI
- React-Resizable

## Installation

To set up and run the project locally, follow these steps:

**Step 1:** Clone the repository:

```bash
git clone <repository-url>
```

**Step 2:** Navigate to the project directory:

```bash
cd Dil_Foods/dilfoods_frontend/
```

**Step 3:** Install the required packages:

```bash
npm install
```

**Step 4:** Run the Project:

```bash
npm run start
```

## Usage
Once the project is running locally, you can access this in your web browser. 


## Screens of Project:
### Task-1
![DataNeuronTask1](https://github.com/kiranwankhade/DataNeuron/assets/49937312/21e452e1-ae19-48fa-ac02-7ebabe7f52bf)

![DataNeuronTask2](https://github.com/kiranwankhade/DataNeuron/assets/49937312/be1f4035-37d3-4ae4-a9be-090806cfefbf)


### Task-2
![DataNeuron1](https://github.com/kiranwankhade/DataNeuron/assets/49937312/56f65ac7-234d-4b6c-9f38-5ffac7ca811f)

![DataNeuron2](https://github.com/kiranwankhade/DataNeuron/assets/49937312/c7bbbf5f-6f01-4701-901d-f538d037de6d)
