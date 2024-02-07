import axios from "axios";
import {useState, useEffect} from 'react'
import { Link } from "react-router-dom";

const URI = 'http://localhost:8000/blogs'

const CompShowBlogs = () => {
    const [blogs, setBlogs] = useState([])
    useEffect( () => {
        getBlogs()
    }, [])

    // Mostrar todos los blogs 
    const getBlogs = async () => {

    }

    const deleteBlog = async (id) => {

    }

    return(
        <div>
            
        </div>
    )
}

export default CompShowBlogs