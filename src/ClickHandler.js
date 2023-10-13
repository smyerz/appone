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
        <button 
        onClick={clickHandler}>click me 
        </button>
    )
//ES6 button-directly passing function declaration as the onClick attribute's value
    return (
        <button
        onClick={() => console.log('second example')}>
        An inline anonymous ES6 function event handler
        </button>
    )
}



    

export default Btn;
