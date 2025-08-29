import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Ns = () => {
    const navigate = useNavigate()
    useEffect(() => {
        navigate('/404')
    }, [])
}

export default Ns