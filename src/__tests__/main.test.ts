import { describe, expect, it } from "vitest"

const intro = (title: string) => {
  return title
}
describe("main function", () => {
  it("outro should render `Welcome to Template CLI`", () => {
    const title = "Welcome to Template CLI"
    expect(intro(title)).toBe(title)
  })
})
