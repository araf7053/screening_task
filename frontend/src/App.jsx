import { useState } from "react";
import axios from 'axios';

function App() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleGreet = async () => {
    if (!name) {
      setError('Please enter your name.');
      setMessage('');
      return;
    }

    try {
      const response = await axios.get("https://screening-task-backend-ivcq.onrender.com", {
        params: { name },
      });
      setMessage(response.data.message);
      setError('');
    } catch (err) {
      if (err.response) {
        setError(err.response.data.error || 'An error occurred.');
      } else {
        setError('Failed to fetch the greeting.');
      }
      setMessage('');
    }
  };

  return (
    <div className="h-screen bg-gray-800 flex flex-col justify-center items-center">
      
      <div className="flex space-x-4">
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2 w-60 placeholder-black-300 focus:outline-none focus:ring-2 focus:ring-green-500 rounded"
        />
        <button
          onClick={handleGreet}
          className="text-white bg-green-600 p-2 cursor-pointer rounded hover:bg-green-700 transition duration-300"
        >
          Get Greeting
        </button>
      </div>

      
      <div className="mt-4 w-full text-center">
        {message && <p className="font-extrabold text-white block">{message}</p>}
        {error && <p className="text-red-500 block">{error}</p>}
      </div>
    </div>
  );
}

export default App;
