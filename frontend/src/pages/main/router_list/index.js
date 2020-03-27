import React from 'react'
import { H1 } from "../../../styles"
import { NoRoutes, TableList, Th, TrHead, TrBody } from "./styles"

export default function RouterList({ list, selectRow }) {

    return (
        <>
            <H1>My routes</H1>
            {
                list.length > 0 ? (
                    <TableList>
                        <TrHead>
                            <Th style={{ width: '1%' }}></Th>
                            <Th>Name</Th>
                            <Th>Method</Th>
                            <Th>Route</Th>
                        </TrHead>
                        {list.map((row, index) => (
                            <TrBody key={index} onClick={() => selectRow(row)}>
                                <td>{row._id}</td>
                                <td>{row.name}</td>
                                <td>{row.method}</td>
                                <td>{row.slug}</td>
                            </TrBody>
                        ))}
                    </TableList>
                ) : <NoRoutes>No routes stored</NoRoutes>
            }

        </>
    )
}