import React from 'react'
import { render } from '@testing-library/react'
import ForecasItem from '.'

test("ForecasItem test", async()=> {
    const {findByText} = render(<ForecasItem weekDay="Lunes" hour={10} state="clear" tempeture={80}/>)
    const day = await findByText("Lunes")
    const time = await findByText(/10/)
    const temp = await findByText(/80/)
    expect(day).toHaveTextContent("Lunes")
    expect(time).toHaveTextContent("10")
    expect(temp).toHaveTextContent("80")
})