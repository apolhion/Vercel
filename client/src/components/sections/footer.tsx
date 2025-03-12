import { FC } from 'react'
import { Link } from 'wouter'
import { SiRealme9, SiCocacola } from 'react-icons/si'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'

const Footer: FC = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <img 
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCA4MCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik04LjgzMTU2IDcuMzk2NjFIMi40MDI3NEgwVjkuODAwNzJWMjAuNTg5MUgyLjQwMjc0VjkuODAwNzJIOC44MzE1NlY3LjM5NjYxWiIgZmlsbD0id2hpdGUiLz4NCjxwYXRoIGQ9Ik00My4yMTcyIDNINDAuODE0NVYyMC41ODlINDMuMjE3MlYzWiIgZmlsbD0id2hpdGUiLz4NCjxwYXRoIGQ9Ik0zNi4wMDg2IDcuMzk2NThWOS4wMDM0NEMzNi4wMDg2IDkuMDAzNDQgMzUuMjQ3IDcuOTg1MjYgMzMuNzM2MiA3LjQzNTAxQzMzLjAyNjggNy4xOTA3NSAzMi4yNjc5IDcuMDU2MjcgMzEuNDc2MiA3LjA1NjI3QzI3LjY0NjMgNy4wNTYyNyAyNC41NDEgMTAuMTYxNiAyNC41NDEgMTMuOTkxNEMyNC41NDEgMTcuODIxMyAyNy42NDYzIDIwLjkyNjYgMzEuNDc2MiAyMC45MjY2QzMyLjI2NzkgMjAuOTI2NiAzMy4wMjgyIDIwLjc5MjEgMzMuNzM2MiAyMC41NDc5QzM1LjI0NyAxOS45OTkgMzYuMDA3MiAxOC45ODA4IDM2LjAwODYgMTguOTc5NFYyMC41ODYzSDM4LjQxMTNWNy4zOTY1OEgzNi4wMDg2Wk0zMS40NzYyIDE4LjU4NTZDMjguOTM5IDE4LjU4NTYgMjYuODgyIDE2LjUyODcgMjYuODgyIDEzLjk5MTRDMjYuODgyIDExLjQ1NDIgMjguOTM5IDkuMzk3MjcgMzEuNDc2MiA5LjM5NzI3QzM0LjAxMzQgOS4zOTcyNyAzNi4wNzAzIDExLjQ1NDIgMzYuMDcwMyAxMy45OTE0QzM2LjA3MDMgMTYuNTI4NyAzNC4wMTM0IDE4LjU4NTYgMzEuNDc2MiAxOC41ODU2WiIgZmlsbD0id2hpdGUiLz4NCjxwYXRoIGQ9Ik02NC4xOTU0IDEwLjE0MzdDNjMuNDI1NiA4LjMyMDA1IDYxLjcyOTUgNy4wNTc2MiA1OS41ODM0IDcuMDU3NjJDNTcuNzYxMSA3LjA1NzYyIDU2LjIwNSA3Ljk3MDE0IDU1LjI3NzQgOS4zNjAxOUM1NC40OTUyIDcuOTY4NzcgNTMuMTI4NSA3LjA1NzYyIDUxLjMwNDggNy4wNTc2MkM0OS45MDc5IDcuMDU3NjIgNDguODA0NiA3LjY0MjE4IDQ4LjAyMzggOC41NjU2OFY3LjM5NzkzSDQ1LjYyMTFWMjAuNTg5SDQ4LjAyMzhWMTIuNjQ1M0M0OC4wMjM4IDEyLjAzNDYgNDguMTA2MiAxMS41NTcxIDQ4LjI1NTcgMTEuMjAzMUM0OC43MDQ1IDEwLjE0MjQgNDkuNzU0MiA5LjM5ODYxIDUwLjk3NjggOS4zOTg2MUM1Mi4xOTk1IDkuMzk4NjEgNTMuMjUwNiAxMC4xNDI0IDUzLjY5NzkgMTEuMjAzMUM1My44NDc1IDExLjU1NzEgNTMuOTI5OCAxMi4wMzQ2IDUzLjkyOTggMTIuNjQ1M1YyMC41ODlINTYuMzMyNlYxMi42NDUzQzU2LjMzMjYgMTIuMDM0NiA1Ni40MTQ5IDExLjU1NzEgNTYuNTY0NSAxMS4yMDMxQzU3LjAxMzIgMTAuMTQyNCA1OC4wNjI5IDkuMzk4NjEgNTkuMjg1NiA5LjM5ODYxQzYwLjUwODIgOS4zOTg2MSA2MS41NTkzIDEwLjE0MjQgNjIuMDA2NyAxMS4yMDMxQzYyLjE1NjMgMTEuNTU3MSA2Mi4yMzg2IDEyLjAzNDYgNjIuMjM4NiAxMi42NDUzVjIwLjU4OUg2NC42NDEzVjEzLjAyMjZDNjQuNjQxMyAxMS44NTQ5IDY0LjQ4MzUgMTAuODMzOSA2NC4xOTI2IDEwLjE0MzdINjQuMTk1NFoiIGZpbGw9IndoaXRlIi8+DQo8cGF0aCBkPSJNMjEuMjY4NiA5LjA0MTg5QzE4LjU5OTYgNi4zOTQ4OSAxNC4wMzU2IDYuMzk0ODkgMTEuMzY4MSA5LjA0MTg5QzguNzIxMDYgMTEuNzEwOCA4LjcyMTA2IDE2LjI3NDggMTEuMzY4MSAxOC45NDI0QzEyLjcwMTkgMjAuMjY1MiAxNC41MTA0IDIwLjkyOCAxNi4zMTkgMjAuOTI4QzE4LjI3MTcgMjAuOTI4IDIwLjIyNDMgMjAuMjY2NiAyMS42NjUxIDE4Ljk0MjRDMjIuMDc1NCAxOC41NTk2IDIyLjQyNCAxOC4xMzU1IDIyLjcxNDkgMTcuNjg0MUwyMC41NTUgMTYuNDM2N0MyMC4zNjI5IDE2LjczNTkgMjAuMTMyNCAxNy4wMTU4IDE5Ljg2MDcgMTcuMjcxQzE4LjkwNTYgMTguMTQ3OSAxNy42MTMgMTguNTg1NiAxNi4zMjA0IDE4LjU4NTZDMTUuMTIyNCAxOC41ODU2IDEzLjkyNDUgMTguMTQ3OSAxMy4wNDA4IDE3LjI3MUMxMi40Mjg4IDE2LjY1NDkgMTIuMDM2MyAxNS44ODM3IDExLjg1MTEgMTUuMDY4NkgyMy4xNjkxQzIzLjQ4NDcgMTIuOTIyNSAyMi44NTc2IDEwLjY0MTkgMjEuMjY5OSA5LjA0MTg5SDIxLjI2ODZaTTExLjg0OTcgMTIuOTE3QzEyLjAzNSAxMi4xMDE5IDEyLjQyNzQgMTEuMzMwNyAxMy4wMzk0IDEwLjcxNDZDMTQuODA2OCA4Ljk2MDkzIDE3LjgyOTggOC45NjIzIDE5LjU5NzIgMTAuNzE0NkMyMC4yMDkyIDExLjMzMjEgMjAuNjA0NCAxMi4xMDE5IDIwLjc4NjkgMTIuOTE3SDExLjg0OTdaIiBmaWxsPSJ3aGl0ZSIvPg0KPHBhdGggZD0iTTc4LjAyMDUgOS4wNDE4OUM3NS4zNTE2IDYuMzk0ODkgNzAuNzg3NiA2LjM5NDg5IDY4LjEyIDkuMDQxODlDNjUuNDczIDExLjcxMDggNjUuNDczIDE2LjI3NDggNjguMTIgMTguOTQyNEM2OS40NTM4IDIwLjI2NTIgNzEuMjYyNCAyMC45MjggNzMuMDcxIDIwLjkyOEM3NS4wMjM2IDIwLjkyOCA3Ni45NzYzIDIwLjI2NjYgNzguNDE3MSAxOC45NDI0Qzc4LjgyNzQgMTguNTU5NiA3OS4xNzU5IDE4LjEzNTUgNzkuNDY2OCAxNy42ODQxTDc3LjMwNyAxNi40MzY3Qzc3LjExNDkgMTYuNzM1OSA3Ni44ODQzIDE3LjAxNTggNzYuNjEyNiAxNy4yNzFDNzUuNjU3NiAxOC4xNDc5IDc0LjM2NSAxOC41ODU2IDczLjA3MjMgMTguNTg1NkM3MS44NzQ0IDE4LjU4NTYgNzAuNjc2NCAxOC4xNDc5IDY5Ljc5MjcgMTcuMjcxQzY5LjE4MDcgMTYuNjU0OSA2OC43ODgzIDE1Ljg4MzcgNjguNjAzIDE1LjA2ODZINzkuOTIxQzgwLjIzNjcgMTIuOTIyNSA3OS42MDk2IDEwLjY0MTkgNzguMDIxOSA5LjA0MTg5SDc4LjAyMDVaTTY4LjYwMTcgMTIuOTE3QzY4Ljc4NjkgMTIuMTAxOSA2OS4xNzk0IDExLjMzMDcgNjkuNzkxNCAxMC43MTQ2QzcxLjU1ODggOC45NjA5MyA3NC41ODE4IDguOTYyMyA3Ni4zNDkyIDEwLjcxNDZDNzYuOTYxMiAxMS4zMzIxIDc3LjM1NjQgMTIuMTAxOSA3Ny41Mzg5IDEyLjkxN0g2OC42MDE3WiIgZmlsbD0id2hpdGUiLz4NCjwvc3ZnPg0K" 
                alt="realme logo" 
                className="h-8 w-auto"
              />
            </div>
            <p className="text-gray-400">
              Uma colaboração única entre realme e Coca-Cola, trazendo estilo e inovação para seu smartphone.
            </p>
          </div>

          {/* Links realme */}
          <div>
            <h3 className="text-lg font-bold mb-4">realme</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-red-500 transition-colors">
                  Sobre nós
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-400 hover:text-red-500 transition-colors">
                  Produtos
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-400 hover:text-red-500 transition-colors">
                  Suporte
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Coca-Cola */}
          <div>
            <h3 className="text-lg font-bold mb-4">Coca-Cola</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-red-500 transition-colors">
                  História
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-400 hover:text-red-500 transition-colors">
                  Produtos
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-400 hover:text-red-500 transition-colors">
                  Sustentabilidade
                </Link>
              </li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div>
            <h3 className="text-lg font-bold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-red-500 transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                 className="text-gray-400 hover:text-red-500 transition-colors">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                 className="text-gray-400 hover:text-red-500 transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
                 className="text-gray-400 hover:text-red-500 transition-colors">
                <FaYoutube size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-gray-800 my-8" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 realme x Coca-Cola. Todos os direitos reservados.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/" className="text-gray-400 hover:text-red-500 transition-colors text-sm">
              Política de Privacidade
            </Link>
            <Link href="/" className="text-gray-400 hover:text-red-500 transition-colors text-sm">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer