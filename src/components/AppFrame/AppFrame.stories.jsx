import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppFrame from '.'


export default {
    title: "AppFrame",
    component: AppFrame
}

export const AppFrameExample = () => {
    return(
        <BrowserRouter>
            <AppFrame>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur enim tempore, nostrum deserunt nam possimus perferendis, a eos reprehenderit, distinctio sequi ipsam rerum? Nemo saepe ipsa nesciunt, in aperiam facilis?
            </AppFrame>
        </BrowserRouter>
    )
}