import React, { useContext } from 'react'
import { Context } from '../../context'
import Navbar from "../../components/navbar"
import "./index.css"
import Cookies from "../../services/cookies"
import Api from "../../services/api"
import { useHistory } from 'react-router-dom'

export default function Main() {
	const { user } = useContext(Context)
	const history = useHistory()

	const initSessionUser = () => {
		let session_user = Cookies.get("session_user")
		if (!session_user) return history.replace("/auth")
		if (session_user) session_user = JSON.parse(session_user)
		if (session_user._id) {
			user._id = session_user._id
			user.username = session_user.username
			user.token = session_user.token
			Api.defaults.headers.common.Authorization = `Bearer ${user.token}`
		}
	}
	initSessionUser()

	return (
		<>
			<Navbar user={user} currentPath="Home" />
			<div className="container">
				<h1>Main</h1>
			</div>
		</>
	)
}