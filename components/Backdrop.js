function Backdrop(props) {
    return <div className ='backdrop' onClick={props.onClick}/>
}
//need to add props to custom components. Built in props for eventListeners don't exist. Add props. See 'event props' to learn more.
export default Backdrop;