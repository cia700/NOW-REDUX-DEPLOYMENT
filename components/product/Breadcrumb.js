import React, { Component } from "react";

class Breadcrumb extends Component {
    toCapitalize = (str, separator = " ", final = " ") => {
        let res = str.split(separator);

        for (let i = 0; i < res.length; i++) {
            res[i] = `${res[i].charAt(0).toUpperCase()}${res[i].substring(1)}`;
        }

        return res.join(final);
    };

    getPath = () => {
        let path = this.props.path;

        path = path.split("/");
        path.shift();

        return path;
    };

    render = () => {
        const path = this.getPath();
        let name = path.pop();

        if (name === "search"){
            name = "products";
        }

        return (
            <nav className="breadcrumb">
                <ol className="text-truncate">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    {path.map(p => (
                        <li key={p}>
                            <a href={`/${p === "search" ? "Products" : p}`}>
                                {p.split("?")[0] == "search"
                                    ? "Products"
                                    : this.toCapitalize(p.split("?")[0])
                                }
                            </a>
                        </li>
                    ))}
                    <li className="text-truncate">{this.toCapitalize(name)}</li>
                </ol>
            </nav>
        );
    };
}

export default Breadcrumb;
