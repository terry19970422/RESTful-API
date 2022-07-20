import React, { useEffect, useState } from "react";
import { AB_GET_LIST } from "./config/ajax-path";

// componentDidMount
// componentDidUpdate
// componentWillUnmount

export default function App() {
    const [data, setData] = useState({});

    const getData = async () => {
        const r = await fetch(AB_GET_LIST);
        const obj = await r.json();
        console.log(obj);
        setData(obj);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            {data && data.totalPages ? (
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item">
                            <a className="page-link" href="#/">
                                Previous
                            </a>
                        </li>
                        {Array(10)
                            .fill(1)
                            .map((v, i) => (
                                <li className="page-item" key={'pagi' + i}>
                                    <a className="page-link" href="#/">
                                        {i + 1}
                                    </a>
                                </li>
                            ))}

                        <li className="page-item">
                            <a className="page-link" href="#/">
                                Next
                            </a>
                        </li>
                    </ul>
                </nav>
            ) : null}

            {console.log({ data })}
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">姓名</th>
                        <th scope="col">Email</th>
                        <th scope="col">手機號碼</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.rows
                        ? data.rows.map((row) => (
                              <tr key={"mm" + row.sid}>
                                  <th scope="row">{row.sid}</th>
                                  <td>{row.name}</td>
                                  <td>{row.email}</td>
                                  <td>{row.mobile}</td>
                              </tr>
                          ))
                        : null}
                </tbody>
            </table>
        </div>
    );
}
