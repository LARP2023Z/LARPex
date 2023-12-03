import React, { useMemo, useReducer } from 'react';
import { Window, WindowContent, WindowHeader } from 'react95';
import Draggable from 'react-draggable';
import { useClippy } from '@react95/clippy';
import { Space } from 'src/common/Space';
import { UCProcessQrCode } from './useCases/UCProcessQrCode';
import { PQrScanner } from './presenters/PQrScanner';
import {
  CQRScannerWnd,
  updateQRScannerView,
} from './controllers/CQRScannerWnd';
import { useNavigate } from 'react-router-dom';
import { VMQrScannerWnd } from './viewModels/VMQrScannerWnd';
import { QrReaderWrapper } from './styles';

const pQS = new PQrScanner();
const ucPQC = new UCProcessQrCode(pQS);

export function VQrScannerWnd() {
  const emptyData: VMQrScannerWnd = new VMQrScannerWnd();

  const [qrData, qrUpdateView] = useReducer(updateQRScannerView, emptyData);
  pQS.injectDataHandle(qrData, qrUpdateView);

  const { clippy } = useClippy();
  const navigate = useNavigate();

  const { onQrCodeScanned } = useMemo(
    () => CQRScannerWnd(ucPQC, { changeView: navigate, clippy }),
    [clippy, navigate]
  );

  return (
    <Draggable>
      <Window style={{ height: '70vh' }}>
        <WindowHeader>QR Scanner</WindowHeader>
        <WindowContent>
          <Space gap={8}>
            <QrReaderWrapper onResult={onQrCodeScanned} constraints={{}} />
            <p>{qrData.currentCode}</p>
          </Space>
        </WindowContent>
      </Window>
    </Draggable>
  );
}
