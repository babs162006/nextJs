import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'WomanTech',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <header>
          <nav className="header-nav">
            <ul>
              <li><img src="/images/lw.jpeg" alt="Logo" /></li>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/">Palestrantes</Link></li>
              <li><Link href="/">Encontros</Link></li>
              <li><Link href="">Quer participar?</Link></li>
            </ul>
          </nav>
        </header>

        <main>
          {children}
        </main>

        <footer>
          <p>&copy;2025 - Todos os direitos reservados</p>
          <p>Bárbara Diogo Passos e Janaína Diogo Passos</p>
        </footer>
      </body>
    </html>
  );
}