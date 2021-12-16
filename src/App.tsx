import { useState } from 'react'
import { StatusBar } from './components/StatusBar'
import { Display } from './components/Display'
import { Footer } from './components/Footer'
import '@fortawesome/fontawesome-free/css/all.css'

export default function App() {
  const [calc, setCalc] = useState({
    num: 0,
    expression: '',
  })

  const handleClickNum = (num: string) => {
    switch (num) {
      case '+':
      case '-':
      case '/':
      case '*':
        setCalc({num: calc.num != 0 ? 0 : calc.num, expression: `${calc.expression} ${num} `})
        break

      default:
        setCalc({num: calc.num != 0 ? 0 : calc.num, expression: `${calc.expression}${num}`})
        break
    }
  }

  const handleClickClear = () => setCalc({...calc, expression: ''})

  const handleClickCalcResult = () => {
    if (calc.expression) {
      let expression = new String(calc.expression)
      let result = eval(expression.toString())
      setCalc({
        expression: '',
        num: result.toFixed(2)
      })
    }
  }

  return (
    <div className="bg-gray-200 w-screen h-screen flex justify-center items-center">
      <div className="w-64 h-auto bg-white rounded-2xl shadow-xl border-4 border-gray-100">
        <StatusBar/>
        <Display calc={calc} />
        <div className="w-auto m-1 h-auto mb-2">
          <div className="m-2 flex justify-between">
            <button onClick={handleClickClear} className="bg-yellow-100 transition-all duration-300 hover:bg-yellow-200 shadow-md rounded-2xl w-12 h-12 text-yellow-600 font-medium flex justify-center items-center">C</button>
            <button onClick={ _ => handleClickNum('(')} className="bg-gray-200 transition-all duration-300 hover:bg-gray-300 shadow-md rounded-2xl w-12 h-12 text-black font-medium flex justify-center items-center">(</button>
            <button onClick={ _ => handleClickNum(')')} className="bg-gray-200 transition-all duration-300 hover:bg-gray-300 shadow-md rounded-2xl w-12 h-12 text-black font-medium flex justify-center items-center">)</button>
            <button onClick={ _ => handleClickNum('/')} className="bg-yellow-500 transition-all duration-300 hover:bg-yellow-600 shadow-md rounded-2xl w-12 h-12 text-white font-medium text-xl flex justify-center items-center">
              <i className="fas fa-divide"></i>
            </button>
          </div>
          <div className="m-2 flex justify-between">
            <button onClick={ _ => handleClickNum('7')} className="bg-gray-200 transition-all duration-300 hover:bg-gray-300 shadow-md rounded-2xl w-12 h-12 text-black font-medium flex justify-center items-center">7</button>
            <button onClick={ _ => handleClickNum('8')} className="bg-gray-200 transition-all duration-300 hover:bg-gray-300 shadow-md rounded-2xl w-12 h-12 text-black font-medium flex justify-center items-center">8</button>
            <button onClick={ _ => handleClickNum('9')} className="bg-gray-200 transition-all duration-300 hover:bg-gray-300 shadow-md rounded-2xl w-12 h-12 text-black font-medium flex justify-center items-center">9</button>
            <button onClick={ _ => handleClickNum('*')} className="bg-yellow-500 transition-all duration-300 hover:bg-yellow-600 shadow-md rounded-2xl w-12 h-12 text-white font-medium text-xl flex justify-center items-center">
              <i className="fas fa-times"></i>
            </button>
          </div>
          <div className="m-2 flex justify-between">
            <button onClick={ _ => handleClickNum('4')} className="bg-gray-200 transition-all duration-300 hover:bg-gray-300 shadow-md rounded-2xl w-12 h-12 text-black font-medium flex justify-center items-center">4</button>
            <button onClick={ _ => handleClickNum('5')} className="bg-gray-200 transition-all duration-300 hover:bg-gray-300 shadow-md rounded-2xl w-12 h-12 text-black font-medium flex justify-center items-center">5</button>
            <button onClick={ _ => handleClickNum('6')} className="bg-gray-200 transition-all duration-300 hover:bg-gray-300 shadow-md rounded-2xl w-12 h-12 text-black font-medium flex justify-center items-center">6</button>
            <button onClick={ _ => handleClickNum('-')} className="bg-yellow-500 transition-all duration-300 hover:bg-yellow-600 shadow-md rounded-2xl w-12 h-12 text-white font-medium text-xl flex justify-center items-center">
              <i className="fas fa-minus"></i>
            </button>
          </div>
          <div className="m-2 flex justify-between">
            <button onClick={ _ => handleClickNum('1')} className="bg-gray-200 transition-all duration-300 hover:bg-gray-300 shadow-md rounded-2xl w-12 h-12 text-black font-medium flex justify-center items-center">1</button>
            <button onClick={ _ => handleClickNum('2')} className="bg-gray-200 transition-all duration-300 hover:bg-gray-300 shadow-md rounded-2xl w-12 h-12 text-black font-medium flex justify-center items-center">2</button>
            <button onClick={ _ => handleClickNum('3')} className="bg-gray-200 transition-all duration-300 hover:bg-gray-300 shadow-md rounded-2xl w-12 h-12 text-black font-medium flex justify-center items-center">3</button>
            <button onClick={ _ => handleClickNum('+')} className="bg-yellow-500 transition-all duration-300 hover:bg-yellow-600 shadow-md rounded-2xl w-12 h-12 text-white font-medium text-xl flex justify-center items-center">
              <i className="fas fa-plus"></i>
            </button>
          </div>
          <div className="m-2 flex justify-between">
            <button onClick={ _ => handleClickNum('0')} className="bg-gray-200 transition-all duration-300 hover:bg-gray-300 shadow-md rounded-2xl w-full h-12 text-black font-medium flex justify-center items-center">0</button>
            <div className="flex w-full ml-3 justify-between">
              <button onClick={ _ => handleClickNum('.')} className="bg-gray-200 transition-all duration-300 hover:bg-gray-300 shadow-md rounded-2xl w-12 h-12 text-black font-medium flex justify-center items-center">.</button>
              <button onClick={handleClickCalcResult} className="bg-green-500 transition-all duration-300 hover:bg-green-600 shadow-md rounded-2xl w-12 h-12 text-white font-medium text-xl flex justify-center items-center">
                <i className="fas fa-equals"></i>
              </button>
            </div>
          </div>
          <div className="flex justify-center mt-5">
            <div className="w-20 h-1 bg-gray-100 rounded-l-xl rounded-r-xl"></div>
          </div>
        </div>

        <Footer/>
      </div>
    </div>
  )
}