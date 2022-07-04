import { ReactElement } from "react";

// Types for Competition, Partners, News, notification, userInfo( Contacts, UserGreetings),
export type TextProps = {
	id: number;
	text1?: string;
	text2?: string;
	text3?: string; // single
	link?: string;
};
export type CardProps = {
	item: TextProps;
	index: number;
};
export type DataProps = {
	data?: CardProps[] | TextProps[];
};

// Contacts
export type ContactsItem = {
	name?: string;
	icon?: ReactElement;
}[];

export type ContactsTextProps = {
	id: number;
	title?: string;
	text?: string;
	icons?: ContactsItem;
};

// Workout Payment
export type PaymentTextProps = {
	id: number;
	title: string;
	definition: string;
};
export type PaymentDataProps = {
	paymentData?: PaymentTextProps[];
};

// Navigation
export type NavProps = {
	name: string;
	value: string;
	icon?: ReactElement;
};

// Profile Info
export type ProfileInfoData = {
	data?: TextProps[];
};

// Sidebar data types
export type SidebarTypes = {
	icon: string;
	id: number;
	name: string;
	value: string;
};
export type IconMapTypes = {
	[key: string]: ReactElement | any;
};
