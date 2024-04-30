import React from 'react'
import { render } from '@testing-library/react'
import CityInfo from '.' //SUT (System Under Testing | Objeto de testeo)

test("CityInfo render", async () => {
    //AAA (Arrange Act Assert)
    //Arrange
    const city = "Bogota"
    const country = "Colombia"
        //Componentes con un rol especifico (findAllByRole)        
    const { findAllByRole } = render(<CityInfo city={city} country={country}/>)
    //Act
        //Buscar todos los componentes que sean cabecera (heading(H1,H2,H3...H6))
    const componentsHeading = await findAllByRole("heading")
    //Assert
        //¿Cuándo sera el test correcto?
    expect(componentsHeading[0]).toHaveTextContent(city)
    expect(componentsHeading[1]).toHaveTextContent(country)

})