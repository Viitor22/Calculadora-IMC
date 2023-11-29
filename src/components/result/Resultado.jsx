import './Resultado.modules.css'

const Resultado =({idade, altura, peso, clique}) => {
    let display = 'true'
    const alturaEmMetros = altura/100
    const imc = peso/(alturaEmMetros*alturaEmMetros)
    const pesoIdealMin = 18.5 * (alturaEmMetros*alturaEmMetros)
    const pesoIdealMax = 24.9 * (alturaEmMetros*alturaEmMetros)
    let result = ''

    if (imc < 18.5){
        result = 'Magreza'
    }
    if (imc >= 18.5 && imc < 25){
        result = 'Normal'
    }
    if (imc >= 25 && imc < 30){
        result = 'Sobrebeso'
    }
    if (imc >= 30){
        result = 'Obesidade'
    }

    if (clique){
        display = 'flex'
    } else {
        display = 'none'
    }

    
    return (
        <>
        <div style={{display: display}} className="container">
            <h2 >Resultado:</h2>
            <p>{idade} anos, {alturaEmMetros} m, {peso} Kg</p>
            <p>IMC = {imc.toFixed(2)}</p>
            <p>Resultado: {result}</p>
            <p>Para manter o valor de IMC normal, seu peso pode variar entre {pesoIdealMin.toFixed(2)} e {pesoIdealMax.toFixed(2)} kg.</p>
        </div>
        </>
    )
}

export default Resultado