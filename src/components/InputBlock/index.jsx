import React, {useCallback, useState} from "react";
import {InputWrap, Input, Button} from "./styled";
import {addUser, addUserAsync} from "../../redux/usersReducer/actions";
import {useDispatch} from "react-redux";


export const InputBlock = () => {
	const [value, setValue] = useState('')
	
	const handleChange = useCallback((e) => {
		setValue(e.target.value)
	}, [])
	
	const dispatch = useDispatch()
	
	const onAddUser = () => {
		// dispatch(addUser(value))
		dispatch(addUserAsync(value))
	}
	
	return (
		<InputWrap>
			<Input
				type="text"
				value={value}
				onChange={handleChange}
				isTooLong={value.length > 5}
			/>
			<Button onClick={onAddUser} >
				Add
			</Button>
		</InputWrap>
	)
}
