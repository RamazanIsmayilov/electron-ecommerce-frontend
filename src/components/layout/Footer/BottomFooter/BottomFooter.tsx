import React from 'react'

const BottomFooter: React.FC = () => {
    return (
        <div className='bottom-footer pb-5'>
            <div className="containers d-flex align-items-center justify-content-between flex-wrap text-light">
                <div className="left">
                    <h4 className='fw-bold mb-3'>Secure Shopping</h4>
                    <img src="https://ninetheme.com/themes/electron2/wp-content/uploads/2023/08/payment-300x26.webp" alt="" />
                </div>
                <div className="right d-flex justify-content-end">
                    <span>
                        All right reserved. Porta lorem mollis aliquam ut porttitor leo. Magna ac placerat vestibulum <br /> lectus mauris ultrices eros. Tortor condimentum lacinia quis...
                    </span>
                </div>
            </div>
        </div>
    )
}

export default BottomFooter