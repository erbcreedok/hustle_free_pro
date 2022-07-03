import { ComponentProps, forwardRef, ReactElement } from "react";
import styled from "@emotion/styled";

type CheckedProps = {
	checked: boolean;
};

const CheckboxContainer = styled("div")`
	display: inline-block;
	vertical-align: middle;
	margin-top: 2px;
`;
const Icon = styled("svg")<CheckedProps>`
	fill: none;
	stroke: ${(props) => (props.checked ? "#fff" : "")};
	stroke-width: 2px;
`;
const HiddenCheckbox = styled.input`
	border: 0;
	clip: rect(0 0 0 0);
	clippath: inset(50%);
	height: 1px;
	margin: -1px;
	overflow: hidden;
	padding: 0;
	position: absolute;
	white-space: nowrap;
	width: 1px;
`;

const StyledCheckbox = styled("div")<CheckedProps>`
	display: inline-block;
	border-radius: 5px !important;
	width: 20px;
	height: 20px;
	border: 1px solid #bbbbbb;
	box-sizing: border-box;
	background: ${(props) => (props.checked ? "#1976d2" : "")};
	transition: all 150ms;
	visibility: "visible";
`;

type Props = ComponentProps<typeof HiddenCheckbox> & {
	label?: ReactElement | string;
};

export const CustomCheckbox = forwardRef<any, Props>(
	({ label, ...props }, ref) => {
		return (
			<label>
				<CheckboxContainer>
					<HiddenCheckbox ref={ref} type="checkbox" {...props} />
					<StyledCheckbox checked={!!props.checked}>
						<Icon checked={!!props.checked} viewBox="0 0 24 24">
							<polyline points="20 6 9 17 4 12" />
						</Icon>
					</StyledCheckbox>
				</CheckboxContainer>
				{label}
			</label>
		);
	}
);
