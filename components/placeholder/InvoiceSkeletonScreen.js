import React, { Component } from "react";

class InvoiceSkeletonScreen extends Component {
    render() {
        return (
            <div>
                <table className="table mb-5">
                    <thead className="thead-light">
                        <tr>
                            <td
                                width="34%"
                                align="left"
                                valign="top"
                                className="pl-0 bt-0"
                            >
                                <strong>Bill To</strong>:{" "}
                                {/*(<a href="#">
                                    edit
                                </a>)*/}
                                <br />
                                <br />
                                <div className="content-placeholder">
                                    <div className="cp-w-md cp-h-lg mb-3" />
                                </div>
                            </td>
                            <td
                                width="33%"
                                align="left"
                                valign="top"
                                className="bt-0"
                            >
                                <strong>Ship To</strong>:<br />
                                <br />
                                <div className="content-placeholder">
                                <div className="cp-w-md cp-h-lg mb-3" />
                                </div>
                            </td>
                            <td
                                width="33%"
                                align="right"
                                valign="top"
                                className="pr-0 bt-0"
                            >
                                <strong>Order #</strong>:<br />
                                <br />
                                <div className="content-placeholder">
                                    <div className="cp-w-sm cp-h-md mb-3" />
                                </div>
                                <br />
                                <br />
                                <strong>
                                    Order Date{" "}
                                </strong>:<br />
                                <br />
                                <div className="content-placeholder">
                                    <div className="cp-w-sm cp-h-md mb-3" />
                                </div>
                            </td>
                        </tr>
                    </thead>
                </table>
                {/* <table className="table mb-5">
                    <thead className="thead-light">
                        <tr>
                            <th align="center">
                                <strong>Cust. #</strong>
                            </th>
                            <th align="center">
                                <strong>Sales Rep.</strong>
                            </th>
                            <th align="center">
                                <strong>
                                    Shipping Payment Method
                                </strong>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td align="center">
                                <div className="content-placeholder">
                                    <div className="cp-w-md cp-h-md" />
                                </div>
                            </td>
                            <td align="center">
                                <div className="content-placeholder">
                                    <div className="cp-w-md cp-h-md" />
                                </div>
                            </td>
                            <td align="center">
                                <div className="content-placeholder">
                                    <div className="cp-w-md cp-h-md" />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table> */}
                <table className="table table-bordered mb-5">
                    <thead className="thead-light">
                        <tr>
                            <th width="80">
                                <div align="center">
                                    <strong>Item #</strong>
                                </div>
                            </th>
                            <th width="500">
                                <div align="center">
                                    <strong>
                                        Product Name
                                    </strong>
                                </div>
                            </th>
                            <th width="80">
                                <div align="center">
                                    <strong>Quantity</strong>
                                </div>
                            </th>
                            <th width="100">
                                <div align="center">
                                    <strong>Unit Price</strong>
                                </div>
                            </th>
                            <th width="100">
                                <div align="center">
                                    <strong>Amount</strong>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td height="20" align="center">
                                <div className="content-placeholder">
                                    <div className="cp-w-lg cp-h-md" />
                                </div>
                            </td>
                            <td align="left">
                                <div className="content-placeholder">
                                    <div className="cp-w-lg cp-h-md" />
                                </div>
                            </td>
                            <td align="center">
                                <div className="content-placeholder">
                                    <div className="cp-w-lg cp-h-md" />
                                </div>
                            </td>
                            <td align="right">
                                <div className="content-placeholder">
                                    <div className="cp-w-lg cp-h-md" />
                                </div>
                            </td>
                            <td align="right">
                                <div className="content-placeholder">
                                    <div className="cp-w-lg cp-h-md" />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                    <tbody className="table-bordered">
                        <tr>
                            <td height="20" colSpan="3" rowSpan="4">
                                &nbsp;
                            </td>
                            <td align="right">
                            </td>
                            <td align="right">
                                <div className="content-placeholder">
                                    <div className="cp-w-lg cp-h-md" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td align="right">
                            </td>
                            <td align="right">
                                <div className="content-placeholder">
                                    <div className="cp-w-lg cp-h-md" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td align="right">
                            </td>
                            <td align="right">
                                <div className="content-placeholder">
                                    <div className="cp-w-lg cp-h-md" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td align="right" valign="top">
                            </td>
                            <td align="right" valign="top">
                                <div className="content-placeholder">
                                    <div className="cp-w-lg cp-h-md" />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table className="table mb-5">
                    <thead className="thead-light">
                        <tr>
                            <th>Comments</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="pl-0">
                                <blockquote>
                                    <div className="content-placeholder">
                                        <div className="cp-w-md cp-h-md mb-3" />
                                    </div>
                                </blockquote>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default InvoiceSkeletonScreen;
