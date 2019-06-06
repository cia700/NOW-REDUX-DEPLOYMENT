import React, { Component } from "react";

class OrderHistorySkeletonScreen extends Component {
    render() {
        return (
            <table className="table table-bordered mb-5">
                <thead className="thead-light">
                    <tr>
                        <th width="80">
                            <div align="center">
                                <strong>(Reference)</strong>
                            </div>
                        </th>
                        <th width="500">
                            <div align="center">
                                <strong>Date</strong>
                            </div>
                        </th>
                        <th width="80">
                            <div align="center">
                                <strong>Total</strong>
                            </div>
                        </th>
                        <th width="100">
                            <div align="center">
                                <strong>Status</strong>
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
                    </tr>
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
                    </tr>
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
                    </tr>
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
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default OrderHistorySkeletonScreen;
