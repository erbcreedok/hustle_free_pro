import { styled } from "@mui/material/styles";

type TextProps = {
	fontFamily?: string;
	fontStyle?: string;
	fontWeight?: number;
	fontSize?: string;
	lineHeight?: string;
	color?: string;
	margin?: string;
	padding?: string;
	opacity?: string;
	zIndex?: string;
	width?: string;
	height?: string;
	display?: string;
	textDecoration?: string;
};
export const Text = styled("span")<TextProps>`
	font-weight: ${(props) => props.fontWeight};
	font-size: ${(props) => props.fontSize};
	line-height: ${(props) => props.lineHeight};
	font-style: ${(props) => props.fontStyle};
	color: ${(props) => props.color};
	font-family: ${(props) => props.fontFamily};
	margin: ${(props) => props.margin};
	padding: ${(props) => props.padding};
	opacity: ${(props) => props.opacity};
	z-index: ${(props) => props.zIndex};
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	text-decoration: ${(props) => props.textDecoration};
`;
type ScrollProps = {
	width?: string;
	height?: string;
	background?: string;
	hoverBackground?: string;
	borderRadius?: string;
};
export const scrollStyles = ({
	width,
	height,
	background,
	hoverBackground,
	borderRadius,
}: ScrollProps) => ({
	"::-webkit-scrollbar": {
		width: width,
		height: height,
	},
	"::-webkit-scrollbar-thumb": {
		background: background,
		borderRadius: borderRadius,
	},
	"::-webkit-scrollbar-thumb:hover": {
		background: hoverBackground,
	},
});

export const defaultSelectedDayStyle = {
	background: "linear-gradient(69.51deg, #3e83e1 0%, #7b3eed 100%)",
	color: "#ffffff",
	"& .day_name": {
		color: "#c6dbff",
	},
};

export const CssTextFieldSelect = () => ({
	"& .MuiSelect-select": {
		fontWeight: 700,
		color: "#272727",
	},
});

export const CssTextFieldLine = () => ({
	"& .MuiInput-underline:before": {
		borderBottomColor: "#F2F2F2",
	},
	"& .MuiInput-underline:after": {
		borderBottomColor: "#F2F2F2",
	},
});
export const CssTextField = () => ({
	"& .MuiInput-input": {
		fontWeight: 700,
		color: "#272727",
		padding: "8px 0px 16px 0px",
		fontSize: "14px",
	},
	"& .MuiInputLabel-root": {
		fontWeight: 400,
		fontSize: "12px",
	},
});

export const CssSingInFormTextField = () => ({
	"& .MuiFormLabel-root": {
		fontWeight: "400",
		fontSize: "14px",
		color: "#848484",
	},
	"& .MuiInput-input": {
		padding: "8px 0px 16px 0px",
		marginLeft: "10px",
	},
});

export const CssProfileInput = () => ({
	"& .MuiFormLabel-root": {
		fontWeight: "400",
		color: "#848484",
	},
	"& .MuiInput-input": {
		color: "#272727",
		padding: "12px 0",
		marginLeft: "10px",
		fontWeight: 700,
		fontSize: "14px",
	},
	"& .MuiInput-underline:before": {
		borderBottomColor: "#F2F2F2", // Semi-transparent underline
	},
	"& .MuiInput-underline:hover:before": {
		// borderBottomColor: ' #fff8', // Solid underline on hover
	},
	"& .MuiInput-underline:after": {
		borderBottomColor: "#d8d2cf", // Solid underline on focus
	},
});
export const CssProfileFilledInput = () => ({
	"& .MuiFilledInput-input": {
		fontWeight: 700,
		fontSize: "14px",
		padding: "12px 10px",
		color: "#848484",
	},
	"& .MuiFilledInput-root": {
		background: "#FCFCFC",
	},
	"& .MuiFilledInput-underline:before": {
		borderBottomColor: "#F2F2F2", // Semi-transparent underline
	},
	"& .MuiFilledInput-underline:hover:before": {
		borderBottomColor: " #fff8", // Solid underline on hover
	},
	"& .MuiFilledInput-underline:after": {
		borderBottomColor: "#d8d2cf", // Solid underline on focus
	},
});
