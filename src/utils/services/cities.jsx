const cities = [
    { city: "Tocancipa" , country: "Colombia", code: "CO"  },
    { city: "Buenos Aires" , country: "Argentina", code: "AR"  },
    { city: "Caracas" , country: "Venezuela", code: "VE"  },
    { city: "Quito" , country: "Ecuador", code: "EC"  },
    { city: "Lima" , country: "Peru", code: "PE" },
    { city: "Sao Paulo" , country: "Brasil", code: "BR"  },
]

export const getCities = () => (cities)

export const getNameCoutryOfCities = (code) => (
    cities.filter(city => city.code === code)[0].country
)