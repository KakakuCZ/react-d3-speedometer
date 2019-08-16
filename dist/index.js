"use strict";var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard"),_interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck")),_createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass")),_possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn")),_getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf")),_assertThisInitialized2=_interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized")),_inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits")),_defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty")),_react=_interopRequireWildcard(require("react")),_propTypes=_interopRequireDefault(require("prop-types")),_d=require("d3"),_config=require("./core/config"),_render=require("./core/render"),ReactSpeedometer=function(a){function b(a){var c;return(0,_classCallCheck2.default)(this,b),c=(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(b).call(this,a)),(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(c),"render",function(){return _react.default.createElement("div",{ref:function b(a){return c.gaugeDiv=a}})}),c.d3_refs={pointer:!1,current_value_text:!1},c}return(0,_inherits2.default)(b,a),(0,_createClass2.default)(b,[{key:"componentDidMount",value:function a(){this.renderGauge()}},{key:"componentDidUpdate",value:function a(){this.props.forceRender?this.renderGauge():this.updateReadings()}},{key:"renderGauge",value:function a(){this.config=(0,_config.getConfig)({PROPS:this.props,parentWidth:this.gaugeDiv.parentNode.clientWidth,parentHeight:this.gaugeDiv.parentNode.clientHeight}),(0,_d.select)(this.gaugeDiv).select("svg").remove(),this.d3_refs=(0,_render.render)({container:this.gaugeDiv,config:this.config}),(0,_render.update)({d3_refs:this.d3_refs,newValue:this.props.value,config:this.config})}},{key:"updateReadings",value:function a(){this.config=(0,_config.updateConfig)(this.config,{labelFormat:(0,_d.format)(this.props.valueFormat||""),currentValueText:this.props.currentValueText||"${value}"}),(0,_render.update)({d3_refs:this.d3_refs,newValue:this.props.value||0,config:this.config})}}]),b}(_react.PureComponent);(0,_defineProperty2.default)(ReactSpeedometer,"displayName","ReactSpeedometer"),ReactSpeedometer.propTypes={value:_propTypes.default.number.isRequired,minValue:_propTypes.default.number.isRequired,maxValue:_propTypes.default.number.isRequired,forceRender:_propTypes.default.bool.isRequired,width:_propTypes.default.number.isRequired,height:_propTypes.default.number.isRequired,fluidWidth:_propTypes.default.bool.isRequired,segments:_propTypes.default.number.isRequired,maxSegmentLabels:_propTypes.default.number,customSegmentStops:_propTypes.default.array,needleColor:_propTypes.default.string.isRequired,startColor:_propTypes.default.string.isRequired,endColor:_propTypes.default.string.isRequired,segmentColors:_propTypes.default.array.isRequired,needleTransition:_propTypes.default.string.isRequired,needleTransitionDuration:_propTypes.default.number.isRequired,needleHeightRatio:_propTypes.default.number.isRequired,ringWidth:_propTypes.default.number.isRequired,textColor:_propTypes.default.string.isRequired,valueFormat:_propTypes.default.string.isRequired,currentValueText:_propTypes.default.string.isRequired,currentValuePlaceholderStyle:_propTypes.default.string.isRequired,fontSize:_propTypes.default.string},ReactSpeedometer.defaultProps=_config.DEFAULT_PROPS;var _default=ReactSpeedometer;exports.default=_default;