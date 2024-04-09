export const BASE_URL = 'https://dataneuron-backend-kp89.onrender.com';

export const getData = async () => {
    try {
        const response = await fetch(`${BASE_URL}/task`);
        const data = await response.json();
        // console.log('data:', data.Data)
        return data.Data;
      } catch (error) {
        console.error('Error getting count:', error);
      }
  };



export const addData = async (data) => {
    console.log('addData:', data)
    try {
      await fetch(`${BASE_URL}/task/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
    } catch (error) {
      console.error('Error adding data:', error);
    }
  };
  
  export const updateData = async (id, newData) => {
    console.log('id:', id)
    console.log('newData:', newData)
    try {
      await fetch(`${BASE_URL}/task/update/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newData)
      });
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };
  
  export const getCount = async () => {
    try {
      const response = await fetch(`${BASE_URL}/task/getCount`);
      const data = await response.json();
      return data.Data;
    } catch (error) {
      console.error('Error getting count:', error);
    }
  };