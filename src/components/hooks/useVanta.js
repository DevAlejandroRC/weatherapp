import { useEffect, useRef, useState } from 'react'
import Clouds from 'vanta/dist/vanta.clouds.min.js'
import * as THREE from 'three'

const useVanta = () => {
    const elementRef = useRef(null)
    const [vanta, setVanta] = useState(0)
    
    useEffect(
        () => {
            if(!vanta) {
                setVanta(
                Clouds({
                    THREE,
                    el: elementRef.current,
                    minHeight: 800.00,
                    minWidth: 800.00,
                })
                )
            }

            return () => {
                if(vanta) {
                vanta.destroy()
                }
            }   
    },[vanta])

    return {elementRef}
}

export default useVanta