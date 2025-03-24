import OutletContainer from "./OutletContainer" 
import { render } from "@testing-library/react"

describe('OutletContainer', () => {
    it('should render OutletContainer component', () => {
        render(<OutletContainer />)
        expect(true).toBeTruthy()
    })
})