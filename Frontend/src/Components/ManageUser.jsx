import React, {useState, useEffect} from 'react'

const ManageUsers = () => {
    const [Data, setData] = useState([])

    const fetchUserData = async () => {
        const res = await fetch('http://localhost:3000/user/getall',)
        // console.log(res.status)
        if(res.status === 200){
            const data = await res.json()
            console.log(data)
            setData(data)
        }
    }
    useEffect(() => {
        fetchUserData()
    }, [])

    const displayUsers = () => {
        return Data.map((user) => {
            <tr>
                <td>{user.fName}</td>
                <td>{user.email}</td>
                <td>
                    <button className='btn btn-danger'>Delete</button>
                </td>
            </tr>
        })
    }

  return (
    <div className=''>
        <header className='bg-danger mt-5 text-white text-center'>
            <div className="container py-5">
                <h1>Manage Users</h1>
            </div>
        </header>

        <div className="container mt-3">
            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {displayUsers()}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default ManageUsers