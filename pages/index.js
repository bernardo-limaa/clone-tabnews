import { useRef, useState, useEffect } from 'react';

export default function Home() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);

  const startMusic = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
      setShowOverlay(false);
    }
  };

  // CSS de animação
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes float {
        0% { transform: translateY(0); }
        50% { transform: translateY(-20px); }
        100% { transform: translateY(0); }
      }

      @keyframes sway {
        0% { transform: rotate(0deg); }
        25% { transform: rotate(5deg); }
        50% { transform: rotate(0deg); }
        75% { transform: rotate(-5deg); }
        100% { transform: rotate(0deg); }
      }

      .balloon {
        animation: float 3s ease-in-out infinite;
      }

      .flower {
        display: inline-block;
        font-size: 3rem;
        margin: 0 10px;
        animation: sway 2.5s ease-in-out infinite;
      }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <div style={{
      fontFamily: `'Brush Script MT', cursive`,
      background: 'linear-gradient(135deg, #ffe6f0, #ffccff)',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative'
    }}>
      {/* Música */}
      <audio ref={audioRef} loop>
        <source src="/musiquinha.mp3" type="audio/mpeg" />
        Seu navegador não suporta áudio.
      </audio>

      {/* Tela de Bloqueio */}
      {showOverlay && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(255, 153, 204, 0.95)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 9999
        }}>
          <button
            onClick={startMusic}
            style={{
              backgroundColor: '#ff66b2',
              color: 'white',
              border: 'none',
              padding: '30px 60px',
              fontSize: '2rem',
              borderRadius: '50%',
              cursor: 'pointer',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
              transition: 'transform 0.3s',
            }}
            onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
          >
            ▶️
          </button>
        </div>
      )}

      {/* Cabeçalho */}
      <header style={{
        backgroundColor: '#ff99cc',
        padding: '20px',
        textAlign: 'center',
        color: 'white',
        fontSize: '2.5rem',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}>
        Jardim do Bernardo e Clara 💐
      </header>

      {/* Conteúdo Principal */}
      <main style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url('https://i.imgur.com/oCkEbrA.png')`,
        backgroundRepeat: 'repeat',
        backgroundSize: 'contain',
        padding: '40px'
      }}>
        {/* Balões animados */}
        <div className="balloon" style={{ fontSize: '5rem', marginBottom: '20px' }}>🎈</div>
        <div className="balloon" style={{ fontSize: '4rem', marginBottom: '20px' }}>🎈</div>
        <div className="balloon" style={{ fontSize: '3.5rem', marginBottom: '20px' }}>🎈</div>

        {/* Flores dançando */}
        <div style={{ marginBottom: '30px' }}>
          <span className="flower" style={{ animationDelay: '0s' }}>🌸</span>
          <span className="flower" style={{ animationDelay: '0.3s' }}>🌼</span>
          <span className="flower" style={{ animationDelay: '0.6s' }}>🌺</span>
          <span className="flower" style={{ animationDelay: '0.9s' }}>🌷</span>
          <span className="flower" style={{ animationDelay: '1.2s' }}>🌻</span>
        </div>

        <h1 style={{
          color: '#ff66b2',
          fontSize: '4.5rem',
          textShadow: '3px 3px 10px rgba(255, 102, 178, 0.5)',
          border: '5px double #ff99cc',
          padding: '20px 40px',
          borderRadius: '30px',
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
          boxShadow: '0 0 20px rgba(255, 153, 204, 0.7)',
          marginBottom: '30px',
          textAlign: 'center'
        }}>
          Bem-vindo ao jardim mais brega e apaixonado da internet 💖🌸
        </h1>

        <p style={{
          color: '#b30059',
          fontSize: '2rem',
          maxWidth: '700px',
          textAlign: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.6)',
          padding: '20px',
          borderRadius: '15px',
          boxShadow: '0 0 15px rgba(255, 153, 204, 0.4)'
        }}>
          Aqui as flores dançam, os balões flutuam e o amor de Bernardo e Clara deixa tudo mais bonito (e um pouquinho brega também). 🌷💌<br /><br />
          Fique à vontade, só não se apaixone demais pelo site. Isso já é exclusivo deles. 💘😂
        </p>

        <button style={{
          marginTop: '30px',
          backgroundColor: '#ff66b2',
          color: 'white',
          border: 'none',
          padding: '15px 30px',
          fontSize: '1.5rem',
          borderRadius: '30px',
          cursor: 'pointer',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          transition: 'background-color 0.3s'
        }}
          onClick={() => window.location.href = 'https://www.omfgdogs.com/'}
          onMouseOver={(e) => e.target.style.backgroundColor = '#ff3385'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#ff66b2'}
        >
          Quero conhecer outros jardins! 🌼
        </button>
      </main>

      {/* Rodapé */}
      <footer style={{
        backgroundColor: '#ff99cc',
        padding: '15px',
        textAlign: 'center',
        color: 'white',
        fontSize: '1.2rem',
        boxShadow: '0 -4px 6px rgba(0, 0, 0, 0.1)'
      }}>
        © 2025 Jardim do Bernardo e Clara 💐 - Onde o amor é florido (e um pouquinho cafona)
      </footer>
    </div>
  );
}
