//Dependencies
const CELTJ = require("../index.js")

//Main
describe("Letters", ()=>{
    it("should be converted to japanese", ()=>{
        console.log(CELTJ.convert("hello"))
        expect(CELTJ.convert("hello")).toEqual("クオシシソ")
    })
})