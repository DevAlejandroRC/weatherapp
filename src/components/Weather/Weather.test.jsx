import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Weather from '.'

test('Weather cloud test', async () => {
    const { findByRole } = render( <Weather tempeture={10} state="clouds" /> )
    const temp = await findByRole("heading")
    expect(temp).toHaveTextContent("10")
})

