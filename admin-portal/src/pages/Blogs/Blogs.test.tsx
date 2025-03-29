import { AppContext } from "../../context/AppContext"
import Blogs from "./Blogs"
import { render } from "@testing-library/react"

describe('Blogs', () => {
    it('should render Blogs component', () => {
        const loginData = { name: 'John Doe' }
        render(
            <AppContext.Provider value={{ loginData }}>
                <Blogs />
            </AppContext.Provider>
        )
        expect(true).toBeTruthy()
    })
})