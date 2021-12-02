import styled from 'styled-components'

export const InputWrap = styled.div`
	padding: 20px;
	border: 1px solid #0062ff;
`

export const Input = styled.input`
	padding: 20px;
	background-color: ${({ isTooLong }) => isTooLong ? 'red' : '#be8484'};
	font-size: 30px;
`
export const Button = styled.button`
	padding: 20px;
	background-color: #c3e698;
	font-size: 30px;
`
