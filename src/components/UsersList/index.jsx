import React, { useMemo } from "react";
import { UsersWrap } from "./styled";
import { useSelector} from "react-redux";
import {loadingSelector, usersSelector} from "../../redux/usersReducer/selectors";


export const UsersList = () => {
	const users = useSelector(usersSelector)
	const loading = useSelector(loadingSelector)
	
	const mappedUsers = useMemo(() => {
		return users.map(user => <li key={user}>{user}</li>)
	}, [users])
	
	
	return (
		<UsersWrap>
			{mappedUsers}
		</UsersWrap>
	)
}
