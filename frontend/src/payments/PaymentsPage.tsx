import { FC } from 'react';
import { Window, WindowContent, WindowHeader } from 'react95';
import Draggable from 'react-draggable';
import { Space } from 'src/common/Space';
import { PaymentMethodPresenter } from './PaymentMethodPresenter';
import { PayPresenter } from './PayPresenter';

export const PaymentsPage: FC = () => {
  return (
    <Draggable>
      <Window>
        <WindowHeader>Płatność</WindowHeader>
        <WindowContent>
          <Space gap={8}>
            <PaymentMethodPresenter />
            <PayPresenter />
          </Space>
        </WindowContent>
      </Window>
    </Draggable>
  );
};
