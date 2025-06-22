function Home() {
    return  (
    <div style={{
      fontFamily: `'Brush Script MT', cursive`,
      background: 'linear-gradient(135deg, #ffe6f0, #ffccff)',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Cabeçalho */}
      <header style={{
        backgroundColor: '#ff99cc',
        padding: '20px',
        textAlign: 'center',
        color: 'white',
        fontSize: '2.5rem',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}>
        Bem-vindo ao Jardim do Bernardo e Clara 💐
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
        <h1 style={{
          color: '#ff66b2',
          fontSize: '5rem',
          textShadow: '3px 3px 10px rgba(255, 102, 178, 0.5)',
          border: '5px double #ff99cc',
          padding: '20px 40px',
          borderRadius: '30px',
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
          boxShadow: '0 0 20px rgba(255, 153, 204, 0.7)',
          marginBottom: '30px'
        }}>
          Oier 💖
        </h1>

        <p style={{
          color: '#b30059',
          fontSize: '2rem',
          maxWidth: '600px',
          textAlign: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.6)',
          padding: '20px',
          borderRadius: '15px',
          boxShadow: '0 0 15px rgba(255, 153, 204, 0.4)'
        }}>
          Uma mensagem simples, com todo o charme que você merece. Vem se apaixonar por essa vibe romântica e brega!
        </p>

        <button style={{
          marginTop: '40px',
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
          Oier de novo amor 🌸
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
        © 2025 Jardim do Bernardo 💐 - Todo o romantismo reservado
      </footer>
    </div>
  );
}

export default Home;