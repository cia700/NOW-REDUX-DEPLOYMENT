import _ from "lodash";

export const WEBSITE_URL = "http://localhost:3000";

export const scrollToTop = () => {
    const fn = () => {
        if (document.documentElement.scrollTop > 0) {
            window.scrollBy(0, -50);
        } else {
            clearInterval(i);
        }
    };

    const i = setInterval(fn, 10);
};

export const hash = () => {
    var hash = window.location.hash.substring(1);

    var params = {};

    hash.split("&").map(hk => {
        let temp = hk.split("=");
        params[temp[0]] = temp[1];
    });

    return params;
};

export const isCheckoutPage = path => {
    const p = path.toString();
    return p.includes("/payment") || p.includes("/shipping");
};

export const isOrderPage = path => {
    const p = path.toString();
    return p.includes("/order-history") || p.includes("/invoice");
};

export const isThankYouPage = path => {
    const p = path.toString();
    return p.includes("/thank-you");
};

export const isProfilePage = path => {
    const p = path.toString();
    return p.includes("/profile");
};

export const isProductsPage = path => {
    const p = path.toString();
    return p.includes("/search");
};

export const isHomePage = path => {
    const p = path.toString();
    return p == "/";
};

export const isSuccess = resp => {
    return _.get(resp, "data.status", "") === "success";
};

export const object = (options, value) => {
    let v = value ? value : "";

    let l = _.filter(options, function(o) {
        return o.value === v;
    });

    return l.length > 0 ? l[0] : "";
};

export const getOrderProducts = products => {
    let pl = [];

    pl = _.map(products, function(p) {
        return {
            id: p.id,
            title: p.title,
            qty: p.qty,
            price: p.price
        };
    });

    return pl;
};

export const subtotal = products => {
    let price = 0;

    _.forEach(products, function(value) {
        price += value.qty * value.price;
    });

    return price;
};

export const calculateTax = (setting, products) => {
    let tax = {
        taxAmountForTax: 0,
        taxAmountForFetTax: 0
    };

    let calculateType = [
        {
            name: "Percentage",
            value: "PERCENTAGE"
        },
        {
            name: "Flat Rate",
            value: "FLAT_RATE"
        }
    ];

    let _subtotal = subtotal(products);

    if (_subtotal == 0) {
        return tax;
    }

    if (setting.activeTax) {
        if (setting.calculateTaxTypeForTax == calculateType[0].value) {
            tax.taxAmountForTax = (_subtotal * setting.taxAmountForTax) / 100;
        } else {
            tax.taxAmountForTax = setting.taxAmountForTax;
        }
    } else {
        tax.taxAmountForTax = 0;
    }

    return tax;
};

export const total = (products, setting) => {
    let total = 0;
    let sub = subtotal(products);
    let shipping = 0;
    let tax = calculateTax(setting, products);

    let totalTax = tax.taxAmountForFetTax + tax.taxAmountForTax;
    total = sub + totalTax + shipping;

    return total;
};

export const capitalize = string => {
    let label = [];
    let out = "";
    if (string.includes(" ")) {
        label = string.split(" ");

        for (let i = 0, j = label.length; i < j; i++) {
            label[i] = `${label[i].charAt(0).toUpperCase()}${label[i].toLowerCase().substring(
                1
            )}`;
        }

        out = label.join(" ");
    } else {
        out = `${string.charAt(0).toUpperCase()}${string.toLowerCase().substring(1)}`;
    }

    return out;
};
