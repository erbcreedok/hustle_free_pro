import React from "react";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import { LinkProps } from "@mui/material/Link";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { breadcrumbsDefaultStyles } from "./defaultStyles";

const breadcrumbNameMap: { [key: string]: string } = {
	"/dashboard/home/news": "Новости",
	"/dashboard/home/payment": "Как оплатить тренировки",
	"/dashboard/home/contacts": "Контакты",
	"/dashboard/activity": "Активность",
	"/dashboard/activity/competitions": "Все соревнования",
	"/dashboard/activity/partners": "Партнеры",
	"/dashboard/timetable": "Расписание",
	"/dashboard/shop": "Магазин",
	"/dashboard/profile": "Профиль",
	"/dashboard/profile/edit": "Редактировать профиль",
	"/dashboard/profile/add": "Добавить результаты",
};

interface LinkRouterProps extends LinkProps {
	to: string;
	replace?: boolean;
}

const LinkRouter = (props: LinkRouterProps) => (
	<Link {...props} component={RouterLink as any} />
);

const BreadcrumbsComponent = () => {
	const location = useLocation();
	const pathnames = location.pathname.split("/").filter((x) => x);

	return (
		<Breadcrumbs
			aria-label="breadcrumb"
			sx={[
				breadcrumbsDefaultStyles,
				{
					marginBottom: "34px",
				},
			]}
		>
			<LinkRouter underline="hover" color="inherit" to="/dashboard">
				Главная
			</LinkRouter>
			{pathnames.map((pathname, index) => {
				const to = `/${pathnames.slice(0, index + 1).join("/")}`;
				const isLast: boolean = index === pathnames.length - 1;

				if (to !== "/dashboard" && to !== "/dashboard/home") {
					return isLast ? (
						<Typography
							color="text.primary"
							key={to}
							sx={[breadcrumbsDefaultStyles]}
						>
							{isNaN(parseInt(pathname))
								? breadcrumbNameMap[to]
								: pathname}
						</Typography>
					) : (
						<LinkRouter
							underline="hover"
							color="inherit"
							to={to}
							key={to}
						>
							{breadcrumbNameMap[to]}
						</LinkRouter>
					);
				} else {
					return "";
				}
			})}
		</Breadcrumbs>
	);
};

export default BreadcrumbsComponent;
