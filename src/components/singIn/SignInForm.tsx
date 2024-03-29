import { useCallback, useEffect, useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import {
	Button,
	FormControl,
	IconButton,
	InputAdornment,
	TextField,
} from "@mui/material";
import { CustomCheckbox } from "../custom/Checkbox";
import { getFieldState } from "../../utils/getFieldState";
import { styled } from "@mui/material/styles";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { CustomButton } from "../custom/Button";
import {
	CssTextFieldLine,
	CssSingInFormTextField,
} from "../custom/defaultStyles";
import {
	logInWithEmailAndPassword,
	auth,
	signInWithGoogle,
} from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import GoogleIcon from "@mui/icons-material/Google";

const SignInFormWrapper = styled("div")`
	form {
		max-width: 343px;
		background: #ffffff;
		border-radius: 20px;
		padding: 20px;
		display: flex;
		flex-direction: column;
	}
	form input,
	label,
	button {
		font-family: "Raleway";
	}
	.checkbox_text {
		color: #bbbbbb;
		font-weight: 400;
		font-size: 12px;
		margin-left: 16px;
	}
`;
const CheckboxWrapper = styled("div")`
	justify-content: flex-start;
	padding: 14px 0;
`;

type IFormInputs = {
	email: string;
	password: string;
	checkbox: boolean;
};

const SignInForm = () => {
	const [user, loading] = useAuthState(auth);

	const navigate = useNavigate();
	const [passwordShown, setPasswordShown] = useState(false);
	const { control, handleSubmit, register } = useForm<IFormInputs>({
		defaultValues: {
			email: "",
			password: "",
			checkbox: false,
		},
	});
	// useEffect(() => {
	// 	if (user) navigate("/dashboard");
	// }, [user]);
	const togglePasswordVisiblity = useCallback(() => {
		setPasswordShown(passwordShown ? false : true);
	}, [passwordShown]);

	const onSubmit: SubmitHandler<IFormInputs> = (data) => {
		console.log(data);
		logInWithEmailAndPassword(data);
	};

	return (
		<SignInFormWrapper>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Controller
					name="email"
					control={control}
					rules={{ required: true }}
					render={({ field, fieldState, formState }) => (
						<FormControl variant="standard">
							<TextField
								variant="standard"
								id="component-simple"
								label="Логин"
								sx={[CssTextFieldLine, CssSingInFormTextField]}
								inputProps={{
									sx: {
										fontWeight: 700,
										fontSize: "14px",
										color: "#272727",
									},
								}}
								{...getFieldState({ fieldState, formState })}
								{...register("email")}
								{...field}
							/>
						</FormControl>
					)}
				/>

				<Controller
					name="password"
					control={control}
					render={({ field, fieldState, formState }) => (
						<FormControl
							variant="standard"
							sx={{ marginTop: "18px" }}
						>
							<TextField
								variant="standard"
								id="standard-adornment-password"
								label="Пароль"
								sx={[CssTextFieldLine, CssSingInFormTextField]}
								type={passwordShown ? "text" : "password"}
								{...register("password")}
								{...field}
								{...getFieldState({ fieldState, formState })}
								InputProps={{
									endAdornment: (
										<InputAdornment position="end">
											<IconButton
												aria-label="toggle password visibility"
												onClick={
													togglePasswordVisiblity
												}
												onMouseDown={
													togglePasswordVisiblity
												}
												sx={{
													paddingBottom: "12px",
												}}
											>
												{passwordShown ? (
													<VisibilityOff
														sx={{
															fontSize: "1.2rem",
														}}
													/>
												) : (
													<Visibility
														sx={{
															fontSize: "1.2rem",
														}}
													/>
												)}
											</IconButton>
										</InputAdornment>
									),
								}}
							/>
						</FormControl>
					)}
				/>

				<Controller
					name="checkbox"
					control={control}
					render={({ field, fieldState, formState }) => (
						<CheckboxWrapper>
							<CustomCheckbox
								checked={field.value}
								onChange={field.onChange}
								label={
									<span className="checkbox_text">
										Запомнить меня
									</span>
								}
							/>
						</CheckboxWrapper>
					)}
				/>
				<CustomButton
					width={"100%"}
					height={"54px"}
					text={"Войти"}
					backColor={
						"linear-gradient(69.51deg, #3E83E1 0%, #7B3EED 100%)"
					}
					position={"center"}
				/>
			</form>
			<Button
				fullWidth
				color="error"
				startIcon={<GoogleIcon />}
				onClick={signInWithGoogle}
				sx={{ marginTop: "14px", fontSize: "14px" }}
				size="large"
				variant="outlined"
			>
				Войти с помощью Google
			</Button>
		</SignInFormWrapper>
	);
};

export default SignInForm;
