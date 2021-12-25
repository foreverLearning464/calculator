




const App = () => {

const [ expression, setExpression ] = React.useState("")
const [ answer, setAnswer ] = React.useState("")


const calculate = () => {
    setAnswer(eval(expression))
}

const updateDisplay = (str) => {
    setExpression(expression + str)
}

    return(
        <div className="container">
        <div className="grid">
            <div className="display-area" id="display">
                <input type="text" value={expression} placeholder="0" />
                {answer}
            </div>
            <div className="button red" id="ac">AC</div> 
            <div className="button red" id="c">C</div>
            <div onClick={() => updateDisplay('+')} className="button lightGrey" id="plus">+</div>
            <div onClick={() => updateDisplay('-')} className="button lightGrey" id="minus">-</div>
            <div onClick={() => updateDisplay('1')} className="button darkGrey" id="one">1</div>
            <div onClick={() => updateDisplay('2')} className="button darkGrey" id="two">2</div>
            <div onClick={() => updateDisplay('3')} className="button darkGrey" id="three">3</div>
            <div onClick={() => updateDisplay('*')} className="button lightGrey" id="multiply">*</div>
            <div onClick={() => updateDisplay('4')} className="button darkGrey" id="four">4</div>
            <div onClick={() => updateDisplay('5')} className="button darkGrey" id="five">5</div>
            <div onClick={() => updateDisplay('6')} className="button darkGrey" id="six">6</div>
            <div onClick={() => updateDisplay('/')} className="button lightGrey" id="devide">/</div>
            <div onClick={() => updateDisplay('7')} className="button darkGrey" id="seven">7</div>
            <div onClick={() => updateDisplay('8')} className="button darkGrey" id="eight">8</div>
            <div onClick={() => updateDisplay('9')} className="button darkGrey" id="nine">9</div>
            <div onClick={() => calculate()} className="button cyan" id="equals">=</div>
            <div onClick={() => updateDisplay('0')} className="button darkGrey" id="zero">0</div>
            <div onClick={() => updateDisplay('.')} className="button darkGrey" id="decimal">.</div>
            
        </div>
        </div>
    )
}

ReactDOM.render(
    <App />, 
    document.getElementById('root'))


