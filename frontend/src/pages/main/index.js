import React, { useContext, useState, useEffect } from 'react'
import { Context } from '../../context'
import Navbar from "../../components/navbar"
import { Container } from "./styles"
import Cookies from "../../services/cookies"
import Api from "../../services/api"
import { useHistory } from 'react-router-dom'
import RouteForm from "./router_form"
import RouterList from "./router_list"

export default function Main() {
	const { user } = useContext(Context)
	const [list, setList] = useState([])
	const [selectedRow, setSelectedRow] = useState(null)
	const history = useHistory()

	useEffect(() => {
		const initSessionUser = () => {
			let session_user = Cookies.get("session_user")
			if (!session_user) return false
			if (session_user) session_user = JSON.parse(session_user)
			if (session_user._id) {
				user._id = session_user._id
				user.username = session_user.username
				user.token = session_user.token
				Api.setAuth(session_user.token)
			}
			return session_user
		}
		let session_user = initSessionUser()
		if (!session_user) return history.replace("/Auth")

		const loadRoutes = async () => {
			Api.get("/routes/list").then(res => {
				res = res.data
				setList(res.routes)
			}).catch(er => {
				console.log(Api.processError(er))
			})
		}
		loadRoutes()
	}, [user, history])


	const selectRow = (route) => {
		setSelectedRow(route)
		window.document.getElementById("route-form").scrollIntoView({
			behavior: "smooth",
			block: "start",
			inline: "nearest"
		})
	}

	return (
		<>
			<Navbar user={user} currentPath="Home" />
			<Container>
				<RouterList list={list} selectRow={selectRow} />
				<RouteForm list={list} selectedRow={selectedRow} />
			</Container>
		</>
	)
}