import { useCallback, useEffect, useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import {
	Button,
	FormControl,
	IconButton,
	InputAdornment,
	TextField,
} from "@mui/material";
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
	registerWithEmailAndPassword,
	signInWithGoogle,
	auth,
} from "../../firebase/firebase";
import GoogleIcon from "@mui/icons-material/Google";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

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
`;

type IFormInputs = {
	email: string;
	password: string;
	firstName?: string;
	lastName?: string;
};

const SignUpForm = () => {
	const [user, loading] = useAuthState(auth);
	const navigate = useNavigate();
	const [passwordShown, setPasswordShown] = useState(false);
	const { control, handleSubmit, register } = useForm<IFormInputs>({
		defaultValues: {
			email: "",
			password: "",
			firstName: "",
			lastName: "",
		},
	});

	const togglePasswordVisiblity = useCallback(() => {
		setPasswordShown(passwordShown ? false : true);
	}, [passwordShown]);

	// useEffect(() => {
	// 	if (user) {
	// 		navigate("/dashboard");
	// 	}
	// }, [user]);

	const onSubmit: SubmitHandler<IFormInputs> = (data) => {
		console.log(data);
		registerWithEmailAndPassword(data);
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
								label="Email"
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
					name="firstName"
					control={control}
					rules={{ required: true }}
					render={({ field, fieldState, formState }) => (
						<FormControl variant="standard">
							<TextField
								variant="standard"
								id="component-simple"
								label="Name"
								sx={[CssTextFieldLine, CssSingInFormTextField]}
								inputProps={{
									sx: {
										fontWeight: 700,
										fontSize: "14px",
										color: "#272727",
									},
								}}
								{...getFieldState({ fieldState, formState })}
								{...register("firstName")}
								{...field}
							/>
						</FormControl>
					)}
				/>
				<Controller
					name="lastName"
					control={control}
					rules={{ required: true }}
					render={({ field, fieldState, formState }) => (
						<FormControl variant="standard">
							<TextField
								variant="standard"
								id="component-simple"
								label="lastName"
								sx={[CssTextFieldLine, CssSingInFormTextField]}
								inputProps={{
									sx: {
										fontWeight: 700,
										fontSize: "14px",
										color: "#272727",
									},
								}}
								{...getFieldState({ fieldState, formState })}
								{...register("lastName")}
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
							sx={{ margin: "18px 0 14px" }}
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
				<CustomButton
					width={"100%"}
					height={"54px"}
					text={"Зарегистрироваться"}
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
				Регистрация с помощью Google
			</Button>
		</SignInFormWrapper>
	);
};

export default SignUpForm;
