const LandingPage = () => {
    return (
        <main className="banner-central">
            <div id="landing-info">
                <div id="shift-img">
                    <img className="landing-img" src="/adidashoe.png"/>
                </div>

                <div id="landing-text">
                    <h2>Semana do</h2>
                    <h1>cliente</h1>
                    <h2>Ganhe <span>R$ 50,00</span></h2>
                    <h6>em todo o site em compras acima de R$ 200,00</h6>
                    <h5>Use o cupom&ensp;<span id="highlight">ganhou50</span></h5>
                </div>
            </div>
        </main>
    );
}
 
export default LandingPage;