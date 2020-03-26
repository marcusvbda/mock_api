import React, { useContext, useState, useEffect } from 'react'
import JSONInput from 'react-json-editor-ajrm'
import { Context } from '../../../context'
import "./index.css"
import Api from "../../../services/api"
import Loading from "../../../components/loading"

export default function RouteForm({ list, selectedRow }) {
    const { user } = useContext(Context)
    const [id, setId] = useState(null)
    const [name, setName] = useState("")
    const [method, setMethod] = useState("GET")
    const [response, setResponse] = useState({ success: true })
    const [jsonError, setJsonError] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (selectedRow) {
            setId(selectedRow._id)
            setName(selectedRow.name)
            setResponse(selectedRow.response)
            setMethod(selectedRow.method)
        }
    }, [selectedRow])

    const f_route_name = () => {
        if (!name) return <div className="f-route-name">{`{your-route-name}`}</div>
        return <div className="f-route-name">{slug_name()}</div>
    }

    const slug_name = () => {
        let str = name
        str = str.replace(/^\s+|\s+$/g, '')
        str = str.toLowerCase()
        let from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;"
        let to = "aaaaeeeeiiiioooouuuunc------"
        for (let i = 0, l = from.length;i < l;i++)  str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i))
        str = str.replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-')
        let count = list.filter(x => x.name === name).length
        return `${str}${((count >= 1) && (!selectedRow)) ? "-" + (++count) : ""}`
    }

    const changeResponse = (e) => {
        if (e.error) return setJsonError(true)
        setResponse(e.json)
        return setJsonError(false)
    }

    const save = () => {
        setLoading(true)
        let route = { id, name, response, method, slug: slug_name() }
        Api.post("/routes/store", route).then(res => {
            res = res.data
            window.location.reload()
        }).catch(er => {
            console.log(Api.processError(er))
        })
    }

    const canSave = () => {
        if (jsonError || !name) return false
        return true
    }

    const cancel = () => {
        window.location.reload()
    }

    const destroyRoute = () => {
        let confirmed = window.confirm("Do you want to remove this route ?")
        if (!confirmed) return
        Api.delete(`/routes/destroy/${id}`).then(res => {
            res = res.data
            window.location.reload()
        }).catch(er => {
            console.log(Api.processError(er))
        })
    }

    return (
        <>
            <Loading show={loading} text="Loading..." />
            <div className="route-form" id="route-form">
                <div className="name-action">
                    <input maxLength={30} placeholder="Type route name here ...." value={name} onChange={e => setName(e.target.value)} />
                    <select value={method} onChange={e => setMethod(e.target.value)}>
                        <option value="GET">GET</option>
                        <option value="POST">POST</option>
                        <option value="PUT">PUT</option>
                        <option value="PATH">PATH</option>
                        <option value="DELETE">DELETE</option>
                    </select>
                </div>
                <small className="description">
                    <div>Your route is {<span className="route-method">{`[${method}] - `}</span>}{`${process.env.REACT_APP_HOST}/${user._id}/`}</div>
                    <div>{f_route_name()}</div>
                </small>
                <div className="json-editor">
                    <JSONInput height='150px' width="100%" onChange={changeResponse} placeholder={selectedRow ? selectedRow.response : null} />
                </div>
                <div className="row-btn">
                    <button onClick={() => destroyRoute()} className="danger" style={{ visibility: (selectedRow ? 'unset' : 'hidden') }}>Delete Route</button>
                    <div className="storing-btn">
                        <span className="cancel-btn" onClick={() => cancel()} style={{ visibility: (canSave() ? 'unset' : 'hidden') }}>Cancel</span>
                        <button className="secondary" disabled={!canSave()} onClick={save}>Save Route</button>
                    </div>
                </div>
            </div>
        </>
    )
}