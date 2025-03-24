import { MemoryRouter } from "react-router-dom";
import { Login } from "./Login";
import { render, screen } from "@testing-library/react"
import { AppContext } from "../../context/AppContext";
import { ErrorBoundary } from "react-error-boundary";
import userEvent from "@testing-library/user-event";

describe('Login', () => {
    it('should render login component', async () => {
        const loginData = { name: 'John Doe' }
        const user = userEvent.setup();
        render(
            <MemoryRouter initialEntries={["/"]}>
                <AppContext.Provider value={{ loginData }}>
                    <ErrorBoundary fallbackRender={({ error, resetErrorBoundary }) => (
                        <div>error
                            <p>An error occurred: {error.message}</p>
                            <button onClick={resetErrorBoundary}>Try again</button>
                        </div>
                    )}>
                        <Login />
                    </ErrorBoundary>
                </AppContext.Provider>
            </MemoryRouter>)
        expect(true).toBeTruthy()
        await user.click(screen.getByRole("button"));
    })

})