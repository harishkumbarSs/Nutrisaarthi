import { useState } from 'react';
import axios from 'axios';

export default function ProfileSetup() {
  const [form, setForm] = useState({
    age: '', gender: '', weight: '', height: '', dietary: ''
  });

  const [profile, setProfile] = useState(null);

  // Change the URL to your deployed FastAPI backend
  const apiUrl = 'https://nutrisaarthi-1.onrender.com/api/profile';

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post(apiUrl, {
        age: +form.age,
        gender: form.gender,
        weight: +form.weight,
        height: +form.height,
        dietary_restrictions: form.dietary
      });
      console.log(response.data);
    } catch (error) {
      console.error("Error saving profile:", error);
    }
  };

  const fetchProfile = async () => {
    try {
      const response = await axios.get(apiUrl);
      setProfile(response.data);
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="p-4 space-y-4 max-w-md mx-auto">
        {['age','gender','weight','height','dietary'].map(key => (
          <div key={key}>
            <label className="block font-medium">{key.charAt(0).toUpperCase() + key.slice(1)}</label>
            <input
              required
              value={form[key]}
              onChange={e => setForm({ ...form, [key]: e.target.value })}
              className="w-full p-2 border rounded"
            />
          </div>
        ))}
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
          Save Profile
        </button>
      </form>
      <button onClick={fetchProfile} className="mt-4 px-4 py-2 bg-green-600 text-white rounded">
        Load Profile
      </button>
      {profile && <div>{JSON.stringify(profile)}</div>}
    </div>
  );
}
