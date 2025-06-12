import React from 'react';
import { FaCircle, FaSignOutAlt, FaUserEdit } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('auth');
    navigate('/');
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md flex flex-col justify-between">
        <div>
          <div className="p-6 border-b border-gray-200">
            <img src="./src/assets/Vector.png" alt="Logo" className="h-8 mx-auto" />
          </div>
          <nav className="mt-6">
            <ul className="space-y-2">
              <li className="pl-6 py-2 hover:bg-orange-100 cursor-pointer">Dashboard</li>
              <li className="text-orange-600 font-semibold bg-orange-100 rounded-r-full pl-6 py-2">Eventos</li>
              <li className="pl-6 py-2 hover:bg-orange-100 cursor-pointer">Equipes</li>
              <li className="pl-6 py-2 hover:bg-orange-100 cursor-pointer">Inscrições</li>
            </ul>
          </nav>
        </div>
        <div className="p-6 border-t border-gray-200">
          <div className="flex items-center space-x-3">
            <img src="./src/assets/avatar.jpg" alt="Avatar" className="w-10 h-10 rounded-full" />
            <div>
              <p className="text-sm font-semibold">Vinicius Teixeira</p>
              <p className="text-xs text-gray-500">Administrador</p>
            </div>
          </div>
          <div className="mt-4 space-y-2">
            <button className="flex items-center text-sm text-gray-600 hover:text-orange-600"><FaUserEdit className="mr-2" /> Alterar dados</button>
            <button onClick={handleLogout} className="flex items-center text-sm text-gray-600 hover:text-orange-600"><FaSignOutAlt className="mr-2" /> Sair</button>
          </div>
        </div>
      </aside>

      {/* Main  */}
      <main className="flex-1 p-8 overflow-auto">
        <h2 className="text-lg text-gray-600">Bem vindo de volta, <span className="font-bold">Vinicius Teixeira</span></h2>
        <h1 className="text-2xl font-semibold text-orange-600 mt-2 mb-6">Todos eventos</h1>

        <div className="bg-white p-6 rounded-lg shadow border">
          <div className="flex justify-between mb-4">
            <input type="text" placeholder="Buscar eventos" className="border rounded px-4 py-2 w-1/3 text-sm" />
            <button className="bg-orange-600 text-white rounded px-4 py-2 text-sm">+ Inserir novo</button>
          </div>
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="text-orange-400 border-b">
                <th className="py-2">Nome do evento</th>
                <th className="py-2">Total de equipes</th>
                <th className="py-2">Status</th>
                <th className="py-2">Data</th>
                <th className="py-2"></th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-2">Clube do Laço Coração Pantaneiro</td>
                <td className="py-2 text-blue-600 font-medium">10</td>
                <td className="py-2 flex items-center text-green-600"><FaCircle className="text-green-500 mr-1 text-xs" /> Ativo</td>
                <td className="py-2">09 a 11 de Junho</td>
                <td className="py-2 text-right pr-4 text-gray-400">•••</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2">Clube do Laço Coração Pantaneiro</td>
                <td className="py-2 text-blue-600 font-medium">10</td>
                <td className="py-2 flex items-center text-green-600"><FaCircle className="text-green-500 mr-1 text-xs" /> Ativo</td>
                <td className="py-2">09 a 11 de Junho</td>
                <td className="py-2 text-right pr-4 text-gray-400">•••</td>
              </tr>
            </tbody>
          </table>

          {/* Paginação */}
          <div className="flex justify-end mt-4 items-center space-x-2">
            <button className="text-sm text-gray-600">Anterior</button>
            <button className="w-8 h-8 rounded-full bg-orange-600 text-white text-sm">1</button>
            <button className="w-8 h-8 rounded-full border text-sm">2</button>
            <button className="w-8 h-8 rounded-full border text-sm">3</button>
            <button className="text-sm text-gray-600">Próxima</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
