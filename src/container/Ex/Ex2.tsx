import { useSelector } from "react-redux";
import { ExSelectors } from "redux/toolkit/ExSlice";
import React, { useCallback, useState, useMemo } from 'react';

interface props {
    number: number,
    Total: any,
    vidu: any
}

const NumberColor: React.FC<props> = ({ number, vidu }) => {
    console.log('re-render')
    const tinhtoan = useMemo(() => (// k tinh toan lai khi bi re-render
        number % 2 === 0
    ), [number])
    { vidu() }
    return (
        <p style={{ color: tinhtoan ? 'red' : 'green' }}>ABC</p>
    );
}

const MemoizedNumberColor = React.memo(// props k thay doi thi ko re-render
    NumberColor, (prevProp, nextProp) => (prevProp.number % 2 === nextProp.number % 2 && prevProp.Total === nextProp.Total)
)

const Ex2: React.FC = () => {
    const Total = useSelector(ExSelectors.selectTotal);
    const [number, setnumber] = useState<number>(0)
    const vidu = useCallback(
        () => {
            console.log(number) // k lam moi function khi re-render
        },
        [number],
    )
    return (
       <div>
            <h1>Total List : {Total}</h1>
            <h3>{number}</h3>
            <input type='submit' value='submit +1' onClick={() => setnumber(number + 1)} />
            <input type='submit' value='submit +2' onClick={() => setnumber(number + 2)} />
            <NumberColor number={number} Total={Total} vidu={vidu} />
        </div>
    );
}

export default Ex2;