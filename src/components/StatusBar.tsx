import { Clock } from './Clock'

export const StatusBar = () => {
    return(
        <div className="w-auto mx-3 my-2 h-6 flex justify-between">
          <Clock />
          <div className="flex items-center text-xs space-x-1">
            <i className="fas fa-signal"></i>
            <i className="fas fa-wifi"></i>
            <i className="fas fa-battery-three-quarters text-sm"></i>
          </div>
        </div>
    )
}