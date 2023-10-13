// function Btn(){
//     const clickHandler = () => console.log('clicked')
//     return (
//         <button onClick={clickHandler}>
//             click me 
//         </button>
//     )
// }
// export default Btn;
function Btn() {
    const clickHandler = () => console.log('click')
    return (
        <button id="js-btn" 
        onClick={clickHandler}>click me 
        </button>
    )
}
export default Btn;