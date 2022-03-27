import React from 'react';
import { IMaskInput } from 'react-imask';
import { CustomProps } from "../../types";

export const PhoneMaskCustom = React.forwardRef<HTMLElement, CustomProps>(
    (props, ref) => {
        const { onChange, ...other } = props;
        return (
            <IMaskInput
                {...other}
                mask="+7(900) 000 00 00"
                // @ts-ignore
                inputRef={ref}
                definitions={{
                    "#": /[0-9]/,
                }}
                // так написано в документации. Хотя и value является string, он ее не воспринимает
                onAccept={(value: any) =>
                    onChange({ target: { name: props.name, value } })
                }
                overwrite
            />
        );
    }
);