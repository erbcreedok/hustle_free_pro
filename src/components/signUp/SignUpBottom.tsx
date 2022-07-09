import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { SignInFormTextStyles } from "../custom/defaultStyles";
import { Wrapper } from "../custom/defaultStyles";

const SignUpBottom = () => {
	return (
		<Wrapper maxWidth="343px" textAlign="center">
			<Link to="/">
				<Typography
					sx={[
						SignInFormTextStyles,
						{
							display: "block",
							textAlign: "center",
							textDecorationLine: "underline",
							color: "#2f80ed",
							margin: "24px 0",
						},
					]}
				>
					Уже есть аккаунт? Войдите
				</Typography>
			</Link>
			<Typography sx={[SignInFormTextStyles, { color: "#848484" }]}>
				Все права защищены © 2021
			</Typography>
		</Wrapper>
	);
};

export default SignUpBottom;
