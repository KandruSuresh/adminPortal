import Blogs from "./Blogs"
import { render } from "@testing-library/react"

describe('Blogs', () => {
    it('should render Blogs component', () => {
        render(<Blogs />)
        expect(true).toBeTruthy()
    })
})