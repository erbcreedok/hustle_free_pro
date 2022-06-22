import { FC, ReactElement, useState, useCallback, useEffect } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
// import {Container, Grid} from '@mui/material';
import { styled, makeStyles } from "@mui/material/styles";
import { CustomButton } from "../../../custom/Button";
import { TextField } from "@mui/material";
// import InputLabel from '@mui/material/InputLabel';
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import {
	CssTextField,
	CssTextFieldSelect,
	CssTextFieldLine,
} from "../../../custom/styled";
// import Select, { SelectChangeEvent } from '@mui/material/Select';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import Divider from '@mui/material/Divider';

const FormWrapper = styled("div")`
	margin-left: 8px;
	form {
		display: flex;
		flex-direction: column;
		max-width: 343px;
		min-height: 268px;
		background: #ffffff;
		box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.03);
		border-radius: 10px;
		padding: 10px 12px;
	}
`;

const TitleWrapper = styled("div")`
	display: flex;
	justify-content: space-between;
`;
const Title = styled("h3")`
	margin: 0 0 14px 0;
	font-style: normal;
	font-weight: 700;
	font-size: 18px;
	line-height: 21px;
	color: #272727;
`;
const TextfieldWrapper = styled("div")`
	display: flex;
	align-items: center;
`;
const Currency = styled("div")`
	text-transform: uppercase;
	border-left: 1px solid #f2f2f2;
	padding: 7px 13px 11px 13px;
	font-weight: 700;
	font-size: 14px;
	color: #848484;
`;
type IFormInputs = {
	select: string;
	donationAmount: number;
	comment: string;
};
// const CssTextField = () => ({
//   '& .MuiInput-underline:before': {
//     borderBottomColor: '#F2F2F2',
//   },
//   '& .MuiInput-underline:after': {
//     borderBottomColor: '#F2F2F2',
//   },
// })
const Support = () => {
	const { control, handleSubmit, register } = useForm<IFormInputs>({
		defaultValues: {
			select: "",
			donationAmount: 0,
			comment: "",
		},
	});

	const onSubmit: SubmitHandler<IFormInputs> = (data) => {
		console.log(data);
	};

	return (
		<FormWrapper>
			<TitleWrapper>
				<Title>Поддержка</Title>
			</TitleWrapper>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Controller
					name="select"
					control={control}
					rules={{ required: true }}
					render={({ field, fieldState, formState }) => (
						<FormControl variant="standard">
							{/* <InputLabel id="demo-simple-select-standard-label">Выберите из списка</InputLabel> */}
							<TextField
								variant="standard"
								select
								sx={[
									CssTextField,
									CssTextFieldLine,
									CssTextFieldSelect,
									{ width: "100%", marginBottom: "12px" },
								]}
								// {...getFieldState({ fieldState, formState })}
								{...register("select")}
								{...field}
								label="Выберите из списка"
							>
								<MenuItem value="">
									<em>None</em>
								</MenuItem>
								<MenuItem value={10}>Ten</MenuItem>
								<MenuItem value={20}>Twenty</MenuItem>
								<MenuItem value={30}>Thirty</MenuItem>
							</TextField>
						</FormControl>
					)}
				/>

				<Controller
					name="donationAmount"
					control={control}
					render={({ field, fieldState, formState }) => (
						<FormControl variant="standard">
							<TextfieldWrapper>
								<TextField
									sx={[
										CssTextField,
										CssTextFieldLine,
										{ flexGrow: 1, marginBottom: "10px" },
									]}
									variant="standard"
									id="standard-adornment-password"
									label="Сумма пожертвования"
									{...register("donationAmount")}
									{...field}
									InputProps={{
										endAdornment: <Currency>Kzt</Currency>,
									}}
								/>
							</TextfieldWrapper>
						</FormControl>
					)}
				/>

				<Controller
					name="comment"
					control={control}
					render={({ field, fieldState, formState }) => (
						<FormControl variant="standard">
							<TextField
								sx={[
									CssTextField,
									CssTextFieldLine,
									{ marginBottom: "12px" },
								]}
								id="standard-textarea"
								label="Комментарий"
								multiline
								variant="standard"
								placeholder="Добавить комментарий"
								{...register("donationAmount")}
								{...field}
								maxRows={4}
							/>
						</FormControl>
					)}
				/>
				<CustomButton
					width={"162px"}
					height={"48px"}
					text={"Отправить"}
					backColor={
						"linear-gradient(69.51deg, #3E83E1 0%, #7B3EED 100%)"
					}
					position={"center"}
				/>
			</form>
		</FormWrapper>
	);
};

export default Support;
