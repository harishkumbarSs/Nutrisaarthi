import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function ProfileSetup() {
  const [form, setForm] = useState({
    age: '', gender: '', weight: '', height: '', dietary: ''
  });
  const nav = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://nutrisaarthi-1.onrender.com/api/profile', {


        age: +form.age,
        gender: form.gender.trim(),
        weight: +form.weight,
        height: +form.height,
        dietary_restrictions: form.dietary.trim()
      });

      console.log('Profile saved:', response.data);
      nav('/dash');
    } catch (err) {
      console.error('Error saving profile:', err);
      alert('Failed to save profile. Please try again.');
    }
  };

  return (
    <form onSubmit={onSubmit} className="p-4 space-y-4 max-w-md mx-auto">
      {['age', 'gender', 'weight', 'height', 'dietary'].map((key) => (
        <div key={key}>
          <label className="block font-medium">
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </label>
          <input
            required
            value={form[key]}
            onChange={(e) => setForm({ ...form, [key]: e.target.value })}
            className="w-full p-2 border rounded"
          />
        </div>
      ))}
      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
        Save Profile
      </button>
    </form>
  );
}
