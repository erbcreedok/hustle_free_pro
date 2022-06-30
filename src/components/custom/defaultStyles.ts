import { styled } from "@mui/material/styles";
import { Typography, Box } from "@mui/material";

// Wrapper
export const Wrapper = styled(Box)``;

// Title Wrapper
export const TitleWrapper = styled(Box)``;
// Title
export const Title = styled(Typography)``;

// Text
export const Text = styled(Typography)``;
// Text Wrapper
export const TextWrapper = styled(Typography)``;

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

export const SignInFormTextStyles = () => ({
	fontWeight: 400,
	fontSize: "12px",
	lineHeight: "14px",
});

export const BottomNavDefaultStyles = () => ({
	width: "100%",
	position: "fixed",
	bottom: 0,
	zIndex: 1000,
	padding: "0px 16px",
	boxShadow: "0px -2px 5px 0px rgb(86 86 86 / 20%)",
	"@media (min-width: 769px)": {
		display: "none",
	},
	"&.MuiBottomNavigation-root .MuiButtonBase-root": {
		minWidth: "unset",
	},
	"&.MuiBottomNavigation-root a": {
		textDecoration: "unset",
	},
	"&.MuiBottomNavigation-root .active button, &.MuiBottomNavigation-root .active span":
		{
			color: "#6D4EEA",
		},
	"& .MuiBottomNavigationAction-label": {
		fontFamily: "Raleway",
		fontSize: "10px",
		fontWeight: 400,
		lineHeight: "12px",
		opacity: "unset",
		marginTop: "4px",
		color: "#848484",
	},
	"& .MuiBottomNavigationAction-label.Mui-selected": {
		color: "#6D4EEA",
	},
});

export const muiSelectDefaultStyles = () => ({
	"&.MuiFormControl-root .MuiInput-root .MuiNativeSelect-select": {
		paddingRight: " 16px !important",
		fontWeight: "700",
		fontSize: "18px",
		color: "#272727",
	},
	"&.MuiFormControl-root .MuiInput-root .MuiSvgIcon-root": {
		color: " #272727",
	},
});
