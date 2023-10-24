import {
  Button,
  MenuList,
  MenuListItem,
  Separator,
  Window,
  WindowContent,
  WindowHeader,
} from 'react95';
import { Link } from 'react-router-dom';

type PlaceholderProps = {
  title: string;
};
const Placeholder = ({ title }: PlaceholderProps) => {
  return (
    <Window>
      <WindowHeader>Placeholder dla strony {title}</WindowHeader>
      <WindowContent>
        <MenuList inline>
          {['/', '/login', '/events', '/payments'].map((path, i) => (
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
  );
};

export default Placeholder;
