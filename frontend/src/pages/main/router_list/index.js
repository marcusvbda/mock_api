import React from 'react'
import "./index.css"

export default function RouterList({ list, selectRow }) {

    return (
        <>
            <h1>My routes</h1>
            {
                list.length > 0 ? (
                    <table className="table-list">
                        <thead>
                            <tr>
                                <th style={{ width: '1%' }}></th>
                                <th>Name</th>
                                <th>Method</th>
                                <th>Route</th>
                            </tr>
                        </thead>
                        <tbody>
                            {list.map((row, index) => (
                                <tr key={index} onClick={() => selectRow(row)}>
                                    <td>{row._id}</td>
                                    <td>{row.name}</td>
                                    <td>{row.method}</td>
                                    <td>{row.slug}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : <span className="no-routes">No routes stored</span>
            }

        </>
    )
}