import React from 'react'
import ErrorBoundary from '.'

export default {
    title: "Error Boundary",
    component: ErrorBoundary
}

const ComponentWithoutError = () => <h1>Sin error</h1>

const prop = undefined
const ComponentWithError = () => <h1>{prop.hola}</h1>

export const ErrorBoundaryExample = () => <ErrorBoundary/>

export const ErrorBoundaryWithoutError = () => (
    <ErrorBoundary>
        <ComponentWithoutError/>
    </ErrorBoundary> 
)
export const ErrorBoundaryWithError = () => (
    <ErrorBoundary>
        <ComponentWithError/>
    </ErrorBoundary> 
)