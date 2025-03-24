import { AppContext } from "../../context/AppContext"
import Home from "./Home"
import { render } from "@testing-library/react"

describe('Home', () => {
    it('should render Home component', () => {
        const loginData = { name: 'John Doe' }
        render(
            <AppContext.Provider value={{ loginData }}><Home /></AppContext.Provider>)
        expect(true).toBeTruthy()
    })
})