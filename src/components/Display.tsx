type Props = {
    calc: {
        expression: string,
        num: number
    }
}

export const Display = ( {calc}: Props ) => {
    return(
        <div className="w-auto m-3 h-28 text-right space-y-2 py-2">
          <div className="text-gray-700">{ calc.expression }</div>
          <div className="text-black font-bold text-3xl">{ calc.num }</div>
        </div>
    )
}