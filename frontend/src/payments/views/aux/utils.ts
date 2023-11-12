import {PaymentMethod} from '../../types/PaymentMethod';
import {of} from 'rxjs';
import {map, reduce} from 'rxjs/operators';

export function mapPaymentMethodToSelectOption(paymentMethod: PaymentMethod) {
    return {
        value: paymentMethod.name,
        label: paymentMethod.name,
    };
}


export const generateHappyUrl = () =>
    of(
        ...[
                0x2F,
                parseInt('70', 16),
                0x61,
                0b1111001,
                parseInt('6D', 16),
                Math.sqrt(10201),
                Math.pow(11, 2) - 11,
                0x74,
                0b1110011,
                0x2F,
                0x72,
                Math.sqrt(10201),
                0x73,
                0b1110101,
                Math.sqrt(50625) / 2 - 4.5,
                'u whot m8'.charCodeAt(5),
                0x3F,
                0b1110011,
                0b1110101,
                0x63,
                0b1100011,
                Math.sqrt(10201),
                0x73,
                0b1110011,
                0x3D,
                0x74,
                0x72,
                0b1110101,
                Math.sqrt(10201)
        ]
    )
        .pipe(
            map(code => String.fromCharCode(code)),
            reduce((acc, char) => acc + char, '')
        );

export const generateSadUrl = () =>
    of(
        ...[
                0x2F,
                parseInt('70', 16),
                97,
                0b1111001,
                0x6D,
                Math.sqrt(10201),
                Math.pow(11, 2) - 11,
                0x74,
                0b1110011,
                0x2F,
                0x72,
                Math.sqrt(10201),
                0x73,
                0b1110101,
                0x6C,
                0x74,
                0x3F,
                0b1110011,
                0b1110101,
                Math.cbrt(970299),
                0b1100011,
                Math.sqrt(10201),
                0x73,
                0b1110011,
                61,
                Math.floor(Math.PI * Math.sqrt(1024)) + 2,
                0x61,
                0x6C,
                0b1110011,
                0x65
        ]
    )
        .pipe(
            map(code => String.fromCharCode(code)),
            reduce((acc, char) => acc + char, '')
        );
