import { createContext,useState } from "react"
import axios  from 'axios'
import { useNavigate } from "react-router-dom";
import jwt_decode from 'jwt-decode';



const AuthContext = createContext()
export default AuthContext

export const AuthProvider = ({children}) => {
    let [authToken, setAuthToken] = useState(() => localStorage.getItem('authToken')? JSON.parse(localStorage.getItem('authToken')):null)
    let [user,setUser]=useState(()=>localStorage.getItem('authToken')? jwt_decode(localStorage.getItem('authToken')):null)
    let [admin,setAdmin]=useState(()=>localStorage.getItem('admin')? jwt_decode(localStorage.getItem('admin')):null)
    let [adminToken,setadminToken]=useState(()=>localStorage.getItem('admin')? JSON.parse(localStorage.getItem('admin')):null)

    // let [recruiter,setRecruiter]=useState(()=>localStorage.getItem('adminAuthToken')? jwt_decode(localStorage.getItem('adminAuthToken')):null)
    let [adminAuthToken,setAdminAuthToken]=useState(()=>localStorage.getItem('adminAuthToken')? JSON.parse(localStorage.getItem('adminAuthToken')):null)

    const navigate=useNavigate()


    const Userlogin=async(email,password)=>{
       
        await axios.post('http://127.0.0.1:8000/api/user/signin/',{email:email,password:password}).then((res)=>{
                 console.log(res.data)
                 
                 console.log('id is here',res.data.user.user_id);
                 if (res.data.token){
                   console.log('recruiter is ' + res.data.user.user_type);
                   
                   if (res.data.user.user_type == 'JobSeeker'){
                    console.log("hai");
                    localStorage.setItem('authToken',JSON.stringify(res.data));
                    localStorage.setItem('token',JSON.stringify(res.data.token));
                    console.log(res.data.token.access);
                    localStorage.setItem('profile_id', JSON.stringify(res.data.profile_id))
                    console.log(res.data);
                    setAuthToken(res.data)
                    setUser(res.data.token)                      
                    //  SetError(res.data.message)
                     localStorage.setItem('userId',JSON.stringify(res.data.user.user_id))
                     navigate('/')
                   }
                   else if(res.data.user.user_type == 'Recruiter'){
                     localStorage.setItem('adminAuthToken',JSON.stringify(res.data))
                     localStorage.setItem('token',JSON.stringify(res.data.token))
                     localStorage.setItem('profile_id', JSON.stringify(res.data.profile_id))
                     setAdminAuthToken(res.data)
                    setUser(res.data.token)                      

                    //  setRecruiter(res.data.token)                      
                    //  SetError(res.data.message)
                     localStorage.setItem('userId',JSON.stringify(res.data.user.user_id))
                     navigate('/recruiter-profile')
                   }                    
                   else{
                     localStorage.setItem('admin',JSON.stringify(res.data))
                     localStorage.setItem('token',JSON.stringify(res.data.token))
                     setadminToken(res.data)
                     setAdmin(res.data.token)                      
                    //  SetError(res.data.message)
                     navigate('/')
                   };
                 }
               
            //    if(res.data.message){              
            //      SetError(res.data.message)
            //      handleShow()
 
            //      handleClicks()
            //      setTimeout(() => {
            //          handleClose(false);
            //          handleCloses()
            //             }, 5000);
            //    }
 
             }
             ) ; 
         }

         let logOut=()=>{
            axios.post('user/logout/').then((res)=>{
                console.log(res.data)
            })
            localStorage.removeItem('authToken')
            localStorage.removeItem('token')
            localStorage.removeItem('userId')
            localStorage.removeItem('adminAuthToken')
            localStorage.removeItem('Admintoken')
            localStorage.removeItem('admin')
            // localStorage.removeItem('Role')
            localStorage.removeItem('profile_id')

            setUser(null)
            setAuthToken(null)
            navigate('/signin')
        }


        const [mobile,setMobile]=useState('')
        let contextData={
            user:user,
            Userlogin:Userlogin,
            logOut:logOut,
            authToken:authToken,
            adminToken:adminToken,
            mobile:mobile,
            setMobile:setMobile,   
            // errors:errors,    
            adminAuthToken:adminAuthToken,
            admin:admin,
            // setShow:setShow,
            // handleClose:handleClose,
            // handleShow:handleShow,
            // show:show,
            // handleCloses:handleCloses,
            // opens:opens,

        }
        return(
            <AuthContext.Provider value={contextData}>
                {children}
            </AuthContext.Provider>
        )

}