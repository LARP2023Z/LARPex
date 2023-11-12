import {
    Button,
    GroupBox,
    Select,
    TextInput,
    Window,
    WindowContent,
    WindowHeader,
} from 'react95';
import {useForm, Controller} from 'react-hook-form';
import {Space} from 'src/common/Space';
import Draggable from 'react-draggable';
import {PaymentMethod} from '../types/PaymentMethod';
import {PaymentFormData, VMPayWndData} from '../viewModels/VMPayWnd';
import {CPayWnd, updatePayView} from '../controllers/CPayWnd';
import {UCPayForEvent} from '../useCases/UCPayForEvent';
import {PPayWnd} from '../presenters/PPayWnd';
import {EventProxyMock} from '../services/Events';
import {PaymentProxyMock} from '../services/Payments';
import {formSettings} from './aux/variables';
import {useEffect, useMemo, useReducer} from 'react';
import {mapPaymentMethodToSelectOption} from './aux/utils';
import {useParams} from "react-router";
import {useSearchParams} from "react-router-dom";

const pPW = new PPayWnd();
const iEv = new EventProxyMock();
const iPay = new PaymentProxyMock();

const ucPFE = new UCPayForEvent(pPW, iPay, iEv);

type Params = {
    success: string;
};
export default function VPayResultWnd() {
    const [searchParams, setSearchParams] = useSearchParams();

    switch (searchParams.get("success")) {
        case "true":
            return (
                <Draggable>
                    <Window>
                        <WindowHeader>Płatność</WindowHeader>
                        <WindowContent>
                            <Space gap={8}>
                                <p>Płatność zakończona sukcesem</p>
                            </Space>
                        </WindowContent>
                    </Window>
                </Draggable>
            );
        case "false":
            return (
                <Draggable>
                    <Window>
                        <WindowHeader>Płatność</WindowHeader>
                        <WindowContent>
                            <Space gap={8}>
                                <p>Płatność zakończona niepowodzeniem</p>
                            </Space>
                        </WindowContent>
                    </Window>
                </Draggable>
            );
        default:
            return (
                <Draggable>
                    <Window>
                        <WindowHeader>Płatność</WindowHeader>
                        <WindowContent>
                            <Space gap={8}>
                                <p>Wystąpił błąd</p>
                            </Space>
                        </WindowContent>
                    </Window>
                </Draggable>
            );
    }
}
