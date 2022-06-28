"use strict";
exports.id = 316;
exports.ids = [316];
exports.modules = {

/***/ 799:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ axiosClient)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const axiosClient = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
    baseURL: process.env.API_URL || "http://localhost:3500/api/v1/"
});


/***/ }),

/***/ 316:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Zl": () => (/* binding */ CartProvider),
/* harmony export */   "jD": () => (/* binding */ useCart)
/* harmony export */ });
/* unused harmony export CartContext */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(799);
/* harmony import */ var _useNotification__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(833);





const CartContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)({});
const CartProvider = ({ children  })=>{
    const { handleNotification  } = (0,_useNotification__WEBPACK_IMPORTED_MODULE_4__/* .useNotification */ .lm)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const refreshData = ()=>{
        router.replace(router.asPath);
    };
    const handleCart = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async (cart)=>{
        try {
            const response = await _config_axios__WEBPACK_IMPORTED_MODULE_3__/* .axiosClient.post */ .U.post("/carts/create-cart", {
                cart
            });
            if (response.status !== 200) {
                throw response;
            }
            handleNotification({
                title: "Sucesso",
                message: "Seu pedido foi realizado",
                type: "success"
            });
            return refreshData();
        } catch (error) {
            if (error.status === 507) {
                return handleNotification({
                    title: "Erro",
                    message: "N\xe3o h\xe1 estoque suficiente para seu pedido",
                    type: "alert"
                });
            }
            return handleNotification({
                title: "Erro",
                message: "Erro ao processar seu pedido",
                type: "alert"
            });
        }
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CartContext.Provider, {
        value: {
            handleCart
        },
        children: children
    });
};
function useCart() {
    const context = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(CartContext);
    if (!context) {
        throw new Error("useCart must be used within an CartProvider ");
    }
    return context;
}


/***/ }),

/***/ 833:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JB": () => (/* binding */ NotificationProvider),
/* harmony export */   "lm": () => (/* binding */ useNotification)
/* harmony export */ });
/* unused harmony export NotificationContext */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const NotificationContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});
const NotificationProvider = ({ children  })=>{
    const { 0: title1 , 1: setTitle  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("Error");
    const { 0: message1 , 1: setMessage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("success");
    const { 0: type1 , 1: setType  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("success");
    const { 0: showNotification , 1: setShowNotification  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleNotification = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ({ title , message , type  })=>{
        if (showNotification) {
            return;
        }
        setTitle(title);
        setMessage(message);
        setType(type);
        setShowNotification(true);
        setTimeout(()=>{
            setShowNotification(false);
        }, 2000);
    }, [
        setTitle,
        setMessage,
        setType,
        setShowNotification,
        showNotification
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NotificationContext.Provider, {
        value: {
            handleNotification,
            title: title1,
            message: message1,
            type: type1,
            showNotification
        },
        children: children
    });
};
function useNotification() {
    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(NotificationContext);
    if (!context) {
        throw new Error("useNotification must be used within an NotificationProvider ");
    }
    return context;
}


/***/ })

};
;