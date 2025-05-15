import { useState, useEffect } from "react";
import { createContext } from "react";
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const AppContext = createContext()

const AppContextProvider = (props) => {

    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const [showLogin, setShowLogin] = useState(false)
    const [credit, setCredit] = useState(false);
    const [image, setImage] = useState(false)
    const [resultImage, setResultImage] = useState(false);
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [user, setUser] = useState(null);

    const navigate = useNavigate();



    const loadCreditsData = async () => {
        try {
            const { data } = await axios.get(backendUrl + '/api/user/credits', { headers: { token } })

            if (data.success) {
                setCredit(data.credits)
                setUser(data.user)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    const logout = () => {
        localStorage.removeItem('token')
        setToken('')
        setUser(null)
    }

    const removeBg = async (image) => {
        try {

            // if (!token) {
            // setShowLogin(true); // 👈 show login form
            // toast.info("Please login to continue.");
            // return;
        // } 
            setImage(image);
            setResultImage(false);

            navigate('/result')
            
            // const token = await getToken();
            const token = localStorage.getItem('token');

            const formData = new FormData()
            image && formData.append('image', image)

            const {data} = await axios.post(backendUrl+'/api/image/remove-bg', formData, {headers:{token}})

            if(data.success){
                setResultImage(data.resultImage)
                data.creditBalance && setCredit(data.creditBalance)
            }else{
                toast.error(data.message)
                data.creditBalance && setCredit(data.creditBalance)
                if(data.creditBalance === 0){
                    navigate('/buy')
                }
            }

        } catch (error) {
            console.log(error);
            toast.error(error.message);

        }
    }

    useEffect(() => {
        if (token) {
            localStorage.setItem('token', token);
            loadCreditsData();
        }
    }, [token]);

    const value = {
        credit, setCredit, loadCreditsData, backendUrl, image, setImage, removeBg, showLogin, setShowLogin,
        resultImage, setResultImage, token, setToken, user, setUser, logout
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export { AppContext, AppContextProvider };