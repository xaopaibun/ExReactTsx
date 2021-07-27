import React from 'react';
const Loading : React.FC = () => {
    return (
        <div style={{ display: 'flex',height:'100vh', justifyContent: 'center', alignItems: 'center' }}>
                <img src='https://i.pinimg.com/originals/71/3a/32/713a3272124cc57ba9e9fb7f59e9ab3b.gif' style={{ width: '250px', height: '250px' }} />
        </div>
    );
}
export default Loading;