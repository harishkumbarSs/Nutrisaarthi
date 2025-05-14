import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Dashboard() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8000/api/profile')
      .then(r => setProfile(r.data))
      .catch(() => setProfile(null));
  }, []);

  if (!profile) return <p className="p-4">Loading profile…</p>;

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-2">Your Profile</h1>
      <ul className="bg-gray-100 p-4 rounded space-y-2">
        {Object.entries(profile).map(([k,v]) => (
          <li key={k}>
            <strong>{k.replace('_',' ').toUpperCase()}:</strong> {v}
          </li>
        ))}
      </ul>
    </div>
  );
}
