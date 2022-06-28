"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 461:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(518);
;// CONCATENATED MODULE: ./src/styles/theme/default.ts
const light = {
    title: "light",
    colors: {
        background: "#F6F6F6",
        title: "#231F20",
        text: "#231F20",
        background_item: "#E4E4E4",
        border_color: "#36444C",
        button_text: "#F6F6F6",
        button_Background: "#36444C"
    },
    spacing: {
        sm: "4px",
        md: "8px",
        lg: "16px",
        xlg: "32px"
    },
    borderRadius: "24px",
    notification: {
        alert: "#dc3545",
        warning: "#ffc107",
        success: "#28a745"
    }
};
/* harmony default export */ const theme_default = (light);

// EXTERNAL MODULE: ./src/hooks/useCart/index.tsx
var useCart = __webpack_require__(316);
// EXTERNAL MODULE: ./src/hooks/useNotification/index.tsx
var useNotification = __webpack_require__(833);
;// CONCATENATED MODULE: ./src/hooks/index.tsx





const AppContext = ({ children  })=>/*#__PURE__*/ jsx_runtime_.jsx(useNotification/* NotificationProvider */.JB, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(useCart/* CartProvider */.Zl, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(external_styled_components_.ThemeProvider, {
                theme: theme_default,
                children: children
            })
        })
    })
;
/* harmony default export */ const hooks = (AppContext);

;// CONCATENATED MODULE: ./src/styles/globals.ts

/* harmony default export */ const globals = (external_styled_components_.createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    background: ${(props)=>props.theme.colors.background
};
    color: ${(props)=>props.theme.colors.text
};
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font-family: 'Inter custom',sans-serif;
    font-size: 16px;
    font-weight: normal;
  }
  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 500;
  }
  button{
    cursor: pointer;
    transition: color 500ms ease-out;
    :hover {
      color: ${(props)=>props.theme.colors.text
};
      opacity:0.8;
    }
  }
`);

;// CONCATENATED MODULE: ./src/pages/_app.tsx



/* harmony default export */ const _app = (({ Component , pageProps  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(hooks, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(globals, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            ]
        })
    });
});


/***/ }),

/***/ 167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [316], () => (__webpack_exec__(461)));
module.exports = __webpack_exports__;

})();