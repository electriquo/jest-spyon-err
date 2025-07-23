const foo = async () => Promise.resolve("original")
const bar = async () => console.log("in bar:", await foo());
export default { foo, bar }