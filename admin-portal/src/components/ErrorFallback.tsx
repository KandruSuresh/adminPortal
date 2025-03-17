import React from 'react'

interface ErrorFallbackProps {
    error: Error;
    resetErrorBoundary: () => void;
}

const ErrorFallback: React.FC<ErrorFallbackProps> = ({ error, resetErrorBoundary }) => {
    return (
        <div>
            <h2>Somthing went wrong:</h2>
            <pre> {error.message}</pre>
            <button onClick={resetErrorBoundary}>Try again</button>
        </div>

    )
}

export default ErrorFallback