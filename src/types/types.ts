import { ReactElement } from "react";

// Types for Competition, Partners, News, notification, userInfo( Contacts, UserGreetings),
export type TextProps = {
	text1: string;
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
	title: string;
	text?: string;
	icons?: ContactsItem;
};

// Workout Payment
export type PaymentTextProps = {
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
