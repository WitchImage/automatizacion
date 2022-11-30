import NavItem from './NavItem';

const Nav = () => {
    return (
        <nav className='w-[250px] flex flex-col gap-3 h-screen px-4 py-8 bg-[#1b1b1b] text-xl font-medium'>
            <NavItem href='/'>Inicio</NavItem>
            <NavItem href='/dataset'>Load dataset</NavItem>
        </nav>
    );
};

export default Nav;
