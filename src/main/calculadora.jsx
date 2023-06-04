import { useState } from 'react'
import './calculadora.css'


function Calculadora() {

    const [valorTela, setValorTela] = useState('')
    const [resultado, setResultado] = useState(0)
    const [acumulador, setAcumulador] = useState(0)
    const [operado, setOperado] = useState(false)

    // Elementos

    const tela = (valor, res) => {
        return (
            <div className="telaCalculadora">
                <span className='telaValor'>{valor}</span>
                <span className='telaRes'>{res}</span>
            </div>
        )
    }


    // Botões

    const btn = (label, btnCss, btnCssOper, btnIgual, onClick) => {
        return (
            <button className={(btnCss || btnCssOper || btnIgual)} onClick={onClick}>{label}</button>
        )
    }



    // Funções

    const addDigitos = (n) => {


        if ((n == '+' || n == '-' || n == '*' || n == '/' || n == '**') && operado) {
            setOperado(false)
            valorTela(resultado + n)
            return
        }

        if (operado) {
            setValorTela(n)
            setOperado(false)
            return
        }


        const valorDigitadoTela = valorTela + n
        setValorTela(valorDigitadoTela)
    }

    const limparMemoria = () => {
        setOperado(false)
        setValorTela('')
        setResultado(0)
        setAcumulador(0)
        return
    }

    const operacao = (oper) => {
        if (oper == 'bs') {
            let vtela = valorTela
            vtela = vtela.substring(0, (vtela.length - 1))
            setValorTela(vtela)
            setOperado(false)
            return
        }



        try {
            const r = eval(valorTela)
            setResultado(r)
            setAcumulador(r)
            setOperado(true)
        }
        catch {
            setResultado('ERRO')
        }
    }





    return (
        <div>
            <h1>Calculadora Legal 2</h1>
            <div className="calculadora">
                {tela(valorTela, resultado)}
                <div className="botoes">
                    {/* 23 */}
                    {btn('x', '', 'btnCssOper', '', () => operacao('x'))}
                    {btn('x', '', 'btnCssOper', '', () => operacao('x'))}
                    {btn('x', '', 'btnCssOper', '', () => operacao('x'))}
                    {btn('(', '', 'btnCssOper', '', () => addDigitos('('))}
                    {btn(')', '', 'btnCssOper', '', () => addDigitos(')'))}
                    {btn('AC', '', 'btnCssOper', '', limparMemoria)}
                    {btn('<-', '', 'btnCssOper', '', () => operacao('bs'))}
                    {btn('x', '', 'btnCssOper', '', () => operacao('x'))}
                    {btn('seno', '', 'btnCssOper', '', () => addDigitos('Math.sin('))}
                    {btn('%', '', 'btnCssOper', '', () => addDigitos('/100'))}
                    {btn('7', 'btnCss', '', '', () => addDigitos('7'))}
                    {btn('8', 'btnCss', '', '', () => addDigitos('8'))}
                    {btn('9', 'btnCss', '', '', () => addDigitos('9'))}
                    {btn('/', '', 'btnCssOper', '', () => addDigitos('/'))}
                    {btn('log', '', 'btnCssOper', '', () => addDigitos('Math.log10('))}
                    {btn('cos', '', 'btnCssOper', '', () => addDigitos('Math.cos('))}
                    {btn('2√x', '', 'btnCssOper', '', () => addDigitos('Math.sqrt('))}
                    {btn('4', 'btnCss', '', '', () => addDigitos('4'))}
                    {btn('5', 'btnCss', '', '', () => addDigitos('5'))}
                    {btn('6', 'btnCss', '', '', () => addDigitos('6'))}
                    {btn('*', '', 'btnCssOper', '', () => addDigitos('*'))}
                    {btn('^', '', 'btnCssOper', '', () => addDigitos('**'))}
                    {btn('tan', '', 'btnCssOper', '', () => addDigitos('Math.tan('))}
                    {btn('3√x', '', 'btnCssOper', '', () => addDigitos('Math.cbrt('))}
                    {btn('1', 'btnCss', '', '', () => addDigitos('1'))}
                    {btn('2', 'btnCss', '', '', () => addDigitos('2'))}
                    {btn('3', 'btnCss', '', '', () => addDigitos('3'))}
                    {btn('-', '', 'btnCssOper', '', () => addDigitos('-'))}
                    {btn('x', '', 'btnCssOper', '', () => operacao('x'))}
                    {btn('PI', '', 'btnCssOper', '', () => addDigitos('Math.PI'))}
                    {btn('e', '', 'btnCssOper', '', () => addDigitos('Math.E'))}
                    {btn('0', 'btnCss', '', '', () => addDigitos('0'))}
                    {btn(',', 'btnCss', '', '', () => addDigitos('.'))}
                    {btn('=', '', '', 'btnIgual', () => operacao('='))}
                    {btn('+', '', 'btnCssOper', '', () => addDigitos('+'))}
                </div>
                <div className='comandos'>
                    <h1>Regas e Comandos: </h1>
                    <h3>Essa calculadora passa por atualizações</h3>
                    <p>1. Teclas que estão com um 'x' não funcionam. Sujeitas a atualização</p>
                    <p>2. Teclas: (seno - cos - tan - log - PI - Raizes) requerem que acrescente a tecla ')'</p>
                    <p>3. e = Constante de Euler</p>
                    <p>4. AC = Limpar tudo</p>
                    <p>5. {'<-'} = Limpar o ultimo digito</p>
                    <p>6. * = Vezes</p>
                    <p>7. / = Divisão</p>
                </div>
            </div>
        </div>
    )
}

export default Calculadora;


// 1. Valor da tela e função  com useState()
// 2. Resultado com useState()
// 3. Acumulador. ex: 1, 15, ... com useState()
// 4. Operação: +, -, /, ... Ela não pode começar setada com useState()


// 5. Elementos
//  5.1 Tela da calculadora. Duas linha: 1. Valor 2. Resultado

// 6. Botões
//   6.1 O botão recebe um valor(label) e uma função

// 7 Funções
//  7.1 Se o digito for um desses (+, -, /, *, **) , operado é marcado como True
//  7.2 Muda a operação para falso, já que já está em uma operação
//  7.3 Se for um botão qualquer e já está operado
//  7.4 Adciona os digitos na tela
//  7.5 ex: 3 ... 36 ... 367 ...
//  7.5.1 Limpar Memoria
//  7.6 BackSpace: <-- : apagar ultimo digito
//  7.7 Operações matemáticas
//  7.8 eval = Ele faz a conta sozinho. ex: 3 + 2 = 5
//  7.9 Foi operado
//  7.10 Conseguiu fazer a conta: Não = ERRO
//  7.11 Está dentro de {}, pq tem funções envolvidas