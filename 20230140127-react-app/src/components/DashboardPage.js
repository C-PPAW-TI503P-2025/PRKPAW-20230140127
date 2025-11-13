import React from 'react';
import { useNavigate } from 'react-router-dom';

function DashboardPage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-indigo-600 flex flex-col items-center justify-center p-8 text-white">
      <div className="bg-white text-gray-800 rounded-2xl shadow-2xl p-10 w-full max-w-md text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">🎉 Login Sukses!</h1>
        <p className="text-lg mb-8">Selamat datang di halaman Dashboard.</p>

        <div className="grid gap-4">
          <button
            onClick={handleLogout}
            className="w-full py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </div>

      <footer className="mt-10 text-sm text-white opacity-75">
        © 2025 Dashboard React — PAW Project
      </footer>
    </div>
  );
}

export default DashboardPage;
