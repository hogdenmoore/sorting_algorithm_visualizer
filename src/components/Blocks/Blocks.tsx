import React, {useState, useRef, useEffect} from 'react'
import './Blocks.css'
import { RED, GREEN, YELLOW, TURQUOISE} from "../../constantsAndTypes/constants"


interface BlockProps {
    blocks: number[],
    swaps: (number|null)[],
    compares: (number|null)[],
    sorted: number[]
  }

const Blocks = ({swaps, compares, sorted, blocks}: BlockProps) => {
    const centerStageRef = useRef<HTMLDivElement>(null)
    const [height, setHeight] = useState<number>(0)
    const [width, setWidth] = useState<number>(0)

    

    useEffect(() => {
        if (centerStageRef.current ){
            setHeight(centerStageRef.current.clientHeight)
            setWidth(centerStageRef.current.clientWidth)
        }
      }, [blocks.length])

    useEffect(() => {
        function updateSize() {
            if (centerStageRef.current ){
                setHeight(centerStageRef.current.clientHeight)
                setWidth(centerStageRef.current.clientWidth)
            }
        }
        window.addEventListener("resize", updateSize);
        return () => {
          window.removeEventListener("resize", updateSize);
        };
      });

    return (
        <div className="stage">
            <div className="wallpaper" />
            <div className="centerStage" ref={centerStageRef}>
                {blocks.map((block, i) => {
                    const blockWidth = Math.min((width)/(blocks.length + 10), width * .05)
                    const blockheight = (height * block / blocks.length) * .95

                    let color = TURQUOISE

                    
                    if (compares[0] == i || compares[1] == i) {
                        color = YELLOW
                    }
                    if (swaps[0] == i || swaps[1] == i) {
                        color = RED
                    }
                    if (sorted.includes(i)) {
                        color = GREEN
                    }
                    
                    const style = {
                        "backgroundColor": color,
                        "color": "white",
                        'height': blockheight, 
                        'width': blockWidth
                    }
                    
                    return (
                        <div key={i} style={style} className="block">{blocks.length < 50 ? block: ""}</div>
                    )
                })}
            </div>

        </div>
    )
}

export default Blocks