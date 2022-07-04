import { useState } from "react";
import ImageUploading, { ImageListType } from "react-images-uploading";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { TextField, FormControl, Grid, InputLabel } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

import { styled } from "@mui/material/styles";
import { CustomButton } from "../../../components/custom/Button";
import { getFieldState } from "../../../utils/getFieldState";
import UserDefaultImage from "../../../utils/images/GreetingCard/profile_default_image.png";
import {
	CssProfileInput,
	CssProfileFilledInput,
	Wrapper,
} from "../../custom/defaultStyles";

type IFormInputs = {
	login: string;
	name: string;
	surname: string;
	patronymic: string;
	with_us: string;
	treaty: string;
	belt: string;
	birthday: string;
	email: string;
	phone_number: string;
	password: string;
};

type TextProps = {
	id: number;
	title: string;
	value: string;
	form_name: keyof IFormInputs;
};
const userData: TextProps[] = [
	{ id: 1, title: "Логин", value: "12345", form_name: "login" },
	{ id: 2, title: "Имя", value: "Tsinovkin", form_name: "name" },
	{ id: 3, title: "Фамилия", value: "Tsinovkin", form_name: "surname" },
	{ id: 4, title: "Отчество", value: "asd", form_name: "patronymic" },
	{ id: 5, title: "Вы с нами с", value: "21.02.2021", form_name: "with_us" },
	{ id: 6, title: "Договор", value: "Попдисан", form_name: "treaty" },
	{ id: 7, title: "Пояс", value: "Красный", form_name: "belt" },
	{
		id: 8,
		title: "Дата рождения",
		value: "21.07.1993",
		form_name: "birthday",
	},
	{
		id: 9,
		title: "Электронный адрес",
		value: "tsinovkin@mail.ru",
		form_name: "email",
	},
	{
		id: 10,
		title: "Телефон",
		value: "+7 (777) 777-77-77",
		form_name: "phone_number",
	},
	{ id: 11, title: "Пароль", value: "", form_name: "password" },
];

const UserImage = styled("img")`
	width: 110px;
	height: 110px;
	border: 5px solid #ffffff;
	filter: drop-shadow(0px 0px 30px rgba(0, 0, 0, 0.03));
	border-radius: 50%;
	position: absolute;
	top: 0;
	left: 50%;
	transform: translate(-50%, -50%);
	background: #fff;
`;

const EditProfile = () => {
	const { control, handleSubmit, register } = useForm<IFormInputs>({
		defaultValues: {
			login: "12345",
			name: "Maxim",
			surname: "Tsinovkin",
			patronymic: "",
			with_us: "25.36.2022",
			treaty: "подписан",
			belt: "black",
			birthday: "25.25.2554",
			email: "asc@mail.ru",
			phone_number: "87022222222",
			password: "",
		},
	});

	const [images, setImages] = useState([{ dataURL: UserDefaultImage }]);
	const maxNumber = 1;

	const onChange = (
		imageList: ImageListType,
		addUpdateIndex: number[] | undefined
	) => {
		setImages(imageList as never[]);
	};

	const onSubmit: SubmitHandler<IFormInputs> = (data) => {
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Wrapper
				maxWidth="674px"
				padding="69px 12px 12px"
				position="relative"
				bgcolor="#ffffff"
				boxShadow="0px 0px 30px rgba(0, 0, 0, 0.03)"
				borderRadius="10px"
				margin="90px 0 24px 0"
			>
				<div>
					<ImageUploading
						multiple={false}
						value={images}
						onChange={onChange}
						maxNumber={maxNumber}
					>
						{({
							imageList,
							onImageUpload,
							onImageRemoveAll,
							onImageUpdate,
							onImageRemove,
							isDragging,
							dragProps,
						}) => (
							<div className="upload__image-wrapper">
								{imageList.map((image, index) => (
									<div key={index} className="image-item">
										<UserImage src={image.dataURL} />
										<div className="image-item__btn-wrapper">
											<IconButton
												aria-label="upload picture"
												component="span"
												onClick={() =>
													onImageUpdate(index)
												}
												sx={{
													position: "absolute",
													width: "110px",
													height: "110px",
													top: 0,
													left: "50%",
													transform:
														" translate(-50%, -50%)",
													color: "#FFFFFF",
													"&:hover": {
														background:
															"rgba(0, 0, 0, 0.3)",
													},
													zIndex: "10",
												}}
											>
												<PhotoCamera />
											</IconButton>
										</div>
									</div>
								))}
							</div>
						)}
					</ImageUploading>
				</div>
				<Grid container spacing={2} rowSpacing={3} columns={12}>
					{userData.map((item, index) => (
						<Grid item xs={12} sm={6} key={item.id}>
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
										<TextField
											variant={
												item.form_name !== "password" &&
												item.form_name !==
													"phone_number" &&
												item.form_name !== "email" &&
												item.form_name !== "birthday"
													? "filled"
													: "standard"
											}
											id="component-simple"
											sx={[
												CssProfileInput,
												CssProfileFilledInput,
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
									</FormControl>
								)}
							/>
						</Grid>
					))}
				</Grid>
			</Wrapper>
			<CustomButton
				width={"100%"}
				height={"54px"}
				text={"Сохранить"}
				backColor={
					"linear-gradient(69.51deg, #3E83E1 0%, #7B3EED 100%)"
				}
				position={"center"}
				margin={"0 0 70px 0"}
			/>
		</form>
	);
};

export default EditProfile;
