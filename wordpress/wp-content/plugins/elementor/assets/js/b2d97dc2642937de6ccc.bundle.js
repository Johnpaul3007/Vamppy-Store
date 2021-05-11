/*! elementor - v3.2.3 - 09-05-2021 */
(self["webpackChunkelementor"] = self["webpackChunkelementor"] || []).push([["core_app_modules_kit-library_assets_js_app_js"],{

/***/ "../core/app/modules/kit-library/assets/js/components/filter-indication-text.scss":
/*!****************************************************************************************!*\
  !*** ../core/app/modules/kit-library/assets/js/components/filter-indication-text.scss ***!
  \****************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {



/***/ }),

/***/ "../core/app/modules/kit-library/assets/js/components/item-header.scss":
/*!*****************************************************************************!*\
  !*** ../core/app/modules/kit-library/assets/js/components/item-header.scss ***!
  \*****************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {



/***/ }),

/***/ "../core/app/modules/kit-library/assets/js/components/kit-list-item.scss":
/*!*******************************************************************************!*\
  !*** ../core/app/modules/kit-library/assets/js/components/kit-list-item.scss ***!
  \*******************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {



/***/ }),

/***/ "../core/app/modules/kit-library/assets/js/components/layout/header-back-button.scss":
/*!*******************************************************************************************!*\
  !*** ../core/app/modules/kit-library/assets/js/components/layout/header-back-button.scss ***!
  \*******************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {



/***/ }),

/***/ "../core/app/modules/kit-library/assets/js/components/tags-filter.scss":
/*!*****************************************************************************!*\
  !*** ../core/app/modules/kit-library/assets/js/components/tags-filter.scss ***!
  \*****************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {



/***/ }),

/***/ "../core/app/modules/kit-library/assets/js/pages/index/index-header.scss":
/*!*******************************************************************************!*\
  !*** ../core/app/modules/kit-library/assets/js/pages/index/index-header.scss ***!
  \*******************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {



/***/ }),

/***/ "../core/app/modules/kit-library/assets/js/pages/index/index-no-results.scss":
/*!***********************************************************************************!*\
  !*** ../core/app/modules/kit-library/assets/js/pages/index/index-no-results.scss ***!
  \***********************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {



/***/ }),

/***/ "../core/app/modules/kit-library/assets/js/pages/index/index.scss":
/*!************************************************************************!*\
  !*** ../core/app/modules/kit-library/assets/js/pages/index/index.scss ***!
  \************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {



/***/ }),

/***/ "../core/app/modules/kit-library/assets/js/pages/overview/overview-content.scss":
/*!**************************************************************************************!*\
  !*** ../core/app/modules/kit-library/assets/js/pages/overview/overview-content.scss ***!
  \**************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {



/***/ }),

/***/ "../core/app/modules/kit-library/assets/js/pages/overview/overview-sidebar.scss":
/*!**************************************************************************************!*\
  !*** ../core/app/modules/kit-library/assets/js/pages/overview/overview-sidebar.scss ***!
  \**************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {



/***/ }),

/***/ "../core/app/modules/kit-library/assets/js/pages/preview/preview-iframe.scss":
/*!***********************************************************************************!*\
  !*** ../core/app/modules/kit-library/assets/js/pages/preview/preview-iframe.scss ***!
  \***********************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {



/***/ }),

/***/ "../core/app/modules/kit-library/assets/js/pages/preview/preview-responsive-controls.scss":
/*!************************************************************************************************!*\
  !*** ../core/app/modules/kit-library/assets/js/pages/preview/preview-responsive-controls.scss ***!
  \************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {



/***/ }),

/***/ "../core/app/modules/kit-library/assets/js/app.js":
/*!********************************************************!*\
  !*** ../core/app/modules/kit-library/assets/js/app.js ***!
  \********************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: exports is used directly at 7:23-30 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = App;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _index = _interopRequireDefault(__webpack_require__(/*! ./pages/index */ "../core/app/modules/kit-library/assets/js/pages/index/index.js"));

var _overview = _interopRequireDefault(__webpack_require__(/*! ./pages/overview/overview */ "../core/app/modules/kit-library/assets/js/pages/overview/overview.js"));

var _preview = _interopRequireDefault(__webpack_require__(/*! ./pages/preview/preview */ "../core/app/modules/kit-library/assets/js/pages/preview/preview.js"));

var _reactQuery = __webpack_require__(/*! react-query */ "../node_modules/react-query/es/index.js");

var _devtools = __webpack_require__(/*! react-query/devtools */ "../node_modules/react-query/devtools/index.js");

var _router = __webpack_require__(/*! @reach/router */ "../node_modules/@reach/router/es/index.js");

var _settingsContext = __webpack_require__(/*! ./context/settings-context */ "../core/app/modules/kit-library/assets/js/context/settings-context.js");

var queryClient = new _reactQuery.QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: 1000 * 60 * 30 // 30 minutes

    }
  }
});
var isDebug = elementorCommon.config.isDebug || false;

function App() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "e-kit-library"
  }, /*#__PURE__*/_react.default.createElement(_reactQuery.QueryClientProvider, {
    client: queryClient
  }, /*#__PURE__*/_react.default.createElement(_settingsContext.SettingsProvider, {
    value: elementorAppConfig['kit-library']
  }, /*#__PURE__*/_react.default.createElement(_router.Router, null, /*#__PURE__*/_react.default.createElement(_index.default, {
    path: "/"
  }), /*#__PURE__*/_react.default.createElement(_preview.default, {
    path: "/preview/:id"
  }), /*#__PURE__*/_react.default.createElement(_overview.default, {
    path: "/overview/:id"
  }))), isDebug && /*#__PURE__*/_react.default.createElement(_devtools.ReactQueryDevtools, {
    initialIsOpen: false
  })));
}

/***/ }),

/***/ "../core/app/modules/kit-library/assets/js/components/connect-dialog.js":
/*!******************************************************************************!*\
  !*** ../core/app/modules/kit-library/assets/js/components/connect-dialog.js ***!
  \******************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: exports is used directly at 7:23-30 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = ConnectDialog;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _appUi = __webpack_require__(/*! @elementor/app-ui */ "@elementor/app-ui");

var _settingsContext = __webpack_require__(/*! ../context/settings-context */ "../core/app/modules/kit-library/assets/js/context/settings-context.js");

var _React = _react.default,
    useEffect = _React.useEffect,
    useRef = _React.useRef;

function ConnectDialog(props) {
  var _useSettingsContext = (0, _settingsContext.useSettingsContext)(),
      settings = _useSettingsContext.settings;

  var approveButtonRef = useRef();
  useEffect(function () {
    jQuery(approveButtonRef.current).elementorConnect({
      success: function success(e, data) {
        return props.onSuccess(data);
      },
      error: function error() {
        return props.onError(__('Unable to connect', 'elementor'));
      },
      UTM: function UTM() {
        return '&utm_source=kit-library&utm_medium=wp-dash&utm_campaign=';
      }
    });
  }, []);
  return /*#__PURE__*/_react.default.createElement(_appUi.Dialog, {
    title: __('Connect to Template Library', 'elementor'),
    text: __('Access this template and our entire library by creating an account', 'elementor'),
    approveButtonText: __('Get Started', 'elementor'),
    approveButtonUrl: settings.library_connect_url,
    approveButtonOnClick: function approveButtonOnClick() {
      return props.onClose();
    },
    approveButtonColor: "primary",
    approveButtonRef: approveButtonRef,
    dismissButtonText: __('Cancel', 'elementor-pro'),
    dismissButtonOnClick: function dismissButtonOnClick() {
      return props.onClose();
    },
    onClose: function onClose() {
      return props.onClose();
    }
  });
}

ConnectDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  onError: PropTypes.func.isRequired,
  onSuccess: PropTypes.func.isRequired
};

/***/ }),

/***/ "../core/app/modules/kit-library/assets/js/components/filter-indication-text.js":
/*!**************************************************************************************!*\
  !*** ../core/app/modules/kit-library/assets/js/components/filter-indication-text.js ***!
  \**************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: exports is used directly at 9:23-30 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = FilterIndicationText;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

__webpack_require__(/*! core-js/modules/es6.regexp.search.js */ "../node_modules/core-js/modules/es6.regexp.search.js");

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/toConsumableArray */ "../node_modules/@babel/runtime-corejs2/helpers/toConsumableArray.js"));

var _values = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "../node_modules/@babel/runtime-corejs2/core-js/object/values.js"));

var _i18n = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");

var _appUi = __webpack_require__(/*! @elementor/app-ui */ "@elementor/app-ui");

__webpack_require__(/*! ./filter-indication-text.scss */ "../core/app/modules/kit-library/assets/js/components/filter-indication-text.scss");

function FilterIndicationText(props) {
  var selectedTaxonomies = (0, _react.useMemo)(function () {
    return (0, _values.default)(props.filter.taxonomies).reduce(function (current, groupedTaxonomies) {
      return [].concat((0, _toConsumableArray2.default)(current), (0, _toConsumableArray2.default)(groupedTaxonomies));
    });
  }, [props.filter.taxonomies]);
  var isFilterActive = (0, _react.useMemo)(function () {
    return props.filter.search || selectedTaxonomies.length;
  }, [props.filter]);

  if (!isFilterActive) {
    return '';
  }

  return /*#__PURE__*/_react.default.createElement(_appUi.Grid, {
    container: true,
    className: "e-kit-library__filter-indication"
  }, /*#__PURE__*/_react.default.createElement(_appUi.Text, {
    className: "e-kit-library__filter-indication-text"
  }, (0, _i18n.sprintf)(__('Showing %s Results', 'elementor'), props.resultCount), ' ', props.filter.search && (0, _i18n.sprintf)(__('For: "%s"', 'elementor'), props.filter.search), ' ', selectedTaxonomies.length > 0 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, __('In', 'elementor'), ' ', selectedTaxonomies.map(function (taxonomy) {
    return /*#__PURE__*/_react.default.createElement(_appUi.Badge, {
      key: taxonomy,
      className: "e-kit-library__filter-indication-badge"
    }, taxonomy, /*#__PURE__*/_react.default.createElement(_appUi.Button, {
      text: __('Remove', 'elementor'),
      hideText: true,
      icon: "eicon-editor-close",
      className: "e-kit-library__filter-indication-badge-remove",
      onClick: function onClick() {
        return props.onRemoveTag(taxonomy);
      }
    }));
  }))), /*#__PURE__*/_react.default.createElement(_appUi.Button, {
    className: "e-kit-library__filter-indication-button",
    text: __('Clear All'),
    variant: "underlined",
    onClick: props.onClear
  }));
}

FilterIndicationText.propTypes = {
  filter: PropTypes.shape({
    search: PropTypes.string,
    taxonomies: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string))
  }),
  resultCount: PropTypes.number.isRequired,
  onClear: PropTypes.func.isRequired,
  onRemoveTag: PropTypes.func.isRequired
};

/***/ }),

/***/ "../core/app/modules/kit-library/assets/js/components/item-header.js":
/*!***************************************************************************!*\
  !*** ../core/app/modules/kit-library/assets/js/components/item-header.js ***!
  \***************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: exports is used directly at 9:23-30 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = ItemHeader;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/toConsumableArray */ "../node_modules/@babel/runtime-corejs2/helpers/toConsumableArray.js"));

__webpack_require__(/*! core-js/modules/es6.regexp.replace.js */ "../node_modules/core-js/modules/es6.regexp.replace.js");

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/slicedToArray.js"));

var _connectDialog = _interopRequireDefault(__webpack_require__(/*! ./connect-dialog */ "../core/app/modules/kit-library/assets/js/components/connect-dialog.js"));

var _header = _interopRequireDefault(__webpack_require__(/*! ./layout/header */ "../core/app/modules/kit-library/assets/js/components/layout/header.js"));

var _headerBackButton = _interopRequireDefault(__webpack_require__(/*! ./layout/header-back-button */ "../core/app/modules/kit-library/assets/js/components/layout/header-back-button.js"));

var _kit = _interopRequireDefault(__webpack_require__(/*! ../models/kit */ "../core/app/modules/kit-library/assets/js/models/kit.js"));

var _useKitCallToAction3 = _interopRequireWildcard(__webpack_require__(/*! ../hooks/use-kit-call-to-action */ "../core/app/modules/kit-library/assets/js/hooks/use-kit-call-to-action.js"));

var _appUi = __webpack_require__(/*! @elementor/app-ui */ "@elementor/app-ui");

var _router = __webpack_require__(/*! @reach/router */ "../node_modules/@reach/router/es/index.js");

var _settingsContext = __webpack_require__(/*! ../context/settings-context */ "../core/app/modules/kit-library/assets/js/context/settings-context.js");

__webpack_require__(/*! ./item-header.scss */ "../core/app/modules/kit-library/assets/js/components/item-header.scss");

/**
 * Returns the right call to action button.
 *
 * @param model
 * @param onConnect
 * @param onApply
 * @returns {object}
 */
function useKitCallToActionButton(model, _ref) {
  var onConnect = _ref.onConnect,
      onApply = _ref.onApply;

  var _useKitCallToAction = (0, _useKitCallToAction3.default)(model.accessLevel),
      _useKitCallToAction2 = (0, _slicedToArray2.default)(_useKitCallToAction, 2),
      type = _useKitCallToAction2[0],
      subscriptionPlan = _useKitCallToAction2[1].subscriptionPlan;

  return (0, _react.useMemo)(function () {
    if (type === _useKitCallToAction3.TYPE_CONNECT) {
      return {
        id: 'connect',
        text: __('Apply Kit', 'elementor'),
        // The label is Apply kit but the this is connect button
        hideText: false,
        variant: 'contained',
        color: 'primary',
        size: 'sm',
        onClick: onConnect,
        includeHeaderBtnClass: false
      };
    }

    if (type === _useKitCallToAction3.TYPE_PROMOTION && subscriptionPlan) {
      return {
        id: 'promotion',
        text: __('Go %s', 'elementor').replace('%s', subscriptionPlan.label),
        hideText: false,
        variant: 'contained',
        color: 'cta',
        size: 'sm',
        url: subscriptionPlan.promotion_url,
        target: '_blank',
        includeHeaderBtnClass: false
      };
    }

    return {
      id: 'apply',
      text: __('Apply Kit', 'elementor'),
      hideText: false,
      variant: 'contained',
      color: 'primary',
      size: 'sm',
      onClick: onApply,
      includeHeaderBtnClass: false
    };
  }, [type, subscriptionPlan]);
}

function ItemHeader(props) {
  var navigate = (0, _router.useNavigate)();

  var _useSettingsContext = (0, _settingsContext.useSettingsContext)(),
      updateSettings = _useSettingsContext.updateSettings;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      isConnectDialogOpen = _useState2[0],
      setIsConnectDialogOpen = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      error = _useState4[0],
      setError = _useState4[1];

  var apply = (0, _react.useCallback)(function () {
    $e.data.get('kits/download-link', {
      id: props.model.id
    }, {
      refresh: true
    }).then(function (_ref2) {
      var data = _ref2.data;
      navigate("/import/process?file_url=".concat(data.data.download_link));
    });
  }, [props.model]);
  var applyButton = useKitCallToActionButton(props.model, {
    onConnect: function onConnect() {
      return setIsConnectDialogOpen(true);
    },
    onApply: apply
  });
  var buttons = (0, _react.useMemo)(function () {
    return [applyButton].concat((0, _toConsumableArray2.default)(props.buttons));
  }, [props.buttons, applyButton]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, error && /*#__PURE__*/_react.default.createElement(_appUi.Dialog, {
    title: error,
    approveButtonText: __('Learn More', 'elementor-pro'),
    approveButtonColor: "link",
    approveButtonUrl: "#",
    approveButtonOnClick: function approveButtonOnClick() {
      return setError(false);
    },
    dismissButtonText: __('Close', 'elementor-pro'),
    dismissButtonOnClick: function dismissButtonOnClick() {
      return setError(false);
    },
    onClose: function onClose() {
      return setError(false);
    }
  }), isConnectDialogOpen && /*#__PURE__*/_react.default.createElement(_connectDialog.default, {
    onClose: function onClose() {
      return setIsConnectDialogOpen(false);
    },
    onSuccess: function onSuccess(data) {
      updateSettings({
        is_library_connected: true,
        access_level: data.access_level || 0
      });

      if (data.access_level < props.model.accessLevel) {
        return;
      }

      apply();
    },
    onError: function onError(message) {
      return setError(message);
    }
  }), /*#__PURE__*/_react.default.createElement(_header.default, {
    startColumn: /*#__PURE__*/_react.default.createElement(_headerBackButton.default, null),
    centerColumn: props.centerColumn,
    buttons: buttons
  }));
}

ItemHeader.propTypes = {
  model: PropTypes.instanceOf(_kit.default).isRequired,
  centerColumn: PropTypes.node,
  buttons: PropTypes.arrayOf(PropTypes.object)
};

/***/ }),

/***/ "../core/app/modules/kit-library/assets/js/components/kit-list-item.js":
/*!*****************************************************************************!*\
  !*** ../core/app/modules/kit-library/assets/js/components/kit-list-item.js ***!
  \*****************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: exports is used directly at 9:23-30 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = KitListItem;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/slicedToArray.js"));

var _kit = _interopRequireDefault(__webpack_require__(/*! ../models/kit */ "../core/app/modules/kit-library/assets/js/models/kit.js"));

var _useKitCallToAction3 = _interopRequireWildcard(__webpack_require__(/*! ../hooks/use-kit-call-to-action */ "../core/app/modules/kit-library/assets/js/hooks/use-kit-call-to-action.js"));

var _appUi = __webpack_require__(/*! @elementor/app-ui */ "@elementor/app-ui");

__webpack_require__(/*! ./kit-list-item.scss */ "../core/app/modules/kit-library/assets/js/components/kit-list-item.scss");

function KitListItem(props) {
  var _useKitCallToAction = (0, _useKitCallToAction3.default)(props.model.accessLevel),
      _useKitCallToAction2 = (0, _slicedToArray2.default)(_useKitCallToAction, 2),
      type = _useKitCallToAction2[0],
      subscriptionPlan = _useKitCallToAction2[1].subscriptionPlan;

  return /*#__PURE__*/_react.default.createElement(_appUi.Card, null, /*#__PURE__*/_react.default.createElement(_appUi.CardHeader, null, /*#__PURE__*/_react.default.createElement(_appUi.Heading, {
    tag: "h3",
    title: props.model.title,
    variant: "h5",
    className: "eps-card__headline"
  }, props.model.title)), /*#__PURE__*/_react.default.createElement(_appUi.CardBody, null, /*#__PURE__*/_react.default.createElement(_appUi.CardImage, {
    alt: props.model.title,
    src: props.model.thumbnailUrl || ''
  }, (subscriptionPlan === null || subscriptionPlan === void 0 ? void 0 : subscriptionPlan.label) && /*#__PURE__*/_react.default.createElement(_appUi.Badge, {
    variant: "sm",
    className: "e-kit-library__kit-item-subscription-plan-badge",
    style: {
      backgroundColor: subscriptionPlan.color
    }
  }, subscriptionPlan.label), /*#__PURE__*/_react.default.createElement(_appUi.CardOverlay, null, /*#__PURE__*/_react.default.createElement(_appUi.Grid, {
    container: true,
    direction: "column",
    className: "e-kit-library__kit-item-overlay"
  }, /*#__PURE__*/_react.default.createElement(_appUi.Button, {
    className: "e-kit-library__kit-item-overlay-overview-button",
    text: __('View Demo', 'elementor'),
    icon: "eicon-preview-medium",
    url: "/kit-library/preview/".concat(props.model.id)
  }), type === _useKitCallToAction3.TYPE_PROMOTION && (subscriptionPlan === null || subscriptionPlan === void 0 ? void 0 : subscriptionPlan.label) && /*#__PURE__*/_react.default.createElement(_appUi.Button, {
    className: "e-kit-library__kit-item-overlay-promotion-button",
    text: "Go ".concat(subscriptionPlan.label),
    icon: "eicon-external-link-square",
    url: subscriptionPlan.promotion_url,
    target: "_blank"
  }))))));
}

KitListItem.propTypes = {
  model: PropTypes.instanceOf(_kit.default).isRequired
};

/***/ }),

/***/ "../core/app/modules/kit-library/assets/js/components/kit-list.js":
/*!************************************************************************!*\
  !*** ../core/app/modules/kit-library/assets/js/components/kit-list.js ***!
  \************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: exports is used directly at 7:23-30 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = KitList;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _kit = _interopRequireDefault(__webpack_require__(/*! ../models/kit */ "../core/app/modules/kit-library/assets/js/models/kit.js"));

var _kitListItem = _interopRequireDefault(__webpack_require__(/*! ./kit-list-item */ "../core/app/modules/kit-library/assets/js/components/kit-list-item.js"));

var _appUi = __webpack_require__(/*! @elementor/app-ui */ "@elementor/app-ui");

function KitList(props) {
  return /*#__PURE__*/_react.default.createElement(_appUi.CssGrid, {
    spacing: 24,
    colMinWidth: 250
  }, props.data.map(function (model) {
    return /*#__PURE__*/_react.default.createElement(_kitListItem.default, {
      key: model.id,
      model: model
    });
  }));
}

KitList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.instanceOf(_kit.default))
};

/***/ }),

/***/ "../core/app/modules/kit-library/assets/js/components/layout/header-back-button.js":
/*!*****************************************************************************************!*\
  !*** ../core/app/modules/kit-library/assets/js/components/layout/header-back-button.js ***!
  \*****************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: exports is used directly at 7:23-30 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = HeaderBackButton;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _appUi = __webpack_require__(/*! @elementor/app-ui */ "@elementor/app-ui");

__webpack_require__(/*! ./header-back-button.scss */ "../core/app/modules/kit-library/assets/js/components/layout/header-back-button.scss");

function HeaderBackButton() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "e-kit-library__header-back-container"
  }, /*#__PURE__*/_react.default.createElement(_appUi.Button, {
    className: "e-kit-library__header-back",
    icon: "eicon-chevron-left",
    text: __('Back', 'elementor'),
    onClick: function onClick() {
      return window.history.back();
    }
  }));
}

/***/ }),

/***/ "../core/app/modules/kit-library/assets/js/components/layout/header.js":
/*!*****************************************************************************!*\
  !*** ../core/app/modules/kit-library/assets/js/components/layout/header.js ***!
  \*****************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: exports is used directly at 7:23-30 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = Header;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _appUi = __webpack_require__(/*! @elementor/app-ui */ "@elementor/app-ui");

var _headerButtons = _interopRequireDefault(__webpack_require__(/*! ../../../../../../assets/js/layout/header-buttons */ "../core/app/assets/js/layout/header-buttons.js"));

function Header(props) {
  return /*#__PURE__*/_react.default.createElement(_appUi.Grid, {
    container: true,
    alignItems: "center",
    justify: "space-between",
    className: "eps-app__header"
  }, props.startColumn || /*#__PURE__*/_react.default.createElement("a", {
    className: "eps-app__logo-title-wrapper",
    href: "#/kit-library"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "eps-app__logo eicon-elementor"
  }), /*#__PURE__*/_react.default.createElement("h1", {
    className: "eps-app__title"
  }, __('Kit Library', 'elementor'))), props.centerColumn || /*#__PURE__*/_react.default.createElement("span", null), props.endColumn || /*#__PURE__*/_react.default.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/_react.default.createElement(_headerButtons.default, {
    buttons: props.buttons
  })));
}

Header.propTypes = {
  startColumn: PropTypes.node,
  endColumn: PropTypes.node,
  centerColumn: PropTypes.node,
  buttons: PropTypes.arrayOf(PropTypes.object)
};

/***/ }),

/***/ "../core/app/modules/kit-library/assets/js/components/layout/index.js":
/*!****************************************************************************!*\
  !*** ../core/app/modules/kit-library/assets/js/components/layout/index.js ***!
  \****************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: exports is used directly at 7:23-30 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = Index;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _sidebar = _interopRequireDefault(__webpack_require__(/*! ../../../../../../assets/js/layout/sidebar */ "../core/app/assets/js/layout/sidebar.js"));

function Index(props) {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "eps-app__lightbox"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "eps-app"
  }, props.header, /*#__PURE__*/_react.default.createElement("div", {
    className: "eps-app__main"
  }, props.sidebar && /*#__PURE__*/_react.default.createElement(_sidebar.default, null, props.sidebar), props.children)));
}

Index.propTypes = {
  header: PropTypes.node,
  sidebar: PropTypes.node,
  children: PropTypes.node
};

/***/ }),

/***/ "../core/app/modules/kit-library/assets/js/components/taxonomies-filter-list.js":
/*!**************************************************************************************!*\
  !*** ../core/app/modules/kit-library/assets/js/components/taxonomies-filter-list.js ***!
  \**************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: exports is used directly at 9:23-30 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = TaxonomiesFilterList;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/toConsumableArray */ "../node_modules/@babel/runtime-corejs2/helpers/toConsumableArray.js"));

__webpack_require__(/*! core-js/modules/es7.array.includes.js */ "../node_modules/core-js/modules/es7.array.includes.js");

__webpack_require__(/*! core-js/modules/es6.string.includes.js */ "../node_modules/core-js/modules/es6.string.includes.js");

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/slicedToArray.js"));

var _taxonomy = _interopRequireDefault(__webpack_require__(/*! ../models/taxonomy */ "../core/app/modules/kit-library/assets/js/models/taxonomy.js"));

var _appUi = __webpack_require__(/*! @elementor/app-ui */ "@elementor/app-ui");

var _i18n = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");

var MIN_TAGS_LENGTH_FOR_SEARCH_INPUT = 15;

function TaxonomiesFilterList(props) {
  var _useState = (0, _react.useState)(props.taxonomiesByType.isOpenByDefault),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var _useState3 = (0, _react.useState)(''),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      search = _useState4[0],
      setSearch = _useState4[1];

  var taxonomies = (0, _react.useMemo)(function () {
    if (!search) {
      return props.taxonomiesByType.data;
    }

    var lowerCaseSearch = search.toLowerCase();
    return props.taxonomiesByType.data.filter(function (tag) {
      return tag.text.toLowerCase().includes(lowerCaseSearch);
    });
  }, [props.taxonomiesByType.data, search]);
  return /*#__PURE__*/_react.default.createElement(_appUi.Collapse, {
    className: "e-kit-library__tags-filter-list",
    title: props.taxonomiesByType.label,
    isOpen: isOpen,
    onChange: setIsOpen
  }, props.taxonomiesByType.data.length >= MIN_TAGS_LENGTH_FOR_SEARCH_INPUT && /*#__PURE__*/_react.default.createElement(_appUi.SearchInput, {
    size: "sm",
    className: "e-kit-library__tags-filter-list-search",
    placeholder: (0, _i18n.sprintf)(__('Search in %s', 'elementor'), props.taxonomiesByType.label),
    value: search,
    onChange: setSearch
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "e-kit-library__tags-filter-list-container"
  }, taxonomies.map(function (taxonomy) {
    var _props$selected$taxon;

    return /*#__PURE__*/_react.default.createElement("label", {
      key: taxonomy.text,
      className: "e-kit-library__tags-filter-list-item"
    }, /*#__PURE__*/_react.default.createElement(_appUi.Checkbox, {
      checked: ((_props$selected$taxon = props.selected[taxonomy.type]) === null || _props$selected$taxon === void 0 ? void 0 : _props$selected$taxon.includes(taxonomy.text)) || false,
      onChange: function onChange(e) {
        var checked = e.target.checked;
        props.onSelect(taxonomy.type, function (prev) {
          return checked ? [].concat((0, _toConsumableArray2.default)(prev), [taxonomy.text]) : prev.filter(function (tagId) {
            return tagId !== taxonomy.text;
          });
        });
      }
    }), taxonomy.text);
  })));
}

TaxonomiesFilterList.propTypes = {
  taxonomiesByType: PropTypes.shape({
    key: PropTypes.string,
    label: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.instanceOf(_taxonomy.default)),
    isOpenByDefault: PropTypes.bool
  }),
  selected: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)),
  onSelect: PropTypes.func
};

/***/ }),

/***/ "../core/app/modules/kit-library/assets/js/components/taxonomies-filter.js":
/*!*********************************************************************************!*\
  !*** ../core/app/modules/kit-library/assets/js/components/taxonomies-filter.js ***!
  \*********************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: exports is used directly at 9:23-30 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = TaxonomiesFilter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/objectSpread2 */ "../node_modules/@babel/runtime-corejs2/helpers/objectSpread2.js"));

var _taxonomiesFilterList = _interopRequireDefault(__webpack_require__(/*! ./taxonomies-filter-list */ "../core/app/modules/kit-library/assets/js/components/taxonomies-filter-list.js"));

var _taxonomy = _interopRequireWildcard(__webpack_require__(/*! ../models/taxonomy */ "../core/app/modules/kit-library/assets/js/models/taxonomy.js"));

__webpack_require__(/*! ./tags-filter.scss */ "../core/app/modules/kit-library/assets/js/components/tags-filter.scss");

var _React = _react.default,
    useMemo = _React.useMemo;

function TaxonomiesFilter(props) {
  var taxonomiesByType = useMemo(function () {
    if (!props.taxonomies) {
      return [];
    }

    return _taxonomy.taxonomyType.map(function (tagType) {
      return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, tagType), {}, {
        data: props.taxonomies.filter(function (item) {
          return item.type === tagType.key;
        })
      });
    }).filter(function (_ref) {
      var data = _ref.data;
      return data.length > 0;
    });
  }, [props.taxonomies]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "e-kit-library__tags-filter"
  }, taxonomiesByType.map(function (group) {
    return /*#__PURE__*/_react.default.createElement(_taxonomiesFilterList.default, {
      key: group.key,
      taxonomiesByType: group,
      selected: props.selected,
      onSelect: props.onSelect
    });
  }));
}

TaxonomiesFilter.propTypes = {
  selected: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)),
  onSelect: PropTypes.func,
  taxonomies: PropTypes.arrayOf(PropTypes.instanceOf(_taxonomy.default))
};

/***/ }),

/***/ "../core/app/modules/kit-library/assets/js/context/settings-context.js":
/*!*****************************************************************************!*\
  !*** ../core/app/modules/kit-library/assets/js/context/settings-context.js ***!
  \*****************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: exports is used directly at 9:23-30 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.useSettingsContext = useSettingsContext;
exports.SettingsProvider = SettingsProvider;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/objectSpread2 */ "../node_modules/@babel/runtime-corejs2/helpers/objectSpread2.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/slicedToArray.js"));

var SettingsContext = (0, _react.createContext)({});
/**
 * Consume the context
 *
 * @returns {{emptyTrashDays: number}}
 */

function useSettingsContext() {
  return (0, _react.useContext)(SettingsContext);
}
/**
 * Settings Provider
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */


function SettingsProvider(props) {
  var _useState = (0, _react.useState)({}),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      settings = _useState2[0],
      setSettings = _useState2[1];

  var updateSettings = (0, _react.useCallback)(function (newSettings) {
    setSettings(function (prev) {
      return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, prev), newSettings);
    });
  }, [setSettings]);
  (0, _react.useEffect)(function () {
    setSettings(props.value);
  }, [setSettings]);
  return /*#__PURE__*/_react.default.createElement(SettingsContext.Provider, {
    value: {
      settings: settings,
      setSettings: setSettings,
      updateSettings: updateSettings
    }
  }, props.children);
}

SettingsProvider.propTypes = {
  children: PropTypes.any,
  value: PropTypes.object.isRequired
};

/***/ }),

/***/ "../core/app/modules/kit-library/assets/js/hooks/use-content-types.js":
/*!****************************************************************************!*\
  !*** ../core/app/modules/kit-library/assets/js/hooks/use-content-types.js ***!
  \****************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: exports is used directly at 7:23-30 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = useContentTypes;
exports.KEY = void 0;

var _promise = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "../node_modules/@babel/runtime-corejs2/core-js/promise.js"));

var _contentType = _interopRequireDefault(__webpack_require__(/*! ../models/content-type */ "../core/app/modules/kit-library/assets/js/models/content-type.js"));

var _reactQuery = __webpack_require__(/*! react-query */ "../node_modules/react-query/es/index.js");

var KEY = 'content-types';
/**
 * The data should come from the server, this is a temp solution that helps to demonstrate that data comes from the server
 * but for now this is a local data.
 *
 * @returns {UseQueryResult<Promise.constructor, unknown>}
 */

exports.KEY = KEY;

function useContentTypes() {
  return (0, _reactQuery.useQuery)([KEY], fetchContentTypes);
}
/**
 * @returns {Promise.constructor}
 */


function fetchContentTypes() {
  return _promise.default.resolve([{
    id: 'page',
    label: __('Pages', 'elementor'),
    doc_types: ['page'],
    order: 0
  }, {
    id: 'site-parts',
    label: __('Site Parts', 'elementor'),
    doc_types: ['header', 'footer', 'single', 'archive', '404'],
    order: 1
  }, {
    id: 'popup',
    label: __('Popups', 'elementor'),
    doc_types: ['popup'],
    order: 2
  }]).then(function (data) {
    return data.map(function (contentType) {
      return _contentType.default.createFromResponse(contentType);
    });
  });
}

/***/ }),

/***/ "../core/app/modules/kit-library/assets/js/hooks/use-kit-call-to-action.js":
/*!*********************************************************************************!*\
  !*** ../core/app/modules/kit-library/assets/js/hooks/use-kit-call-to-action.js ***!
  \*********************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: exports is used directly at 5:23-30 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = useKitCallToAction;
exports.TYPE_APPLY = exports.TYPE_PROMOTION = exports.TYPE_CONNECT = void 0;

var _react = __webpack_require__(/*! react */ "react");

var _settingsContext = __webpack_require__(/*! ../context/settings-context */ "../core/app/modules/kit-library/assets/js/context/settings-context.js");

var TYPE_CONNECT = 'connect';
exports.TYPE_CONNECT = TYPE_CONNECT;
var TYPE_PROMOTION = 'promotion';
exports.TYPE_PROMOTION = TYPE_PROMOTION;
var TYPE_APPLY = 'apply';
exports.TYPE_APPLY = TYPE_APPLY;

function useKitCallToAction(kitAccessLevel) {
  var _useSettingsContext = (0, _settingsContext.useSettingsContext)(),
      settings = _useSettingsContext.settings; // subscriptionPlan can be null when the context is not filled (can be happened when using back button in the browser.)


  var subscriptionPlan = (0, _react.useMemo)(function () {
    var _settings$subscriptio;

    return (_settings$subscriptio = settings.subscription_plans) === null || _settings$subscriptio === void 0 ? void 0 : _settings$subscriptio[kitAccessLevel];
  }, [settings, kitAccessLevel]);
  var type = (0, _react.useMemo)(function () {
    // The user can apply this kit (the user access level is equal or greater then the kit access level).
    var isAuthorizeToApplyKit = settings.access_level >= kitAccessLevel; // The user in not connected and has pro plugin or the kit is a free kit.

    if (!settings.is_library_connected && (settings.is_pro || isAuthorizeToApplyKit)) {
      return TYPE_CONNECT;
    } // The user is connected or has only core plugin and cannot access this kit.


    if (!isAuthorizeToApplyKit) {
      return TYPE_PROMOTION;
    } // The user is connected and can access the kit.


    return TYPE_APPLY;
  }, [settings, kitAccessLevel]);
  return [type, {
    subscriptionPlan: subscriptionPlan
  }];
}

/***/ }),

/***/ "../core/app/modules/kit-library/assets/js/hooks/use-kit-document-by-type.js":
/*!***********************************************************************************!*\
  !*** ../core/app/modules/kit-library/assets/js/hooks/use-kit-document-by-type.js ***!
  \***********************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: exports is used directly at 7:23-30 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = useKitDocumentByType;

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/objectSpread2 */ "../node_modules/@babel/runtime-corejs2/helpers/objectSpread2.js"));

var _useContentTypes = _interopRequireDefault(__webpack_require__(/*! ./use-content-types */ "../core/app/modules/kit-library/assets/js/hooks/use-content-types.js"));

var _react = __webpack_require__(/*! react */ "react");

function useKitDocumentByType(kit) {
  var contentTypesQuery = (0, _useContentTypes.default)();
  var data = (0, _react.useMemo)(function () {
    if (!kit || !contentTypesQuery.data) {
      return [];
    }

    return kit.getDocumentsByTypes(contentTypesQuery.data).sort(function (a, b) {
      return a.order - b.order;
    });
  }, [kit, contentTypesQuery.data]);
  return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, contentTypesQuery), {}, {
    data: data
  });
}

/***/ }),

/***/ "../core/app/modules/kit-library/assets/js/hooks/use-kit.js":
/*!******************************************************************!*\
  !*** ../core/app/modules/kit-library/assets/js/hooks/use-kit.js ***!
  \******************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: exports is used directly at 7:23-30 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = useKit;
exports.KEY = void 0;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/slicedToArray.js"));

__webpack_require__(/*! core-js/modules/es6.array.find.js */ "../node_modules/core-js/modules/es6.array.find.js");

var _kit = _interopRequireDefault(__webpack_require__(/*! ../models/kit */ "../core/app/modules/kit-library/assets/js/models/kit.js"));

var _useKits = __webpack_require__(/*! ./use-kits */ "../core/app/modules/kit-library/assets/js/hooks/use-kits.js");

var _react = __webpack_require__(/*! react */ "react");

var _reactQuery = __webpack_require__(/*! react-query */ "../node_modules/react-query/es/index.js");

var KEY = 'kit';
exports.KEY = KEY;

function useKit(id) {
  // A function that returns existing data from the kit list for a placeholder data before the kit request will resolved.
  var placeholderDataCallback = usePlaceholderDataCallback(id);
  return (0, _reactQuery.useQuery)([KEY, id], fetchKitItem, {
    placeholderData: placeholderDataCallback
  });
}
/**
 * Return placeholder function for kit query.
 *
 * @param id
 * @returns {function(): (undefined|*)}
 */


function usePlaceholderDataCallback(id) {
  var queryClient = (0, _reactQuery.useQueryClient)();
  return (0, _react.useCallback)(function () {
    var _queryClient$getQuery;

    var placeholder = (_queryClient$getQuery = queryClient.getQueryData(_useKits.KEY)) === null || _queryClient$getQuery === void 0 ? void 0 : _queryClient$getQuery.find(function (kit) {
      return kit.id === id;
    });

    if (!placeholder) {
      return;
    }

    return placeholder;
  }, [queryClient, id]);
}
/**
 * Fetch kit
 *
 * @param key
 * @param id
 * @returns {Promise<Kit>}
 */


function fetchKitItem(_ref) {
  var _ref$queryKey = (0, _slicedToArray2.default)(_ref.queryKey, 2),
      key = _ref$queryKey[0],
      id = _ref$queryKey[1];

  return $e.data.get('kits/index', {
    id: id
  }, {
    refresh: true
  }).then(function (response) {
    return response.data;
  }).then(function (_ref2) {
    var data = _ref2.data;
    return _kit.default.createFromResponse(data);
  });
}

/***/ }),

/***/ "../core/app/modules/kit-library/assets/js/hooks/use-kits.js":
/*!*******************************************************************!*\
  !*** ../core/app/modules/kit-library/assets/js/hooks/use-kits.js ***!
  \*******************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: exports is used directly at 7:23-30 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var React = __webpack_require__(/*! react */ "react");


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = useKits;
exports.KEY = void 0;

__webpack_require__(/*! core-js/modules/es7.array.includes.js */ "../node_modules/core-js/modules/es7.array.includes.js");

__webpack_require__(/*! core-js/modules/es6.string.includes.js */ "../node_modules/core-js/modules/es6.string.includes.js");

__webpack_require__(/*! core-js/modules/es6.regexp.search.js */ "../node_modules/core-js/modules/es6.regexp.search.js");

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/toConsumableArray */ "../node_modules/@babel/runtime-corejs2/helpers/toConsumableArray.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/slicedToArray.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/defineProperty.js"));

var _objectSpread3 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/objectSpread2 */ "../node_modules/@babel/runtime-corejs2/helpers/objectSpread2.js"));

var _kit = _interopRequireDefault(__webpack_require__(/*! ../models/kit */ "../core/app/modules/kit-library/assets/js/models/kit.js"));

var _taxonomy = __webpack_require__(/*! ../models/taxonomy */ "../core/app/modules/kit-library/assets/js/models/taxonomy.js");

var _reactQuery = __webpack_require__(/*! react-query */ "../node_modules/react-query/es/index.js");

var KEY = 'kits';
exports.KEY = KEY;
var _React = React,
    useState = _React.useState,
    useMemo = _React.useMemo,
    useCallback = _React.useCallback,
    useEffect = _React.useEffect;
var initiateFilterState = {
  search: '',
  taxonomies: _taxonomy.taxonomyType.reduce(function (current, _ref) {
    var key = _ref.key;
    return (0, _objectSpread3.default)((0, _objectSpread3.default)({}, current), {}, (0, _defineProperty2.default)({}, key, []));
  }, {})
};

function useKits() {
  var _useState = useState(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      force = _useState2[0],
      setForce = _useState2[1];

  var _useState3 = useState(initiateFilterState),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      filter = _useState4[0],
      setFilter = _useState4[1];

  var forceRefetch = useCallback(function () {
    return setForce(true);
  }, [setForce]);
  var clearFilter = useCallback(function () {
    return setFilter((0, _objectSpread3.default)({}, initiateFilterState));
  }, [setFilter]);
  var query = (0, _reactQuery.useQuery)([KEY], function () {
    return fetchKits(force);
  });
  var data = useFilteredData(query.data, filter);
  useEffect(function () {
    if (!force) {
      return;
    }

    query.refetch().then(function () {
      return setForce(false);
    });
  }, [force]);
  return (0, _objectSpread3.default)((0, _objectSpread3.default)({}, query), {}, {
    data: data,
    filter: filter,
    setFilter: setFilter,
    clearFilter: clearFilter,
    forceRefetch: forceRefetch
  });
}

function useFilteredData(data, filter) {
  return useMemo(function () {
    if (!data) {
      return [];
    }

    var filteredData = (0, _toConsumableArray2.default)(data);

    if (filter.search) {
      filteredData = filteredData.filter(function (item) {
        return searchFilter(item, filter.search);
      });
    }

    _taxonomy.taxonomyType.forEach(function (_ref2) {
      var _filter$taxonomies$ke;

      var key = _ref2.key;

      if (((_filter$taxonomies$ke = filter.taxonomies[key]) === null || _filter$taxonomies$ke === void 0 ? void 0 : _filter$taxonomies$ke.length) > 0) {
        filteredData = filteredData.filter(function (item) {
          return taxonomiesFilter(item, filter.taxonomies[key]);
        });
      }
    });

    return filteredData;
  }, [data, filter]);
}

function fetchKits(force) {
  return $e.data.get('kits/index', {
    force: force ? 1 : undefined
  }, {
    refresh: true
  }).then(function (response) {
    return response.data;
  }).then(function (_ref3) {
    var data = _ref3.data;
    return data.map(function (item) {
      return _kit.default.createFromResponse(item);
    });
  });
}

function searchFilter(item, searchTerm) {
  var keywords = [].concat((0, _toConsumableArray2.default)(item.keywords), [item.title]);
  searchTerm = searchTerm.toLowerCase();
  return keywords.some(function (keyword) {
    return keyword.toLowerCase().includes(searchTerm);
  });
}

function taxonomiesFilter(item, taxonomies) {
  return taxonomies.some(function (taxonomy) {
    return item.taxonomies.some(function (itemTaxonomy) {
      return taxonomy === itemTaxonomy;
    });
  });
}

/***/ }),

/***/ "../core/app/modules/kit-library/assets/js/hooks/use-taxonomies.js":
/*!*************************************************************************!*\
  !*** ../core/app/modules/kit-library/assets/js/hooks/use-taxonomies.js ***!
  \*************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: exports is used directly at 7:23-30 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = useTaxonomies;
exports.KEY = void 0;

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/objectSpread2 */ "../node_modules/@babel/runtime-corejs2/helpers/objectSpread2.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/slicedToArray.js"));

var _taxonomy = _interopRequireDefault(__webpack_require__(/*! ../models/taxonomy */ "../core/app/modules/kit-library/assets/js/models/taxonomy.js"));

var _reactQuery = __webpack_require__(/*! react-query */ "../node_modules/react-query/es/index.js");

var _react = __webpack_require__(/*! react */ "react");

var KEY = 'tags';
exports.KEY = KEY;

function useTaxonomies() {
  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      force = _useState2[0],
      setForce = _useState2[1];

  var forceRefetch = (0, _react.useCallback)(function () {
    return setForce(true);
  }, [setForce]);
  var query = (0, _reactQuery.useQuery)([KEY], function () {
    return fetchTaxonomies(force);
  });
  (0, _react.useEffect)(function () {
    if (!force) {
      return;
    }

    query.refetch().then(function () {
      return setForce(false);
    });
  }, [force]);
  return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, query), {}, {
    forceRefetch: forceRefetch
  });
}

function fetchTaxonomies(force) {
  return $e.data.get('kit-taxonomies/index', {
    force: force ? 1 : undefined
  }, {
    refresh: true
  }).then(function (response) {
    return response.data;
  }).then(function (_ref) {
    var data = _ref.data;
    return data.map(function (taxonomy) {
      return _taxonomy.default.createFromResponse(taxonomy);
    });
  });
}

/***/ }),

/***/ "../core/app/modules/kit-library/assets/js/models/base-model.js":
/*!**********************************************************************!*\
  !*** ../core/app/modules/kit-library/assets/js/models/base-model.js ***!
  \**********************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: exports is used directly at 7:23-30 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/slicedToArray.js"));

var _entries = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/entries */ "../node_modules/@babel/runtime-corejs2/core-js/object/entries.js"));

var _keys = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "../node_modules/@babel/runtime-corejs2/core-js/object/keys.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var BaseModel = /*#__PURE__*/function () {
  function BaseModel() {
    (0, _classCallCheck2.default)(this, BaseModel);
  }

  (0, _createClass2.default)(BaseModel, [{
    key: "clone",

    /**
     * Clone to object to avoid changing the reference.
     *
     * @returns {BaseModel}
     */
    value: function clone() {
      var _this = this;

      var instance = new this.constructor();
      (0, _keys.default)(this).forEach(function (key) {
        instance[key] = _this[key];
      });
      return instance;
    }
    /**
     * Using init and not the default constructor because there is a problem to fill the instance
     * dynamically in the constructor.
     *
     * @param data
     * @returns {BaseModel}
     */

  }, {
    key: "init",
    value: function init() {
      var _this2 = this;

      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      (0, _entries.default)(data).forEach(function (_ref) {
        var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
            key = _ref2[0],
            value = _ref2[1];

        _this2[key] = value;
      });
      return this;
    }
  }]);
  return BaseModel;
}();

exports.default = BaseModel;

/***/ }),

/***/ "../core/app/modules/kit-library/assets/js/models/content-type.js":
/*!************************************************************************!*\
  !*** ../core/app/modules/kit-library/assets/js/models/content-type.js ***!
  \************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: exports is used directly at 7:23-30 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/assertThisInitialized */ "../node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createSuper */ "../node_modules/@babel/runtime-corejs2/helpers/createSuper.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/defineProperty.js"));

var _baseModel = _interopRequireDefault(__webpack_require__(/*! ./base-model */ "../core/app/modules/kit-library/assets/js/models/base-model.js"));

var ContentType = /*#__PURE__*/function (_BaseModel) {
  (0, _inherits2.default)(ContentType, _BaseModel);

  var _super = (0, _createSuper2.default)(ContentType);

  function ContentType() {
    var _this;

    (0, _classCallCheck2.default)(this, ContentType);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "id", '');
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "label", '');
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "documentTypes", []);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "documents", []);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "order", 0);
    return _this;
  }

  (0, _createClass2.default)(ContentType, null, [{
    key: "createFromResponse",
    value: function createFromResponse(documentType) {
      return new ContentType().init({
        id: documentType.id,
        label: documentType.label,
        documentTypes: documentType.doc_types,
        order: documentType.order,
        documents: []
      });
    }
  }]);
  return ContentType;
}(_baseModel.default);

exports.default = ContentType;

/***/ }),

/***/ "../core/app/modules/kit-library/assets/js/models/document.js":
/*!********************************************************************!*\
  !*** ../core/app/modules/kit-library/assets/js/models/document.js ***!
  \********************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: exports is used directly at 7:23-30 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/assertThisInitialized */ "../node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createSuper */ "../node_modules/@babel/runtime-corejs2/helpers/createSuper.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/defineProperty.js"));

var _baseModel = _interopRequireDefault(__webpack_require__(/*! ./base-model */ "../core/app/modules/kit-library/assets/js/models/base-model.js"));

var Document = /*#__PURE__*/function (_BaseModel) {
  (0, _inherits2.default)(Document, _BaseModel);

  var _super = (0, _createSuper2.default)(Document);

  function Document() {
    var _this;

    (0, _classCallCheck2.default)(this, Document);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "id", '');
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "title", '');
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "documentType", '');
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "thumbnailUrl", '');
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "previewUrl", '');
    return _this;
  }

  (0, _createClass2.default)(Document, null, [{
    key: "createFromResponse",

    /**
     * Create a tag from server response
     *
     * @param document
     */
    value: function createFromResponse(document) {
      return new Document().init({
        id: document.id,
        title: document.title,
        documentType: document.doc_type,
        thumbnailUrl: document.thumbnail_url,
        previewUrl: document.preview_url
      });
    }
  }]);
  return Document;
}(_baseModel.default);

exports.default = Document;

/***/ }),

/***/ "../core/app/modules/kit-library/assets/js/models/kit.js":
/*!***************************************************************!*\
  !*** ../core/app/modules/kit-library/assets/js/models/kit.js ***!
  \***************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: exports is used directly at 7:23-30 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

__webpack_require__(/*! core-js/modules/es7.array.includes.js */ "../node_modules/core-js/modules/es7.array.includes.js");

__webpack_require__(/*! core-js/modules/es6.string.includes.js */ "../node_modules/core-js/modules/es6.string.includes.js");

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/assertThisInitialized */ "../node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createSuper */ "../node_modules/@babel/runtime-corejs2/helpers/createSuper.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/defineProperty.js"));

var _baseModel = _interopRequireDefault(__webpack_require__(/*! ./base-model */ "../core/app/modules/kit-library/assets/js/models/base-model.js"));

var _document = _interopRequireDefault(__webpack_require__(/*! ./document */ "../core/app/modules/kit-library/assets/js/models/document.js"));

var Kit = /*#__PURE__*/function (_BaseModel) {
  (0, _inherits2.default)(Kit, _BaseModel);

  var _super = (0, _createSuper2.default)(Kit);

  function Kit() {
    var _this;

    (0, _classCallCheck2.default)(this, Kit);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "id", '');
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "title", '');
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "description", '');
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "isFavorite", false);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "thumbnailUrl", null);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "previewUrl", '');
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "accessLevel", 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "trendIndex", null);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "popularityIndex", null);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "featuredIndex", null);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "createdAt", null);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "updatedAt", null);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "keywords", []);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "taxonomies", []);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "documents", []);
    return _this;
  }

  (0, _createClass2.default)(Kit, [{
    key: "getDocumentsByTypes",

    /**
     * Get content types as param and group all the documents based on it.
     *
     * @param {ContentType[]} contentTypes
     * @returns {ContentType[]}
     */
    value: function getDocumentsByTypes(contentTypes) {
      var _this2 = this;

      return contentTypes.map(function (contentType) {
        contentType = contentType.clone();
        contentType.documents = _this2.documents.filter(function (document) {
          return contentType.documentTypes.includes(document.documentType);
        });
        return contentType;
      });
    }
  }], [{
    key: "createFromResponse",

    /**
     * Create a kit from server response
     *
     * @param kit
     */
    value: function createFromResponse(kit) {
      return new Kit().init({
        id: kit.id,
        title: kit.title,
        description: kit.description,
        isFavorite: kit.is_favorite,
        thumbnailUrl: kit.thumbnail_url,
        previewUrl: kit.preview_url,
        accessLevel: kit.access_level,
        trendIndex: kit.trend_index,
        popularityIndex: kit.popularity_index,
        featuredIndex: kit.featured_index,
        createdAt: new Date(kit.created_at),
        updatedAt: new Date(kit.updated_at),
        keywords: kit.keywords,
        taxonomies: kit.taxonomies,
        documents: kit.documents ? kit.documents.map(function (document) {
          return _document.default.createFromResponse(document);
        }) : []
      });
    }
  }]);
  return Kit;
}(_baseModel.default);

exports.default = Kit;

/***/ }),

/***/ "../core/app/modules/kit-library/assets/js/models/taxonomy.js":
/*!********************************************************************!*\
  !*** ../core/app/modules/kit-library/assets/js/models/taxonomy.js ***!
  \********************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: exports is used directly at 7:23-30 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.taxonomyType = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/assertThisInitialized */ "../node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createSuper */ "../node_modules/@babel/runtime-corejs2/helpers/createSuper.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/defineProperty.js"));

var _baseModel = _interopRequireDefault(__webpack_require__(/*! ./base-model */ "../core/app/modules/kit-library/assets/js/models/base-model.js"));

var taxonomyType = [{
  key: 'categories',
  label: __('Categories', 'elementor'),
  isOpenByDefault: true
}, {
  key: 'tags',
  label: __('Tags', 'elementor')
}, {
  key: 'types',
  label: __('Kit Types', 'elementor')
}, {
  key: 'features',
  label: __('Features', 'elementor')
}];
exports.taxonomyType = taxonomyType;

var Taxonomy = /*#__PURE__*/function (_BaseModel) {
  (0, _inherits2.default)(Taxonomy, _BaseModel);

  var _super = (0, _createSuper2.default)(Taxonomy);

  function Taxonomy() {
    var _this;

    (0, _classCallCheck2.default)(this, Taxonomy);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "text", '');
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "type", 'tag');
    return _this;
  }

  (0, _createClass2.default)(Taxonomy, null, [{
    key: "createFromResponse",

    /**
     * Create a tag from server response
     *
     * @param taxonomy
     */
    value: function createFromResponse(taxonomy) {
      return new Taxonomy().init({
        text: taxonomy.text,
        type: taxonomy.type
      });
    }
  }]);
  return Taxonomy;
}(_baseModel.default);

exports.default = Taxonomy;

/***/ }),

/***/ "../core/app/modules/kit-library/assets/js/pages/index/index-header.js":
/*!*****************************************************************************!*\
  !*** ../core/app/modules/kit-library/assets/js/pages/index/index-header.js ***!
  \*****************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: exports is used directly at 9:23-30 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = IndexHeader;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/slicedToArray.js"));

var _header = _interopRequireDefault(__webpack_require__(/*! ../../components/layout/header */ "../core/app/modules/kit-library/assets/js/components/layout/header.js"));

var _appUi = __webpack_require__(/*! @elementor/app-ui */ "@elementor/app-ui");

var _router = __webpack_require__(/*! @reach/router */ "../node_modules/@reach/router/es/index.js");

__webpack_require__(/*! ./index-header.scss */ "../core/app/modules/kit-library/assets/js/pages/index/index-header.scss");

function IndexHeader(props) {
  var navigate = (0, _router.useNavigate)();

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      isInfoModalOpen = _useState2[0],
      setIsInfoModalOpen = _useState2[1];

  var buttons = (0, _react.useMemo)(function () {
    return [{
      id: 'info',
      text: __('Info', 'elementor-pro'),
      hideText: true,
      icon: 'eicon-info-circle-o',
      onClick: function onClick() {
        return setIsInfoModalOpen(true);
      }
    }, {
      id: 'refetch',
      text: __('Refetch', 'elementor-pro'),
      hideText: true,
      icon: "eicon-sync ".concat(props.isFetching ? 'eicon-animation-spin' : ''),
      onClick: props.refetch
    }, {
      id: 'import',
      text: __('Import', 'elementor-pro'),
      hideText: true,
      icon: 'eicon-upload-circle-o',
      onClick: function onClick() {
        return navigate('/import');
      }
    }];
  }, [props.isFetching, props.refetch]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_header.default, {
    buttons: buttons
  }), /*#__PURE__*/_react.default.createElement(_appUi.Modal, {
    title: __('Welcome to the Library', 'elementor'),
    modalProps: {
      show: isInfoModalOpen,
      hideModal: function hideModal() {
        return setIsInfoModalOpen(false);
      }
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "e-kit-library-header-info-modal-container"
  }, /*#__PURE__*/_react.default.createElement(_appUi.Heading, {
    tag: "h3",
    variant: "h3"
  }, __('What\'s a kit?', 'elementor')), /*#__PURE__*/_react.default.createElement(_appUi.Text, null, __('A Template Kit is full, ready-made design that you can apply to your site. It includes all the pages, parts, settings and content that you\'d expect in a fully functional website.', 'elementor'))), /*#__PURE__*/_react.default.createElement("div", {
    className: "e-kit-library-header-info-modal-container"
  }, /*#__PURE__*/_react.default.createElement(_appUi.Heading, {
    tag: "h3",
    variant: "h3"
  }, __('What\'s going on in the Kit Library?', 'elementor')), /*#__PURE__*/_react.default.createElement(_appUi.Text, null, __('Search & filter for kits by category and tags, or browse through individual kits to see what\'s inside.', 'elementor'), /*#__PURE__*/_react.default.createElement("br", null), __('Once you\'ve picked a winner, apply it to your site!', 'elementor'))), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_appUi.Heading, {
    tag: "h3",
    variant: "h3"
  }, __('Happy browsing!', 'elementor')), /*#__PURE__*/_react.default.createElement(_appUi.Text, null, /*#__PURE__*/_react.default.createElement(_appUi.Button, {
    url: "https://go.elementor.com/app-what-are-kits",
    target: "_blank",
    rel: "noreferrer",
    text: __('Learn more', 'elementor'),
    color: "link"
  }), ' ', __('about using templates', 'elementor')))));
}

IndexHeader.propTypes = {
  refetch: PropTypes.func.isRequired,
  isFetching: PropTypes.bool
};

/***/ }),

/***/ "../core/app/modules/kit-library/assets/js/pages/index/index-no-results.js":
/*!*********************************************************************************!*\
  !*** ../core/app/modules/kit-library/assets/js/pages/index/index-no-results.js ***!
  \*********************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: exports is used directly at 7:23-30 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = IndexNoResults;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _appUi = __webpack_require__(/*! @elementor/app-ui */ "@elementor/app-ui");

__webpack_require__(/*! ./index-no-results.scss */ "../core/app/modules/kit-library/assets/js/pages/index/index-no-results.scss");

function IndexNoResults() {
  return /*#__PURE__*/_react.default.createElement(_appUi.Grid, {
    container: true,
    alignItems: "center",
    justify: "center",
    direction: "column",
    className: "e-kit-library__not-results"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "".concat(elementorAppConfig.assets_url, "images/no-search-results.svg")
  }), /*#__PURE__*/_react.default.createElement(_appUi.Heading, {
    tag: "h3",
    variant: "h1",
    className: "e-kit-library__not-results-title"
  }, __('No Results Found', 'elementor')), /*#__PURE__*/_react.default.createElement(_appUi.Text, {
    variant: "xl",
    className: "e-kit-library__not-results-description"
  }, __('Try retyping another keyword or explore the most popular kits bellow.', 'elementor')));
}

/***/ }),

/***/ "../core/app/modules/kit-library/assets/js/pages/index/index-sidebar.js":
/*!******************************************************************************!*\
  !*** ../core/app/modules/kit-library/assets/js/pages/index/index-sidebar.js ***!
  \******************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: exports is used directly at 7:23-30 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = IndexSidebar;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _appUi = __webpack_require__(/*! @elementor/app-ui */ "@elementor/app-ui");

function IndexSidebar(props) {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_appUi.MenuItem, {
    text: __('All Kits', 'elementor'),
    className: "eps-menu-item__link eps-menu-item--active",
    icon: "eicon-filter",
    url: "/kit-library"
  }), props.tagsFilterSlot);
}

IndexSidebar.propTypes = {
  tagsFilterSlot: PropTypes.node
};

/***/ }),

/***/ "../core/app/modules/kit-library/assets/js/pages/index/index.js":
/*!**********************************************************************!*\
  !*** ../core/app/modules/kit-library/assets/js/pages/index/index.js ***!
  \**********************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: exports is used directly at 9:23-30 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = Index;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

__webpack_require__(/*! core-js/modules/es6.regexp.search.js */ "../node_modules/core-js/modules/es6.regexp.search.js");

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/defineProperty.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/slicedToArray.js"));

var _entries = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/entries */ "../node_modules/@babel/runtime-corejs2/core-js/object/entries.js"));

var _objectSpread3 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/objectSpread2 */ "../node_modules/@babel/runtime-corejs2/helpers/objectSpread2.js"));

var _content = _interopRequireDefault(__webpack_require__(/*! ../../../../../../assets/js/layout/content */ "../core/app/assets/js/layout/content.js"));

var _filterIndicationText = _interopRequireDefault(__webpack_require__(/*! ../../components/filter-indication-text */ "../core/app/modules/kit-library/assets/js/components/filter-indication-text.js"));

var _indexHeader = _interopRequireDefault(__webpack_require__(/*! ./index-header */ "../core/app/modules/kit-library/assets/js/pages/index/index-header.js"));

var _indexNoResults = _interopRequireDefault(__webpack_require__(/*! ./index-no-results */ "../core/app/modules/kit-library/assets/js/pages/index/index-no-results.js"));

var _indexSidebar = _interopRequireDefault(__webpack_require__(/*! ./index-sidebar */ "../core/app/modules/kit-library/assets/js/pages/index/index-sidebar.js"));

var _kitList = _interopRequireDefault(__webpack_require__(/*! ../../components/kit-list */ "../core/app/modules/kit-library/assets/js/components/kit-list.js"));

var _layout = _interopRequireDefault(__webpack_require__(/*! ../../components/layout */ "../core/app/modules/kit-library/assets/js/components/layout/index.js"));

var _taxonomiesFilter = _interopRequireDefault(__webpack_require__(/*! ../../components/taxonomies-filter */ "../core/app/modules/kit-library/assets/js/components/taxonomies-filter.js"));

var _useKits2 = _interopRequireDefault(__webpack_require__(/*! ../../hooks/use-kits */ "../core/app/modules/kit-library/assets/js/hooks/use-kits.js"));

var _useTaxonomies2 = _interopRequireDefault(__webpack_require__(/*! ../../hooks/use-taxonomies */ "../core/app/modules/kit-library/assets/js/hooks/use-taxonomies.js"));

var _appUi = __webpack_require__(/*! @elementor/app-ui */ "@elementor/app-ui");

__webpack_require__(/*! ./index.scss */ "../core/app/modules/kit-library/assets/js/pages/index/index.scss");

/**
 * Generate select and unselect taxonomy functions.
 *
 * @param setFilter
 * @returns {((function(*, *): *)|(function(*=): *))[]}
 */
function useTaxonomiesSelection(setFilter) {
  var selectTaxonomy = (0, _react.useCallback)(function (type, callback) {
    return setFilter(function (prev) {
      var taxonomies = (0, _objectSpread3.default)({}, prev.taxonomies);
      taxonomies[type] = callback(prev.taxonomies[type]);
      return (0, _objectSpread3.default)((0, _objectSpread3.default)({}, prev), {}, {
        taxonomies: taxonomies
      });
    });
  }, [setFilter]);
  var unselectTaxonomy = (0, _react.useCallback)(function (taxonomy) {
    return setFilter(function (prev) {
      var taxonomies = (0, _entries.default)(prev.taxonomies).reduce(function (current, _ref) {
        var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
            key = _ref2[0],
            groupedTaxonomies = _ref2[1];

        return (0, _objectSpread3.default)((0, _objectSpread3.default)({}, current), {}, (0, _defineProperty2.default)({}, key, groupedTaxonomies.filter(function (item) {
          return item !== taxonomy;
        })));
      }, {});
      return (0, _objectSpread3.default)((0, _objectSpread3.default)({}, prev), {}, {
        taxonomies: taxonomies
      });
    });
  }, [setFilter]);
  return [selectTaxonomy, unselectTaxonomy];
}

function Index() {
  var _useKits = (0, _useKits2.default)(),
      data = _useKits.data,
      isSuccess = _useKits.isSuccess,
      isLoading = _useKits.isLoading,
      isFetching = _useKits.isFetching,
      isError = _useKits.isError,
      filter = _useKits.filter,
      setFilter = _useKits.setFilter,
      clearFilter = _useKits.clearFilter,
      forceRefetch = _useKits.forceRefetch;

  var _useTaxonomies = (0, _useTaxonomies2.default)(),
      taxonomiesData = _useTaxonomies.data,
      forceRefetchTaxonomies = _useTaxonomies.forceRefetch,
      isFetchingTaxonomies = _useTaxonomies.isFetching;

  var _useTaxonomiesSelecti = useTaxonomiesSelection(setFilter),
      _useTaxonomiesSelecti2 = (0, _slicedToArray2.default)(_useTaxonomiesSelecti, 2),
      selectTaxonomy = _useTaxonomiesSelecti2[0],
      unselectTaxonomy = _useTaxonomiesSelecti2[1];

  return /*#__PURE__*/_react.default.createElement(_layout.default, {
    sidebar: /*#__PURE__*/_react.default.createElement(_indexSidebar.default, {
      tagsFilterSlot: /*#__PURE__*/_react.default.createElement(_taxonomiesFilter.default, {
        selected: filter.taxonomies,
        onSelect: selectTaxonomy,
        taxonomies: taxonomiesData
      })
    }),
    header: /*#__PURE__*/_react.default.createElement(_indexHeader.default, {
      refetch: function refetch() {
        forceRefetch();
        forceRefetchTaxonomies();
      },
      isFetching: isFetching || isFetchingTaxonomies
    })
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "e-kit-library__index-layout-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "e-kit-library__index-layout-search-area"
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_appUi.SearchInput, {
    placeholder: __('Search a kit theme or style', 'elementor'),
    value: filter.search,
    onChange: function onChange(value) {
      return setFilter(function (prev) {
        return (0, _objectSpread3.default)((0, _objectSpread3.default)({}, prev), {}, {
          search: value
        });
      });
    }
  }), /*#__PURE__*/_react.default.createElement(_filterIndicationText.default, {
    filter: filter,
    resultCount: data.length || 0,
    onClear: clearFilter,
    onRemoveTag: unselectTaxonomy
  }))), /*#__PURE__*/_react.default.createElement(_content.default, {
    className: "e-kit-library__index-layout-main"
  }, /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, isLoading && __('Loading...', 'elementor'), isError && __('An error occurred', 'elementor'), isSuccess && data.length > 0 && /*#__PURE__*/_react.default.createElement(_kitList.default, {
    data: data
  }), isSuccess && data.length <= 0 && /*#__PURE__*/_react.default.createElement(_indexNoResults.default, null)))));
}

/***/ }),

/***/ "../core/app/modules/kit-library/assets/js/pages/overview/overview-content-group-item.js":
/*!***********************************************************************************************!*\
  !*** ../core/app/modules/kit-library/assets/js/pages/overview/overview-content-group-item.js ***!
  \***********************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: exports is used directly at 7:23-30 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = OverviewContentGroupItem;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _document = _interopRequireDefault(__webpack_require__(/*! ../../models/document */ "../core/app/modules/kit-library/assets/js/models/document.js"));

var _appUi = __webpack_require__(/*! @elementor/app-ui */ "@elementor/app-ui");

function OverviewContentGroupItem(props) {
  return /*#__PURE__*/_react.default.createElement(_appUi.Card, null, /*#__PURE__*/_react.default.createElement(_appUi.CardHeader, null, /*#__PURE__*/_react.default.createElement(_appUi.Heading, {
    tag: "h3",
    title: props.document.title,
    variant: "h5",
    className: "eps-card__headline"
  }, props.document.title)), /*#__PURE__*/_react.default.createElement(_appUi.CardBody, null, /*#__PURE__*/_react.default.createElement(_appUi.CardImage, {
    alt: props.document.title,
    src: props.document.thumbnailUrl || ''
  })));
}

OverviewContentGroupItem.propTypes = {
  document: PropTypes.instanceOf(_document.default)
};

/***/ }),

/***/ "../core/app/modules/kit-library/assets/js/pages/overview/overview-content-group.js":
/*!******************************************************************************************!*\
  !*** ../core/app/modules/kit-library/assets/js/pages/overview/overview-content-group.js ***!
  \******************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: exports is used directly at 7:23-30 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = OverviewContentGroup;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _contentType = _interopRequireDefault(__webpack_require__(/*! ../../models/content-type */ "../core/app/modules/kit-library/assets/js/models/content-type.js"));

var _overviewContentGroupItem = _interopRequireDefault(__webpack_require__(/*! ./overview-content-group-item */ "../core/app/modules/kit-library/assets/js/pages/overview/overview-content-group-item.js"));

var _appUi = __webpack_require__(/*! @elementor/app-ui */ "@elementor/app-ui");

function OverviewContentGroup(props) {
  var _props$contentType, _props$contentType$do;

  if (((_props$contentType = props.contentType) === null || _props$contentType === void 0 ? void 0 : (_props$contentType$do = _props$contentType.documents) === null || _props$contentType$do === void 0 ? void 0 : _props$contentType$do.length) <= 0) {
    return '';
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "e-kit-library__content-overview-group-item"
  }, /*#__PURE__*/_react.default.createElement(_appUi.Heading, {
    tag: "h3",
    variant: "h3",
    className: "e-kit-library__content-overview-group-title"
  }, props.contentType.label), /*#__PURE__*/_react.default.createElement(_appUi.CssGrid, {
    spacing: 24,
    colMinWidth: 250
  }, props.contentType.documents.map(function (document) {
    return /*#__PURE__*/_react.default.createElement(_overviewContentGroupItem.default, {
      key: document.id,
      document: document
    });
  })));
}

OverviewContentGroup.propTypes = {
  contentType: PropTypes.instanceOf(_contentType.default)
};

/***/ }),

/***/ "../core/app/modules/kit-library/assets/js/pages/overview/overview-content.js":
/*!************************************************************************************!*\
  !*** ../core/app/modules/kit-library/assets/js/pages/overview/overview-content.js ***!
  \************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: exports is used directly at 7:23-30 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = OverviewContent;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _contentType = _interopRequireDefault(__webpack_require__(/*! ../../models/content-type */ "../core/app/modules/kit-library/assets/js/models/content-type.js"));

var _overviewContentGroup = _interopRequireDefault(__webpack_require__(/*! ./overview-content-group */ "../core/app/modules/kit-library/assets/js/pages/overview/overview-content-group.js"));

__webpack_require__(/*! ./overview-content.scss */ "../core/app/modules/kit-library/assets/js/pages/overview/overview-content.scss");

function OverviewContent(props) {
  return props.documentsByType.map(function (contentType) {
    return /*#__PURE__*/_react.default.createElement(_overviewContentGroup.default, {
      key: contentType.id,
      contentType: contentType
    });
  });
}

OverviewContent.propTypes = {
  documentsByType: PropTypes.arrayOf(PropTypes.instanceOf(_contentType.default))
};

/***/ }),

/***/ "../core/app/modules/kit-library/assets/js/pages/overview/overview-sidebar.js":
/*!************************************************************************************!*\
  !*** ../core/app/modules/kit-library/assets/js/pages/overview/overview-sidebar.js ***!
  \************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: exports is used directly at 9:23-30 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = OverviewSidebar;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/slicedToArray.js"));

var _contentType = _interopRequireDefault(__webpack_require__(/*! ../../models/content-type */ "../core/app/modules/kit-library/assets/js/models/content-type.js"));

var _environment = _interopRequireDefault(__webpack_require__(/*! elementor-common/utils/environment */ "../core/common/assets/js/utils/environment.js"));

var _kit = _interopRequireDefault(__webpack_require__(/*! ../../models/kit */ "../core/app/modules/kit-library/assets/js/models/kit.js"));

var _appUi = __webpack_require__(/*! @elementor/app-ui */ "@elementor/app-ui");

__webpack_require__(/*! ./overview-sidebar.scss */ "../core/app/modules/kit-library/assets/js/pages/overview/overview-sidebar.scss");

function OverviewSidebar(props) {
  var _props$groupedKitCont;

  var _useState = (0, _react.useState)(true),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      isTagsCollapseOpen = _useState2[0],
      setIsTagsCollapseOpen = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      isInformationCollapseOpen = _useState4[0],
      setIsInformationCollapseOpen = _useState4[1];

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "e-kit-library__item-sidebar"
  }, /*#__PURE__*/_react.default.createElement(_appUi.Heading, {
    tag: "h1",
    variant: "h5",
    className: "e-kit-library__item-sidebar-header"
  }, props.model.title), /*#__PURE__*/_react.default.createElement(_appUi.CardImage, {
    className: "e-kit-library__item-sidebar-thumbnail",
    alt: props.model.title,
    src: props.model.thumbnailUrl || ''
  }), /*#__PURE__*/_react.default.createElement(_appUi.Text, {
    className: "e-kit-library__item-sidebar-description"
  }, props.model.description || ''), props.model.taxonomies.length > 0 && /*#__PURE__*/_react.default.createElement(_appUi.Collapse, {
    isOpen: isTagsCollapseOpen,
    onChange: setIsTagsCollapseOpen,
    title: __('TAGS', 'elementor'),
    className: "e-kit-library__item-sidebar-collapse"
  }, /*#__PURE__*/_react.default.createElement(_appUi.Grid, {
    container: true,
    className: "e-kit-library__item-sidebar-tags-container"
  }, props.model.taxonomies.map(function (taxonomy) {
    return /*#__PURE__*/_react.default.createElement(_appUi.Badge, {
      key: taxonomy,
      className: _environment.default.safari ? 'e-kit-library__item-sidebar-tag--safari-support' : ''
    }, taxonomy);
  }))), ((_props$groupedKitCont = props.groupedKitContent) === null || _props$groupedKitCont === void 0 ? void 0 : _props$groupedKitCont.length) > 0 && props.model.documents.length > 0 && /*#__PURE__*/_react.default.createElement(_appUi.Collapse, {
    isOpen: isInformationCollapseOpen,
    onChange: setIsInformationCollapseOpen,
    title: __('INFORMATION', 'elementor'),
    className: "e-kit-library__item-sidebar-collapse"
  }, props.groupedKitContent.map(function (contentType) {
    if (contentType.documents <= 0) {
      return '';
    }

    return /*#__PURE__*/_react.default.createElement(_appUi.Text, {
      className: "e-kit-library__item-information-text",
      key: contentType.id
    }, contentType.documents.length, " ", contentType.label);
  })));
}

OverviewSidebar.propTypes = {
  model: PropTypes.instanceOf(_kit.default).isRequired,
  groupedKitContent: PropTypes.arrayOf(PropTypes.instanceOf(_contentType.default))
};

/***/ }),

/***/ "../core/app/modules/kit-library/assets/js/pages/overview/overview.js":
/*!****************************************************************************!*\
  !*** ../core/app/modules/kit-library/assets/js/pages/overview/overview.js ***!
  \****************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: exports is used directly at 9:23-30 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = Item;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _content = _interopRequireDefault(__webpack_require__(/*! elementor/core/app/assets/js/layout/content */ "../core/app/assets/js/layout/content.js"));

var _overviewContent = _interopRequireDefault(__webpack_require__(/*! ./overview-content */ "../core/app/modules/kit-library/assets/js/pages/overview/overview-content.js"));

var _itemHeader = _interopRequireDefault(__webpack_require__(/*! ../../components/item-header */ "../core/app/modules/kit-library/assets/js/components/item-header.js"));

var _overviewSidebar = _interopRequireDefault(__webpack_require__(/*! ./overview-sidebar */ "../core/app/modules/kit-library/assets/js/pages/overview/overview-sidebar.js"));

var _layout = _interopRequireDefault(__webpack_require__(/*! ../../components/layout */ "../core/app/modules/kit-library/assets/js/components/layout/index.js"));

var _useKit2 = _interopRequireDefault(__webpack_require__(/*! ../../hooks/use-kit */ "../core/app/modules/kit-library/assets/js/hooks/use-kit.js"));

var _useKitDocumentByType2 = _interopRequireDefault(__webpack_require__(/*! ../../hooks/use-kit-document-by-type */ "../core/app/modules/kit-library/assets/js/hooks/use-kit-document-by-type.js"));

var _router = __webpack_require__(/*! @reach/router */ "../node_modules/@reach/router/es/index.js");

function useHeaderButtons(id) {
  var navigate = (0, _router.useNavigate)();
  return (0, _react.useMemo)(function () {
    return [{
      id: 'view-demo',
      text: __('View Demo', 'elementor'),
      hideText: false,
      variant: 'outlined',
      color: 'secondary',
      size: 'sm',
      onClick: function onClick() {
        return navigate("/kit-library/preview/".concat(id));
      },
      includeHeaderBtnClass: false
    }];
  }, [id]);
}

function Item(props) {
  var _useKit = (0, _useKit2.default)(props.id),
      kit = _useKit.data,
      isError = _useKit.isError,
      isLoading = _useKit.isLoading;

  var _useKitDocumentByType = (0, _useKitDocumentByType2.default)(kit),
      documentsByType = _useKitDocumentByType.data;

  var headerButtons = useHeaderButtons(props.id);

  if (isError) {
    return __('Error!', 'elementor');
  }

  if (isLoading) {
    return __('Loading...', 'elementor');
  }

  return /*#__PURE__*/_react.default.createElement(_layout.default, {
    header: /*#__PURE__*/_react.default.createElement(_itemHeader.default, {
      model: kit,
      buttons: headerButtons
    }),
    sidebar: /*#__PURE__*/_react.default.createElement(_overviewSidebar.default, {
      model: kit,
      groupedKitContent: documentsByType
    })
  }, documentsByType.length > 0 && /*#__PURE__*/_react.default.createElement(_content.default, null, /*#__PURE__*/_react.default.createElement(_overviewContent.default, {
    documentsByType: documentsByType
  })));
}

Item.propTypes = {
  id: PropTypes.string
};

/***/ }),

/***/ "../core/app/modules/kit-library/assets/js/pages/preview/preview-iframe.js":
/*!*********************************************************************************!*\
  !*** ../core/app/modules/kit-library/assets/js/pages/preview/preview-iframe.js ***!
  \*********************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: exports is used directly at 7:23-30 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.PreviewIframe = PreviewIframe;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _appUi = __webpack_require__(/*! @elementor/app-ui */ "@elementor/app-ui");

__webpack_require__(/*! ./preview-iframe.scss */ "../core/app/modules/kit-library/assets/js/pages/preview/preview-iframe.scss");

function PreviewIframe(props) {
  return /*#__PURE__*/_react.default.createElement(_appUi.Grid, {
    container: true,
    justify: "center",
    className: "e-kit-library__preview-library-container"
  }, /*#__PURE__*/_react.default.createElement("iframe", {
    className: "e-kit-library__preview-library",
    src: props.previewUrl,
    style: props.style
  }));
}

PreviewIframe.propTypes = {
  previewUrl: PropTypes.string.isRequired,
  style: PropTypes.object
};
PreviewIframe.defaultProps = {
  style: {
    width: '100%',
    height: '100%'
  }
};

/***/ }),

/***/ "../core/app/modules/kit-library/assets/js/pages/preview/preview-responsive-controls.js":
/*!**********************************************************************************************!*\
  !*** ../core/app/modules/kit-library/assets/js/pages/preview/preview-responsive-controls.js ***!
  \**********************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: exports is used directly at 7:23-30 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = PreviewResponsiveControls;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _preview = __webpack_require__(/*! ./preview */ "../core/app/modules/kit-library/assets/js/pages/preview/preview.js");

var _appUi = __webpack_require__(/*! @elementor/app-ui */ "@elementor/app-ui");

__webpack_require__(/*! ./preview-responsive-controls.scss */ "../core/app/modules/kit-library/assets/js/pages/preview/preview-responsive-controls.scss");

function PreviewResponsiveControls(props) {
  return /*#__PURE__*/_react.default.createElement(_appUi.Grid, {
    container: true,
    alignItems: "center",
    justify: "center",
    className: "e-kit-library__preview-responsive-controls"
  }, _preview.breakpoints.map(function (_ref) {
    var label = _ref.label,
        value = _ref.value;
    var className = 'e-kit-library__preview-responsive-controls-item';

    if (props.active === value) {
      className += ' e-kit-library__preview-responsive-controls-item--active';
    }

    return /*#__PURE__*/_react.default.createElement(_appUi.Button, {
      key: value,
      text: label,
      hideText: true,
      className: className,
      icon: "eicon-device-".concat(value),
      onClick: function onClick() {
        return props.onChange(value);
      }
    });
  }));
}

PreviewResponsiveControls.propTypes = {
  active: PropTypes.string,
  onChange: PropTypes.func.isRequired
};
PreviewResponsiveControls.defaultProps = {
  active: 'desktop'
};

/***/ }),

/***/ "../core/app/modules/kit-library/assets/js/pages/preview/preview.js":
/*!**************************************************************************!*\
  !*** ../core/app/modules/kit-library/assets/js/pages/preview/preview.js ***!
  \**************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: exports is used directly at 9:23-30 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = Preview;
exports.breakpoints = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

__webpack_require__(/*! core-js/modules/es6.array.find.js */ "../node_modules/core-js/modules/es6.array.find.js");

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/slicedToArray.js"));

var _itemHeader = _interopRequireDefault(__webpack_require__(/*! ../../components/item-header */ "../core/app/modules/kit-library/assets/js/components/item-header.js"));

var _layout = _interopRequireDefault(__webpack_require__(/*! ../../components/layout */ "../core/app/modules/kit-library/assets/js/components/layout/index.js"));

var _previewResponsiveControls = _interopRequireDefault(__webpack_require__(/*! ./preview-responsive-controls */ "../core/app/modules/kit-library/assets/js/pages/preview/preview-responsive-controls.js"));

var _useKit2 = _interopRequireDefault(__webpack_require__(/*! ../../hooks/use-kit */ "../core/app/modules/kit-library/assets/js/hooks/use-kit.js"));

var _previewIframe = __webpack_require__(/*! ./preview-iframe */ "../core/app/modules/kit-library/assets/js/pages/preview/preview-iframe.js");

var _router = __webpack_require__(/*! @reach/router */ "../node_modules/@reach/router/es/index.js");

var breakpoints = [{
  value: 'desktop',
  label: __('Desktop', 'elementor'),
  style: {
    width: '100%',
    height: '100%'
  }
}, {
  value: 'tablet',
  label: __('Tablet', 'elementor'),
  style: {
    marginTop: '30px',
    marginBottom: '30px',
    width: '768px',
    height: '1024px'
  }
}, {
  value: 'mobile',
  label: __('Mobile', 'elementor'),
  style: {
    marginTop: '30px',
    marginBottom: '30px',
    width: '375px',
    height: '667px'
  }
}];
exports.breakpoints = breakpoints;

function useHeaderButtons(id) {
  var navigate = (0, _router.useNavigate)();
  return (0, _react.useMemo)(function () {
    return [{
      id: 'overview',
      text: __('Overview', 'elementor'),
      hideText: false,
      variant: 'outlined',
      color: 'secondary',
      size: 'sm',
      onClick: function onClick() {
        return navigate("/kit-library/overview/".concat(id));
      },
      includeHeaderBtnClass: false
    }];
  }, [id]);
}

function Preview(props) {
  var _useKit = (0, _useKit2.default)(props.id),
      data = _useKit.data,
      isError = _useKit.isError,
      isLoading = _useKit.isLoading;

  var headersButtons = useHeaderButtons(props.id);

  var _useState = (0, _react.useState)('desktop'),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      activeDevice = _useState2[0],
      setActiveDevice = _useState2[1];

  var iframeStyle = (0, _react.useMemo)(function () {
    return breakpoints.find(function (_ref) {
      var value = _ref.value;
      return value === activeDevice;
    }).style;
  }, [activeDevice]);

  if (isError) {
    return __('Error!', 'elementor');
  }

  if (isLoading) {
    return __('Loading...', 'elementor');
  }

  return /*#__PURE__*/_react.default.createElement(_layout.default, {
    header: /*#__PURE__*/_react.default.createElement(_itemHeader.default, {
      model: data,
      buttons: headersButtons,
      centerColumn: /*#__PURE__*/_react.default.createElement(_previewResponsiveControls.default, {
        active: activeDevice,
        onChange: setActiveDevice
      })
    })
  }, data.previewUrl && /*#__PURE__*/_react.default.createElement(_previewIframe.PreviewIframe, {
    previewUrl: data.previewUrl,
    style: iframeStyle
  }));
}

Preview.propTypes = {
  id: PropTypes.string
};

/***/ }),

/***/ "../core/common/assets/js/utils/environment.js":
/*!*****************************************************!*\
  !*** ../core/common/assets/js/utils/environment.js ***!
  \*****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: exports is used directly at 5:23-30 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

__webpack_require__(/*! core-js/modules/es6.regexp.to-string.js */ "../node_modules/core-js/modules/es6.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es6.object.to-string.js */ "../node_modules/core-js/modules/es6.object.to-string.js");

var matchUserAgent = function matchUserAgent(UserAgentStr) {
  return userAgent.indexOf(UserAgentStr) >= 0;
},
    userAgent = navigator.userAgent,
    // Solution influenced by https://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browser
// Opera 8.0+
isOpera = !!window.opr && !!opr.addons || !!window.opera || matchUserAgent(' OPR/'),
    // Firefox 1.0+
isFirefox = matchUserAgent('Firefox'),
    // Safari 3.0+ "[object HTMLElementConstructor]"
isSafari = /^((?!chrome|android).)*safari/i.test(userAgent) || /constructor/i.test(window.HTMLElement) || function (p) {
  return '[object SafariRemoteNotification]' === p.toString();
}(!window.safari || typeof safari !== 'undefined' && safari.pushNotification),
    // Internet Explorer 6-11
isIE = /Trident|MSIE/.test(userAgent) && (
/*@cc_on!@*/
 false || !!document.documentMode),
    // Edge 20+
isEdge = !isIE && !!window.StyleMedia || matchUserAgent('Edg'),
    // Google Chrome (Not accurate)
isChrome = !!window.chrome && matchUserAgent('Chrome') && !(isEdge || isOpera),
    // Blink engine
isBlink = matchUserAgent('Chrome') && !!window.CSS,
    // Apple Webkit engine
isAppleWebkit = matchUserAgent('AppleWebKit') && !isBlink,
    environment = {
  appleWebkit: isAppleWebkit,
  blink: isBlink,
  chrome: isChrome,
  edge: isEdge,
  firefox: isFirefox,
  ie: isIE,
  mac: matchUserAgent('Macintosh'),
  opera: isOpera,
  safari: isSafari,
  webkit: matchUserAgent('AppleWebKit')
};

var _default = environment;
exports.default = _default;

/***/ })

}]);
//# sourceMappingURL=b2d97dc2642937de6ccc.bundle.js.map