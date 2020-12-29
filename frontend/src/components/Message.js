import React from 'react'
import {Alert } from "react-bootstrap"

export default function Message({ varient,childern }) {
    return (
        <Alert variant={varient}>
            {childern}
        </Alert>
    )
}

Message.defaultProps = {
    variant: 'info'
}
