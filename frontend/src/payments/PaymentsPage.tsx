import { FC } from 'react';
import {
  Button,
  GroupBox,
  Select,
  TextInput,
  Window,
  WindowContent,
  WindowHeader,
} from 'react95';
import Draggable from 'react-draggable';
import { Space } from 'src/common/Space';

export const PaymentsPage: FC = () => {
  const options = [
    { value: 'Przelew', label: 'Przelew' },
    { value: 'Karta', label: 'Karta' },
    { value: 'PayPal', label: 'PayPal' },
  ];

  return (
    <Draggable>
      <Window>
        <WindowHeader>Płatność</WindowHeader>
        <WindowContent>
          <Space gap={8}>
            <GroupBox label="Kwota do zapłaty">
              <TextInput defaultValue="123.45 PLN" disabled />
            </GroupBox>

            <GroupBox label="Metoda płatności">
              <Select options={options} />
            </GroupBox>

            <Button fullWidth>Płatność</Button>
          </Space>
        </WindowContent>
      </Window>
    </Draggable>
  );
};
