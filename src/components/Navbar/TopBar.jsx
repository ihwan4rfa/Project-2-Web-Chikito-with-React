import MenuIcon from '../../assets/menu.svg'
import CloseIcon from '../../assets/close.svg'

const TopBar = (props) => {

    const { contact, isMenuOpen, toggleMenu } = props;

    return (
        <div className='contact'>
            <a href='#footer' className='btn-primary2'>{contact}</a>
            <img id='menu' src={isMenuOpen ? CloseIcon : MenuIcon} onClick={toggleMenu} alt="" />
        </div>
    )
}

export default TopBar;