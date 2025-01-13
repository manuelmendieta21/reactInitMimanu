function TodoItem(props){
    return(
        <li>
            
            <p>{props.text}</p>
            <span>{props.completed}</span>
        </li>

    );
}
export {TodoItem};