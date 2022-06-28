"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 138:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/atomic/molecules/Button/styles.ts

const Button = (external_styled_components_default()).button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: ${(props)=>props.theme.spacing.md
};
    padding-left: ${(props)=>props.theme.spacing.md
};
    padding-top: ${(props)=>props.theme.spacing.sm
};
    padding-bottom: ${(props)=>props.theme.spacing.sm
};
    background-color: ${(props)=>props.theme.colors.button_Background
};
    color: ${(props)=>props.theme.colors.button_text
};
    outline: 0;
    border-radius: ${(props)=>props.theme.borderRadius
};
    border-style: none;
`;

;// CONCATENATED MODULE: ./src/atomic/molecules/Button/index.tsx


const ButtonMolecule = ({ text , onClick  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(Button, {
        onClick: onClick,
        children: text
    });
};

;// CONCATENATED MODULE: ./src/atomic/atoms/Label/styles.ts

const Label = (external_styled_components_default()).label`
    display: flex;
    align-items: center;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

;// CONCATENATED MODULE: ./src/atomic/atoms/Label/index.tsx


const LabelAtom = ({ text  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(Label, {
        children: text
    });
};

;// CONCATENATED MODULE: ./src/atomic/molecules/BuyFooter/styles.ts

const FormFooter = (external_styled_components_default()).div`
    padding: ${(props)=>props.theme.spacing.md
};
    gap: ${(props)=>props.theme.spacing.md
};
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: end;
`;

;// CONCATENATED MODULE: ./src/atomic/molecules/BuyFooter/index.tsx




const BuyFooterMolecule = ({ totalPrice , buyAction  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(FormFooter, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(LabelAtom, {
                text: `Valor Total: R$${totalPrice}`
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ButtonMolecule, {
                text: "Pedir",
                onClick: buyAction
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/atomic/atoms/MainTitle/styles.ts

const MainTitle = (external_styled_components_default()).h1``;

;// CONCATENATED MODULE: ./src/atomic/atoms/MainTitle/index.tsx


const MainTitleAtom = ({ text  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(MainTitle, {
        children: text
    });
};

;// CONCATENATED MODULE: ./src/atomic/molecules/BuyHeader/styles.ts

const FormHeader = (external_styled_components_default()).div`
    padding: ${(props)=>props.theme.spacing.md
};
    gap: ${(props)=>props.theme.spacing.md
};
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

;// CONCATENATED MODULE: ./src/atomic/molecules/BuyHeader/index.tsx



const BuyHeaderMolecule = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(FormHeader, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(MainTitleAtom, {
            text: "Carrinho"
        })
    });
};

;// CONCATENATED MODULE: ./src/atomic/atoms/Input/styles.ts

const Input = (external_styled_components_default()).input`
    padding: ${(props)=>props.theme.spacing.sm
};
    border-radius: ${(props)=>props.theme.borderRadius
};
    width: 100%;
`;

;// CONCATENATED MODULE: ./src/atomic/atoms/Input/index.tsx


const InputAtom = ({ placeholder , value , onChange  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(Input, {
        placeholder: placeholder,
        value: value,
        onChange: (event)=>onChange(event.target.value)
    });
};

;// CONCATENATED MODULE: ./src/atomic/molecules/InputBox/styles.ts

const InputBox = (external_styled_components_default()).div`
    display: flex;
    gap: ${(props)=>props.theme.spacing.sm
};
    width: 100%;
`;

;// CONCATENATED MODULE: ./src/atomic/molecules/InputBox/index.tsx




const InputBoxMolecule = ({ placeholder , text , value , onChange  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(InputBox, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(LabelAtom, {
                text: text
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(InputAtom, {
                placeholder: placeholder,
                value: value,
                onChange: onChange
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/atomic/atoms/Select/styles.ts

const Select = (external_styled_components_default()).select`
    width: 100%;
    border-radius: ${(props)=>props.theme.borderRadius
};
    padding: ${(props)=>props.theme.spacing.md
};
`;

;// CONCATENATED MODULE: ./src/atomic/atoms/Select/index.tsx


const SelectAtom = ({ onSelect , options , selected , index  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(Select, {
        value: selected,
        defaultValue: selected,
        onChange: ({ target  })=>onSelect({
                index,
                value: parseInt(target.value)
            })
        ,
        children: options.map(({ id , name  }, index)=>/*#__PURE__*/ jsx_runtime_.jsx("option", {
                value: id,
                children: name
            }, id)
        )
    });
};

;// CONCATENATED MODULE: ./src/atomic/molecules/CountBox/styles.tsx

const CountBox = (external_styled_components_default()).div`
    display: flex;
    align-items: center;
    gap: ${(props)=>props.theme.spacing.sm
};
`;

;// CONCATENATED MODULE: ./src/atomic/molecules/CountBox/index.tsx




const CountBoxMolecule = ({ count , increaseCount , decreaseCount  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CountBox, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(ButtonMolecule, {
                onClick: decreaseCount,
                text: "<"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(LabelAtom, {
                text: count.toString()
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ButtonMolecule, {
                onClick: increaseCount,
                text: ">"
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/atomic/molecules/Row/styles.ts

const Row = (external_styled_components_default()).div`
    display: flex;
    flex-direction: column;
    background-color: ${(props)=>props.theme.colors.background
};
    border-radius: ${(props)=>props.theme.borderRadius
};
    padding: ${(props)=>props.theme.spacing.md
};
`;
const SubRow = (external_styled_components_default()).div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;
    gap: ${(props)=>props.theme.spacing.md
};
    padding: ${(props)=>props.theme.spacing.sm
};
`;

;// CONCATENATED MODULE: ./src/atomic/molecules/Row/index.tsx






const RowMolecule = ({ index , onSelect , options , selected , onRemove , price , quantity , count , increaseCount , decreaseCount  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Row, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(SubRow, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(SelectAtom, {
                        index: index,
                        onSelect: onSelect,
                        options: options,
                        selected: selected
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(LabelAtom, {
                        text: `Preço: R$${price?.toString().replace(".", ",")}`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(LabelAtom, {
                        text: `Estoque: ${quantity}`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ButtonMolecule, {
                        text: "X",
                        onClick: onRemove
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(SubRow, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(LabelAtom, {
                        text: `Quantidade: `
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(CountBoxMolecule, {
                        increaseCount: increaseCount,
                        decreaseCount: decreaseCount,
                        count: count || 0
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/atomic/organisms/FormProduct/styles.ts

const Form = (external_styled_components_default()).form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${(props)=>props.theme.spacing.md
};
`;
const RowBox = (external_styled_components_default()).div`
    display: flex;
    flex-direction: column;
    gap: ${(props)=>props.theme.spacing.md
};
    max-height: 30vh;
    overflow-y: auto;
`;

;// CONCATENATED MODULE: ./src/atomic/organisms/FormProduct/index.tsx








const FormProductOrganism = ({ onSubmit , onSelect , onRemove , selected , options , onAdd , rows , count , increaseQuantity , decreaseQuantity , totalPrice , buyAction , nameValue , onChangeName , dateValue , onChangeDate  })=>{
    const { 0: rowsArray , 1: setRowsArray  } = (0,external_react_.useState)(new Array(rows).fill(0));
    const Rows = (0,external_react_.useCallback)(()=>rowsArray.map((value, index)=>{
            const product = options.find(({ id  })=>id === selected[index]
            );
            const filterOptions = options.filter(({ id , qty_stock  })=>qty_stock && !selected.includes(id)
            );
            const increaseCount = ()=>{
                increaseQuantity(index);
            };
            const decreaseCount = ()=>{
                decreaseQuantity(index);
            };
            const onRemoveRow = ()=>{
                onRemove(index);
            };
            return /*#__PURE__*/ jsx_runtime_.jsx(RowMolecule, {
                index: index,
                onRemove: onRemoveRow,
                onSelect: onSelect,
                selected: selected[index],
                options: [
                    product,
                    ...filterOptions
                ],
                price: product.price,
                quantity: product.qty_stock,
                count: count[index],
                increaseCount: increaseCount,
                decreaseCount: decreaseCount
            }, index);
        })
    , [
        rowsArray
    ]);
    (0,external_react_.useEffect)(()=>{
        setRowsArray((oldArray)=>rowsArray.length < rows ? [
                ...oldArray,
                0
            ] : Array(rows).fill(0)
        );
    }, [
        rows,
        setRowsArray,
        count,
        selected
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Form, {
        onSubmit: onSubmit,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(BuyHeaderMolecule, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(InputBoxMolecule, {
                text: "Nome do Cliente*: ",
                placeholder: "Jos\xe9 Maria",
                value: nameValue,
                onChange: onChangeName
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(InputBoxMolecule, {
                text: "Data da Entrega*: ",
                placeholder: "dd/mm/aaaa",
                value: dateValue,
                onChange: onChangeDate
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(RowBox, {
                children: Rows()
            }),
            rows !== options.length && /*#__PURE__*/ jsx_runtime_.jsx(ButtonMolecule, {
                text: "+",
                onClick: onAdd
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(BuyFooterMolecule, {
                buyAction: buyAction,
                totalPrice: totalPrice
            })
        ]
    });
};

// EXTERNAL MODULE: ./src/hooks/useNotification/index.tsx
var useNotification = __webpack_require__(833);
;// CONCATENATED MODULE: ./src/atomic/atoms/SmallLabel/styles.ts

const SmallLabel = (external_styled_components_default()).label`
    display: flex;
    align-items: center;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

;// CONCATENATED MODULE: ./src/atomic/atoms/SmallLabel/index.tsx


const SmallLabelAtom = ({ text  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("small", {
        children: /*#__PURE__*/ jsx_runtime_.jsx(SmallLabel, {
            children: text
        })
    });
};

;// CONCATENATED MODULE: ./src/atomic/molecules/LabelSmallLabel/index.tsx



const LabelSmallLableMolecule = ({ title , subtitle  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(LabelAtom, {
                text: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(SmallLabelAtom, {
                text: subtitle
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/atomic/organisms/Notification/styles.ts

const Notification = (external_styled_components_default()).div`
    position: fixed;
    top: 0;
    right: 0;
    width: 320px;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: ${(props)=>props.theme.notification[props.type]
};
    padding: ${(props)=>props.theme.spacing.xlg
};
    border-radius: ${(props)=>props.theme.borderRadius
};
    box-shadow: rgb(0 0 0 / 1%) 0px 0px 1px, rgb(0 0 0 / 4%) 0px 4px 8px,
        rgb(0 0 0 / 4%) 0px 16px 24px, rgb(0 0 0 / 1%) 0px 24px 32px;
    color: ${(props)=>props.theme.colors.button_text
};
    gap: ${(props)=>props.theme.spacing.md
};
    transform: translateX(
        ${(props)=>props.showNotification ? "0px" : "500px"
}
    );
    transition: ease-in-out 0.5s;
`;

;// CONCATENATED MODULE: ./src/atomic/organisms/Notification/index.tsx




const NotificationOrganism = ()=>{
    const { message , title , type , showNotification  } = (0,useNotification/* useNotification */.lm)();
    return /*#__PURE__*/ jsx_runtime_.jsx(Notification, {
        type: type,
        showNotification: showNotification,
        children: /*#__PURE__*/ jsx_runtime_.jsx(LabelSmallLableMolecule, {
            title: title,
            subtitle: message
        })
    });
};

;// CONCATENATED MODULE: ./src/atomic/molecules/OrderRow/styles.ts

const OrderRow = (external_styled_components_default()).button`
    display: flex;
    gap: ${(props)=>props.theme.spacing.xlg
};
    padding: ${(props)=>props.theme.spacing.md
};
    background-color: ${(props)=>props.theme.colors.background
};
    border: 0;
    border-radius: ${(props)=>props.theme.borderRadius
};
`;

;// CONCATENATED MODULE: ./src/atomic/molecules/OrderRow/index.tsx



var Status;
(function(Status) {
    Status["PENDING"] = "PENDENTE";
    Status["COMPLETED"] = "CONCLU\xcdDO";
})(Status || (Status = {}));
const OrderRowMolecule = ({ name , price , date , status  })=>{
    const dateString = new Date(Date.parse(date));
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(OrderRow, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(LabelAtom, {
                        text: `Nome: ${name}`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(LabelAtom, {
                        text: `Valor total: ${dateString.getDate()}/${dateString.getMonth()}/${dateString.getFullYear()}`
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(LabelAtom, {
                        text: `R$${(price / 100).toFixed(2).replace(".", ",")}`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(LabelAtom, {
                        text: `Status: ${Status[status]}`
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/atomic/organisms/Orders/styles.ts

const Orders = (external_styled_components_default()).form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${(props)=>props.theme.spacing.md
};
    overflow-y: auto;
`;

;// CONCATENATED MODULE: ./src/atomic/organisms/Orders/index.tsx



const OrdersOrganism = ({ carts  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(Orders, {
        children: carts && carts.map(({ client_name , deliver_date , value , status  }, index)=>/*#__PURE__*/ jsx_runtime_.jsx(OrderRowMolecule, {
                name: client_name,
                date: deliver_date,
                status: status,
                price: value
            }, index)
        )
    });
};

;// CONCATENATED MODULE: ./src/atomic/template/RegisterOrder/styles.ts

const RegisterOrder = (external_styled_components_default()).main`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: ${(props)=>props.theme.colors.background_item
};
    padding: ${(props)=>props.theme.spacing.xlg
};
    border-radius: ${(props)=>props.theme.borderRadius
};
    box-shadow: rgb(0 0 0 / 1%) 0px 0px 1px, rgb(0 0 0 / 4%) 0px 4px 8px,
        rgb(0 0 0 / 4%) 0px 16px 24px, rgb(0 0 0 / 1%) 0px 24px 32px;

    @media only screen and (min-width: 480px) {
        width: 480px;
        height: auto;
        margin: 0 auto;
        justify-content: center;
        align-items: center;
    }
`;

;// CONCATENATED MODULE: ./src/atomic/template/RegisterOrder/index.tsx





const RegisterOrderTemplate = ({ onAdd , onRemove , onSelect , onSubmit , options , selected , rows , count , increaseQuantity , decreaseQuantity , totalPrice , buyAction , dateValue , nameValue , onChangeDate , onChangeName , carts  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(RegisterOrder, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(FormProductOrganism, {
                        onAdd: onAdd,
                        onRemove: onRemove,
                        rows: rows,
                        onSelect: onSelect,
                        onSubmit: onSubmit,
                        options: options,
                        selected: selected,
                        count: count,
                        increaseQuantity: increaseQuantity,
                        decreaseQuantity: decreaseQuantity,
                        totalPrice: totalPrice,
                        buyAction: buyAction,
                        dateValue: dateValue,
                        onChangeDate: onChangeDate,
                        onChangeName: onChangeName,
                        nameValue: nameValue
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(OrdersOrganism, {
                        carts: carts
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(NotificationOrganism, {})
        ]
    });
};

// EXTERNAL MODULE: ./src/config/axios.ts
var axios = __webpack_require__(799);
// EXTERNAL MODULE: ./src/hooks/useCart/index.tsx
var useCart = __webpack_require__(316);
;// CONCATENATED MODULE: ./src/utils/convert-date-to-timestamp.utils.ts
const convertDate = (date)=>{
    const splitedDate = date.split("/").map((datePart)=>parseInt(datePart)
    );
    return new Date(splitedDate[2], splitedDate[1], splitedDate[0]).getTime();
};

;// CONCATENATED MODULE: ./src/pages/index.tsx







/* harmony default export */ const pages = (({ products , carts  })=>{
    const { 0: selected , 1: setSelected  } = (0,external_react_.useState)([
        products[0].id
    ]);
    const { 0: rows , 1: setRows  } = (0,external_react_.useState)(1);
    const { 0: quantity , 1: setQuantity  } = (0,external_react_.useState)([
        1
    ]);
    const { 0: totalPrice1 , 1: setTotalPrice  } = (0,external_react_.useState)("0,00");
    const { 0: dateValue , 1: setDateValue  } = (0,external_react_.useState)("");
    const { 0: nameValue , 1: setNameValue  } = (0,external_react_.useState)("");
    const { handleCart  } = (0,useCart/* useCart */.jD)();
    const { handleNotification  } = (0,useNotification/* useNotification */.lm)();
    const handleSelected = (0,external_react_.useCallback)(({ index , value  })=>{
        setSelected((oldSelected)=>{
            const copySelected = [
                ...oldSelected
            ];
            copySelected[index] = value;
            return copySelected;
        });
    }, [
        setSelected,
        rows
    ]);
    const handleAddRow = (0,external_react_.useCallback)(()=>{
        const filterOptions = products.filter(({ id  })=>!selected.includes(id)
        );
        setSelected((oldSelected)=>[
                ...oldSelected,
                filterOptions[0].id
            ]
        );
        setRows((oldValue)=>oldValue + 1
        );
        setQuantity((oldQuantity)=>[
                ...oldQuantity,
                1
            ]
        );
    }, [
        products,
        selected,
        setRows,
        setSelected
    ]);
    const handleRemoveRow = (0,external_react_.useCallback)((index)=>{
        if (rows == 1) {
            return;
        }
        setSelected((oldSelected)=>oldSelected.filter((value, i)=>i !== index
            )
        );
        setRows((oldValue)=>oldValue > 0 && oldValue - 1
        );
        setQuantity((oldQuantity)=>oldQuantity.filter((value, i)=>i === index
            )
        );
    }, [
        products,
        selected,
        setRows,
        setSelected
    ]);
    const increaseQuantity = (0,external_react_.useCallback)((index)=>{
        const productQuantity = products.find(({ id  })=>id === selected[index]
        ).qty_stock;
        if (quantity[index] < productQuantity) {
            return setQuantity((oldQuantity)=>{
                const copyQuantity = [
                    ...oldQuantity
                ];
                copyQuantity[index] += 1;
                return copyQuantity;
            });
        }
        return handleNotification({
            title: "Erro",
            message: "N\xe3o \xe9 pedir mais produtos",
            type: "alert"
        });
    }, [
        setQuantity,
        quantity
    ]);
    const decreaseQuantity = (0,external_react_.useCallback)((index)=>{
        if (quantity[index] > 1) {
            return setQuantity((oldQuantity)=>{
                const copyQuantity = [
                    ...oldQuantity
                ];
                copyQuantity[index] -= 1;
                return copyQuantity;
            });
        }
        return handleNotification({
            title: "Erro",
            message: "N\xe3o \xe9 possivel pedir menos que 1 item",
            type: "alert"
        });
    }, [
        setQuantity,
        quantity
    ]);
    const handlePrice = (0,external_react_.useCallback)(()=>{
        const selectedProducts = products.filter((product)=>selected.includes(product.id)
        );
        const quantityProducts = selected.map((id, index)=>({
                id,
                ammount: quantity[index]
            })
        );
        const prices = quantityProducts.map(({ id , ammount  })=>{
            const { price  } = selectedProducts.find((product)=>product.id === id
            );
            return price * ammount;
        });
        const totalPrice = prices.reduce((a, b)=>a + b
        );
        setTotalPrice(totalPrice.toFixed(2).replace(".", ","));
    }, [
        products,
        selected,
        quantity
    ]);
    const handleName = (newName)=>{
        setNameValue(newName);
    };
    const handleDate = (newDate)=>{
        setDateValue(newDate);
    };
    const buyAction = ()=>{
        const deliver_date = convertDate(dateValue);
        if (deliver_date < Date.now()) {
            return handleNotification({
                title: "Erro",
                message: "Data inv\xe1lida",
                type: "alert"
            });
        }
        if (!nameValue || !deliver_date) {
            return handleNotification({
                title: "Erro",
                message: "Por favor, preencha os campos",
                type: "alert"
            });
        }
        handleCart({
            client_name: nameValue,
            deliver_date,
            products: selected.map((id, index)=>({
                    id,
                    quantity: quantity[index]
                })
            )
        });
    };
    (0,external_react_.useEffect)(()=>{
        handlePrice();
    }, [
        handlePrice,
        products,
        selected,
        quantity
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(RegisterOrderTemplate, {
        onAdd: handleAddRow,
        onRemove: handleRemoveRow,
        rows: rows,
        onSelect: handleSelected,
        onSubmit: (event)=>{
            event.preventDefault();
        },
        options: products,
        selected: selected,
        count: quantity,
        increaseQuantity: increaseQuantity,
        decreaseQuantity: decreaseQuantity,
        totalPrice: totalPrice1,
        buyAction: buyAction,
        dateValue: dateValue,
        onChangeDate: handleDate,
        nameValue: nameValue,
        onChangeName: handleName,
        carts: carts
    });
});
async function getServerSideProps() {
    const { data: dataProducts  } = await axios/* axiosClient.get */.U.get("/products");
    const { data: cartProducts  } = await axios/* axiosClient.get */.U.get("/carts");
    return {
        props: {
            products: dataProducts.products,
            carts: cartProducts.carts
        }
    };
}


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
var __webpack_exports__ = __webpack_require__.X(0, [316], () => (__webpack_exec__(138)));
module.exports = __webpack_exports__;

})();