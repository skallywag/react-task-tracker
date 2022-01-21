import Button from "./Button";

const Header = ( {title, onAdd, showAdd} ) => {
  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'close' : 'Add'} onClick={onAdd}/>
    </header>
  )
};

Header.defaultProps = {
    title: 'task track',
}


// CSS in JS
// const headingStyle = {
//     color: 'red', 
//     backgroundColor: 'black'
// }

export default Header;
