import logo from './logo.svg';
import './App.css';
import ResizableLayout from './Components/ResizableLayout';
import DataForm from './Components/DataForm';
import DataList from './Components/DataList';
import CountDisplay from './Components/CountDisplay';
import { useState } from 'react';

import * as apiService from './API Service/apiService';
import Home from './Components/Home';

function App() {


  const fetchDataFromBackend = async () => {
    try {
      const response = await fetch('https://dataneuron-backend-kp89.onrender.com/task');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data from backend:', error);
      throw error; // Optionally rethrow the error to handle it elsewhere
    }
  };

  const [data,setData] = useState([]);
   
  const reloadData = async () => {
    try {
      // Fetch data from your backend API
      const newData = await fetchDataFromBackend();
  
      // Update the state with the new data
      setData(newData); // Assuming you have a state variable named 'data'
  
      // Optionally, you might want to display a success message or perform other actions
      // For example: setShowSuccessMessage(true);
    } catch (error) {
      console.error('Error reloading data:', error);
      // Optionally, handle errors or display an error message
      // For example: setShowErrorMessage(true);
    }
  };

  const handleAdd = async () => {
    await apiService.addData(data);
    setData('');
    reloadData();
};
  
  return (
    <>
    
      {/* <ResizableLayout>
        <DataForm  />
        <DataList  />
        <CountDisplay />
      </ResizableLayout> */}
      <Home/>
      </>
  );
}

export default App;
