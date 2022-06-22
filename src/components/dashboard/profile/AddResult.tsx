import {
	FC,
	ReactElement,
	useState,
	useCallback,
	useEffect,
	Fragment,
} from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import {
	TextField,
	FormControl,
	Grid,
	InputLabel,
	MenuItem,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { CustomButton } from "../../../components/custom/Button";
import { getFieldState } from "../../../utils/getFieldState";
import { CssProfileInput } from "../../custom/styled";

type NewsTextProp = {
	title: string;
	form_name: any; // ???????????????  ANY  ??????????????;
	type: string;
};
const data: NewsTextProp[] = [
	{
		title: "Дата соревнования",
		form_name: "competition_date",
		type: "input",
	},
	{
		title: "Название соревнования",
		form_name: "competition_name",
		type: "input",
	},
	{
		title: "Описание",
		form_name: "description",
		type: "input",
	},
	{
		title: "Результат",
		form_name: "result",
		type: "select",
	},
	{
		title: "Рейтинг",
		form_name: "raiting",
		type: "text",
	},
];

const Wrapper = styled("div")`
	max-width: 674px;
	background: #ffffff;
	box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.03);
	border-radius: 10px;
	padding: 24px 12px;
	margin-bottom: 24px; ;
`;
const FormWrapper = styled("div")`
	margin-bottom: 14px;
`;

type IFormInputs = {
	competition_date: string;
	competition_name: string;
	description: string;
	result: string;
	raiting: string;
};
const AddResult = () => {
	const { control, handleSubmit, register } = useForm<IFormInputs>({
		defaultValues: {
			competition_date: "21.07.1993",
			competition_name: "Первенство Казахстана по Jiu-Jitsu",
			description: "Tsinovkin",
			result: "",
			raiting: "Выдается системой, после проверки",
		},
	});

	const onSubmit: SubmitHandler<IFormInputs> = (data) => {
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Wrapper>
				{data.map((item, index) => (
					<FormWrapper
						key={index}
						sx={[item.form_name === "raiting" && { margin: 0 }]}
					>
						<InputLabel
							sx={{
								fontFamily: "Raleway",
								fontWeight: 400,
								fontSize: "12px",
								color: "#848484",
							}}
						>
							{item.title}
						</InputLabel>
						<Controller
							key={index}
							name={item.form_name}
							control={control}
							rules={{ required: true }}
							render={({ field, fieldState, formState }) => (
								<FormControl
									variant="standard"
									sx={{
										width: "100%",
									}}
								>
									{item.type === "input" ? (
										<TextField
											variant="standard"
											id="component-simple"
											// label={item.title}
											sx={[
												CssProfileInput,
												{ width: "100%" },
											]}
											inputProps={{
												sx: {
													fontWeight: 700,
													fontSize: "14px",
													color: "#272727",
												},
											}}
											{...getFieldState({
												fieldState,
												formState,
											})}
											{...register(item.form_name)}
											{...field}
										/>
									) : item.type === "select" ? (
										<Controller
											name={item.form_name}
											control={control}
											rules={{ required: true }}
											render={({
												field,
												fieldState,
												formState,
											}) => (
												<FormControl variant="standard">
													{/* <InputLabel id="demo-simple-select-standard-label">Выберите из списка</InputLabel> */}
													<TextField
														variant="standard"
														select
														sx={[
															CssProfileInput,
															{
																marginBottom:
																	"12px",
															},
														]}
														// {...getFieldState({ fieldState, formState })}
														{...register(
															item.form_name
														)}
														{...field}
														// label="Выберите из списка"
													>
														<MenuItem value="">
															<em>None</em>
														</MenuItem>
														<MenuItem value={10}>
															Ten
														</MenuItem>
														<MenuItem value={20}>
															Twenty
														</MenuItem>
														<MenuItem value={30}>
															Thirty
														</MenuItem>
													</TextField>
												</FormControl>
											)}
										/>
									) : item.type === "text" ? (
										<Controller
											name={item.form_name}
											control={control}
											rules={{ required: true }}
											render={({
												field,
												fieldState,
												formState,
											}) => (
												<TextField
													disabled
													variant="standard"
													id="component-simple"
													// label={item.title}
													sx={[
														CssProfileInput,
														{ width: "100%" },
													]}
													inputProps={{
														sx: {
															fontWeight: 700,
															fontSize: "14px",
															color: "#272727",
														},
													}}
													{...getFieldState({
														fieldState,
														formState,
													})}
													{...register(
														item.form_name
													)}
													{...field}
												/>
											)}
										/>
									) : null}
								</FormControl>
							)}
						/>
					</FormWrapper>
				))}
			</Wrapper>
			<CustomButton
				width={"100%"}
				height={"54px"}
				text={"Сохранить"}
				backColor={
					"linear-gradient(69.51deg, #3E83E1 0%, #7B3EED 100%)"
				}
				position={"center"}
			/>
		</form>
	);
};

export default AddResult;
