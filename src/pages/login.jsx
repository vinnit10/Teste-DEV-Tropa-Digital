import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'admin@adm.com' && senha === '1234') {
      localStorage.setItem('auth', true);
      navigate('/dashboard');
    } else {
      setErro('E-mail ou senha inválidos');
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9fd] flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-4xl flex overflow-hidden">
        
        <div className="w-full md:w-1/2 p-10">
          <img src="./assets/Vector.png" alt="Logo Tropa Digital" className="h-10 mb-6" />
          <h2 className="text-2xl font-bold text-[#B5461F] mb-1">Bem-vindo de volta</h2>
          <p className="text-sm text-gray-500 mb-6">Entre com sua conta para acessar o painel.</p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="text-sm text-[#B5461F] font-semibold">E-mail</label>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="text-sm text-[#B5461F] font-semibold">Senha</label>
              <input
                type="password"
                placeholder="Digite a senha aqui"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>

            {erro && <p className="text-red-600 text-sm">{erro}</p>}
                
            <button
              type="submit"
              className="w-full bg-[#B5461F] text-white py-2 rounded-full hover:bg-orange-600 transition"
            >
              Enviar
            </button>
          </form>
        </div>

        
        <div className="w-1/2 m-3 mx-10  rounded-xl bg-[#c45224] flex items-center justify-center p-6">
          <img src="./src/assets/img1.png" alt="Ilustração" className="w-full max-w-[400px] rounded-xl pt-5 mt-20 me-40 " />
        </div>
      </div>
    </div>
  );
}

export default Login;
