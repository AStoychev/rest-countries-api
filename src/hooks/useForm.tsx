import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PORT:string = import.meta.env.VITE_API_PORT || '';

export const useForm = () => {
    const [serverResponce, setServerResponce] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [isLoged, setIsLoged] = useState<boolean>(false);
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const navigate = useNavigate();

    const haveUser = localStorage.getItem('auth')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await fetch(PORT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Failed to login');
            }
            localStorage.setItem('auth', formData.username);
            setServerResponce(true)
            navigate('/main');
        } catch (error) {
            setError(true);
            console.error('Error:', error);
        }
        setTimeout(() => {
            setError(false)
        }, 3000)
    };

    const logout = () => {
        localStorage.removeItem('auth')
        setIsLoged(false)
    }

    useEffect(() => {
        if (haveUser) {
            setIsLoged(true)
        }
    }, [haveUser])

    return {
        formData,
        serverResponce,
        error,
        haveUser,
        isLoged,
        handleChange,
        handleSubmit,
        logout,
    }
}
