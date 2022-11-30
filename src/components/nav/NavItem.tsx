import Link from 'next/link';

interface Props {
    children: React.ReactNode;
    href: string;
}

const NavItem = ({ children, href }: Props) => {
    return (
        <Link href={href}>
            <div className='transition-all ease-in-out duration-500 p-2 flex bg-gradient-to-r from-transparent to-transparent hover:from-npink-400 hover:cursor-pointer rounded-lg'>
                {children}
            </div>
        </Link>
    );
};

export default NavItem;
