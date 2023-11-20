import {
  MenuList,
  MenuListItem,
  Separator,
  Window,
  WindowContent,
  WindowHeader,
} from 'react95';
import { Link } from 'react-router-dom';
import Draggable from 'react-draggable';

type PlaceholderProps = {
  title: string;
};
const Placeholder = ({ title }: PlaceholderProps) => {
    const navigationItems =
        localStorage.getItem('userName') !== null
            ? ['/', '/events', '/payments']
            : ['/', '/login'];

    return (
        <Draggable>
            <Window>
                <WindowHeader>Placeholder dla strony {title}</WindowHeader>
                <WindowContent>
                    <MenuList inline>
                        {navigationItems.map((path, i) => (
                            <>
                                {i !== 0 && <Separator orientation="vertical" size="43px" />}
                                <MenuListItem>
                                    <Link to={path}>Idź do {path}</Link>
                                </MenuListItem>
                            </>
                        ))}
                    </MenuList>
                </WindowContent>
            </Window>
        </Draggable>
    );
};

export default Placeholder;
